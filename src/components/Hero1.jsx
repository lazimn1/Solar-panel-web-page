import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    id: 1,
    // Cropped vertically for mobile (1080x1920)
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1080&h=1920&q=80",
    tag: "Clean Energy",
    headline: "Powering the\nFuture",
    sub: "Harnessing the power of the sun to create sustainable energy solutions for generations to come.",
  },
  {
    id: 2,
    // Close-up shot of solar panels that looks great vertically
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1080&h=1920&q=80",
    tag: "Residential Solutions",
    headline: "Smart Homes\nSmart Power",
    sub: "Transform your roof into a powerhouse. Reduce your carbon footprint and your energy bills.",
  },
  {
    id: 3,
    // Industrial/Commercial scale solar farm
    image: "https://images.unsplash.com/photo-1584226761916-3fd67ab5ac3a?auto=format&fit=crop&w=1080&h=1920&q=80",
    tag: "Commercial Solar",
    headline: "Empowering\nBusinesses",
    sub: "Scalable solar infrastructure designed to drive efficiency and lower operational costs for your company.",
  },
  {
    id: 4,
    // Warm sunset over a solar array
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1080&h=1920&q=80",
    tag: "Sustainable Vision",
    headline: "A Brighter\nTomorrow",
    sub: "Committed to innovation and excellence in renewable energy technology.",
  },
];

export default function Hero1() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (index, dir = "next") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 500);
    },
    [animating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, "next");
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, "prev");
  }, [current, goTo]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, paused]);

  const slide = slides[current];

  return (
    <section
      className="relative w-full overflow-hidden bg-stone-900"
      style={{ height: "100svh", minHeight: "580px", fontFamily: "'Cormorant Garamond', Georgia, serif" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <img
            src={s.image}
            alt={s.tag}
            className="w-full h-full object-cover"
            style={{
              transform: i === current && !animating ? "scale(1.04)" : "scale(1)",
              transition: "transform 6s ease",
            }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
        </div>
      ))}

      {/* Content */}
      <div
        className="absolute inset-0 z-10 flex flex-col justify-end px-8 sm:px-16 pb-24 sm:pb-20"
        style={{
          opacity: animating ? 0 : 1,
          transform: animating
            ? direction === "next" ? "translateX(24px)" : "translateX(-24px)"
            : "translateX(0)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
      >
        {/* Tag pill */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 block" />
          <span
            className="text-xs text-amber-400/80 tracking-[0.3em] uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {slide.tag}
          </span>
        </div>

        {/* Headline */}
        <h2
          className="text-[clamp(42px,7vw,96px)] font-normal text-white leading-[0.92] mb-5 whitespace-pre-line"
        >
          {slide.headline}
        </h2>

        {/* Subtext */}
        <p
          className="text-sm sm:text-base text-stone-300 max-w-sm leading-relaxed mb-8"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
        >
          {slide.sub}
        </p>
      </div>

      {/* Slide counter + progress */}
      <div className="absolute bottom-8 right-8 sm:right-16 z-20 flex flex-col items-end gap-3">
        <span
          className="text-xs text-white/40 tabular-nums"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? "next" : "prev")}
              aria-label={`Go to slide ${i + 1}`}
              className="transition-all duration-300 rounded-full bg-white/40 hover:bg-white/70"
              style={{
                width: i === current ? "24px" : "6px",
                height: "6px",
                background: i === current ? "#f59e0b" : undefined, // amber-500
              }}
            />
          ))}
        </div>
      </div>

      {/* Prev / Next arrow buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-8 z-20">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="w-11 h-11 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/40 hover:border-white/50 active:scale-90 transition-all"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-8 z-20">
        <button
          onClick={next}
          aria-label="Next slide"
          className="w-11 h-11 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/40 hover:border-white/50 active:scale-90 transition-all"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Top brand tag */}
      <div className="absolute top-6 left-8 sm:left-16 z-20 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-amber-600 block" />
        <span
          className="text-sm text-white/60 tracking-[0.2em] uppercase"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Solaris Energy
        </span>
      </div>

      {/* Pause indicator */}
      {paused && (
        <div className="absolute top-6 right-8 sm:right-16 z-20">
          <span
            className="text-[10px] text-white/30 tracking-widest uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            paused
          </span>
        </div>
      )}
    </section>
  );
}