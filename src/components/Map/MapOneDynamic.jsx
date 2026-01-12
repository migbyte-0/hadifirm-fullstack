import ShadowShape from "@/assets/images/shapes/shaddow-shape.png";
import { useContactContent } from "@/context/ContactContentContext";

// Default map placeholder image (can be replaced with any default map image)
const DEFAULT_MAP_PLACEHOLDER = "https://placehold.co/1200x450/1a1a2e/ffffff?text=%D9%85%D9%88%D9%82%D8%B9%D9%86%D8%A7+%D8%B9%D9%84%D9%89+%D8%A7%D9%84%D8%AE%D8%B1%D9%8A%D8%B7%D8%A9";

export default function MapOneDynamic() {
  const { getMediaUrl, getValue, loading } = useContactContent();

  if (loading) {
    return (
      <div className="map-area pt-150 position-relative overflow-hidden">
        <div className="container">
          <div className="responsive-map fade-slide bottom" data-delay="0.2">
            <div 
              className="d-flex justify-content-center align-items-center" 
              style={{ 
                height: '450px', 
                backgroundColor: '#f5f5f5',
                borderRadius: '8px'
              }}
            >
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">جاري التحميل...</span>
              </div>
            </div>
          </div>
        </div>
        <img className="blog-detail-shape" src={ShadowShape} alt="Shape" />
      </div>
    );
  }

  const mapImage = getMediaUrl('map', 'image', DEFAULT_MAP_PLACEHOLDER);
  const mapTitle = getValue('map', 'title', 'موقعنا على الخريطة');

  return (
    <div className="map-area pt-150 position-relative overflow-hidden">
      <div className="container">
        <div className="responsive-map fade-slide bottom" data-delay="0.2">
          <img 
            className="map" 
            src={mapImage}
            alt={mapTitle}
            style={{
              width: '100%',
              height: '450px',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
        </div>
      </div>
      <img className="blog-detail-shape" src={ShadowShape} alt="Shape" />
    </div>
  );
}
