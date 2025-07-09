import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Discover Premium Brands
          </h1>
          <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
            Explore curated collections from top fashion, fitness, and lifestyle brands.
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Authentic products • Real pricing • High-quality imagery
          </p>
        </div>
      </div>
      
      {/* Category Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-lg text-gray-600">Browse premium brands across different categories</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto px-2 sm:px-0">
          <Link href="/trending" className="group bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300">
            <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
              <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80" alt="Trending Fashion" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" loading="lazy" />
            </div>
            <div className="p-4">
              <h3 className="text-base font-bold text-gray-900 mb-1">Trending</h3>
              <p className="text-sm text-gray-600 mb-2">Fashion & Lifestyle</p>
              <p className="text-xs text-gray-500">What's hot right now</p>
            </div>
          </Link>
          
          <Link href="/fashion" className="group bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300">
            <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-pink-50 to-rose-100">
              <img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80" alt="Fashion" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" loading="lazy" />
            </div>
            <div className="p-4">
              <h3 className="text-base font-bold text-gray-900 mb-1">Fashion</h3>
              <p className="text-sm text-gray-600 mb-2">Contemporary Brands</p>
              <p className="text-xs text-gray-500">Contemporary style & design</p>
            </div>
          </Link>
          
          <Link href="/watches" className="group bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300">
            <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-50 to-slate-100">
              <img src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80" alt="Watches" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" loading="lazy" />
            </div>
            <div className="p-4">
              <h3 className="text-base font-bold text-gray-900 mb-1">Watches</h3>
              <p className="text-sm text-gray-600 mb-2">Premium Timepieces</p>
              <p className="text-xs text-gray-500">Premium timepieces</p>
            </div>
          </Link>
          
          <Link href="/fitness" className="group bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300">
            <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80" alt="Fitness" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" loading="lazy" />
            </div>
            <div className="p-4">
              <h3 className="text-base font-bold text-gray-900 mb-1">Fitness</h3>
              <p className="text-sm text-gray-600 mb-2">Athletic Performance</p>
              <p className="text-xs text-gray-500">Athletic & performance wear</p>
            </div>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}