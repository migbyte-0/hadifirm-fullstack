import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import axios from 'axios';

const API_BASE_URL = 'https://hadifirm-fullstack-production.up.railway.app/api';

const HomeContentContext = createContext(null);

export function HomeContentProvider({ children, homeVersion = 'home_two' }) {
  const [content, setContent] = useState({});
  const [media, setMedia] = useState({});
  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_BASE_URL}/home-page/content/${homeVersion}`);
        
        if (response.data.success) {
          setContent(response.data.data.content || {});
          setMedia(response.data.data.media || {});
          setItems(response.data.data.items || {});
        }
      } catch (err) {
        console.error('Failed to fetch home content:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [homeVersion]);

  const value = useMemo(() => ({
    content,
    media,
    items,
    loading,
    error,
    // Helper functions
    getText: (section, key, defaultValue = '') => {
      return content[section]?.[key] ?? defaultValue;
    },
    getMedia: (section, key) => {
      return media[section]?.[key] ?? null;
    },
    getMediaUrl: (section, key, defaultUrl = '') => {
      return media[section]?.[key]?.url ?? defaultUrl;
    },
    getItems: (section) => {
      return items[section] ?? [];
    },
  }), [content, media, items, loading, error]);

  return (
    <HomeContentContext.Provider value={value}>
      {children}
    </HomeContentContext.Provider>
  );
}

export function useHomeContent() {
  const context = useContext(HomeContentContext);
  if (!context) {
    throw new Error('useHomeContent must be used within a HomeContentProvider');
  }
  return context;
}

// Export individual section hooks for convenience
export function useHeroContent() {
  const { getText, getMedia, getMediaUrl, loading } = useHomeContent();
  
  return {
    loading,
    subtitle: getText('hero', 'subtitle', 'ملتزمون بحماية حقوقك ومستقبلك'),
    titleLine1: getText('hero', 'title_line1', 'نحن الأفضل في'),
    titleHighlight: getText('hero', 'title_highlight', 'مكتب المحاماة'),
    description: getText('hero', 'description', ''),
    buttonPrimaryText: getText('hero', 'button_primary_text', 'استشارة مجانية'),
    buttonPrimaryLink: getText('hero', 'button_primary_link', '/consultation'),
    buttonSecondaryText: getText('hero', 'button_secondary_text', 'تواصل معنا'),
    buttonSecondaryLink: getText('hero', 'button_secondary_link', '/contact'),
    circleText: getText('hero', 'circle_text', 'مكتب المحامي هادي الحصين مرحباً بكم'),
    marqueeText: getText('hero', 'marquee_text', 'نحن الأفضل في مكتب المحاماة'),
    phoneNumber: getText('hero', 'phone_number', '+966501234567'),
    backgroundImage: getMediaUrl('hero', 'background'),
    logoImage: getMediaUrl('hero', 'logo'),
    shapeImage: getMediaUrl('hero', 'shape'),
  };
}

export function useVideoContent() {
  const { getText, getMediaUrl, loading } = useHomeContent();
  
  return {
    loading,
    title: getText('video', 'title', 'مكتب المحامي هادي الحصين'),
    videoUrl: getText('video', 'video_url', ''),
    bannerImage: getMediaUrl('video', 'banner'),
    iconImage: getMediaUrl('video', 'icon'),
  };
}

export function useServicesSlider() {
  const { getItems, loading } = useHomeContent();
  
  return {
    loading,
    services: getItems('services_slider'),
  };
}

export function useCallService() {
  const { getText, getMediaUrl, loading } = useHomeContent();
  
  return {
    loading,
    text: getText('call_service', 'text', 'تبحث عن استشارة قانونية مجانية؟'),
    phoneNumber: getText('call_service', 'phone_number', '+966501234567'),
    phoneDisplay: getText('call_service', 'phone_display', '(966) 501-234567'),
    icon: getMediaUrl('call_service', 'icon'),
  };
}

export function useSpecialServices() {
  const { getText, getMediaUrl, getItems, loading } = useHomeContent();
  
  return {
    loading,
    subtitle: getText('special_services', 'subtitle', 'أفضل خدماتنا'),
    title: getText('special_services', 'title', 'خدماتنا'),
    titleHighlight: getText('special_services', 'title_highlight', 'المتميزة'),
    description: getText('special_services', 'description', ''),
    image: getMediaUrl('special_services', 'image'),
    services: getItems('special_services'),
  };
}

export function usePracticeAreas() {
  const { getText, getItems, loading } = useHomeContent();
  
  return {
    loading,
    subtitle: getText('practice_areas', 'subtitle', 'أفضل خدماتنا'),
    title: getText('practice_areas', 'title', 'مجالات الممارسة'),
    titleHighlight: getText('practice_areas', 'title_highlight', 'القانونية'),
    areas: getItems('practice_areas'),
  };
}

export function usePortfolio() {
  const { getText, getMediaUrl, getItems, loading } = useHomeContent();
  
  return {
    loading,
    subtitle: getText('portfolio', 'subtitle', 'أحدث دراسات الحالة'),
    title: getText('portfolio', 'title', 'تصفح أعمالنا'),
    titleHighlight: getText('portfolio', 'title_highlight', 'دراسات الحالة'),
    buttonText: getText('portfolio', 'button_text', 'استشارة مجانية'),
    image: getMediaUrl('portfolio', 'image'),
    caseStudies: getItems('case_studies'),
  };
}

export function useCTA() {
  const { getText, getMediaUrl, loading } = useHomeContent();
  
  return {
    loading,
    title: getText('cta', 'title', 'يمكننا مساعدتك!'),
    description: getText('cta', 'description', 'سريع وسهل، بدون أي التزام.'),
    buttonText: getText('cta', 'button_text', 'استشارة مجانية'),
    buttonLink: getText('cta', 'button_link', '/consultation'),
    image: getMediaUrl('cta', 'image'),
    shape: getMediaUrl('cta', 'shape'),
  };
}

export function useTestimonials() {
  const { getText, getItems, loading } = useHomeContent();
  
  return {
    loading,
    subtitle: getText('testimonials', 'subtitle', 'آراء عملائنا'),
    title: getText('testimonials', 'title', 'ماذا يقول'),
    titleHighlight: getText('testimonials', 'title_highlight', 'عملاؤنا'),
    buttonText: getText('testimonials', 'button_text', 'استشارة مجانية'),
    testimonials: getItems('testimonials'),
  };
}

export function useTeam() {
  const { getText, getItems, loading } = useHomeContent();
  
  return {
    loading,
    subtitle: getText('team', 'subtitle', 'أفضل خدماتنا'),
    title: getText('team', 'title', 'فريق العمل'),
    titleHighlight: getText('team', 'title_highlight', 'المتميز'),
    members: getItems('team'),
  };
}

export function useCounters() {
  const { getItems, loading } = useHomeContent();
  
  return {
    loading,
    counters: getItems('counters'),
  };
}

export function useContactSection() {
  const { getText, loading } = useHomeContent();
  
  return {
    loading,
    title: getText('contact', 'title', 'يمكننا مساعدتك!'),
    titleHighlight: getText('contact', 'title_highlight', 'أي التزام.'),
    description: getText('contact', 'description', ''),
    formNamePlaceholder: getText('contact', 'form_name_placeholder', 'الاسم الكامل'),
    formPhonePlaceholder: getText('contact', 'form_phone_placeholder', '(966) 501-234567'),
    formEmailPlaceholder: getText('contact', 'form_email_placeholder', 'example@email.com'),
    formMessagePlaceholder: getText('contact', 'form_message_placeholder', 'رسالتك'),
    formButtonText: getText('contact', 'form_button_text', 'استشارة مجانية'),
  };
}

export function useFAQ() {
  const { getText, getItems, loading } = useHomeContent();
  
  return {
    loading,
    subtitle: getText('faq', 'subtitle', 'الأسئلة الشائعة'),
    title: getText('faq', 'title', 'نقدم لكم'),
    titleHighlight: getText('faq', 'title_highlight', 'الأسئلة والأجوبة'),
    description: getText('faq', 'description', ''),
    buttonText: getText('faq', 'button_text', 'جميع القضايا'),
    faqs: getItems('faqs'),
  };
}

export function useBlog() {
  const { getText, getItems, loading } = useHomeContent();
  
  return {
    loading,
    subtitle: getText('blog', 'subtitle', 'آخر الأخبار والمقالات'),
    title: getText('blog', 'title', 'مدونة القانون'),
    titleHighlight: getText('blog', 'title_highlight', 'والمستجدات النظامية'),
    blogs: getItems('blogs'),
  };
}

export function usePartners() {
  const { getItems, loading } = useHomeContent();
  
  return {
    loading,
    partners: getItems('partners'),
  };
}

export default HomeContentContext;
