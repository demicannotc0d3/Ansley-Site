import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = { 
  title: 'About Us | Ansley Contractors'
};

export default function AboutPage() {
  return (
    <div className="w-full bg-white">
      {/* HEADER */}
      <section className="py-24 md:py-32 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-8">Built on Execution.</h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Since 2001, Ansley Contractors has transformed from a dedicated local contracting operation into an institutional powerhouse driving Nigeria's industrial and urban expansion.
          </p>
        </div>
      </section>

      {/* STORY & MISSION */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] rounded-xl overflow-hidden shadow-sm border border-slate-100">
            <Image src="https://picsum.photos/seed/corporatehq/800/1000" alt="Ansley Leadership Meeting" fill className="object-cover" />
          </div>
          <div>
            <div className="mb-12">
              <h3 className="text-blue-600 font-semibold tracking-[0.2em] uppercase text-sm mb-4">Our History</h3>
              <h2 className="font-display text-3xl font-bold text-slate-900 mb-6 tracking-tight">An Institution, Not Just a Business.</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                What began over two decades ago with a core focus on precise electrical installations has matured into an end-to-end general engineering capability. We recognized early that Africa's developers and governments needed more than manpower—they needed management rigor.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Today, Ansley operates as a fully auditable corporate framework. We employ top-tier engineers, enforce uncompromising HSE protocols, and utilize sophisticated pre-construction modeling to guarantee timelines and budgets.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                <h4 className="font-display text-xl font-bold text-slate-900 mb-3">Our Mission</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To provide engineered certainty in a complex market by uniting heavy civil capabilities with corporate governance.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                <h4 className="font-display text-xl font-bold text-slate-900 mb-3">Our Vision</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To be the default infrastructure delivery partner for Africa's most ambitious private and public tier-1 developments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold mb-16 text-center tracking-tight">Growth Timeline</h2>
          <div className="max-w-4xl mx-auto space-y-12">
            {[
              { year: '2001', title: 'Inception', desc: 'Incorporated in Lagos, focusing primarily on niche electrical power installations.' },
              { year: '2010', title: 'MEP Expansion', desc: 'Matured internal division to handle full-scope Mechanical, Electrical, and Plumbing for corporate real estate.' },
              { year: '2018', title: 'Heavy Civil Operations', desc: 'Launched general contracting unit, acquiring proprietary heavy machinery fleets.' },
              { year: 'Present', title: 'Institutional Tier', desc: 'Executing billion-naira portfolios for joint-venture developers and federal agencies.' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-6 sm:gap-12 group">
                <div className="sm:w-32 flex-shrink-0 text-blue-500 font-display text-3xl font-bold">{item.year}</div>
                <div className="space-y-3 pb-12 sm:border-l sm:border-slate-700 sm:pl-12 group-last:border-transparent group-last:pb-0">
                  <h4 className="text-xl font-bold">{item.title}</h4>
                  <p className="text-slate-400 leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
