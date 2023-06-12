import './App.css';
import Navbar from "./components/Navbar"
import QuotesBar from "./components/QuotesBar"
import GlowElements from "./components/GlowElements";

function App() {
  return (
    <div className="App">
      <GlowElements className="absolute opacity-20"/>
      <Navbar />
      <QuotesBar />
    </div>
  );
}

export default App;
