import { ShieldCheck, FileCheck, CheckCircle2, UserCheck, HardHat, FileText } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = { 
  title: 'Compliance & Safety | Ansley Contractors'
};

export default function CompliancePage() {
  return (
    <div className="w-full bg-slate-50">
      {/* HEADER */}
      <section className="bg-slate-900 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-500 font-semibold tracking-[0.2em] uppercase text-sm mb-6 block">Corporate Governance</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white tracking-tight mb-8">Audit-Ready Excellence.</h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            Enterprise clients demand absolute security. Ansley operates rigorous financial, regulatory, and safety compliance frameworks guaranteeing institutional readiness.
          </p>
        </div>
      </section>

      {/* MAIN TWO-COLUMN DEEP DIVE */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* LEFT: Certifications */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-100 rounded-lg"><FileCheck className="text-blue-600 h-8 w-8" /></div>
              <h2 className="font-display text-3xl font-bold text-slate-900 tracking-tight">Licensing & Operations</h2>
            </div>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We hold the requisite corporate and engineering licenses to undertake maximum-value contracts within the Federation. Our paperwork is transparent and actively maintained.
            </p>
            
            <div className="space-y-4">
              {[
                "Corporate Affairs Commission (CAC) RC: Registered",
                "COREN Certification (Council for the Regulation of Engineering in Nigeria)",
                "Nigerian Society of Engineers (NSE) Corporate Member",
                "Federal Ministry of Works & Housing - Category A Contractor",
                "Industrial Training Fund (ITF) Compliance",
                "Nigeria Social Insurance Trust Fund (NSITF) Current",
                "Tax Clearance Certificate (TCC) Active"
              ].map((cert, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="font-medium text-slate-800">{cert}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* RIGHT: HSE Policy */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-100 rounded-lg"><ShieldCheck className="text-blue-600 h-8 w-8" /></div>
              <h2 className="font-display text-3xl font-bold text-slate-900 tracking-tight">HSE & Quality Assurance</h2>
            </div>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Our safety culture is uncompromising. We believe that zero-incident project delivery is the only acceptable metric. Our QA systems prevent costly rework.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Risk Assessments", icon: FileText, desc: "Mandatory pre-mobilization Job Hazard Analyses (JHA) mapping for all site activities." },
                { title: "Site Culture", icon: HardHat, desc: "Daily toolbox talks, strict PPE enforcement, and dedicated on-site HSE supervisors." },
                { title: "Quality Control", icon: UserCheck, desc: "Multi-stage independent internal inspections before client milestone sign-offs." },
                { title: "Insurance", icon: ShieldCheck, desc: "Comprehensive All-Risk and Third-Party liability coverage extending across all operations." }
              ].map((item, i) => (
                <div key={i} className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-white">
                  <item.icon className="h-8 w-8 text-blue-500 mb-4" />
                  <h4 className="font-display font-semibold text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CALL TO ACTION FOR DOCUMENTS */}
      <section className="bg-blue-600 py-16 text-center px-4">
        <h3 className="font-display text-2xl font-bold text-white mb-4">Require a detailed Pre-Qualification pack?</h3>
        <p className="text-blue-100 mb-8 max-w-xl mx-auto">Our procurement dossier, including certificates, audited financials, and equipment logs, is available upon request for vendor registration.</p>
        <a href="/contact" className="inline-block bg-white text-blue-900 px-8 py-3 rounded-md font-bold hover:bg-slate-100 transition shadow-md">
          Request Vendor Dossier
        </a>
      </section>
    </div>
  );
}
