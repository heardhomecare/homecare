import Link from 'next/link'
import { Heart, Users, Accessibility } from 'lucide-react'

export default function ImageStory() {
  const stories = [
    {
      image: '/story-daily-support.jpg',
      icon: Heart,
      title: 'Daily Living Support',
      description: 'Help with meal preparation, medication management, grooming, and other activities of daily living.'
    },
    {
      image: '/story-mobility.jpg',
      icon: Accessibility,
      title: 'Mobility & Accessibility',
      description: 'Physical assistance with mobility, wheelchair support, and accessible home modifications for independence.'
    },
    {
      image: '/story-companionship.jpg',
      icon: Users,
      title: 'Emotional Support',
      description: 'Companionship, conversation, and emotional support to reduce isolation and improve quality of life.'
    }
  ]

  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 text-balance">
            Our Commitment to Care
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            We understand that every senior and person with disabilities has unique needs. That&apos;s why we provide personalized, compassionate care tailored to support independence and dignity.
          </p>
        </div>

        {/* Image Grid with Text Overlay */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {stories.map((story, index) => {
            const IconComponent = story.icon
            return (
              <div key={index} className="group cursor-pointer">
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-2xl h-72 sm:h-80 mb-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm leading-relaxed">{story.description}</p>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-[#f3f0ff] rounded-lg">
                      <IconComponent className="text-[#332885]" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{story.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">{story.description}</p>
                  <button className="text-[#332885] hover:text-[#2a2375] font-semibold text-sm flex items-center gap-2 group/link">
                    Learn more
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 sm:mt-20 bg-[#f3f0ff] rounded-2xl p-8 sm:p-12 text-center border border-[#332885]/20">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Ready to Provide Better Care?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team is here to help your loved one live with dignity, independence, and peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#332885] hover:bg-[#2a2375] text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#332885] text-[#332885] hover:bg-[#332885] hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
