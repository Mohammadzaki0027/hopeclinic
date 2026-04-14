import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const videos = [
  "LuN1eXSeRuA",
  "C_zI00LHXjU",
  "TodBS4gsu2I",
];

export default function VideoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // ✅ Auto scroll
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  // ✅ Function to stop all videos
  const stopAllVideos = () => {
    videos.forEach((_, index) => {
      const iframe = document.getElementById(`player-${index}`);
      iframe?.contentWindow?.postMessage(
        JSON.stringify({
          event: "command",
          func: "pauseVideo",
          args: [],
        }),
        "*"
      );
    });
  };

  // ✅ Stop on slide change
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setTimeout(() => {
        stopAllVideos();
      }, 300);
    };

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-10">
        Treatment Videos
      </h2>

      <div className="overflow-hidden max-w-6xl mx-auto px-4" ref={emblaRef}>
        <div className="flex gap-6">
          {videos.map((id, index) => (
            <div
              key={index}
              className="min-w-[80%] md:min-w-[30%] rounded-2xl overflow-hidden shadow-lg"
              onClick={() => {
                // 🔥 Stop all other videos when user clicks
                videos.forEach((_, i) => {
                  if (i !== index) {
                    const iframe = document.getElementById(`player-${i}`);
                    iframe?.contentWindow?.postMessage(
                      JSON.stringify({
                        event: "command",
                        func: "pauseVideo",
                        args: [],
                      }),
                      "*"
                    );
                  }
                });
              }}
            >
              <iframe
                id={`player-${index}`}
                src={`https://www.youtube.com/embed/${id}?enablejsapi=1&origin=${window.location.origin}`}
                className="w-full h-[400px] rounded-xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}