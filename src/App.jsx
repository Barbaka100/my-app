import Cardlist from "./components/Cardlist";
import './App.css'
import About from "./components/about";
function App() {
  return (
    <div>
      <button onAbort={About} className="btn">About</button>
      <Cardlist/>
     
    </div>
  );
}

export default App;
