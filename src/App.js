import "./App.css";
import SearchMeal from "./components/SearchMeal";
import { useState, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Intro = lazy(()=> import('./components/Intro'));


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
        <Suspense fallback={
          <div className="flex items-center justify-center h-screen bg-white">
          <p className="text-xl">Loading...🍕🍔🍟🥙🍗🥩</p>
        </div>
        } >
       {startButton ? <SearchMeal /> 
       : <Intro startButton={startButton}
                setStartButton={setStartButton}
                handleStartButton={handleStartButton} />}
        </Suspense>
      <Footer />          
    </div>
  );
}

export default App;
