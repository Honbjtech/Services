import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {
  Target,
  Eye,
  Gem,
  CheckCircle,
  MessageSquare,
  PenLine,
  Rocket,
  BarChart3,
  Users,
  Briefcase,
  Award,
  Globe,
} from "lucide-react";

export default function AboutPage() {
  return (
     <>
          <Navbar />
    <main className="bg-[#f7f8f9] text-black">
      {/* HERO */}
      <section className="mx-auto grid max-w-[1500px] items-center gap-12 px-5 py-20 md:px-10 lg:grid-cols-2 lg:px-12">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-[#d4a72c]">
            About Hon BJ
          </p>

          <h1 className="mt-5 text-[42px] font-extrabold leading-[1.08] tracking-[-0.04em] md:text-[58px]">
            Digital Excellence. <br />
            Built on Trust.
          </h1>

          <p className="mt-6 max-w-[620px] text-[16px] leading-8 text-black/70">
            Hon BJ Digital Services was founded with a simple mission — to help
            businesses and brands unlock their full digital potential through
            innovative solutions, technical precision, and unmatched reliability.
          </p>

          <button className="mt-8 rounded-lg bg-[#ffd95a] px-8 py-4 text-sm font-bold text-black">
            Our Story
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl">
          <img
            src="/img.jpeg"
            alt="Hon BJ office"
            className="h-[360px] w-full object-cover md:h-[470px]"
          />
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="mx-auto grid max-w-[1500px] items-center gap-14 px-5 py-16 md:px-10 lg:grid-cols-2 lg:px-12">
        <div className="relative">
          <img
            src="/team.jpeg"
            alt="Team meeting"
            className="h-[360px] w-full rounded-2xl object-cover md:h-[460px]"
          />

          <div className="absolute bottom-0 left-0 flex items-center gap-4 rounded-tr-2xl bg-[#ffd95a] p-6">
            <Users size={36} />
            <div>
              <h3 className="text-3xl font-extrabold">5+</h3>
              <p className="text-sm font-bold leading-tight">
                Years of <br /> Experience
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-[#d4a72c]">
            Who We Are
          </p>

          <h2 className="mt-4 text-[34px] font-extrabold leading-tight md:text-[46px]">
            We are a team of digital strategists, creators, and technologists.
          </h2>

          <p className="mt-5 text-[16px] leading-8 text-black/70">
            With years of experience and a global mindset, we partner with
            businesses of all sizes to deliver solutions that drive growth,
            enhance brand presence, and create lasting impact.
          </p>

          <div className="mt-7 space-y-5">
            {[
              "Client-focused approach with measurable results",
              "Innovative solutions tailored to your business needs",
              "Commitment to quality, reliability, and excellence",
              "Building long-term relationships based on trust",
            ].map((item) => (
              <p key={item} className="flex items-center gap-3 text-sm font-semibold">
                <CheckCircle size={18} className="text-[#d4a72c]" />
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* PURPOSE */}
      <section className="mx-auto max-w-[1500px] border-t border-black/10 px-5 py-20 md:px-10 lg:px-12">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[#d4a72c]">
            Our Purpose
          </p>
          <h2 className="mt-3 text-[34px] font-extrabold md:text-[44px]">
            Guided by Mission. Driven by Vision.
          </h2>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Our Mission",
              text: "To deliver premium digital services that empower businesses, enhance brand authority, and create meaningful experiences for their audience.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              text: "To be a globally recognized digital partner known for innovation, integrity, and transformative solutions that shape the future.",
            },
            {
              icon: Gem,
              title: "Our Values",
              text: "Integrity in everything we do. Excellence in every deliverable. Innovation that drives impact. Respect and collaboration.",
            },
          ].map((card) => {
            const Icon = card.icon;

            return (
              <div key={card.title} className="rounded-2xl border border-black/10 bg-white p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#ffe49a]">
                  <Icon size={26} />
                </div>

                <h3 className="mt-8 text-2xl font-bold">{card.title}</h3>
                <p className="mt-5 text-[15px] leading-7 text-black/70">{card.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#eef0f2] px-5 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1500px] text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[#d4a72c]">
            Our Process
          </p>
          <h2 className="mt-3 text-[34px] font-extrabold md:text-[44px]">
            A Clear Process. Exceptional Results.
          </h2>

          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {[
              [MessageSquare, "Discover"],
              [PenLine, "Plan"],
              [Rocket, "Execute"],
              [BarChart3, "Deliver & Support"],
            ].map(([Icon, title], index) => (
              <div key={title as string} className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-black text-white">
                  {/* @ts-ignore */}
                  <Icon size={30} />
                </div>
                <span className="-mt-4 mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-[#ffd95a] text-sm font-bold">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-xl font-bold">{title as string}</h3>
                <p className="mx-auto mt-3 max-w-[220px] text-sm leading-6 text-black/70">
                  We learn, plan, execute, and support your project with clear
                  direction and technical expertise.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-[1500px] px-5 py-20 text-center md:px-10 lg:px-12">
        <h2 className="text-[34px] font-extrabold md:text-[44px]">
          Trusted by Clients. Proven by Numbers.
        </h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [Users, "200+", "Happy Clients"],
            [Briefcase, "350+", "Projects Completed"],
            [Award, "5+", "Years of Experience"],
            [Globe, "25+", "Countries Served"],
          ].map(([Icon, number, label]) => (
            <div key={label as string}>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-[#ffe49a]">
                {/* @ts-ignore */}
                <Icon size={24} />
              </div>
              <h3 className="mt-5 text-4xl font-extrabold">{number as string}</h3>
              <p className="mt-2 text-sm text-black/70">{label as string}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-[#111719] p-8 text-left text-white md:p-10">
          <h3 className="text-3xl font-bold">Let's Build Something Great Together</h3>
          <p className="mt-4 max-w-xl text-white/70">
            We're ready to help you take your business to the next level with
            powerful digital solutions.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-lg bg-[#ffd95a] px-8 py-4 text-sm font-bold text-black">
              Start a Project
            </button>
            <button className="rounded-lg border border-white/30 px-8 py-4 text-sm font-bold text-white">
              Contact Us
            </button>
          </div>
        </div>
      </section>
       
    </main>
     <Footer />
          </>
  );
}