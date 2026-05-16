import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Beaker, MapPin, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center max-w-4xl py-12 md:py-24 px-4 relative">
        <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/2">
          <Sparkles className="text-emerald-400/30 w-32 h-32" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-emerald-900 via-teal-800 to-green-700 mb-6 tracking-tight leading-tight">
          Return to Nature with<br/>Panchakarma.
        </h1>
        <p className="text-xl md:text-2xl text-emerald-800/80 mb-10 leading-relaxed font-medium max-w-2xl mx-auto">
          Discover holistic wellness tailored to you. Bypass harsh chemicals and harness ancient Ayurvedic wisdom to purify your mind and body.
        </p>
        
        <div className="flex justify-center">
          <Link to="/symptoms" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full hover:from-emerald-400 hover:to-teal-400 shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/40 hover:-translate-y-1">
            <span className="text-lg">Start Healing Journey</span>
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 w-full mt-8 md:mt-12 px-4">
        {[
          {
            icon: Activity,
            title: 'Symptom Checker',
            desc: 'Tell us how you feel. Get precise, personalized Ayurvedic diagnoses.',
            color: 'from-emerald-400 to-green-500'
          },
          {
            icon: Beaker,
            title: 'Natural Remedies',
            desc: 'Step-by-step guides and videos to perform safe, effective detox therapies at home.',
            color: 'from-teal-400 to-emerald-500'
          },
          {
            icon: MapPin,
            title: 'Panchakarma Centers',
            desc: 'For critical care, easily locate verified Ayurvedic clinical centers across India.',
            color: 'from-green-400 to-teal-500'
          }
        ].map((feature, idx) => (
          <div key={idx} className="glass rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/40 to-transparent rounded-bl-full -z-10"></div>
            
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} text-white flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300`}>
              <feature.icon size={32} />
            </div>
            
            <h3 className="text-2xl font-bold mb-3 text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 font-medium leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
