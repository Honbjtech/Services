import {
  Palette,
  Clapperboard,
  BriefcaseBusiness,
  CreditCard,
} from "lucide-react";

export default function DigitalServicesPage() {
  return (
    <main className="min-h-screen bg-[#f5f7f8]">
      {/* PREMIUM DIGITAL SERVICES */}
      <section className="bg-[#f5f7f8] py-24">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10 lg:px-12">
          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9f8350]">
              Our Expertise
            </p>

            <h2 className="mt-3 text-3xl font-bold text-black md:text-5xl">
              Premium Digital Services
            </h2>

            <div className="mx-auto mt-6 h-[2px] w-16 bg-[#9f8350]" />
          </div>

          <div className="mt-20 grid gap-4 lg:grid-cols-6">
            <div className="rounded-xl bg-white p-8 shadow-sm lg:col-span-2">
              <Palette className="mb-12 h-5 w-5 text-[#8f7338]" />

              <h3 className="text-3xl font-medium text-black">
                Graphics Design
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-6 text-black/60">
                Identity systems, social media assets, and marketing collateral
                designed for brand authority.
              </p>
            </div>

            <div className="relative min-h-[230px] overflow-hidden rounded-xl bg-[#d8dde2] lg:col-span-2">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-40 w-24 rotate-12 bg-gradient-to-br from-white/70 to-transparent" />
              </div>
            </div>

            <div className="rounded-xl bg-[#12171b] p-8 text-white lg:col-span-2">
              <Clapperboard className="mb-12 h-5 w-5 text-[#ffd95a]" />

              <h3 className="text-3xl font-medium">Video Editing</h3>

              <p className="mt-3 max-w-xs text-sm leading-6 text-white/70">
                Cinematic storytelling and commercial editing for a tech-native
                audience.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm lg:col-span-2">
              <BriefcaseBusiness className="mb-12 h-5 w-5 text-black" />

              <h3 className="text-3xl font-medium text-black">
                Online Services
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-6 text-black/60">
                Cloud management, digital consulting, and web optimization
                workflows.
              </p>
            </div>

            <div className="rounded-xl bg-[#f6d55b] p-8 text-center lg:col-span-4">
              <div className="flex h-full min-h-[220px] flex-col items-center justify-center">
                <CreditCard className="mb-6 h-8 w-8 text-black" />

                <h3 className="text-3xl font-medium text-black">
                  Payment Services
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-6 text-black/70">
                  Secure, efficient, and reliable fintech-inspired payment
                  integrations for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}