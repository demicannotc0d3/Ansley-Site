import Image from 'next/image';
import { MapPin, Building, Activity, Zap } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = { 
  title: 'Portfolio & Case Studies | Ansley Contractors',
  description: 'Explore Ansley Contractors track record of engineering excellence across Nigeria.'
};

const projects = [
  { id: 1, name: 'Lekki Gardens Infrastructure', category: 'General Engineering', client: 'Lekki Gardens Estate', location: 'Lagos, NG', image: 'https://picsum.photos/seed/lekki/800/600' },
  { id: 2, name: 'National Grid HV Substation', category: 'Electrical Power (HV)', client: 'Federal Ministry of Power', location: 'Abuja, NG', image: 'https://picsum.photos/seed/substation/800/600' },
  { id: 3, name: 'Marina Corporate Towers', category: 'MEP Services', client: 'Enterprise Developers Hub', location: 'Lagos, NG', image: 'https://picsum.photos/seed/corporate/800/600' },
  { id: 4, name: 'Industrial Logistics Park', category: 'Infrastructure', client: 'Global Logistics Inc.', location: 'Ogun State, NG', image: 'https://picsum.photos/seed/logistics/800/600' },
  { id: 5, name: 'Heritage Estate Renovation', category: 'Rehabilitation', client: 'Private Investment Group', location: 'Abuja, NG', image: 'https://picsum.photos/seed/estate/800/600' },
  { id: 6, name: 'Regional Water Treatment Plant', category: 'Civil Infrastructure', client: 'State Government', location: 'Kano, NG', image: 'https://picsum.photos/seed/water/800/600' },
];

const stats = [
  { label: 'Projects Delivered', value: '250+', icon: Building },
  { label: 'Years of Experience', value: '25+', icon: Activity },
  { label: 'Megawatts Installed', value: '500+', icon: Zap },
];

export default function PortfolioPage() {
  return (
    <div className="w-full bg-white">
      {/* HEADER */}
      <section className="bg-slate-900 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-500 font-semibold tracking-[0.2em] uppercase text-sm mb-6 block">Our Work</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white tracking-tight mb-8">Proven Project Delivery</h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            From complex high-voltage substations to commercial MEP installations, explore our track record of engineering excellence.
          </p>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center pt-6 md:pt-0">
                <div className="text-blue-600 mb-2"><stat.icon className="h-8 w-8" /></div>
                <div className="text-4xl font-display font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-display text-3xl font-bold text-slate-900">Featured Case Studies</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="group flex flex-col border border-slate-100 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all">
              <div className="relative h-72 w-full bg-slate-100 overflow-hidden">
                <Image src={project.image} alt={project.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-900 rounded shadow-sm">
                  {project.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display font-semibold tracking-tight text-xl text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{project.name}</h3>
                <div className="flex flex-col gap-3 text-sm text-slate-600 mt-auto border-t border-slate-100 pt-4">
                  <span className="flex items-center gap-2"><Building className="h-4 w-4 text-slate-400"/> Client: <strong className="font-medium text-slate-900">{project.client}</strong></span>
                  <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-slate-400"/> Location: <strong className="font-medium text-slate-900">{project.location}</strong></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
