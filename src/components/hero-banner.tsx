import { CardList } from "./card-list";
import { BellIcon, Eye, LochLogo } from "./icons";
import { TestimonyList } from "./testimony-list";

export function HeroBanner() {
  return (
    <div
      className="w-full h-full bg-right-bottom grid place-content-center py-14 px-10"
      style={{
        background:
          "radial-gradient(123% 120% at 18% 109%, rgba(31, 169, 17, 0.81) 26%, #2F15D0 64.58%, rgba(0, 0, 0, 0.00) 100%)",
      }}
    >
      <div className="flex flex-col-reverse mb-12 gap-2 lg:flex-row">
        <div className="basis-1/2  space-y-4">
          <BellIcon />
          <h4
            className="text-[#F2F2F2] w-full max-w-[19.5625rem]"
            style={{
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            Get notified when a highly correlated whale makes a move
          </h4>
          <p className="text-[#F2F2F2] opacity-70 w-full max-w-[20.125rem]">
            Find out when a certain whale moves more than any preset amount
            on-chain or when a dormant whale you care about becomes active.
          </p>
        </div>
        <div className="basis-1/2 relative pb-56 lg:pb-0">
          <CardList />
        </div>
      </div>
      <div className="flex flex-col my-12 gap-12 lg:flex-row lg:my-5 lg:gap-2">
        <div className="basis-1/2">
          <img
            alt="Cohorts"
            src="/Cohorts.png"
            className="shrink-0 rounded-xl ml-auto"
            width={335}
            height={306}
          />
        </div>
        <div className="basis-1/2 text-right space-y-4 flex flex-col items-end ml-4 mb-4">
          <Eye className="ml-auto" />
          <h4 className="text-[#F2F2F2] w-full max-w-[19.0625rem]">
            Watch what the whales are doing
          </h4>
          <p className="text-[#F2F2F2] opacity-70 w-full max-w-[19.0625rem]">
            All whales are not equal. Know exactly what the whales impacting
            YOUR portfolio are doing.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-5">
        <h5 className="text-[#F2F2F2]">Testimonials</h5>
        <span className="border-t border-[#E5E5E6] w-full opacity-50"></span>
      </div>
      <div className="mt-10 flex gap-10">
        <LochLogo className="self-end" />
        <TestimonyList />
      </div>
    </div>
  );
}
