import "./App.css";
import { CardList } from "./components/card-list";
import { EmailForm } from "./components/email-form";
import { BellIcon, Eye, LochLogo } from "./components/icons";
import { TestimonyList } from "./components/testimony-list";

function App() {
  return (
    <div className="grid grid-cols-9 min-h-screen">
      <div className="bg-primary col-span-5">
        <div
          className="w-full h-full bg-right-bottom grid place-content-center py-14 px-10"
          style={{
            background:
              "radial-gradient(123% 120% at 18% 109%, rgba(31, 169, 17, 0.81) 26%, #2F15D0 64.58%, rgba(0, 0, 0, 0.00) 100%)",
          }}
        >
          <div className="flex mb-12">
            <div className="basis-1/2 w-20 space-y-4">
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
            <div className="basis-1/2">{/* <CardList /> */}</div>
          </div>
          <div className="flex my-5">
            <div className="basis-1/2">
              <img
                alt="Cohorts"
                src="/Cohorts.png"
                className="shrink-0 rounded-xl ml-auto"
                width={335}
                height={306}
              />
            </div>
            <div className="basis-1/2 text-right space-y-6 flex flex-col items-end">
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
      </div>
      <div className="col-span-4 flex bg-background z-50 items-center justify-center">
        <EmailForm />
      </div>
    </div>
  );
}

export default App;
