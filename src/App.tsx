import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="grid grid-cols-9 min-h-screen">
      <div className="bg-primary col-span-5">
        <div
          className="w-full h-full bg-right-bottom"
          style={{
            background:
              "radial-gradient(123% 120% at 18% 109%, rgba(31, 169, 17, 0.81) 26%, #2F15D0 64.58%, rgba(0, 0, 0, 0.00) 100%)",
          }}
        >
          
        </div>
      </div>
      <div className="col-span-4 flex items-center justify-center">
        <div className="w-[365px] flex flex-col items-center space-y-6">
          <h1 className="font-medium text-4xl text-muted-foreground px-3">
            Sign up for exclusive access.
          </h1>
          <Input
            className="w-[340px] h-14 shadow px-6"
            placeholder="Your email address"
          />
          <Button className="w-[340px] h-14">Get Started</Button>
          <p className="font-semibold text-center">
            You’ll receive an email with an invite link to join.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
