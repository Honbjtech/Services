import Navbar from "./components/navbar";
import DigitalServices from "./components/digital-services";
import WhyChooseUs  from "./components/whychooseus";
import Innovators from "./components/innovators";
import ReadyToStart from "./components/readytostart";
import Footer from "./components/footer";
export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f5f7f8]">
        {/* HERO SECTION */}
        <section className="bg-[#0d2035] text-white">
          <div className="mx-auto grid min-h-[520px] max-w-[1500px] items-center gap-12 px-5 py-16 md:px-10 lg:grid-cols-2 lg:px-12 lg:py-20">
            {/* Left Text */}
            <div className="max-w-[560px]">
              <h1 className="text-[39px] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[48px] md:text-[56px] lg:text-[58px]">
                Creative Digital <br />
                Solutions That Grow <br />
                Your Brand
              </h1>

              <p className="mt-5 max-w-[520px] text-[13px] leading-6 text-white/70 md:text-[14px]">
                Elevate your digital presence with professional Graphics Design,
                high-impact Video Editing, and comprehensive Online Services
                tailored for technical precision.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button className="rounded-[5px] bg-[#ffd95a] px-7 py-3 text-[12px] font-medium text-black transition hover:bg-[#f0c948]">
                  Book a Service
                </button>

                <button className="rounded-[5px] border border-white px-7 py-3 text-[12px] font-semibold text-white transition hover:bg-white hover:text-black">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative mx-auto w-full max-w-[680px] lg:ml-auto">
              <div className="overflow-hidden rounded-[13px]">
                <img
                  src="/img.jpeg"
                  alt="Creative digital workspace"
                  className="h-[300px] w-full object-cover sm:h-[390px] md:h-[440px] lg:h-[455px]"
                />
              </div>

              <div className="absolute -bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-[10px] border border-black/10 bg-[#eef0f4] px-5 py-4 text-black shadow-xl md:left-[-35px] md:translate-x-0">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fff1b8] text-[12px]">
                  ✺
                </div>

                <div>
                  <p className="text-[10px] font-semibold text-black">
                    Certified Expertise
                  </p>
                  <p className="text-[9px] uppercase tracking-[0.12em] text-black/50">
                    Digital Masters
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <DigitalServices />
       <WhyChooseUs />
       <Innovators />
       <ReadyToStart />
        <Footer />
      </main>
    </>
  );
}
