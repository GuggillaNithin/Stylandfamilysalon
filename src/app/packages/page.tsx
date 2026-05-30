import Link from "next/link";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import { Check } from "lucide-react";

export const metadata = {
  title: "Packages | STYLAND Family Salon",
  description: "Explore our premium beauty and bridal packages at STYLAND Family Salon.",
};

export default function PackagesPage() {
  return (
    <main className="font-body w-full bg-[#F4EFEA] pt-[70px]">
      {/* Hero Section */}
      <section className="w-full bg-[#8B624C] py-16 text-center text-white">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Our Premium Packages</h1>
        <p className="text-lg max-w-2xl mx-auto px-4">Choose the perfect package tailored for your beauty and bridal needs.</p>
      </section>

      {/* Beauty Packages Section */}
      <section className="w-full py-16 sm:py-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2A2A2A]">Beauty Packages</h2>
          <p className="text-gray-500 mt-2 text-lg">
            Choose the perfect package for your hair, beauty, and advanced skin care needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

          {/* Beauty Care */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
              BEAUTY CARE
            </p>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-extrabold text-[#2A2A2A]">₹5,000</span>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {[
                "Valid for 3 Months",
                "₹2,500 Credit Every Month",
                "Total Benefits Worth ₹7,500",
                "Hair Services Included",
                "Beauty Services Included",
                "Regular Salon Services",
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/book-appointment"
              className="block text-center w-full bg-[#1A1A1A] text-white font-bold py-3 px-6 rounded hover:bg-black transition-colors"
            >
              Book Now
            </Link>
          </div>

          {/* Hair & Beauty */}
          <div className="bg-white rounded-2xl p-8 shadow-md border-2 border-[#d4af37] hover:shadow-lg transition-shadow relative flex flex-col transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#d4af37] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Most Popular
            </div>

            <p className="text-xs font-bold text-[#d4af37] uppercase tracking-widest mb-4 mt-2">
              HAIR & BEAUTY
            </p>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-extrabold text-[#2A2A2A]">₹10,000</span>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {[
                "Valid for 6 Months",
                "₹2,000 Credit Every Month",
                "Pay for 5 Months & Get 1 Month FREE",
                "Total Benefits Worth ₹12,000",
                "Regular Hair Services",
                "Regular Beauty Services",
                "Treatments Excluded",
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/book-appointment"
              className="block text-center w-full bg-[#d4af37] text-black font-bold py-3 px-6 rounded hover:bg-white border border-[#d4af37] transition-colors"
            >
              Book Now
            </Link>
          </div>

          {/* Skin & Laser */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
              SKIN & LASER
            </p>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-extrabold text-[#2A2A2A]">₹25,000+</span>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {[
                "Laser Treatment - 6 Sessions",
                "Professional Medi-Facials",
                "Laser Toning",
                "Open Pores Treatment",
                "Pigmentation Reduction",
                "Anti-Ageing & Wrinkle Care",
                "Skin Brightening & Rejuvenation",
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/book-appointment"
              className="block text-center w-full bg-[#1A1A1A] text-white font-bold py-3 px-6 rounded hover:bg-black transition-colors"
            >
              Book Now
            </Link>
          </div>

        </div>
      </section>

      {/* Bridal Packages Section */}
      <section className="w-full bg-[#EFE9E2] py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2A2A2A]">Bridal Packages</h2>
            <p className="text-gray-500 mt-2 text-lg">Your big day deserves the most luxurious care.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Bridal Silver */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Silver Bridal</p>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-extrabold text-[#2A2A2A]">₹14,999</span>
                <span className="text-gray-400 line-through font-medium text-lg">₹18,000</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {["Bridal Makeup", "Basic Hairstyling", "Saree Draping", "Eyelashes", "Basic Touch-Up", "Consultation Included"].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/book-appointment" className="block text-center w-full bg-[#1A1A1A] text-white font-bold py-3 px-6 rounded hover:bg-black transition-colors">
                Book Now
              </Link>
            </div>
            {/* Bridal Gold */}
            <div className="bg-white rounded-2xl p-8 shadow-md border-2 border-[#d4af37] hover:shadow-lg transition-shadow relative flex flex-col transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#d4af37] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Premium
              </div>
              <p className="text-xs font-bold text-[#d4af37] uppercase tracking-widest mb-4 mt-2">Gold Bridal</p>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-extrabold text-[#2A2A2A]">₹21,999</span>
                <span className="text-gray-400 line-through font-medium text-lg">₹28,000</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {["HD Bridal Makeup", "Premium Hairstyling", "Saree Draping", "Eyelashes", "Nail Styling", "Complimentary Trial Session", "Pre-Bridal Facial"].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/book-appointment" className="block text-center w-full bg-[#d4af37] text-black font-bold py-3 px-6 rounded hover:bg-white border border-[#d4af37] transition-colors">
                Book Now
              </Link>
            </div>
            {/* Bridal Platinum */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Platinum Bridal</p>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-extrabold text-[#2A2A2A]">₹29,999</span>
                <span className="text-gray-400 line-through font-medium text-lg">₹38,000</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {["Luxury HD/Airbrush Makeup", "Premium Hairstyling", "Saree Draping", "Bridal Nail Styling", "Full Touch-Up Kit", "Complimentary Trial"].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/book-appointment" className="block text-center w-full bg-[#1A1A1A] text-white font-bold py-3 px-6 rounded hover:bg-black transition-colors">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="w-full py-16 sm:py-24 max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2A2A2A]">Frequently Asked Questions</h2>
          <p className="text-gray-500 mt-2 text-lg mb-8">Everything you need to know about our packages.</p>
          <FaqAccordion />
        </div>
      </section>

      <Footer />
    </main>
  );
}
