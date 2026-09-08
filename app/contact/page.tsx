import { MapPin, Phone, Mail, Building } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = { 
  title: 'Contact & Bid Inquiries | Ansley Contractors'
};

export default function ContactPage() {
  return (
    <div className="w-full bg-white">
      {/* HEADER */}
      <section className="bg-slate-900 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-500 font-semibold tracking-[0.2em] uppercase text-sm mb-6 block">Procurement & Bids</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white tracking-tight mb-8">Discuss Your Next Infrastructure Project.</h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            Our estimating and engineering teams are prepared to review tender documents, RFQs, and structural drawings for tier-1 projects.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* CONTACT FORM */}
          <div className="bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-200">
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-8">Bid Inquiry Submission</h2>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-semibold text-slate-700">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-semibold text-slate-700">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-semibold text-slate-700">Organization / Company Name</label>
                <input type="text" id="company" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="Enterprise Developers Ltd." />
              </div>

              <div className="space-y-2">
                <label htmlFor="inquiryType" className="text-sm font-semibold text-slate-700">Inquiry Type</label>
                <select id="inquiryType" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white" defaultValue="rfq">
                  <option value="rfq">Request for Quotation (RFQ)</option>
                  <option value="tender">Tender Submission Invite</option>
                  <option value="consultation">Engineering Consultation</option>
                  <option value="vendor">Pre-Qualification Request</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="details" className="text-sm font-semibold text-slate-700">Project Details & Scope</label>
                <textarea id="details" rows={5} className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none" placeholder="Provide a brief overview of the project scope, location, and timeline..."></textarea>
              </div>

              <button type="button" className="w-full bg-blue-600 text-white font-bold py-4 rounded-md hover:bg-blue-700 transition shadow-md">
                Submit Inquiry
              </button>
              <p className="text-xs text-slate-500 text-center mt-4">
                For tender packages exceeding 10MB, please email links directly to our tenders desk.
              </p>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="flex flex-col justify-center">
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-6">Corporate Office</h2>
            <p className="text-slate-600 mb-10 leading-relaxed text-lg">
              Ansley Contractors operates from the commercial heart of Lagos, coordinating engineering teams deployed across the nation.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-4 rounded-full"><Building className="h-6 w-6 text-blue-600" /></div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Company Headquarters</h4>
                  <p className="text-slate-600 leading-relaxed">Ansley Engineering House<br />14 Infrastructure Way, Victoria Island<br />Lagos, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-4 rounded-full"><Phone className="h-6 w-6 text-blue-600" /></div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Direct Lines</h4>
                  <p className="text-slate-600">Procurement: +234 (0) 1 234 5678<br />Corporate: +234 (0) 800 ANSLEY CO</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-4 rounded-full"><Mail className="h-6 w-6 text-blue-600" /></div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Electronic Mail</h4>
                  <p className="text-slate-600">Tenders: tenders@ansleycontractors.com<br />General: info@ansleycontractors.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-slate-100 p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2">Business Hours</h4>
              <p className="text-slate-600">Monday - Friday: 8:00 AM - 5:00 PM (WAT)<br />Saturday/Sunday: Closed (Site operations continue 24/7)</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
