import { useState, useEffect } from 'react';

const PHONE_NUMBER = '918113032006'; // Replace with actual WhatsApp number (country code + number, no spaces/dashes)
const DEFAULT_MESSAGE = 'Hi AM SOLAR WORLD! I\'m interested in solar panel installation. Can you share more details?';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [pulse, setPulse] = useState(true);

  // Show button after scrolling down a bit
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    onScroll(); // Check initial position
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Stop pulse animation after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setPulse(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with AM SOLAR WORLD on WhatsApp"
      title="Chat with us on WhatsApp"
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl group ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
      style={{
        background: 'linear-gradient(135deg, #25D366, #128C7E)',
      }}
    >
      {/* Pulse ring */}
      {pulse && (
        <span
          className="absolute inset-0 rounded-full animate-ping opacity-30"
          style={{ background: '#25D366' }}
        />
      )}

      {/* WhatsApp Icon */}
      <svg
        viewBox="0 0 32 32"
        fill="white"
        className="w-7 h-7 drop-shadow-sm group-hover:rotate-12 transition-transform duration-300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.96A15.91 15.91 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.342 22.616c-.39 1.1-1.932 2.014-3.17 2.28-.848.18-1.956.324-5.684-1.222-4.772-1.978-7.838-6.82-8.076-7.138-.228-.318-1.928-2.566-1.928-4.894 0-2.328 1.218-3.47 1.652-3.946.39-.428 1.022-.622 1.63-.622.196 0 .372.01.53.018.468.02.702.048 1.012.784.388.92 1.332 3.248 1.448 3.484.118.238.236.554.078.872-.148.328-.278.528-.516.81-.238.282-.488.498-.726.8-.218.262-.462.544-.196 1.024.266.468 1.184 1.954 2.542 3.164 1.746 1.556 3.216 2.038 3.672 2.264.34.168.744.138 1.022-.168.348-.392.78-.952 1.218-1.504.312-.396.706-.444 1.082-.296.382.14 2.414 1.14 2.826 1.346.412.208.688.318.79.488.098.168.098.988-.294 2.088Z" />
      </svg>

      {/* Tooltip */}
      <span className="absolute right-16 bg-white text-slate-800 text-sm font-medium px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with us! 💬
      </span>
    </a>
  );
}
