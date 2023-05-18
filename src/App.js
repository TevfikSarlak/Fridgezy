import "./App.css";
import SearchMeal from "./components/SearchMeal";
import Intro from "./components/Intro";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  
  const [startButton, setStartButton] = useState(false);

  const handleStartButton = () => {
    setStartButton(true)
  }

  return (
    <div className="App">
      <Navbar />
       {startButton ? <SearchMeal /> 
       : <Intro startButton={startButton}
                setStartButton={setStartButton}
                handleStartButton={handleStartButton} />}
      <Footer />          
    </div>
  );
}

export default App;
