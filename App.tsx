import React from 'react';
import { Download, ArrowRight, Star } from 'lucide-react';

// Constants
const TARGET_URL = "https://waexport.wadesk.io/?utm_source=github&utm_medium=referral&utm_campaign=seo_landing_page";

const Header = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href={TARGET_URL} className="flex-shrink-0 flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center text-white">
              <Download size={20} />
            </div>
            <span className="font-bold text-xl text-gray-900 tracking-tight">WA Export</span>
          </a>
          
          <div className="flex items-center">
            <a 
              href={TARGET_URL}
              className="bg-brand hover:bg-brand-accent text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-brand/30 flex items-center gap-2"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center relative pt-16 overflow-hidden bg-gradient-to-br from-white via-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light/50 text-brand-dark font-semibold text-sm mb-8 border border-brand/20 animate-fade-in-up">
            <Star className="w-4 h-4 fill-brand text-brand" />
            <span>#1 Rated WhatsApp Group Scraper Tool</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-8 leading-tight">
            The <span className="text-brand">100% Free</span> WhatsApp Group Number Extractor
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Export unlimited contacts from any WhatsApp group to Excel, CSV, or JSON in seconds. No hidden fees, secure, and privacy-focused.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={TARGET_URL}
              className="w-full sm:w-auto px-8 py-4 bg-brand hover:bg-brand-accent text-white rounded-full font-bold text-lg shadow-xl hover:shadow-brand/40 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Start Exporting Free
            </a>
            <a 
              href={TARGET_URL}
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 rounded-full font-bold text-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-gray-400 grayscale opacity-70">
            <div className="flex flex-col items-center">
               <span className="font-bold text-xl">100k+</span>
               <span className="text-xs uppercase tracking-wider">Exports</span>
            </div>
             <div className="flex flex-col items-center">
               <span className="font-bold text-xl">50k+</span>
               <span className="text-xs uppercase tracking-wider">Users</span>
            </div>
             <div className="flex flex-col items-center">
               <span className="font-bold text-xl">4.9/5</span>
               <span className="text-xs uppercase tracking-wider">Rating</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-100/30 rounded-full blur-3xl"></div>
      </div>

      {/* Minimal Footer */}
      <div className="absolute bottom-4 w-full text-center text-gray-400 text-xs z-20">
        &copy; {new Date().getFullYear()} WA Export. Not affiliated with WhatsApp Inc.
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-brand selection:text-white">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}