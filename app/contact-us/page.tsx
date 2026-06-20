import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Phone, MessageSquare, Mail, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#f5f7f8] text-black">
        {/* Hero */}
        <section className="bg-[#dfe3e6] px-5 py-24 text-center">
          <h1 className="text-[38px] font-extrabold leading-tight md:text-[58px]">
            Get in Touch with our Experts
          </h1>
          <p className="mx-auto mt-5 max-w-[720px] text-[16px] leading-7 text-black/70 md:text-[18px]">
            We're here to help you navigate the digital landscape with precision
            and professional expertise. Reach out today for a consultation.
          </p>
        </section>

        {/* Contact + Form */}
        <section className="mx-auto grid max-w-[1500px] gap-8 px-5 py-24 md:px-10 lg:grid-cols-[0.85fr_1.2fr] lg:px-12">
          {/* Contact Details */}
          <div className="rounded-xl bg-white p-8 shadow-[0_10px_35px_rgba(0,0,0,0.06)] md:p-10">
            <h2 className="text-[32px] font-bold">Contact Details</h2>

            <div className="mt-10 space-y-8">
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#ffd95a]">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-black/45">
                    Phone
                  </p>
                  <h3 className="text-[18px] font-bold">+2348113585029</h3>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#ffd95a]">
                  <MessageSquare size={22} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-black/45">
                    Whatsapp
                  </p>
                  <h3 className="text-[18px] font-bold">
                    Connect via WhatsApp
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#ffd95a]">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-black/45">
                    Email
                  </p>
                  <h3 className="text-[18px] font-bold">bjtech46@gmail.com</h3>
                </div>
              </div>
            </div>

            <div className="my-10 h-px bg-black/10" />

            <p className="text-[11px] uppercase tracking-[0.18em] text-black/45">
              Our Headquarters
            </p>

      <div className="mt-5 h-[180px] overflow-hidden rounded-lg border border-black/10 bg-[#e5e5e5]">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126840.5008041812!2d3.276737!3d6.548369!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8f9a0f8f5dcb%3A0x9f8c2f3f6f7a2b1!2sLagos!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng"
    className="h-full w-full border-0 grayscale"
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
            {/* <div className="mt-5 h-[180px] overflow-hidden rounded-lg bg-[#e5e5e5]">
              <img
                src="/map.png"
                alt="Map"
                className="h-full w-full object-cover grayscale"
              />
            </div> */}
          </div>

          {/* Form */}
          <div className="rounded-xl bg-white p-8 shadow-[0_10px_35px_rgba(0,0,0,0.06)] md:p-10">
            <h2 className="text-[32px] font-bold">Send us a message</h2>

            <form className="mt-10 space-y-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="text-[14px] font-medium">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="mt-3 h-14 w-full rounded-lg border border-black/20 bg-[#f1f2f4] px-5 outline-none"
                  />
                </div>

                <div>
                  <label className="text-[14px] font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="example@domain.com"
                    className="mt-3 h-14 w-full rounded-lg border border-black/20 bg-[#f1f2f4] px-5 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[14px] font-medium">
                  Service Interested In
                </label>
                <select className="mt-3 h-14 w-full rounded-lg border border-black/20 bg-[#f1f2f4] px-5 outline-none">
                  <option>Select a service</option>
                  <option>Graphics Design</option>
                  <option>Video Editing</option>
                  <option>Online Services</option>
                  <option>Payment Services</option>
                </select>
              </div>

              <div>
                <label className="text-[14px] font-medium">Message</label>
                <textarea
                  placeholder="How can our experts help you today?"
                  className="mt-3 h-[180px] w-full resize-none rounded-lg border border-black/20 bg-[#f1f2f4] p-5 outline-none"
                />
              </div>

              <button
                type="button"
                className="flex h-14 w-full items-center justify-center gap-3 rounded-lg bg-[#ffd95a] text-[14px] font-semibold uppercase tracking-wide text-black shadow-md"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#e5e7e9] px-5 py-24 md:px-10 lg:px-12">
          <div className="mx-auto max-w-[1500px]">
            <div className="text-center">
              <h2 className="text-[36px] font-extrabold md:text-[48px]">
                Quick Help & FAQs
              </h2>
              <p className="mt-4 text-[16px] text-black/70">
                Common questions about our services and process.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {[
                ["What is the typical project turnaround time?", "Most digital strategy and development projects are completed within 4-8 weeks, depending on complexity and scope."],
                ["Do you offer ongoing support?", "Yes, we provide premium retainer-based support and maintenance packages to ensure your digital assets remain high-performing."],
                ["How do we start a consultation?", "Simply fill out the contact form or call our office. An expert will be assigned to your inquiry within 24 business hours."],
                ["Are services available globally?", "Absolutely. While headquartered locally, our digital-first infrastructure allows us to serve clients across all continents seamlessly."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-xl bg-white p-8 shadow-sm">
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-4 text-[16px] leading-7 text-black/75">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}