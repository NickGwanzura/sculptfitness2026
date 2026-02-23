
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppWidget: React.FC = () => {
    return (
        <a
            href="https://wa.me/263777000000"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[2000] w-16 h-16 bg-white border border-black/5 shadow-2xl rounded-full flex items-center justify-center group hover:scale-110 transition-all duration-500 hover:bg-copper group"
            aria-label="Contact on WhatsApp"
        >
            <div className="absolute -top-12 right-0 bg-near-black text-white text-[9px] tracking-[0.2em] uppercase font-bold py-2 px-4 rounded-none opacity-0 group-hover:opacity-100 transition-all duration-500 whitespace-nowrap pointer-events-none shadow-xl">
                Concierge
            </div>
            <MessageCircle className="w-6 h-6 text-dark-text group-hover:text-white transition-colors" strokeWidth={1.5} />
            <span className="absolute inset-0 rounded-full border border-copper animate-ping opacity-20 group-hover:opacity-0"></span>
        </a>
    );
};

export default WhatsAppWidget;
