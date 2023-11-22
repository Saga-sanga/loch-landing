import "./App.css";
import { EmailForm } from "./components/email-form";
import { HeroBanner } from "./components/hero-banner";

function App() {
  return (
    <div className="grid grid-cols-9 min-h-screen">
      <div className="bg-primary col-span-5">
        <HeroBanner />
      </div>
      <div className="col-span-4 flex bg-background z-50 items-center justify-center">
        <EmailForm />
      </div>
    </div>
  );
}

export default App;
