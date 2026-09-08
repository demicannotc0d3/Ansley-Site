'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, HardHat } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className="fixed w-full z-50 bg-white border-b border-slate-200 transition-all top-0">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-blue-700 flex items-center justify-center group-hover:bg-blue-800 transition-colors">
              <div className="w-6 h-6 border-2 border-white rotate-45 transition-transform group-hover:rotate-90"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tighter text-blue-900 uppercase leading-none">Ansley</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mt-1 hidden sm:block">Contractors Co. Ltd</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-xs uppercase font-bold tracking-widest text-slate-400 hover:text-slate-900 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-6 py-3 text-xs uppercase font-black tracking-widest hover:bg-blue-700 transition-colors ml-4"
            >
              Request Quote
            </Link>
          </nav>

          <button 
            className="md:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-sm transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 p-4 flex flex-col shadow-xl">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="block text-xs uppercase font-bold tracking-widest text-slate-600 py-4 px-4 border-b border-slate-50 hover:bg-slate-50 transition-colors" 
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="px-4 pt-6 pb-2">
            <Link 
              href="/contact" 
              className="flex justify-center bg-blue-600 text-white px-6 py-3 text-xs uppercase font-black tracking-widest hover:bg-blue-700 transition-colors" 
              onClick={() => setIsOpen(false)}
            >
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
