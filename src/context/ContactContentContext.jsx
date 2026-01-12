import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const ContactContentContext = createContext(null);

const API_URL = import.meta.env.VITE_API_URL || 'https://hadifirm-fullstack-production.up.railway.app';

export function ContactContentProvider({ children }) {
  const [content, setContent] = useState({});
  const [media, setMedia] = useState({});
  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/api/contact-page`);
        
        if (response.data) {
          setContent(response.data.content || {});
          setMedia(response.data.media || {});
          setItems(response.data.items || {});
        }
        setError(null);
      } catch (err) {
        console.error('Failed to fetch contact page content:', err);
        setError('فشل في تحميل محتوى صفحة التواصل');
        // Set default values on error
        setContent(getDefaultContent());
        setMedia({});
        setItems(getDefaultItems());
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  // Get content value by section and key
  const getValue = (section, key, defaultValue = '') => {
    return content[section]?.[key] || defaultValue;
  };

  // Get media URL by section and key
  const getMediaUrl = (section, key, defaultValue = null) => {
    return media[section]?.[key]?.url || defaultValue;
  };

  // Get items by section
  const getItems = (section, defaultValue = []) => {
    return items[section] || defaultValue;
  };

  return (
    <ContactContentContext.Provider
      value={{
        content,
        media,
        items,
        loading,
        error,
        getValue,
        getMediaUrl,
        getItems,
      }}
    >
      {children}
    </ContactContentContext.Provider>
  );
}

export function useContactContent() {
  const context = useContext(ContactContentContext);
  if (!context) {
    throw new Error('useContactContent must be used within a ContactContentProvider');
  }
  return context;
}

// Default content in case API fails
function getDefaultContent() {
  return {
    hero: {
      title: 'تواصل معنا',
      breadcrumb_home: 'الرئيسية',
      phone_number: '0551099998',
      phone_display: '0551099998',
    },
    info: {
      phone_label: 'رقم الهاتف',
      phone_1: '0551099998',
      phone_2: '',
      email_label: 'البريد الإلكتروني',
      email_1: 'hade1616@hotmail.com',
      email_2: '',
      location_label: 'العنوان',
      location_1: 'الرياض - حي الملقا',
      location_2: 'شارع أنس بن مالك',
    },
    map: {
      title: 'موقعنا على الخريطة',
    },
    counter: {
      title: 'إنجازاتنا',
    },
    footer: {
      logo_alt: 'مكتب المحامي هادي الحصين',
      description: 'نقدم خدمات قانونية متميزة في مجالات القانون المختلفة',
      quick_links_title: 'روابط سريعة',
      office_1_title: 'المكتب الرئيسي',
      office_1_address_1: 'الرياض - حي الملقا',
      office_1_address_2: 'شارع أنس بن مالك',
      office_1_phone: '0551099998',
      newsletter_title: 'هل تريد التواصل معنا؟',
      newsletter_placeholder: 'أدخل بريدك الإلكتروني...',
      copyright_text: 'جميع الحقوق محفوظة © 2024 مكتب المحامي هادي الحصين',
    },
  };
}

function getDefaultItems() {
  return {
    social_links: [
      { label: 'fb', name: 'فيسبوك', url: '#' },
      { label: 'TW', name: 'تويتر', url: '#' },
      { label: 'IN', name: 'لينكدإن', url: '#' },
    ],
    quick_links: [
      { name: 'الرئيسية', url: '/' },
      { name: 'من نحن', url: '/about-us' },
      { name: 'خدماتنا', url: '/services' },
      { name: 'تواصل معنا', url: '/contact' },
    ],
    counters: [
      { value: '2', suffix: 'k+', label: 'مشروع مكتمل' },
      { value: '95', suffix: '%', label: 'نسبة النجاح' },
      { value: '55', suffix: '+', label: 'خبير قانوني' },
    ],
  };
}

export default ContactContentContext;
