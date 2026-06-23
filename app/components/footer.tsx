import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0d1117] text-white">
      <div className="mx-auto max-w-[1500px] px-5 py-20 md:px-10 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-[#f5d45b]">BJ NexTech Solutions</h3>

            <p className="mt-5 text-sm leading-7 text-white/60">
              Premium Digital Services providing technical precision and
              creative excellence for global brands.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20">
                <ChevronLeft size={16} />
              </button>

              <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-sm font-semibold">Services</h4>

            <ul className="space-y-4 text-sm text-white/60">
              <li>Graphics Design</li>
              <li>Video Editing</li>
              <li>Online Services</li>
              <li>Fintech Solutions</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-6 text-sm font-semibold">Company</h4>

            <ul className="space-y-4 text-sm text-white/60">
              <li>About Us</li>
              <li>Our Process</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-6 text-sm font-semibold">Legal</h4>

            <ul className="space-y-4 text-sm text-white/60">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
            </ul>
          </div>

          <div />
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-white/50">
            © 2024 BJ NexTech Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}