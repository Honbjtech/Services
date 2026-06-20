import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import {
  Palette,
  Clapperboard,
  Languages,
  WalletCards,
  CheckCircle2,
  Rocket,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Graphics Design",
    desc: "Visual storytelling that captures attention and reinforces brand authority across all digital touchpoints.",
    items: ["Logo & Branding", "Social Media Kits", "UI/UX Concepts"],
    price: "$49",
  },
  {
    icon: Clapperboard,
    title: "Video Editing",
    desc: "High-impact motion graphics and cinematic editing to boost engagement and conversion rates.",
    items: ["Reels & TikToks", "YouTube Content", "Ad Campaigns"],
    price: "$89",
  },
  {
    icon: Languages,
    title: "Online Services",
    desc: "End-to-end digital support including SEO optimization, virtual assistance, and data management.",
    items: ["SEO Optimization", "Content Strategy", "Virtual Support"],
    price: "$120",
  },
  {
    icon: WalletCards,
    title: "Payment Services",
    desc: "Secure financial integrations and payment gateway setups for seamless global transactions.",
    items: ["Gateway Integration", "Subscription Management", "Multi-Currency Setup"],
    price: "$199",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#f5f7f8]">
        <section className="mx-auto max-w-[1500px] px-5 py-20 pb-32 md:px-10 lg:px-12 lg:py-24 lg:pb-32">
          <div className="max-w-[760px]">
            <h1 className="text-[36px] font-extrabold leading-[1.05] tracking-[-0.04em] text-black sm:text-[42px] md:text-[54px] lg:text-[64px]">
              Expert Digital Solutions for Modern Brands
            </h1>

            <p className="mt-6 max-w-[760px] text-[16px] leading-8 text-black/75 md:text-[20px]">
              We provide premium services designed to elevate your technical
              precision and market presence. Choose from our specialized
              categories below.
            </p>
          </div>

          <div className="mt-24 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-xl bg-white p-7 shadow-[0_10px_35px_rgba(0,0,0,0.06)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#e9eaec]">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <h2 className="mt-8 text-[22px] font-normal text-black">
                    {service.title}
                  </h2>

                  <p className="mt-4 min-h-[120px] text-[15px] leading-7 text-black/75">
                    {service.desc}
                  </p>

                  <ul className="mt-9 space-y-4">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-[14px] font-medium text-black"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-[#8a742b]"
                          strokeWidth={2}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="my-9 h-px bg-black/5" />

                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/45">
                      Starting at
                    </p>
                    <p className="text-[16px] font-medium text-black">
                      {service.price}
                    </p>
                  </div>

                  <button className="mt-5 h-12 w-full rounded-md bg-black text-[14px] font-semibold text-white transition hover:bg-black/80">
                    Book Now
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-24 rounded-2xl bg-[#171c1f] p-8 text-white md:p-10">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <h2 className="text-[30px] font-bold md:text-[38px]">
                  Ready to scale your project?
                </h2>

                <p className="mt-5 max-w-[620px] text-[15px] leading-7 text-white/80 md:text-[17px]">
                  Our team of specialists is standing by to provide a custom
                  consultation tailored to your specific business requirements.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <button className="h-12 rounded-md bg-[#ffd95a] px-10 text-[14px] font-medium text-black">
                    Schedule Call
                  </button>

                  <button className="h-12 rounded-md border border-white/25 px-10 text-[14px] font-medium text-white">
                    View Portfolio
                  </button>
                </div>
              </div>

              <div className="flex h-[220px] items-center justify-center rounded-xl bg-gradient-to-r from-[#0f1720] via-[#141d28] to-[#252719]">
                <Rocket
                  size={110}
                  className="text-white/25"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}