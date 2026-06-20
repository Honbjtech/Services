import { Zap, ShieldCheck, Gem } from "lucide-react";

export default function WhyChooseUs() {
  const cards = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description:
        "Efficient workflows and streamlined execution ensure projects are completed on time without sacrificing quality.",
    },
    {
      icon: ShieldCheck,
      title: "Reliable Quality",
      description:
        "Every project is carefully reviewed and optimized to meet premium standards and exceed expectations.",
    },
    {
      icon: Gem,
      title: "Premium Experience",
      description:
        "Tailored digital solutions designed to elevate your brand and create lasting impact in your market.",
    },
  ];

  return (
    <section className="bg-[#f5f7f8] py-24">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10 lg:px-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="rounded-2xl border border-[#e6e8eb] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#fff3c4]">
                  <Icon className="h-6 w-6 text-[#8f7338]" />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-[#111827]">
                  {card.title}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-[#6b7280]">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}