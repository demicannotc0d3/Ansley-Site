import Link from 'next/link';
import { HardHat, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <>
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 py-16 lg:py-24">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Brand & Mission */}
        <div className="col-span-1 md:col-span-4 lg:col-span-4 pr-0 lg:pr-12">
          <Link href="/" className="flex items-center gap-3 group mb-8">
            <div className="w-10 h-10 bg-blue-700 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white rotate-45"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tighter text-blue-900 uppercase leading-none">Ansley</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mt-1">Contractors Co. Ltd</span>
            </div>
          </Link>
          <p className="max-w-sm text-slate-500 mb-8 leading-relaxed">
            Africa's next-generation infrastructure leader. Specializing in power systems, civil engineering, and large-scale project execution.
          </p>
          <div className="flex gap-4 items-center mt-12 pb-8 border-b border-slate-200 lg:border-none lg:pb-0">
             <div className="flex gap-2 items-center">
               <div className="w-2 h-2 rounded-full bg-green-500"></div>
               <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">HSE COMPLIANT</span>
             </div>
             <span className="text-[9px] uppercase tracking-widest text-slate-400 border-l border-slate-300 pl-4">COREN Reg. #CO2948-2</span>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <h4 className="text-[10px] text-slate-400 font-bold mb-8 tracking-[0.2em] uppercase">Capabilities</h4>
          <ul className="space-y-4 text-sm font-medium">
            {['General Engineering', 'Electrical Power (LV/HV)', 'MEP Services', 'Infrastructure Development', 'Property Management'].map(item => (
              <li key={item}>
                <Link href="/services" className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-3 group">
                  <span className="w-4 h-[1px] bg-slate-300 group-hover:bg-blue-600 transition-colors"></span> {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <h4 className="text-[10px] text-slate-400 font-bold mb-8 tracking-[0.2em] uppercase">Corporate</h4>
          <ul className="space-y-4 text-sm font-medium">
            {['About Us', 'Portfolio & Case Studies', 'Compliance & Safety', 'Bid Inquiries', 'Careers'].map(item => (
              <li key={item}>
                <Link href={item === 'Bid Inquiries' ? '/contact' : `/${item.split(' ')[0].toLowerCase()}`} className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-3 group">
                   <span className="w-4 h-[1px] bg-slate-300 group-hover:bg-blue-600 transition-colors"></span> {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-1 md:col-span-4 lg:col-span-2">
           <h4 className="text-[10px] text-slate-400 font-bold mb-8 tracking-[0.2em] uppercase">Contact</h4>
           <div className="space-y-6 text-sm">
             <div>
               <strong className="block font-bold text-slate-800 mb-1">Ansley Engineering House</strong>
               <span className="text-slate-500 block leading-relaxed">Victoria Island, Lagos, Nigeria</span>
             </div>
             <div>
               <a href="mailto:tenders@ansleycontractors.com" className="text-blue-600 underline font-medium">tenders@ansleycontractors.com</a>
             </div>
             <div>
               <span className="text-slate-500 font-medium">+234 (0) 1 234 5678</span>
             </div>
           </div>
        </div>

      </div>
    </footer>
    
    {/* Copyright Bar */}
    <div className="bg-white px-6 lg:px-10 h-16 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400">
      <div>Headquarters: Victoria Island, Lagos, Nigeria</div>
      <div className="flex gap-4 md:gap-8 mt-4 md:mt-0 items-center">
        <span className="hidden sm:inline-block">ISO 9001 Certified</span>
        <span className="hidden sm:inline-block border-l border-slate-300 h-3"></span>
        <Link href="/compliance" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
        <span className="hidden sm:inline-block border-l border-slate-300 h-3"></span>
        <span>&copy; {new Date().getFullYear()} Ansley Contractors</span>
      </div>
    </div>
    </>
  );
}
