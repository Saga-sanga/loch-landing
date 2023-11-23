import "./App.css";
import { EmailForm } from "./components/email-form";
import { HeroBanner } from "./components/hero-banner";

function App() {
  return (
    <div className="flex flex-col-reverse sm:grid sm:grid-cols-9 min-h-screen">
      <div className="bg-primary sm:col-span-5">
        <HeroBanner />
      </div>
      <div className="sm:col-span-4 flex bg-background z-50 h-screen sm:sticky top-0 items-center justify-center">
        <EmailForm />
      </div>
    </div>
  );
}

export default App;
