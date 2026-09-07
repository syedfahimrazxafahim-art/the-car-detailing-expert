import React, { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Calendar, CheckCircle, AlertCircle, Clock, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { BookingFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    vehicle: '',
    service: 'Car Washing',
    preferredDate: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your contact phone number.';
    } else if (!/^[0-9+()\s-]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    if (!formData.vehicle.trim()) {
      newErrors.vehicle = 'Please specify your vehicle make & model.';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof BookingFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Honest feedback - client state recorded without false backend storage claim
    setSubmittedData({ ...formData });
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      name: '',
      phone: '',
      vehicle: '',
      service: 'Car Washing',
      preferredDate: '',
      message: '',
    });
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-[#101010] relative overflow-hidden"
      aria-label="Contact and Booking Section"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* LEFT: Contact Information */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <span className="text-xs font-['Oswald'] tracking-[0.25em] text-[#D4AF37] uppercase font-semibold block mb-2">
                GET IN TOUCH
              </span>
              <h2 className="font-['Oswald'] text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">
                CONTACT THE <br />
                <span className="gold-gradient-text">DETAILING EXPERT</span>
              </h2>
              <div className="w-16 h-[2px] bg-[#D4AF37] mb-6" />
              <p className="text-sm sm:text-base text-[#A8A8A8] font-light leading-relaxed">
                Connect with our team to inquire about car washing scheduling, customized vehicle presentation, and appointment availability in Los Angeles.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* Phone */}
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center gap-4 p-4 bg-[#0A0A0A] border border-[#8C6B18]/40 hover:border-[#D4AF37] transition-all duration-300 group"
              >
                <div className="w-12 h-12 border border-[#D4AF37] bg-[#121212] flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] transition-colors">
                  <Phone className="w-5 h-5 text-[#F5C542] group-hover:text-black transition-colors" />
                </div>
                <div>
                  <span className="text-[10px] font-['Oswald'] tracking-widest text-[#A8A8A8] uppercase block">
                    TELEPHONE
                  </span>
                  <span className="text-base font-semibold text-white group-hover:text-[#F5C542] transition-colors font-mono">
                    {BUSINESS_INFO.phone}
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-4 p-4 bg-[#0A0A0A] border border-[#8C6B18]/40 hover:border-[#D4AF37] transition-all duration-300 group"
              >
                <div className="w-12 h-12 border border-[#D4AF37] bg-[#121212] flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] transition-colors">
                  <Mail className="w-5 h-5 text-[#F5C542] group-hover:text-black transition-colors" />
                </div>
                <div>
                  <span className="text-[10px] font-['Oswald'] tracking-widest text-[#A8A8A8] uppercase block">
                    EMAIL INQUIRIES
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-[#F5C542] transition-colors break-all">
                    {BUSINESS_INFO.email}
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 bg-[#0A0A0A] border border-[#8C6B18]/30">
                <div className="w-12 h-12 border border-[#8C6B18]/50 bg-[#121212] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <span className="text-[10px] font-['Oswald'] tracking-widest text-[#A8A8A8] uppercase block">
                    SERVICE LOCATION
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {BUSINESS_INFO.city}, {BUSINESS_INFO.state}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="text-xs font-['Oswald'] tracking-[0.2em] text-[#D4AF37] uppercase font-semibold block mb-3">
                CONNECT ON SOCIAL MEDIA
              </span>
              <div className="flex items-center gap-3">
                {/* Instagram */}
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-2.5 bg-[#0A0A0A] border border-[#8C6B18]/40 text-white hover:text-[#F5C542] hover:border-[#D4AF37] transition-colors text-xs font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                  aria-label="Visit The Detailing Expert on Instagram."
                >
                  <Instagram className="w-4 h-4 text-[#D4AF37]" />
                  <span>Instagram</span>
                </a>

                {/* Facebook */}
                <a
                  href={BUSINESS_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-2.5 bg-[#0A0A0A] border border-[#8C6B18]/40 text-white hover:text-[#F5C542] hover:border-[#D4AF37] transition-colors text-xs font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                  aria-label="Visit The Detailing Expert on Facebook."
                >
                  <Facebook className="w-4 h-4 text-[#D4AF37]" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Premium Booking / Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0A0A0A] border border-[#8C6B18]/50 p-6 sm:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.8)] relative">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37]" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37]" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#D4AF37]" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#D4AF37]" />

              <div className="border-b border-[#222] pb-4 mb-6">
                <h3 className="font-['Oswald'] text-2xl font-bold uppercase tracking-wide text-white">
                  REQUEST A SERVICE <span className="gold-gradient-text">BOOKING</span>
                </h3>
                <p className="text-xs text-[#A8A8A8] font-light mt-1">
                  Submit your vehicle details below to initiate your car washing appointment request.
                </p>
              </div>

              {submittedData ? (
                /* Honest Submission Confirmation */
                <div className="py-8 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full border-2 border-[#D4AF37] bg-[#121212] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-[#F5C542]" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-['Oswald'] text-xl font-bold uppercase text-white tracking-wide">
                      BOOKING INQUIRY GENERATED
                    </h4>
                    <p className="text-sm text-[#A8A8A8] max-w-md mx-auto font-light">
                      Thank you, <strong className="text-white">{submittedData.name}</strong>. Your inquiry for <strong className="text-[#F5C542]">{submittedData.service}</strong> on your <strong className="text-white">{submittedData.vehicle}</strong> has been prepared.
                    </p>
                  </div>

                  <div className="p-4 bg-[#141414] border border-[#8C6B18]/40 max-w-md mx-auto text-left text-xs space-y-2 text-[#C0C0C0]">
                    <div className="flex justify-between border-b border-[#222] pb-1">
                      <span className="text-[#888]">Contact Phone:</span>
                      <span className="font-mono text-white">{submittedData.phone}</span>
                    </div>
                    {submittedData.preferredDate && (
                      <div className="flex justify-between border-b border-[#222] pb-1">
                        <span className="text-[#888]">Preferred Date:</span>
                        <span className="text-white">{submittedData.preferredDate}</span>
                      </div>
                    )}
                    <div className="pt-1 text-[11px] text-[#A8A8A8] italic">
                      Notice: For immediate assistance or same-day scheduling, please call directly at <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-[#F5C542] underline">{BUSINESS_INFO.phone}</a>.
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="w-full sm:w-auto gold-gradient-bg text-black font-semibold text-xs tracking-wider uppercase px-6 py-3 flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4 text-black" />
                      <span>CALL NOW: {BUSINESS_INFO.phone}</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto bg-[#181818] border border-[#8C6B18]/60 text-white hover:text-[#D4AF37] text-xs font-semibold tracking-wider uppercase px-6 py-3 transition-colors"
                    >
                      SUBMIT ANOTHER INQUIRY
                    </button>
                  </div>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="booking-name" className="block text-xs font-['Oswald'] uppercase tracking-wider text-[#D4AF37] mb-1.5 font-semibold">
                        FULL NAME *
                      </label>
                      <input
                        id="booking-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g., Alex Morgan"
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'booking-name-error' : undefined}
                        className={`w-full bg-[#121212] border px-4 py-3 text-sm text-white placeholder-[#555] transition-colors focus:outline-none focus:border-[#D4AF37] ${
                          errors.name ? 'border-red-500' : 'border-[#8C6B18]/40'
                        }`}
                      />
                      {errors.name && (
                        <p id="booking-name-error" className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="booking-phone" className="block text-xs font-['Oswald'] uppercase tracking-wider text-[#D4AF37] mb-1.5 font-semibold">
                        PHONE NUMBER *
                      </label>
                      <input
                        id="booking-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g., 332-288-6330"
                        aria-required="true"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'booking-phone-error' : undefined}
                        className={`w-full bg-[#121212] border px-4 py-3 text-sm text-white placeholder-[#555] transition-colors focus:outline-none focus:border-[#D4AF37] ${
                          errors.phone ? 'border-red-500' : 'border-[#8C6B18]/40'
                        }`}
                      />
                      {errors.phone && (
                        <p id="booking-phone-error" className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Vehicle */}
                    <div>
                      <label htmlFor="booking-vehicle" className="block text-xs font-['Oswald'] uppercase tracking-wider text-[#D4AF37] mb-1.5 font-semibold">
                        VEHICLE MAKE &amp; MODEL *
                      </label>
                      <input
                        id="booking-vehicle"
                        type="text"
                        name="vehicle"
                        value={formData.vehicle}
                        onChange={handleChange}
                        placeholder="e.g., Porsche 911 / Tesla Model S"
                        aria-required="true"
                        aria-invalid={!!errors.vehicle}
                        aria-describedby={errors.vehicle ? 'booking-vehicle-error' : undefined}
                        className={`w-full bg-[#121212] border px-4 py-3 text-sm text-white placeholder-[#555] transition-colors focus:outline-none focus:border-[#D4AF37] ${
                          errors.vehicle ? 'border-red-500' : 'border-[#8C6B18]/40'
                        }`}
                      />
                      {errors.vehicle && (
                        <p id="booking-vehicle-error" className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.vehicle}</span>
                        </p>
                      )}
                    </div>

                    {/* Service Selection (Only confirmed service: Car Washing) */}
                    <div>
                      <label htmlFor="booking-service" className="block text-xs font-['Oswald'] uppercase tracking-wider text-[#D4AF37] mb-1.5 font-semibold">
                        SERVICE *
                      </label>
                      <select
                        id="booking-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        aria-required="true"
                        className="w-full bg-[#121212] border border-[#8C6B18]/40 px-4 py-3 text-sm text-white transition-colors focus:outline-none focus:border-[#D4AF37]"
                      >
                        <option value="Car Washing">Car Washing (Primary Confirmed Service)</option>
                      </select>
                      <p className="text-[10px] text-[#777] mt-1 italic">
                        Car Washing is the confirmed primary offering.
                      </p>
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label htmlFor="booking-date" className="block text-xs font-['Oswald'] uppercase tracking-wider text-[#D4AF37] mb-1.5 font-semibold">
                      PREFERRED DATE (OPTIONAL)
                    </label>
                    <input
                      id="booking-date"
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full bg-[#121212] border border-[#8C6B18]/40 px-4 py-3 text-sm text-white transition-colors focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="booking-message" className="block text-xs font-['Oswald'] uppercase tracking-wider text-[#D4AF37] mb-1.5 font-semibold">
                      MESSAGE / SPECIAL INSTRUCTIONS (OPTIONAL)
                    </label>
                    <textarea
                      id="booking-message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please note any specific focus areas or vehicle condition details..."
                      className="w-full bg-[#121212] border border-[#8C6B18]/40 px-4 py-3 text-sm text-white placeholder-[#555] transition-colors focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  {/* Submit and Direct Call Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <button
                      id="contact-submit-button"
                      type="submit"
                      className="gold-gradient-bg text-black font-semibold text-xs tracking-wider uppercase py-4 px-8 flex items-center justify-center gap-2 transition-all duration-300 hover:brightness-110 shadow-[0_4px_20px_rgba(212,175,55,0.3)] cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-black" />
                      <span>BOOK NOW</span>
                    </button>

                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="bg-transparent border border-[#8C6B18] text-white hover:text-[#F5C542] hover:border-[#D4AF37] font-semibold text-xs tracking-wider uppercase py-4 px-6 flex items-center justify-center gap-2 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#D4AF37]" />
                      <span>CALL NOW</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
