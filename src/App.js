import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const appKey = "4e2876b4a1f3461498d7cb68c911ede8";
  const [data, setData] = useState(null);
  const [ingredient, setIngredient] = useState("");
  const [listIngredients, setListIngredients] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);
  const [number, setNumber] = useState(10);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  const [instructions, setInstructions] = useState("");
  const [seeInstructionsId, setSeeInstructionsId] = useState(null);

  useEffect(() => {
    if (searchClicked) {
      fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${appKey}&ingredients=${listIngredients}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setData(data);
          setSearchClicked(false);
          if (data.length > 0) {
            setSelectedRecipeId(data[0].id);
          }
        });
    }
  }, [listIngredients, searchClicked]);

  useEffect(() => {
    if (selectedRecipeId) {
      fetch(
        `https://api.spoonacular.com/recipes/${selectedRecipeId}/information?apiKey=${appKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setInstructions(data.instructions);
        });
    }
  }, [selectedRecipeId]);

  const handleSearch = () => {
    setSearchClicked(true);
  };

  const handleIngredient = (e) => {
    setIngredient(e.target.value);
  };

  const handleAdding = () => {
    setListIngredients((prevIngredients) => [...prevIngredients, ingredient]);
    setIngredient("");
  };

  const filteredData = data && data.slice(0, number);

  const handleNumber = (e) => {
    setNumber(+e.target.value);
  };

  const handleSeeInstructions = (recipeId) => {
    setSeeInstructionsId(recipeId);
  };

  return (
    <div className="App">
      <div>
        <input type="text" value={ingredient} onChange={handleIngredient} />
        <button onClick={handleAdding}> + </button>
      </div>
      <div>
        <label>Please provide a number of meal suggestions:</label>
        <input type="number" value={number} onChange={handleNumber}></input>
      </div>
      <ul>
        {listIngredients &&
          listIngredients.map((material, index) => (
            <li key={index}>{material}</li>
          ))}
      </ul>
      <button onClick={handleSearch}>Submit</button>
      <ul>
        {filteredData &&
          filteredData.map((recipe) => (
            <li key={recipe.id}>
              {recipe.title}
              <img src={recipe.image} alt={recipe.title} />
              {recipe.missedIngredients.map((missed) => (
                <li key={missed.id}>{missed.name}</li>
              ))}
              <button onClick={() => handleSeeInstructions(recipe.id)}>
                See Instructions
              </button>
              {seeInstructionsId === recipe.id && (
                <div>
                  <h3>Instructions:</h3>
                  <p>{instructions}</p>
                </div>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
