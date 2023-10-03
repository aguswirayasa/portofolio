import "./App.css";
import Landing from "./Landing";
import { Analytics } from "@vercel/analytics/react";
function App() {
  return (
    <>
      <Landing />
      <Analytics />
    </>
  );
}

export default App;
