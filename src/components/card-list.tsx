import { Card1, Card2, Card3 } from "./icons";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export function CardList() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        perView: 2,
        // spacing: 10,
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="absolute before:absolute before:h-48 before:w-12">
      <div ref={sliderRef} className="keen-slider !h-48 !w-[420px] ml-8">
        <Card1 className="keen-slider__slide" />
        <Card2 className="keen-slider__slide" />
        <Card3 className="keen-slider__slide" />
      </div>
    </div>
  );
}
