import { useState, useEffect, lazy, Suspense } from 'react';
import axios from 'axios';

const API_BASE_URL = 'https://hadifirm-fullstack-production.up.railway.app/api';

// Lazy load all home components
const HomeOne = lazy(() => import('@/pages'));
const HomeTwo = lazy(() => import('@/pages/home-two'));
const HomeThree = lazy(() => import('@/pages/home-three'));
const HomeFour = lazy(() => import('@/pages/home-four'));
const HomeFive = lazy(() => import('@/pages/home-five'));

// Loading component
const HomeLoading = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-amber-600 mx-auto mb-4"></div>
      <p className="text-gray-600 text-lg">جاري التحميل...</p>
    </div>
  </div>
);

const DynamicHome = () => {
  const [activeScreen, setActiveScreen] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActiveHomeScreen = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/settings/active_home_screen`);
        if (response.data.success) {
          setActiveScreen(response.data.data);
        } else {
          setActiveScreen('1'); // Default to HomeOne
        }
      } catch (error) {
        console.error('Failed to fetch home screen setting:', error);
        setActiveScreen('1'); // Default to HomeOne on error
      } finally {
        setLoading(false);
      }
    };

    fetchActiveHomeScreen();
  }, []);

  if (loading) {
    return <HomeLoading />;
  }

  const renderHome = () => {
    switch (activeScreen) {
      case '1':
        return <HomeOne />;
      case '2':
        return <HomeTwo />;
      case '3':
        return <HomeThree />;
      case '4':
        return <HomeFour />;
      case '5':
        return <HomeFive />;
      default:
        return <HomeOne />;
    }
  };

  return (
    <Suspense fallback={<HomeLoading />}>
      {renderHome()}
    </Suspense>
  );
};

export default DynamicHome;
