import "./App.css";
import SearchMeal from "./components/SearchMeal";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Intro from "./components/Intro";



function App() {
  
  const [startButton, setStartButton] = useState(false);

  const handleStartButton = () => {
    setStartButton(true)
  }

  return (
    <div className="App">
      <Navbar startButton={startButton}
              setStartButton={setStartButton}
              handleStartButton={handleStartButton} />
        
       {startButton ? <SearchMeal /> 
       : <Intro startButton={startButton}
                setStartButton={setStartButton}
                handleStartButton={handleStartButton} />}
        
      <Footer />          
    </div>
  );
}

export default App;
