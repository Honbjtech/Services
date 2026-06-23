import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-[#f5f7f8] shadow-sm">
      <nav className="mx-auto flex h-[64px] max-w-[1500px] items-center justify-between px-5 md:px-10 lg:px-12">
        <Link href="/" className="text-[26px] font-semibold text-black">
          BJ NexTech Solutions
        </Link>

        <div className="hidden items-center gap-8 text-[13px] font-medium md:flex">
          <Link href="/" className="border-b border-black pb-1 text-black">
            Home
          </Link>

          <Link href="/services" className="text-black/75 hover:text-black">
            Services
          </Link>

          <Link href="/about" className="text-black/75 hover:text-black">
            About
          </Link>

          <Link href="/contact-us" className="text-black/75 hover:text-black">
            Contact
          </Link>
        </div>

        <Link
          href="/booking"
          className="rounded-[6px] bg-black px-6 py-2.5 text-[12px] font-semibold text-white transition hover:bg-black/80"
        >
          Book Now
        </Link>
      </nav>
    </header>
  );
}