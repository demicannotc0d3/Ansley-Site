import { Zap, Wrench, Building2, Map, ShieldCheck, Factory } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = { 
  title: 'Services & Capabilities | Ansley Contractors'
};

const capabilities = [
  {
    title: "Electrical Power Installations",
    icon: Zap,
    features: [
      "Low Voltage (LV) distribution systems",
      "High Voltage (HV) transmission lines",
      "Substation design & construction",
      "Industrial power redundancy"
    ],
    desc: "Specialized engineering teams capable of delivering complex grid-level and commercial electrical infrastructure securely and flawlessly."
  },
  {
    title: "General Engineering Contracting",
    icon: Factory,
    features: [
      "Heavy civil and structural works",
      "Earthworks and foundation piling",
      "Commercial industrial facilities",
      "Public-sector frameworks"
    ],
    desc: "Comprehensive civil contracting services from greenfield developments to large-scale municipal infrastructure."
  },
  {
    title: "MEP Services",
    icon: Building2,
    features: [
      "HVAC systems installation",
      "Industrial plumbing networks",
      "Fire suppression systems",
      "Building management systems (BMS)"
    ],
    desc: "End-to-end Mechanical, Electrical, and Plumbing engineering delivering comfort, safety, and efficiency."
  },
  {
    title: "Infrastructure Development",
    icon: Map,
    features: [
      "Roads and bridges",
      "Water treatment facilities",
      "Underground utility trenches",
      "Logistics parks"
    ],
    desc: "Executing the backbone structures required for national and corporate economic expansion."
  },
  {
    title: "Property Management & Facility Maintenance",
    icon: ShieldCheck,
    features: [
      "Preventative maintenance scheduling",
      "Asset lifecycle management",
      "24/7 technical support",
      "Energy auditing"
    ],
    desc: "Protecting infrastructure investments long after the ribbon is cut through rigorous operational support."
  },
  {
    title: "Renovation & Rehabilitation",
    icon: Wrench,
    features: [
      "Structural retrofitting",
      "Heritage restorations",
      "Modernization of legacy tech",
      "Code compliance upgrades"
    ],
    desc: "Bringing aging assets into cutting-edge operational condition with minimal downtime."
  }
];

export default function ServicesPage() {
  return (
    <div className="w-full bg-slate-50">
      {/* HEADER */}
      <section className="bg-slate-900 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-500 font-semibold tracking-[0.2em] uppercase text-sm mb-6 block">Capabilities</span>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-white tracking-tight mb-8">Engineering Architecture</h1>
              <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed mb-8">
                Ansley Contractors delivers an integrated spectrum of infrastructure services. We maintain specialized internal divisions to handle the most demanding technical requirements.
              </p>
            </div>
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700/50">
              <h3 className="text-white font-display font-semibold mb-4 text-xl">Why partner with Ansley?</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3"><ShieldCheck className="h-6 w-6 text-blue-500 flex-shrink-0" /> Turnkey delivery reducing multi-vendor friction</li>
                <li className="flex items-start gap-3"><ShieldCheck className="h-6 w-6 text-blue-500 flex-shrink-0" /> Enterprise-grade risk and compliance protocols</li>
                <li className="flex items-start gap-3"><ShieldCheck className="h-6 w-6 text-blue-500 flex-shrink-0" /> Technical independence with proprietary heavy equipment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES MATRIX */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <div key={i} className="bg-white p-8 md:p-10 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all group flex flex-col h-full">
                <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors">
                  <cap.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-2xl font-bold tracking-tight mb-4 text-slate-900">{cap.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed font-light">{cap.desc}</p>
                
                <div className="mt-auto pt-6 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Competencies</h4>
                  <ul className="space-y-3">
                    {cap.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
