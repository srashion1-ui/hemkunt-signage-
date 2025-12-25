import React from 'react';
import { CAREERS_DATA } from '../constants';
import { Briefcase } from 'lucide-react';

const Careers: React.FC = () => {
  return (
    <div className="pt-20 bg-black min-h-screen text-white">
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase mb-4 tracking-tighter">Join <span className="text-brand">Us</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Build your career with the leaders in signage and branding solutions.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 max-w-4xl">
         <div className="mb-12">
            <h2 className="text-2xl font-bold text-brand mb-4">Why Work With Us?</h2>
            <p className="text-gray-400 leading-relaxed">
               At Hemkunt Signage, we believe in fostering a culture of innovation, creativity, and collaboration. 
               We offer a dynamic work environment where your ideas are valued, and your professional growth is a priority.
            </p>
         </div>

         <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Open Positions</h2>
            {CAREERS_DATA.map((job) => (
               <div key={job.id} className="bg-gray-900 border border-gray-800 p-6 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center hover:border-brand transition-colors group">
                  <div>
                     <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand transition-colors">{job.role}</h3>
                     <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <span className="flex items-center"><Briefcase size={14} className="mr-1" /> {job.type}</span>
                        <span>|</span>
                        <span>{job.location}</span>
                        <span>|</span>
                        <span>{job.exp}</span>
                     </div>
                  </div>
                  <button className="mt-4 md:mt-0 bg-white text-black font-bold py-2 px-6 rounded-full text-xs uppercase hover:bg-brand transition-colors">
                     Apply Now
                  </button>
               </div>
            ))}
         </div>
         
         <div className="mt-12 p-8 bg-gray-900 rounded-lg text-center border border-gray-800">
            <h3 className="text-xl font-bold mb-2">Don't see a matching role?</h3>
            <p className="text-gray-400 text-sm mb-4">Send us your CV and we will keep you in mind for future opportunities.</p>
            <a href="mailto:hr@hemkuntsignage.in" className="text-brand underline font-bold">hr@hemkuntsignage.in</a>
         </div>
      </div>
    </div>
  );
};

export default Careers;