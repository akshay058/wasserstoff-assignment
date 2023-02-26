import "./App.css";
import Navigation from "./components/Navigation";
import SideIndicator from "./components/SideIndicator";
import Title from "./components/Title";
import Widget from "./components/Widget";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Title />
      <SideIndicator />
      <Widget />
    </div>
  );
}

export default App;
