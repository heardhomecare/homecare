import Image from "next/image";

export default function ImageSection() {
  return (
    <section className="w-full py-12 flex justify-center bg-[#332885] text-white">
      <div className="w-[90vw] max-w-7xl">
        {/* Mobile: Stat cards above image */}
        <div className="md:hidden flex gap-4 mb-4">
          <div className="flex-1 bg-white border border-[#332885]/10 rounded-xl flex flex-col items-center justify-center py-3 px-4 shadow-sm min-h-[4.5rem]">
            <div className="text-2xl font-bold text-[#332885]">32K+</div>
            <div className="text-xs text-[#332885] text-center leading-tight">
              Satisfied Patients
            </div>
          </div>
          <div className="flex-1 bg-white border border-[#332885]/10 rounded-xl flex flex-col items-center justify-center py-3 px-4 shadow-sm min-h-[4.5rem]">
            <div className="text-2xl font-bold text-[#332885]">80%</div>
            <div className="text-xs text-[#332885] text-center leading-tight">
              Successful Diagnosis
            </div>
          </div>
        </div>

        {/* Mobile: Additional image */}
        <div className="md:hidden mb-4 rounded-xl overflow-hidden aspect-[16/9]">
          <Image
            src="/service-personal-care.jpg"
            alt="Professional Care Services"
            width={600}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Responsive Grid (FIXED) */}
        <div className="grid md:grid-cols-6 md:grid-rows-2 gap-6">
          {/* Desktop images */}
          <div className="hidden md:block col-span-2 row-span-2 rounded-xl overflow-hidden h-[28rem] xl:h-96">
            <Image
              src="/hero-senior-care-1.jpg"
              alt="Senior Care"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="hidden md:block col-span-2 row-span-2 rounded-xl overflow-hidden h-[28rem] xl:h-96">
            <Image
              src="/hero-senior-care-2.jpg"
              alt="Disability Support"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Desktop stat cards */}
          <div className="hidden md:flex col-span-1 row-span-1 bg-white border border-[#332885]/10 rounded-xl flex-col items-center justify-center p-6 shadow-sm h-48 xl:h-44">
            <div className="text-3xl font-bold text-[#332885]">32K+</div>
            <div className="text-sm text-[#332885] text-center leading-tight">
              Satisfied Patients
            </div>
          </div>

          <div className="hidden md:flex col-span-1 row-span-1 bg-white border border-[#332885]/10 rounded-xl flex-col items-center justify-center p-6 shadow-sm h-48 xl:h-44">
            <div className="text-3xl font-bold text-[#332885]">80%</div>
            <div className="text-sm text-[#332885] text-center leading-tight">
              Successful Diagnosis
            </div>
          </div>

          {/* Bottom image */}
          <div className="col-span-6 md:col-span-2 rounded-xl overflow-hidden relative aspect-[16/9] md:aspect-auto md:h-48 xl:h-44">
            <Image
              src="/hero-caring-hands.jpg"
              alt="Caring Hands"
              width={800}
              height={300}
              className="object-cover w-full h-full"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-[#332885] text-white rounded-full px-3 py-1 text-xs mb-2 inline-block">
                Well-being
              </div>
              <div className="text-lg font-semibold text-white">
                Compassionate Care
                <br />
                For Our Seniors
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
