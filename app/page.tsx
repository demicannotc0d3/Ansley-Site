import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Factory, Zap, Building2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex flex-col lg:flex-row border-b border-slate-200 bg-white">
        {/* Main Hero Content */}
        <div className="lg:w-2/3 p-8 md:p-16 lg:p-24 flex flex-col justify-center lg:justify-between border-r border-slate-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none hidden md:block select-none">
            <span className="text-[120px] lg:text-[180px] font-black leading-none text-slate-900">ANSLEY</span>
          </div>
          
          <div className="relative z-10 lg:mt-16">
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">Ansley Contractors Ltd.</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 leading-[1.05] tracking-tight mb-8">
              Building the Infrastructure <br className="hidden md:block" /> Behind <span className="font-black italic text-blue-800">Africa's Growth.</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-md leading-relaxed mb-10">
              Engineering Certainty. Delivering Tomorrow. From high-voltage electrical installations to large-scale general contracting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/portfolio" className="bg-blue-600 text-white px-8 py-4 text-xs font-black tracking-[0.2em] uppercase hover:bg-blue-700 transition flex items-center justify-center gap-2">
                Explore Our Portfolio <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="bg-transparent text-slate-900 border border-slate-200 px-8 py-4 text-xs font-black tracking-[0.2em] uppercase hover:bg-slate-50 transition flex items-center justify-center">
                Discuss a Project
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex gap-16 mt-auto border-t border-slate-100 pt-10">
            <div className="flex flex-col">
              <span className="text-4xl font-black text-slate-900 tracking-tighter">25+</span>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-1">Years Experience</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-black text-slate-900 tracking-tighter">250+</span>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-1">Projects Delivered</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-black text-slate-900 tracking-tighter">LV/HV</span>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-1">Power Certified</span>
            </div>
          </div>
        </div>

        {/* Sidebar Image Pane */}
        <aside className="lg:w-1/3 flex flex-col bg-slate-900 text-white min-h-[400px]">
          <div className="flex-1 relative group overflow-hidden bg-slate-800 p-8 flex flex-col justify-end">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-10 w-full h-full"></div>
            <Image 
              src="https://picsum.photos/seed/engineering/1920/1080"
              alt="Engineering infrastructure"
              fill
              className="object-cover opacity-50 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000"
              priority
            />
            <div className="relative z-20">
               <span className="text-blue-400 text-[10px] font-bold uppercase tracking-widest">Featured Execution</span>
               <h3 className="text-2xl font-bold mt-2 leading-tight">National Grid <br />HV Substation</h3>
               <Link href="/portfolio" className="mt-4 inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.2em] border-b border-blue-500 pb-1 hover:text-blue-400 transition-colors">
                 View Case Study <ArrowRight className="h-3 w-3" />
               </Link>
            </div>
          </div>
          <div className="hidden lg:flex flex-1 p-8 xl:p-12 flex-col justify-center border-t border-slate-800">
             <h4 className="text-xs uppercase font-bold text-blue-400 tracking-[0.3em] mb-8">Core Capabilities</h4>
             <ul className="space-y-6">
                {[
                  "Electrical Power Installations", 
                  "General Engineering Contracting", 
                  "Infrastructure Development", 
                  "MEP Specialist Services"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 group cursor-pointer">
                    <span className="w-8 h-[1px] bg-slate-700 group-hover:bg-blue-500 transition-colors"></span>
                    <span className="text-sm font-medium tracking-wide text-slate-300 group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
             </ul>
             <div className="mt-8 pt-8 border-t border-slate-800 flex justify-between items-center">
               <span className="text-[9px] uppercase tracking-widest text-slate-500">COREN Reg. #CO2948-2</span>
               <div className="flex gap-2 items-center">
                 <div className="w-2 h-2 rounded-full bg-green-500"></div>
                 <span className="text-[9px] uppercase tracking-widest text-slate-300">HSE COMPLIANT</span>
               </div>
             </div>
          </div>
        </aside>
      </section>

      {/* LEGACY BRIDGE SECTION */}
      <section className="py-24 md:py-32 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
             <div className="absolute -top-12 -left-8 text-[120px] font-black text-slate-200/50 leading-none pointer-events-none select-none">25</div>
             <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-8 leading-[1.05] tracking-tight">
                Twenty-five years of ground-level trust. <br/><span className="font-black italic text-blue-800">A new era of precision.</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-8">
                Founded in Lagos in 2001, Ansley Contractors has evolved from a specialized heavy-civil contractor into Africa's next-generation infrastructure execution partner. We bring corporate compliance readiness, unparalleled safety standards, and transparent project delivery to every site.
              </p>
              <ul className="space-y-6 mb-12 border-t border-slate-200 pt-8">
                <li className="flex items-center gap-4 group cursor-default text-sm font-medium tracking-wide text-slate-700">
                  <span className="w-8 h-[1px] bg-blue-500"></span> Over 2 decades of proven execution
                </li>
                <li className="flex items-center gap-4 group cursor-default text-sm font-medium tracking-wide text-slate-700">
                  <span className="w-8 h-[1px] bg-blue-500"></span> ISO 9001 Compliant Quality Assurance
                </li>
                <li className="flex items-center gap-4 group cursor-default text-sm font-medium tracking-wide text-slate-700">
                  <span className="w-8 h-[1px] bg-blue-500"></span> COREN Registered & Fully Auditable
                </li>
              </ul>
              <Link href="/about" className="inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.2em] border-b border-blue-500 pb-1 hover:text-blue-400 transition-colors">
                Read Our Story <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
          <div className="w-full relative min-h-[500px]">
            <div className="absolute top-4 -left-4 w-full h-full border border-slate-200 bg-white"></div>
            <div className="relative h-[500px] w-full overflow-hidden border border-slate-200 bg-slate-100 shadow-sm z-10">
              <Image src="https://picsum.photos/seed/construction/800/1000" alt="Ansley Project Site" fill className="object-cover mix-blend-multiply opacity-90 grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES SECTION */}
      <section className="py-24 md:py-32 bg-white border-b border-slate-200">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between mb-20 gap-8 items-end border-b border-slate-200 pb-12">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">Our Expertise</span>
              <h2 className="text-5xl font-light text-slate-900 tracking-tight">Core <span className="font-black italic text-blue-800">Capabilities.</span></h2>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.2em] border-b border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors">
              View All Services <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-0">
            {[
              { title: "Electrical Power\n(LV/HV)", desc: "High and low voltage systems, substation construction, and industrial electrical infrastructure.", num: "01" },
              { title: "General\nEngineering", desc: "End-to-end execution of large-scale civil, structural, and infrastructure projects across the region.", num: "02" },
              { title: "MEP\nServices", desc: "Integrated mechanical, electrical, and plumbing engineering for commercial developments.", num: "03" }
            ].map((cap, i) => (
              <div key={i} className="group flex flex-col items-start p-10 border-r border-b md:border-b-0 border-slate-200 last:border-r-0 hover:bg-slate-50 transition-colors relative">
                <span className="absolute top-10 right-10 text-4xl font-black text-slate-100 group-hover:text-slate-200 transition-colors">{cap.num}</span>
                <span className="w-8 h-[2px] bg-blue-600 mb-8"></span>
                <h3 className="text-3xl font-black tracking-tight mb-6 text-slate-900 leading-none whitespace-pre-line">{cap.title}</h3>
                <p className="text-slate-500 mb-8 leading-relaxed max-w-sm">{cap.desc}</p>
                <div className="mt-auto pt-6 w-full flex">
                  <div className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center group-hover:border-blue-600 group-hover:bg-blue-600 transition-all cursor-pointer">
                    <ArrowRight className="h-3 w-3 text-slate-400 group-hover:text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-slate-900 flex flex-col md:flex-row">
        <div className="md:w-2/3 p-12 lg:p-24 flex flex-col justify-center border-r border-slate-800">
           <h2 className="text-4xl lg:text-6xl font-light text-white mb-8 tracking-tight">Ready to execute your <br/><span className="font-black italic text-blue-400">next project?</span></h2>
           <p className="text-slate-400 text-lg mb-10 font-light max-w-md">
             Partner with an engineering firm that understands the intricacies of local execution and stringent global quality standards.
           </p>
           <div>
             <Link href="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 text-xs font-black tracking-[0.2em] uppercase hover:bg-blue-500 transition shadow-none border border-blue-600">
               Submit an Inquiry
             </Link>
           </div>
        </div>
        <div className="md:w-1/3 flex flex-col bg-slate-800 relative overflow-hidden">
           <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply z-10"></div>
           <div className="p-12 lg:p-24 flex flex-col justify-center h-full relative z-20">
             <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Contact Us</span>
             <h3 className="text-2xl font-bold text-white mb-2">Ansley HQ</h3>
             <p className="text-slate-400 text-sm mb-6 leading-relaxed">
               Victoria Island<br/>
               Lagos, Nigeria
             </p>
             <a href="mailto:tenders@ansleycontractors.com" className="text-white border-b border-blue-500 pb-1 self-start hover:text-blue-400 transition-colors font-bold text-sm">tenders@ansleycontractors.com</a>
           </div>
           <div className="absolute right-0 bottom-0 pointer-events-none opacity-10">
              <span className="text-[180px] font-black text-slate-900 leading-none">A</span>
           </div>
        </div>
      </section>
    </div>
  );
}
