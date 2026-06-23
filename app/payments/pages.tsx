"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useSearchParams } from "next/navigation";

export default function PaymentPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const searchParams = useSearchParams();
const amount = searchParams.get("amount") || "2499";
console.log({amount})
  // const amount = 2499;

  const config = {
    public_key: process.env.NEXT_PUBLIC_FLW_PUBLIC_KEY!,
    tx_ref: Date.now().toString(),
    amount : Number(amount),
    currency: "NGN",
    payment_options: "card,banktransfer,ussd",
    customer: {
      email,
      phone_number : "09038483934",
      name : "John Doe"
    },
    customizations: {
      title: "Hon BJ",
      description: "Premium Enterprise Subscription",
      logo : ""
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const startPayment = () => {
    if (!email) {
      alert("Enter email first");
      return;
    }

    handleFlutterPayment({
      callback: (response: any) => {
        console.log(response);
        closePaymentModal();

        if (response.status === "successful") {
          router.push("/checkout/success");
        }
      },
      onClose: () => {
        console.log("Payment closed");
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-6 border rounded-lg w-[400px] space-y-4">

        <input
          className="w-full border p-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={startPayment}
          className="w-full bg-black text-white p-3"
        >
          Pay ₦{amount}
        </button>

      </div>
    </div>
  );
}