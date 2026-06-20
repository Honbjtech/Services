import { Star } from "lucide-react";

export default function Innovators() {
  const testimonials = [
    {
      name: "Alex Rivera",
      role: "CEO, TECHFLOW",
      image: "/avatar-1.jpg",
      text: "Hon BJ transformed our brand's visual identity. The turnaround was incredibly fast, and the quality of the graphics exceeded our highest expectations.",
    },
    {
      name: "Sarah Chen",
      role: "CREATIVE DIRECTOR, LUMINA",
      image: "/avatar-2.jpg",
      text: "The video editing service provided by Hon BJ gave our marketing campaign the cinematic edge it needed. Professional, responsive, and creative.",
    },
    {
      name: "James Wilson",
      role: "OPS MANAGER, SWIFTPAY",
      image: "/avatar-3.jpg",
      text: "Reliable online services that helped us scale our operations. Their payment integration was seamless and secure. Highly recommended for any digital need.",
    },
  ];

  return (
    <section className="bg-[#f5f7f8] py-24">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10 lg:px-12">
        <h2 className="text-center text-4xl font-bold tracking-tight text-black md:text-5xl">
          Trusted by Innovators
        </h2>

        <div className="mt-20 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-xl bg-white p-9 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
            >
              <div className="flex items-center gap-1 text-[#d4a72c]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={14} fill="currentColor" />
                ))}
              </div>

              <p className="mt-7 text-[14px] italic leading-7 text-black/60">
                “{item.text}”
              </p>

              <div className="mt-7 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-11 w-11 rounded-full object-cover"
                />

                <div>
                  <h4 className="text-sm font-bold text-black">{item.name}</h4>
                  <p className="mt-1 text-[10px] uppercase tracking-wide text-black/45">
                    {item.role}
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