import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import './ConsultationForm.css';

const API_BASE_URL = 'http://localhost:8000/api';

const ConsultationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    full_name: '',
    phone_number: '',
    consultation_type: '',
    appointment_date: '',
    appointment_time: '',
    notes: ''
  });
  const [consultationTypes, setConsultationTypes] = useState([]);
  const [availableDates, setAvailableDates] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Fetch consultation types on mount
  useEffect(() => {
    fetchConsultationTypes();
  }, []);

  // Fetch available dates when user reaches step 3
  useEffect(() => {
    if (currentStep === 3) {
      fetchAvailableDates();
    }
  }, [currentStep]);

  // Fetch available slots when a date is selected
  useEffect(() => {
    if (formData.appointment_date) {
      fetchAvailableSlots(formData.appointment_date);
    }
  }, [formData.appointment_date]);

  const fetchConsultationTypes = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/consultation/types`);
      setConsultationTypes(response.data.data);
    } catch (err) {
      console.error('Error fetching consultation types:', err);
    }
  };

  const fetchAvailableDates = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/consultation/available-dates`);
      setAvailableDates(response.data.data);
    } catch (err) {
      console.error('Error fetching available dates:', err);
    }
  };

  const fetchAvailableSlots = async (date) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/consultation/available-slots?date=${date}`);
      setAvailableSlots(response.data.data);
    } catch (err) {
      console.error('Error fetching available slots:', err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const validateStep = () => {
    switch (currentStep) {
      case 1:
        if (!formData.full_name.trim()) {
          setError('الرجاء إدخال الاسم');
          return false;
        }
        if (!formData.phone_number.trim()) {
          setError('الرجاء إدخال رقم الهاتف');
          return false;
        }
        if (!/^[0-9+\s()-]+$/.test(formData.phone_number)) {
          setError('رقم الهاتف غير صالح');
          return false;
        }
        break;
      case 2:
        if (!formData.consultation_type) {
          setError('الرجاء اختيار نوع الاستشارة');
          return false;
        }
        break;
      case 3:
        if (!formData.appointment_date) {
          setError('الرجاء اختيار التاريخ');
          return false;
        }
        if (!formData.appointment_time) {
          setError('الرجاء اختيار الوقت');
          return false;
        }
        break;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
    setError('');
  };

  const handleSubmit = async () => {
    if (!validateStep()) return;

    setLoading(true);
    setError('');

    try {
      const response = await axios.post(`${API_BASE_URL}/consultation/submit`, {
        full_name: formData.full_name,
        phone_number: formData.phone_number,
        consultation_type: formData.consultation_type,
        appointment_date: formData.appointment_date,
        appointment_time: formData.appointment_time,
        notes: formData.notes
      });

      if (response.data.success) {
        setSuccess(true);
        setCurrentStep(4);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'حدث خطأ أثناء إرسال الطلب. الرجاء المحاولة مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  const renderStepIndicator = () => (
    <div className="step-indicator">
      {[1, 2, 3].map(step => (
        <div key={step} className={`step-dot ${currentStep >= step ? 'active' : ''}`}>
          {currentStep > step ? '✓' : step}
        </div>
      ))}
    </div>
  );

  const renderStep1 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="form-step"
    >
      <h2 className="step-title">معلوماتك الشخصية</h2>
      <p className="step-description">الرجاء إدخال بياناتك للتواصل معك</p>

      <div className="form-group">
        <label htmlFor="full_name">الاسم الكامل *</label>
        <input
          type="text"
          id="full_name"
          name="full_name"
          value={formData.full_name}
          onChange={handleInputChange}
          placeholder="أدخل اسمك الكامل"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone_number">رقم الهاتف *</label>
        <input
          type="tel"
          id="phone_number"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleInputChange}
          placeholder="05xxxxxxxx"
          className="form-control"
          dir="ltr"
        />
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="form-actions">
        <button type="button" className="btn-next" onClick={handleNext}>
          التالي
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </motion.div>
  );

  const renderStep2 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="form-step"
    >
      <h2 className="step-title">نوع الاستشارة</h2>
      <p className="step-description">اختر نوع الاستشارة التي تحتاجها</p>

      <div className="consultation-types-grid">
        {consultationTypes.map(type => (
          <div
            key={type.id}
            className={`consultation-type-card ${formData.consultation_type === type.name_ar ? 'selected' : ''}`}
            onClick={() => {
              setFormData(prev => ({ ...prev, consultation_type: type.name_ar }));
              setError('');
            }}
          >
            <div className="type-icon">⚖️</div>
            <h3>{type.name_ar}</h3>
            {type.description_ar && <p>{type.description_ar}</p>}
          </div>
        ))}
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="form-actions">
        <button type="button" className="btn-back" onClick={handleBack}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          السابق
        </button>
        <button type="button" className="btn-next" onClick={handleNext}>
          التالي
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="form-step"
    >
      <h2 className="step-title">الموعد المفضل</h2>
      <p className="step-description">اختر التاريخ والوقت المناسب لك</p>

      <div className="form-group">
        <label htmlFor="appointment_date">التاريخ *</label>
        <select
          id="appointment_date"
          name="appointment_date"
          value={formData.appointment_date}
          onChange={handleInputChange}
          className="form-control"
        >
          <option value="">اختر التاريخ</option>
          {availableDates.map(date => (
            <option key={date.date} value={date.date}>
              {date.display} - {date.day_name}
            </option>
          ))}
        </select>
      </div>

      {formData.appointment_date && (
        <div className="form-group">
          <label htmlFor="appointment_time">الوقت *</label>
          <div className="time-slots-grid">
            {availableSlots.filter(slot => slot.is_available).map(slot => (
              <div
                key={slot.id}
                className={`time-slot ${formData.appointment_time === slot.start_time ? 'selected' : ''}`}
                onClick={() => {
                  setFormData(prev => ({ ...prev, appointment_time: slot.start_time }));
                  setError('');
                }}
              >
                {slot.display}
              </div>
            ))}
          </div>
          {availableSlots.filter(slot => slot.is_available).length === 0 && (
            <p className="no-slots">لا توجد مواعيد متاحة في هذا التاريخ</p>
          )}
        </div>
      )}

      <div className="form-group">
        <label htmlFor="notes">ملاحظات إضافية (اختياري)</label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
          placeholder="أي معلومات إضافية تود مشاركتها"
          className="form-control"
          rows="3"
        />
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="form-actions">
        <button type="button" className="btn-back" onClick={handleBack}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          السابق
        </button>
        <button 
          type="button" 
          className="btn-submit" 
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? 'جاري الإرسال...' : 'إرسال الطلب'}
        </button>
      </div>
    </motion.div>
  );

  const renderStep4 = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="form-step success-step"
    >
      <div className="success-animation">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="success-icon"
        >
          ✓
        </motion.div>
      </div>
      <h2 className="success-title">تم إرسال طلبك بنجاح!</h2>
      <p className="success-message">
        شكراً لتواصلك معنا. سنقوم بمراجعة طلبك والتواصل معك قريباً عبر الواتساب.
      </p>
      <div className="success-details">
        <div className="detail-item">
          <strong>الاسم:</strong> {formData.full_name}
        </div>
        <div className="detail-item">
          <strong>رقم الهاتف:</strong> {formData.phone_number}
        </div>
        <div className="detail-item">
          <strong>التاريخ:</strong> {formData.appointment_date}
        </div>
        <div className="detail-item">
          <strong>الوقت:</strong> {formData.appointment_time}
        </div>
      </div>
      <button 
        type="button" 
        className="btn-back-home"
        onClick={() => window.location.href = '/'}
      >
        العودة للصفحة الرئيسية
      </button>
    </motion.div>
  );

  return (
    <div className="consultation-form-container">
      <div className="consultation-form-wrapper">
        <div className="form-header">
          <h1>احجز استشارتك المجانية</h1>
          <p>املأ النموذج وسنتواصل معك في أقرب وقت</p>
        </div>

        {currentStep < 4 && renderStepIndicator()}

        <AnimatePresence mode="wait">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ConsultationForm;
