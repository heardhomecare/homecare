import React from 'react';

const GOOGLE_ICON = (
  <svg viewBox="0 0 512 512" height="16" width="16">
    <g fill="none" fillRule="evenodd">
      <path d="M482.56 261.36c0-16.73-1.5-32.83-4.29-48.27H256v91.29h127.01c-5.47 29.5-22.1 54.49-47.09 71.23v59.21h76.27c44.63-41.09 70.37-101.59 70.37-173.46z" fill="#4285f4"></path>
      <path d="M256 492c63.72 0 117.14-21.13 156.19-57.18l-76.27-59.21c-21.13 14.16-48.17 22.53-79.92 22.53-61.47 0-113.49-41.51-132.05-97.3H45.1v61.15c38.83 77.13 118.64 130.01 210.9 130.01z" fill="#34a853"></path>
      <path d="M123.95 300.84c-4.72-14.16-7.4-29.29-7.4-44.84s2.68-30.68 7.4-44.84V150.01H45.1C29.12 181.87 20 217.92 20 256c0 38.08 9.12 74.13 25.1 105.99l78.85-61.15z" fill="#fbbc05"></path>
      <path d="M256 113.86c34.65 0 65.76 11.91 90.22 35.29l67.69-67.69C373.03 43.39 319.61 20 256 20c-92.25 0-172.07 52.89-210.9 130.01l78.85 61.15c18.56-55.78 70.59-97.3 132.05-97.3z" fill="#ea4335"></path>
    </g>
  </svg>
);

