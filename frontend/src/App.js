import "./App.css";
import { EmailSection } from "./components/EmailSection";

function App() {
  return (
    <div className="container mx-auto">
      <header className="header">
        <h1 className="text-1xl font-bold">To the Moon</h1>
        <img src="/images/logo.jfif" alt="Logo" />
      </header>
      <EmailSection />
    </div>
  );
}

export default App;
