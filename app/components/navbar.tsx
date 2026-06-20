import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-[#f5f7f8] shadow-sm">
      <nav className="mx-auto flex h-[64px] max-w-[1500px] items-center justify-between gap-4 px-4 md:px-10 lg:px-12">
        <Link
          href="/"
          className="shrink-0 text-[20px] font-semibold text-black md:text-[26px]"
        >
          Hon BJ
        </Link>

        <div className="flex min-w-0 flex-1 items-center justify-center gap-4 overflow-x-auto whitespace-nowrap text-[11px] font-medium md:gap-8 md:text-[13px]">
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
          className="shrink-0 rounded-[6px] bg-black px-4 py-2 text-[11px] font-semibold text-white transition hover:bg-black/80 md:px-6 md:py-2.5 md:text-[12px]"
        >
          Book Now
        </Link>
      </nav>
    </header>
  );
}