const REVIEWS = [
  {
    name: "Dore Myers",
    profileUrl: "https://www.google.com/maps/contrib/117635523498450829575/reviews",
    imgSrc: "/wp-content/uploads/2026/04/ChIJDSIa6nb46U4RooFl88PlX5g_9b8a5aa1f8864ea4d1b2fa9c2ed57bca.jpg",
    time: "01:43 16 Mar 26",
    rating: 5,
    text: "Heard was so accessible to me – from casually inquiring information to needing hands on help pretty quickly, they were able to provide immediate and great care for my loved ones in a hard season. Heard’s professionalism and care brought me great peace of mind. Thank you!"
  },
  {
    name: "Senya Borrelli",
    profileUrl: "https://www.google.com/maps/contrib/101187097554788279682/reviews",
    imgSrc: "/wp-content/uploads/2026/04/ChIJDSIa6nb46U4RooFl88PlX5g_d9b834d8e00ee79c5fd47a9ca59bb97b.jpg",
    time: "17:48 09 Mar 26",
    rating: 5,
    text: "Our family had a wonderful experience with Heard Home Care. Their team was incredibly caring, knowledgeable, and compassionate during a time when that meant everything to us. The caregivers were not only professional but also warm, understanding, and very easy to talk to. They brought a sense of comfort and calm to what can often be a stressful situation. Our dad truly loved his caretakers and often shared how much more comfortable he felt having them there with him while he was in the care facilities. Knowing there was another layer of support and someone looking out for him gave our whole family tremendous peace of mind. We are very grateful for the kindness, patience, and dedication they showed our dad. I would highly recommend Heard Home Care to any family looking for compassionate and reliable care for their loved one."
  },
  {
    name: "Lisa Maclennan",
    profileUrl: "https://www.google.com/maps/contrib/109050639651548355161/reviews",
    imgSrc: "/wp-content/uploads/2026/04/ChIJDSIa6nb46U4RooFl88PlX5g_473dc46eeab87d031a738cf125348094.jpg",
    time: "22:54 25 Feb 26",
    rating: 5,
    text: "Heard Home Care was the perfect fit for my dear friends! They provided great care for them, and made adjustments where needed to best fit the needs of the family. I’ll be recommending them again!"
  },
  {
    name: "nalini sen",
    profileUrl: "https://www.google.com/maps/contrib/117190526731643362953/reviews",
    imgSrc: "/wp-content/uploads/2026/04/ChIJDSIa6nb46U4RooFl88PlX5g_2c2492085740db9fd9e1ce0b34d5651e.jpg",
    time: "21:42 09 Feb 26",
    rating: 5,
    text: "I am delighted to share my experience with Heard Home Care. The owners, Marlene and Adam, are genuinely wonderful people who demonstrate exceptional compassion and dedication to their patients. They personally conduct patient evaluations, which reflects their commitment to understanding and addressing each individual’s unique needs. What truly stands out is their transparency and unwavering focus on achieving positive outcomes for their patients. It’s clear that they prioritize providing the best care possible. I wholeheartedly recommend Heard Care Home, as I know the owners well and can vouch for the outstanding quality of their services. Thank you, Marlene and Adam, for making such a positive impact in the lives of those you care for!"
  },
  {
    name: "Kayevon Serna",
    profileUrl: "https://www.google.com/maps/contrib/113923443495619890222/reviews",
    imgSrc: "/wp-content/uploads/2026/04/ChIJDSIa6nb46U4RooFl88PlX5g_4c5f9574ea04f3f25c237f86b1dcaf73.jpg",
    time: "20:57 27 Jan 26",
    rating: 5,
    text: "Heard Home Care has been an incredible partner and resource in our community. Their team is reliable, responsive, and truly passionate about providing high-quality care to seniors and their families. The owners, Marlene and Adam, are exceptional! What really sets Heard apart is their commitment to collaboration. They don’t just provide great care — they communicate, problem-solve, and work alongside other professionals to make sure clients are supported holistically. They are dependable, compassionate, and always willing to step in when families need extra support. It’s clear that they genuinely care about both their clients and their referral partners, and that makes a huge difference in this industry. I am grateful to have Heard Home Care as a trusted partner and highly recommend them to any family looking for quality home care and to any professional looking for a great community resource."
  },
  {
    name: "Andriana Mendez",
    profileUrl: "https://www.google.com/maps/contrib/102887955939561933163/reviews",
    imgSrc: "/wp-content/uploads/2026/04/ChIJDSIa6nb46U4RooFl88PlX5g_e01ddcee367dd077c152484fe50a86f1.jpg",
    time: "19:25 25 Jan 26",
    rating: 5,
    text: "Heard Home Care has been an incredible community partner in supporting seniors and their families. We’ve had the pleasure of collaborating on educational events together, and their team consistently shows up with compassion, professionalism, and a genuine desire to help. They provide thoughtful guidance, valuable resources, and truly care about the well-being of older adults. We have so much respect for work they do, and we’re grateful to be connected as a trusted resource for the clients, adult children, and families they serve."
  },
  {
    name: "Athena Quinones",
    profileUrl: "https://www.google.com/maps/contrib/101184979640919782175/reviews",
    imgSrc: "/wp-content/uploads/2026/04/ChIJDSIa6nb46U4RooFl88PlX5g_a7a8548e6edfdc07d0ee21439c222a7e.jpg",
    time: "17:36 16 Jan 26",
    rating: 5,
    text: "I’ve had the privilege of watching the work of Heard Home Care for the past year, and they have consistently impressed me. Their attention to care is evident in everything they do, and their staff is both knowledgeable and compassionate. Communication is always timely, with quick responses that families truly appreciate. Heard Home Care has also been a steady and positive presence in the greater local community, demonstrating genuine commitment not only to their clients but to the community as a whole. They treat their clients with dignity, respect, and warmth, and it clearly shows in the quality of care they provide. I highly recommend Heard Home Care to anyone seeking reliable, thoughtful, and professional home care services."
  },
  {
    name: "Daniel Rivera",
    profileUrl: "https://www.google.com/maps/contrib/107002289297892449466/reviews",
    imgSrc: "/wp-content/uploads/2026/04/ChIJDSIa6nb46U4RooFl88PlX5g_e730998ef346b1132702dc81745b9a5e.jpg",
    time: "23:40 11 Dec 25",
    rating: 5,
    text: "Heard Home Care is truly one of the best caregiving companies I’ve ever worked with. They go above and beyond not only for their clients, but also for their staff. The level of professionalism, compassion, and genuine care they show every single day is unmatched. From the very beginning, they made me feel valued, supported, and appreciated. They treat their clients like family, providing high-quality care with patience, kindness, and respect. Their communication is excellent, their standards are high, and their commitment to doing things the right way really stands out in this industry. If you’re looking for a company that truly cares — about the people they serve and the people who work for them — Heard Home Care is the one. I’m grateful to be connected with such an enriching, trustworthy, and heart-centered team. Highly recommended! 🙌💙"
  }
];

export default function ProcessSteps() {
  return (
    <section className="bg-white py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--brand-black)] leading-tight">
            Customer <mark className="bg-transparent text-[var(--brand-green)] underline decoration-[var(--brand-tan)] decoration-4 underline-offset-8">Reviews</mark>
          </h2>
        </div>

        <div className="flex overflow-x-auto pb-12 gap-8 snap-x no-scrollbar">
          {REVIEWS.map((review, index) => (
            <div key={index} className="flex-shrink-0 w-full sm:w-[400px] snap-center">
              <div className="bg-[var(--brand-cream)] p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={review.imgSrc} 
                        alt={review.name} 
                        className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                      />
                      <div>
                        <a href={review.profileUrl} target="_blank" rel="nofollow noopener" className="block font-bold text-[var(--brand-black)] hover:text-[var(--brand-green)] transition-colors">
                          {review.name}
                        </a>
                        <span className="text-xs text-gray-400 uppercase tracking-widest">{review.time}</span>
                      </div>
                    </div>
                    {GOOGLE_ICON}
                  </div>

                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed italic line-clamp-6 hover:line-clamp-none transition-all duration-500">
                    "{review.text}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
