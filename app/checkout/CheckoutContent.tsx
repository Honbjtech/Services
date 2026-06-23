"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

export default function CheckoutContent() {
  const searchParams = useSearchParams();
const router = useRouter();
  const service = searchParams.get("service") || "Digital Service";
  const packageName = searchParams.get("package") || "Hon BJ Tech Service";
  const basePrice = Number(searchParams.get("price")) || 0;

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [subscribe, setSubscribe] = useState(false);

  const serviceFee = 500;
  const taxRate = 0.075; // 7.5%

  const subtotal = basePrice;
  const tax = useMemo(() => subtotal * taxRate, [subtotal]);
  const total = useMemo(() => subtotal + serviceFee + tax, [subtotal, tax]);

  const config = {
    public_key: process.env.NEXT_PUBLIC_FLW_PUBLIC_KEY || "FLWPUBK_TEST-3b047d69e84364dcb194e8a8f98ac7b0-X",
    tx_ref: `HONBJTECH-${Date.now()}`,
    amount: total,
    currency: "NGN",
    payment_options: "card,banktransfer,ussd",
    customer: {
      email,
      phone_number: phone,
      name: fullName,
    },
    customizations: {
      title: "Hon BJ Tech",
      description: `${service} - ${packageName}`,
      logo: "https://your-logo-url.com/logo.png",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);


  const handlePayment = async () => {
    try {



    if (!fullName || !email || !phone) {
      alert("Please fill in your full name, email and phone number.");
      return;
    }

    if (!config.public_key) {
      alert("Flutterwave public key is missing. Add NEXT_PUBLIC_FLW_PUBLIC_KEY to your .env.local file.");
      return;
    }

    console.log("Making payment")

    console.log({
      config
    })

    await handleFlutterPayment({
      callback: (response) => {
        console.log(response);

        if (response.status === "successful") {
          window.location.href = "/payment-success";
        }

        closePaymentModal();
      },
      onClose: () => {
        console.log("Payment closed");
      },
    });


    }catch(err) {
      console.log({err})
    }
  }



  return (
    <div className="min-h-screen bg-[#eff0f2] text-[#101318]">
      {/* Top Bar */}
      <header className="border-b border-black/5 bg-[#eff0f2]">
        <div className="mx-auto flex w-[92%] max-w-[1240px] items-center justify-between py-5">
          <Link href="/" className="text-[2.2rem] font-bold tracking-[-0.04em]">
            Hon BJ Tech
          </Link>

          <Link
            href="/booking"
            className="flex items-center gap-2 text-[1.05rem] font-medium text-[#2a2d34] transition hover:opacity-70"
          >
            <span className="text-xl leading-none">✕</span>
            <span>Cancel</span>
          </Link>
        </div>
      </header>

      <main className="mx-auto w-[92%] max-w-[1240px] pb-20 pt-8">
        {/* Stepper */}
        <section className="pb-12 pt-2">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-7">

            <div className="flex min-w-[110px] flex-col items-center gap-2">    
            </div>
          </div>
        </section>

        {/* Main Grid */}
        <section className="grid grid-cols-1 gap-10 xl:grid-cols-[1.3fr_0.9fr]">
          {/* LEFT SIDE */}
          <div>
            <div className="mb-10">
              <h1 className="text-[2.5rem] font-bold tracking-[-0.04em] text-black md:text-[3.1rem]">
                Billing Information
              </h1>
              <p className="mt-4 max-w-[720px] text-[1.1rem] leading-8 text-[#4b515b]">
                Please provide your contact details to proceed with your order.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-[1rem] font-medium text-[#24272e]">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="h-[64px] w-full rounded-[12px] border border-[#cfd3d9] bg-[#eef0f3] px-5 text-[1.05rem] outline-none placeholder:text-[#8d949d] focus:border-black"
                />
              </div>

              <div>
                <label className="mb-2 block text-[1rem] font-medium text-[#24272e]">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-[64px] w-full rounded-[12px] border border-[#cfd3d9] bg-[#eef0f3] px-5 text-[1.05rem] outline-none placeholder:text-[#8d949d] focus:border-black"
                />
              </div>

              <div>
                <label className="mb-2 block text-[1rem] font-medium text-[#24272e]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="08012345678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-[64px] w-full rounded-[12px] border border-[#cfd3d9] bg-[#eef0f3] px-5 text-[1.05rem] outline-none placeholder:text-[#8d949d] focus:border-black"
                />
              </div>

              <div>
                <label className="mb-2 block text-[1rem] font-medium text-[#24272e]">
                  Promo Code (Optional)
                </label>
                <div className="flex h-[64px] items-center rounded-[12px] border border-[#cfd3d9] bg-[#eef0f3] pr-3 focus-within:border-black">
                  <input
                    type="text"
                    placeholder="PROMO2026"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="h-full flex-1 bg-transparent px-5 text-[1.05rem] outline-none placeholder:text-[#8d949d]"
                  />
                  <button
                    type="button"
                    className="rounded-lg px-3 py-2 text-[0.95rem] font-semibold text-[#1a1d23] transition hover:bg-black/5"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>

            <label className="mt-8 flex items-start gap-3 text-[1.05rem] text-[#333842]">
              <input
                type="checkbox"
                checked={subscribe}
                onChange={() => setSubscribe(!subscribe)}
                className="mt-1 h-5 w-5 rounded border border-[#cfd3d9]"
              />
              <span>
                Send me updates about Hon BJ digital services and exclusive offers.
              </span>
            </label>
          </div>

          {/* RIGHT SIDE */}
          <aside className="flex flex-col gap-7">
            <div className="rounded-[22px] border border-black/6 bg-[#f8f8f8] p-7 shadow-[0_12px_35px_rgba(0,0,0,0.06)] md:p-8">
              <h2 className="text-[2.2rem] font-bold tracking-[-0.04em] text-black md:text-[2.6rem]">
                Order Summary
              </h2>

              <div className="mt-7 flex items-start justify-between gap-4 border-b border-black/10 pb-5">
                <div>
                  <h3 className="text-[1.15rem] font-semibold text-[#1a1d23]">
                    {service}
                  </h3>
                  <p className="mt-1 text-[1.02rem] text-[#4e5560]">
                    {packageName}
                  </p>
                </div>

                <div className="text-right text-[1.15rem] font-semibold text-[#1a1d23]">
                  ₦{subtotal.toLocaleString()}
                </div>
              </div>

              <div className="border-b border-black/10 py-5">
                <div className="flex items-center justify-between py-2 text-[1.05rem] text-[#3d434c]">
                  <span>Subtotal</span>
                  <span>₦{subtotal.toLocaleString()}</span>
                </div>

                <div className="flex items-center justify-between py-2 text-[1.05rem] text-[#3d434c]">
                  <span>Service Fee</span>
                  <span>₦{serviceFee.toLocaleString()}</span>
                </div>

                <div className="flex items-center justify-between py-2 text-[1.05rem] text-[#3d434c]">
                  <span>Tax</span>
                  <span>₦{tax.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex items-end justify-between gap-4 py-6">
                <h3 className="text-[2rem] font-bold tracking-[-0.04em] text-black">
                  Total
                </h3>

                <div className="text-right">
                  <div className="text-[2.5rem] font-bold leading-none tracking-[-0.04em] text-black">
                    ₦{total.toLocaleString()}
                  </div>
                  <div className="mt-2 text-[0.95rem] font-medium tracking-[0.2em] text-[#4f5560]">
                    NGN
                  </div>
                </div>
              </div>

        {/* <Link href="/payment"> */}
  <button
  onClick={handlePayment}
  
  className="bg-yellow-400 px-6 py-3 rounded">
    Proceed to Payment
  </button>
{/* </Link> */}

              <p className="mt-5 text-center text-[0.96rem] leading-7 text-[#333842]">
                By clicking proceed, you agree to Hon BJ&apos;s{" "}
                <Link href="/terms" className="font-medium underline">
                  Terms of Service
                </Link>
                .
              </p>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}

function LockIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 10V7.5C8 5.01472 10.0147 3 12.5 3C14.9853 3 17 5.01472 17 7.5V10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <rect
        x="6"
        y="10"
        width="13"
        height="11"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}