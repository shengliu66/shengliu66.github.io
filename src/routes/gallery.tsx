import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import tennis from "@/assets/gallery-tennis.jpg";
import diving from "@/assets/gallery-diving.jpg";
import surf from "@/assets/gallery-surf.jpg";
import city from "@/assets/gallery-city.jpg";
import hike from "@/assets/gallery-hike.jpg";
import christmas from "@/assets/gallery-christmas.jpg";
import desk from "@/assets/gallery-desk.jpg";
import galaxy from "@/assets/gallery-galaxy.jpg";
import graduate from "@/assets/gallery-graduate.jpg";
import lotus from "@/assets/gallery-lotus.jpg";
import travelca from "@/assets/gallery-travel-ca.jpg";
import vocano from "@/assets/gallery-travel.jpg";
import deer from "@/assets/gallery-yellowstone.jpg";
import thai from "@/assets/gallery-thai.jpg";
import budda from "@/assets/gallery-budda.jpg";
import aida from "@/assets/gallery-aida.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Elsewhere — Sheng Liu" },
      {
        name: "description",
        content:
          "Photographs from off the clock: tennis courts, dives, surf at dawn, city walks and quiet mornings.",
      },
      { property: "og:title", content: "Elsewhere — Sheng Liu" },
      {
        property: "og:description",
        content: "Photographs from off the clock — tennis, diving, surfing, and everyday scenes.",
      },
    ],
  }),
  component: Gallery,
});

const photos = [
  { src: tennis, w: 1200, h: 900, caption: "Last light on the court", place: "Palo Alto" },
  { src: desk, w: 900, h: 1200, caption: "AI's brightest minds @Neurips 2019", place: "Vancouver" },
  { src: surf, w: 900, h: 1200, caption: "Paddling out before work", place: "Pacifica" },
  { src: aida, w: 1200, h: 900, caption: "My Aida: AI will arrive", place: "Stanford" },
  { src: diving, w: 1200, h: 900, caption: "Forty feet down, no notifications", place: "Reef" },
  { src: hike, w: 900, h: 1200, caption: "The mountain that touches the stars", place: "Big Island" },
  { src: city, w: 1200, h: 900, caption: "Concrete jungle", place: "New York" },
  { src: galaxy, w: 1200, h: 900, caption: "Brightest star in my galaxy", place: "Big Island" },
  // { src: christmas, w: 900, h: 1200, caption: "Feliz Navidad!", place: "Chicago"},
  { src: graduate, w: 1200, h: 900, caption: "“Doctor”", place: "New York University" },
  { src: lotus, w: 1200, h: 900, caption: "Like a lotus in the mud", place: "New York" },
  { src: travelca, w: 900, h: 1200, caption: "Where the cliffs meet the ocean", place: "CA 1" },
  { src: vocano, w: 1200, h: 900, caption: "A sky flushed with volcanic fire", place: "Hawaii" },
  { src: thai, w: 900, h: 1200, caption: "Lost in the ancient ruins", place: "Ayutthaya" },
  // { src: deer, w: 1200, h: 900, caption: "Forest phantom", place: "Yellow Stone" },
  { src: budda, w: 900, h: 1200, caption: "Where faith and nature intertwine", place: "Wat Mahathat" },

];

function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const current = active === null ? null : photos[active];

  return (
    <div className="fade-up space-y-10">
      <header>
        <h1 className="font-display italic">Elsewhere</h1>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
          A slower record of life outside research: courts, water, and the ordinary hours
          in between.
        </p>
      </header>

      <div className="columns-1 gap-4 sm:columns-2 [&>*]:mb-4">
        {photos.map((p, i) => (
          <button
            key={p.caption}
            type="button"
            onClick={() => setActive(i)}
            className="group block w-full break-inside-avoid overflow-hidden rounded-lg bg-secondary text-left"
          >
            <img
              src={p.src}
              alt={p.caption}
              width={p.w}
              height={p.h}
              loading="lazy"
              className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="flex items-baseline justify-between gap-3 px-1 py-2">
              <span className="text-sm">{p.caption}</span>
              <span className="text-xs text-muted-foreground">{p.place}</span>
            </div>
          </button>
        ))}
      </div>

      {current ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-6 backdrop-blur-sm"
        >
          <figure className="max-h-full max-w-3xl">
            <img
              src={current.src}
              alt={current.caption}
              className="max-h-[80vh] w-auto rounded-lg object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-background/80">
              {current.caption} — {current.place}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </div>
  );
}
