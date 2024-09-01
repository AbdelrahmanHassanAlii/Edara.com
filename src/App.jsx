import "./App.css";
import screen from "./assets/SVG/screen.svg";
import react from "./assets/SVG/react.svg";
import laptop from "./assets/SVG/laptop.svg";
import thinBar from "./assets/SVG/thin-bar-dark.svg";
function App() {
  return (
    <>
      <h1>Edara</h1>
      <img src={react} alt="react" width={200} />
      <img src={screen} alt="screen" width={200} />
      <img src={laptop} alt="laptop" width={200} />
      <img src={thinBar} alt="thinBar" width={200} />
      <div>App</div>
    </>
  );
}

export default App;
