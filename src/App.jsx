import { useState } from "react";
import "./App.css";
import NewsletterSignup from "./components/NewsletterSignup";

function App() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <NewsletterSignup />
    </div>
  );
}

export default App;
