import Flutterwave from "flutterwave-node-v3";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

  const body = await req.json();

  const flw = new Flutterwave(
    process.env.FLW_PUBLIC_KEY!,
    process.env.FLW_SECRET_KEY!
  );

  const payload = {
    tx_ref: `HONBJ-${Date.now()}`,
    amount: body.amount,
    currency: "NGN",

    redirect_url:
      "http://localhost:3000/payment-success",

    customer: {
      email: body.email,
      name: body.name,
    },

    customizations: {
      title: "Hon BJ Tech",
      description: "Website Service Payment",
    },
  };


  try {

    const response = await flw.Charge.card(payload);

    return NextResponse.json(response);

  } catch(error:any){

    return NextResponse.json(
      {
        error:error.message
      },
      {
        status:500
      }
    );

  }

}
