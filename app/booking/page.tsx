"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/navbar";

type ServiceKey = "graphics" | "video" | "online" | "payment";
type PackageKey = "basic" | "standard" | "premium";

type ServiceType = {
  id: ServiceKey;
  title: string;
};

type PackageType = {
  id: PackageKey;
  title: string;
  desc: string;
};

const services: ServiceType[] = [
  { id: "graphics", title: "Graphics Design" },
  { id: "video", title: "Video Editing/Advert" },
  { id: "online", title: "Online Service" },
  { id: "payment", title: "Payment Service" },
];

const packages: PackageType[] = [
  {
    id: "basic",
    title: "BASIC",
    desc: "Starter package for small projects",
  },
  {
    id: "standard",
    title: "STANDARD",
    desc: "Balanced package for growing brands",
  },
  {
    id: "premium",
    title: "PREMIUM",
    desc: "Advanced package for full service delivery",
  },
];

const pricing: Record<
  ServiceKey,
  Record<PackageKey, { price: string; delivery: string }>
> = {
  graphics: {
    basic: { price: "₦2,000", delivery: "2-3 Days" },
    standard: { price: "₦5,000", delivery: "4-6 Days" },
    premium: { price: "₦10,000", delivery: "7-10 Days" },
  },
  video: {
    basic: { price: "₦20,000", delivery: "3-5 Days" },
    standard: { price: "₦35,000", delivery: "5-7 Days" },
    premium: { price: "₦50,000", delivery: "7-12 Days" },
  },
  online: {
    basic: { price: "₦2,000", delivery: "30 Mins" },
    standard: { price: "₦3,000", delivery: "1 Hour" },
    premium: { price: "₦5,000", delivery: "1 Day" },
  },
  payment: {
    basic: { price: "₦2,000", delivery: "1 Hour" },
    standard: { price: "₦3,000", delivery: "2 Hours" },
    premium: { price: "₦5,000", delivery: "3 Hours" },
  },
};

export default function Booking() {
  const [selectedService, setSelectedService] = useState<ServiceType>(
    services[0]
  );
  const [selectedPackage, setSelectedPackage] = useState<PackageType>(
    packages[1]
  );
  const [description, setDescription] = useState("");

  const currentSelection = pricing[selectedService.id][selectedPackage.id];

  return (
    <div className="min-h-screen bg-[#eff0f2] text-[#111318]">
      <Navbar />

      <div className="mx-auto w-[92%] max-w-[1220px] py-10">
        <section className="pb-16">
          <div className="grid grid-cols-1 gap-7 xl:grid-cols-[1.7fr_0.82fr]">
            {/* Left Card */}
            <div className="rounded-[20px] border border-[#e5e6ea] bg-[#f7f7f8] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] md:p-8">
              <h1 className="mb-8 text-[2.2rem] font-bold leading-tight md:text-[2.7rem]">
                Project Details
              </h1>

              {/* Service Selection */}
              <div className="mb-6">
                <label className="mb-3 block text-base font-medium text-[#24272e]">
                  Select Service
                </label>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {services.map((service) => {
                    const isActive = selectedService.id === service.id;

                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className={`rounded-[14px] border-2 px-4 py-4 text-left font-semibold transition ${
                          isActive
                            ? "border-[#20252d] bg-[#eef1f5] shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
                            : "border-[#d3d5da] bg-[#f7f7f8] hover:border-[#20252d]"
                        }`}
                      >
                        {service.title}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Package Selection */}
              <div className="mb-6">
                <label className="mb-3 block text-base font-medium text-[#24272e]">
                  Select Package
                </label>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                  {packages.map((pkg) => {
                    const isActive = selectedPackage.id === pkg.id;
                    const servicePackageInfo =
                      pricing[selectedService.id][pkg.id];

                    return (
                      <button
                        key={pkg.id}
                        type="button"
                        onClick={() => setSelectedPackage(pkg)}
                        className={`rounded-[14px] border-2 p-4 text-left transition ${
                          isActive
                            ? "border-[#20252d] bg-[#f7f7f8] shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
                            : "border-[#d3d5da] bg-[#f7f7f8] hover:border-[#20252d]"
                        }`}
                      >
                        <strong className="mb-2 block text-[1.05rem]">
                          {pkg.title}
                        </strong>
                        <span className="mb-2 block text-[15px] text-[#444b55]">
                          {pkg.desc}
                        </span>
                        <span className="block text-sm font-semibold text-[#071d46]">
                          {servicePackageInfo.price}
                        </span>
                        <span className="block text-xs text-[#666]">
                          {servicePackageInfo.delivery}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <label className="mb-3 block text-base font-medium text-[#24272e]">
                  Project Description
                </label>
                <textarea
                  placeholder="Please describe your specific requirements, desired features, and goals..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="min-h-[170px] w-full resize-none rounded-xl border border-[#cfd2d8] bg-[#f2f3f5] p-4 outline-none placeholder:text-[#8a9099]"
                />
              </div>

              {/* Target Deadline */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-3 block text-base font-medium text-[#24272e]">
                    Target Deadline
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-xl border border-[#cfd2d8] bg-[#f2f3f5] p-4 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Right Summary */}
            <aside className="flex flex-col gap-5">
              <div className="rounded-[20px] bg-gradient-to-b from-[#071d46] to-[#081a3d] p-6 text-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] md:p-8">
                <h2 className="mb-6 text-[2.2rem] font-bold md:text-[2.4rem]">
                  Summary
                </h2>

                <div className="flex items-center justify-between gap-4 border-b border-white/10 py-4 text-[#d9e0ec]">
                  <span>Selected Service</span>
                  <strong className="text-white">{selectedService.title}</strong>
                </div>

                <div className="flex items-center justify-between gap-4 border-b border-white/10 py-4 text-[#d9e0ec]">
                  <span>Selected Package</span>
                  <strong className="text-white">
                    {selectedPackage.title.charAt(0) +
                      selectedPackage.title.slice(1).toLowerCase()}
                  </strong>
                </div>

                <div className="flex items-center justify-between gap-4 border-b border-white/10 py-4 text-[#d9e0ec]">
                  <span>Estimate Delivery</span>
                  <strong className="text-white">
                    {currentSelection.delivery}
                  </strong>
                </div>

                <div className="flex items-end justify-between gap-4 py-8">
                  <div>
                    <span className="text-[1.05rem]">Total Estimate</span>
                  </div>

                  <div className="flex flex-col items-end">
                    <strong className="text-[2.4rem] font-bold leading-none text-[#f2cc52] md:text-[2.6rem]">
                      {currentSelection.price}
                    </strong>
                    <small className="mt-1 italic text-[#aeb8c8]">
                      excluding taxes
                    </small>
                  </div>
                </div>

                {/* Checkout Link */}
                <Link
                  href={`/checkout?service=${encodeURIComponent(
                    selectedService.title
                  )}&price=${encodeURIComponent(
                    currentSelection.price.replace(/[₦,]/g, "")
                  )}&package=${encodeURIComponent(selectedPackage.title)}`}
                  className="block w-full rounded-[14px] bg-[#f2cc52] px-4 py-4 text-center font-bold text-[#232323] transition hover:brightness-95"
                >
                  Continue to Checkout →
                </Link>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-[#d5d7dd] bg-[#f6f6f7] p-4">
                <div className="text-lg">🛡</div>
                <div>
                  <strong className="block">Encrypted &amp; Secure</strong>
                  <p className="mt-1 leading-6 text-[#5c6470]">
                    Your project details are protected by our enterprise-grade
                    privacy protocols.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </div>
  );
}