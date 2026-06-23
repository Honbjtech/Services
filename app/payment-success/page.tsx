import Link from "next/link";

export default function PaymentSuccessPage() {
  return (
    <main className="min-h-screen bg-[#f3f4f6] text-[#111111]">
      <section className="mx-auto flex min-h-screen max-w-[1400px] flex-col items-center px-4 py-10 sm:px-6 lg:px-8">
        {/* Success Icon */}
        <div className="mb-8 flex h-32 w-32 items-center justify-center rounded-full border-[10px] border-[#f3e9bf] bg-[#f2cc52] shadow-sm">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#8a6b00] text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl">
            Payment Successful{" "}
            <span role="img" aria-label="celebration">
              🎉
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-[760px] text-lg leading-8 text-[#555b65] sm:text-xl">
            Thank you for choosing Hon. BJ TECH. Your professional digital service
            request has been confirmed and scheduled.
          </p>
        </div>

    

        {/* Action Buttons */}
        <div className="mt-10 flex w-full max-w-[760px] flex-col gap-4 sm:flex-row">
          <Link className="flex-1 rounded-2xl text-center   bg-black px-6 py-4 text-base font-semibold text-white transition hover:opacity-90" href={"/services"}>
          <button >
            Book Again
          </button>
          </Link>

          <button className="flex-1 rounded-2xl border-2 border-[#9c7b00] bg-transparent px-6 py-4 text-base font-semibold text-[#9c7b00] transition hover:bg-[#fff8db]">
            Back to Home
          </button>
        </div>

        {/* Support */}
        <div className="mt-8 text-center text-lg text-[#4f5560]">
          Having trouble?{" "}
          <a
            href="/contact"
            className="font-semibold text-black underline underline-offset-4"
          >
            Contact Support
          </a>{" "}
          <span className="inline-block align-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 inline h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5h5m0 0v5m0-5L10 14"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12v6a1 1 0 001 1h6"
              />
            </svg>
          </span>
        </div>

        {/* Watermark */}
        <div className="pointer-events-none mt-20 w-full max-w-[1300px] text-right text-5xl font-bold text-[#d8dade] sm:text-7xl md:text-8xl">
          Hon BJ TECH
        </div>
      </section>
    </main>
  );
}