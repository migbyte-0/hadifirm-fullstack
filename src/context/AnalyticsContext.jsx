import { createContext, useContext, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const API_BASE_URL = 'https://hadifirm-fullstack-production.up.railway.app/api';

const AnalyticsContext = createContext();

// Generate or get session ID
const getSessionId = () => {
  let sessionId = sessionStorage.getItem('visitor_session_id');
  if (!sessionId) {
    sessionId = 'vs_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    sessionStorage.setItem('visitor_session_id', sessionId);
  }
  return sessionId;
};

export const AnalyticsProvider = ({ children }) => {
  const location = useLocation();
  const startTimeRef = useRef(Date.now());
  const sessionId = useRef(getSessionId());

  // Track page visit on route change
  useEffect(() => {
    const trackVisit = async () => {
      try {
        await axios.post(`${API_BASE_URL}/analytics/track-visit`, {
          page: location.pathname,
          session_id: sessionId.current,
          referrer: document.referrer || null,
        });
      } catch (error) {
        console.error('Analytics tracking error:', error);
      }
    };

    trackVisit();
    startTimeRef.current = Date.now();
  }, [location.pathname]);

  // Track time on page when leaving
  useEffect(() => {
    const handleBeforeUnload = async () => {
      const timeOnPage = Math.round((Date.now() - startTimeRef.current) / 1000);
      
      // Use sendBeacon for reliable tracking on page unload
      const data = JSON.stringify({
        session_id: sessionId.current,
        time_on_page: timeOnPage,
      });
      
      navigator.sendBeacon(
        `${API_BASE_URL}/analytics/track-time`,
        new Blob([data], { type: 'application/json' })
      );
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      // Also track when navigating within SPA
      const timeOnPage = Math.round((Date.now() - startTimeRef.current) / 1000);
      if (timeOnPage > 0) {
        axios.post(`${API_BASE_URL}/analytics/track-time`, {
          session_id: sessionId.current,
          time_on_page: timeOnPage,
        }).catch(() => {});
      }
    };
  }, [location.pathname]);

  // Function to track consultation button click
  const trackConsultationClick = async () => {
    try {
      await axios.post(`${API_BASE_URL}/analytics/consultation-click`, {
        session_id: sessionId.current,
      });
    } catch (error) {
      console.error('Consultation click tracking error:', error);
    }
  };

  return (
    <AnalyticsContext.Provider value={{ trackConsultationClick, sessionId: sessionId.current }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

export default AnalyticsContext;
