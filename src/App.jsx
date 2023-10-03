import "./App.css";
import Landing from "./Landing";
import { inject } from "@vercel/analytics";
function App() {
  inject();
  return (
    <>
      <Landing />
    </>
  );
}

export default App;
