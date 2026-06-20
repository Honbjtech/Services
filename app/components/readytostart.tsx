export default function ReadyToStart() {
  return (
    <section className="bg-[#f5f7f8] py-20">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10 lg:px-12">
        <div className="rounded-[20px] bg-[#071a34] px-6 py-20 text-center md:px-12">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Ready to Start?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
            Let's work together to create digital experiences that resonate
            with your audience and drive growth.
          </p>

          <button className="mt-10 rounded-lg bg-[#f5d45b] px-10 py-4 text-sm font-semibold text-black transition hover:bg-[#e9c74b]">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}