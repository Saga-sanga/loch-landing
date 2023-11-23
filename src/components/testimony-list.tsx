import { Card, CardContent, CardHeader } from "./ui/card";
// import "keen-slider/keen-slider.min.css";
// import { useKeenSlider } from "keen-slider/react";
// import useEmblaCarousel from "embla-carousel-react";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

const testimonies = [
  {
    name: "Jack F",
    title: "Ex Blackrock PM",
    content:
      "“Love how Loch integrates portfolio analytics and whale watching into one unified app.”",
  },
  {
    name: "Yash P",
    title: "Research, 3poch Crypto Hedge Fund",
    content:
      "“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”",
  },
  {
    name: "Shiv S",
    title: "Co-Founder Magik Labs",
    content:
      "“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”",
  },
];

export function TestimonyList() {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  return (
    <div className="h-[139px] relative">
      <div
        className="absolute w-[60vw] h-[139px] touch-pan-x overflow-y-scroll scrollbar-hide"
        {...events}
        ref={ref}
      >
        <div className="flex gap-4 absolute pr-[25vw]">
          <Card className="flex flex-col w-[353px]">
            <CardHeader className="flex-row space-y-0 gap-2 items-center p-5">
              <p>{testimonies[0].name}</p>
              <small>{testimonies[0].title}</small>
            </CardHeader>
            <CardContent className="p-5 pt-0">
              <p className="">{testimonies[0].content}</p>
            </CardContent>
          </Card>
          <Card className="flex flex-col w-[353px]">
            <CardHeader className="flex-row space-y-0 gap-2 items-center p-5">
              <p>{testimonies[1].name}</p>
              <small>{testimonies[1].title}</small>
            </CardHeader>
            <CardContent className="p-5 pt-0">
              <p className="">{testimonies[1].content}</p>
            </CardContent>
          </Card>
          <Card className="flex flex-col w-[531px]">
            <CardHeader className="flex-row space-y-0 gap-2 items-center p-5">
              <p>{testimonies[2].name}</p>
              <small>{testimonies[2].title}</small>
            </CardHeader>
            <CardContent className="p-5 pt-0">
              <p className="">{testimonies[2].content}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
