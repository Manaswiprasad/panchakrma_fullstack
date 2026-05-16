import React, { useState } from 'react';
import axios from 'axios';
import { Search, AlertTriangle, CheckCircle, MapPin, Video, Info, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SymptomChecker() {
  const [symptom, setSymptom] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!symptom.trim()) return;
    setLoading(true);
    setSearched(true);
    try {
      const response = await axios.get(`http://localhost:8080/api/remedies/search?symptom=${symptom}`);
      setResults(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-4">
      {/* Search Header */}
      <div className="glass rounded-3xl p-8 md:p-12 mb-12 shadow-xl shadow-emerald-900/5 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 opacity-10">
          <Leaf size={300} className="text-emerald-500" />
        </div>
        
        <div className="relative z-10 text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-900 to-teal-700 mb-4">
            Diagnostics & Remedies
          </h2>
          <p className="text-lg text-emerald-800/80 font-medium">
            Listen to your body. Describe your symptoms and uncover natural, Ayurvedic paths to healing without harsh side-effects.
          </p>
        </div>
        
        <form onSubmit={handleSearch} className="relative z-10 flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
              <Search className="text-emerald-400" size={24} />
            </div>
            <input 
              type="text" 
              placeholder="e.g., Fever, Cough, Joint Pain, Acne..." 
              className="w-full pl-14 pr-6 py-5 rounded-full border-0 bg-white shadow-inner text-lg focus:ring-4 focus:ring-emerald-500/20 text-emerald-900 placeholder-emerald-300 font-medium transition-shadow"
              value={symptom}
              onChange={(e) => setSymptom(e.target.value)}
            />
          </div>
          <button 
            type="submit" 
            className="md:w-auto w-full bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white px-10 py-5 rounded-full font-bold text-lg shadow-lg shadow-emerald-500/30 transition-all hover:shadow-xl hover:-translate-y-1 flex items-center justify-center disabled:opacity-70 disabled:transform-none"
            disabled={loading}
          >
            {loading ? <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : 'Analyze'}
          </button>
        </form>
      </div>

      {/* Empty State */}
      {searched && !loading && results.length === 0 && (
        <div className="glass rounded-3xl p-12 text-center text-emerald-700 max-w-2xl mx-auto border border-emerald-100">
          <Info className="mx-auto mb-6 text-emerald-400" size={64} />
          <h3 className="text-2xl font-bold mb-2">No direct match found.</h3>
          <p className="text-lg opacity-80">Our database is expanding. Please try a more general term like 'Pain' or 'Cough'.</p>
        </div>
      )}

      {/* Results */}
      <div className="grid gap-10">
        {results.map((remedy) => (
          <div key={remedy.id} className="glass rounded-3xl overflow-hidden shadow-2xl shadow-teal-900/5 group">
            
            {/* Banner Severity */}
            {remedy.severityLevel === 'High' ? (
              <div className="bg-gradient-to-r from-red-500/10 to-transparent p-5 flex items-center gap-4 text-red-900 border-b border-red-200/50">
                <div className="bg-red-100 p-2 rounded-full"><AlertTriangle size={24} className="text-red-600" /></div>
                <div className="flex-grow">
                  <strong className="block text-lg">High Severity Consult Required</strong> 
                  <span className="opacity-80 text-sm">Home remedies soothe, but clinical supervision is recommended.</span>
                </div>
                <Link to="/centers" className="bg-white text-red-700 px-4 py-2 rounded-full shadow-sm text-sm font-bold flex items-center hover:bg-red-50 transition">
                  Find Clinic <MapPin size={16} className="ml-1" />
                </Link>
              </div>
            ) : (
              <div className="bg-gradient-to-r from-emerald-500/10 to-transparent p-5 flex items-center gap-4 text-emerald-900 border-b border-emerald-200/50">
                <div className="bg-emerald-100 p-2 rounded-full"><CheckCircle size={24} className="text-emerald-600" /></div>
                <div>
                  <strong className="block text-lg">Home Treatment Suitable</strong>
                  <span className="opacity-80 text-sm">Follow the guided steps safely.</span>
                </div>
              </div>
            )}

            <div className="p-8 md:p-10 grid lg:grid-cols-2 gap-12">
              {/* Left Details */}
              <div>
                <h3 className="text-4xl font-extrabold text-gray-800 mb-3 tracking-tight">{remedy.symptom}</h3>
                
                <div className="inline-flex items-center bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-bold mb-8 border border-teal-200 shadow-sm">
                  Root Cause: <span className="ml-2 font-black">{remedy.diagnosis}</span>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm uppercase tracking-widest text-emerald-500 font-bold mb-2 flex items-center gap-2">
                    <Leaf size={16} /> Recommended Protocol
                  </h4>
                  <p className="text-2xl font-bold text-gray-800">{remedy.recommendedPanchakarma}</p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-6 border-b border-gray-200/60 pb-3">Home Action Plan</h4>
                  <ul className="space-y-4">
                    {remedy.homeRemediesSteps.map((step, idx) => (
                      <li key={idx} className="flex gap-4 group/item">
                        <span className="bg-emerald-100 text-emerald-700 shadow-sm rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-black text-sm group-hover/item:bg-emerald-500 group-hover/item:text-white transition-colors">
                          {idx + 1}
                        </span>
                        <span className="text-gray-700 font-medium leading-relaxed pt-1">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Media */}
              <div className="flex flex-col">
                <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <div className="bg-red-100 p-1.5 rounded-lg"><Video className="text-red-500" size={20} /></div>
                  Instructional Guide
                </h4>
                <div className="rounded-2xl overflow-hidden flex-grow shadow-lg border-4 border-white relative bg-gray-900 group-hover:shadow-2xl transition-shadow duration-500 min-h-[300px]">
                  <iframe 
                    src={remedy.videoUrl} 
                    title={remedy.symptom}
                    className="absolute inset-0 w-full h-full border-0 rounded-xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
