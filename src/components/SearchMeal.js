import React from "react";
import { useState, useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import { useRef } from 'react';


function SearchMeal() {
  const appKey = process.env.REACT_APP_API_KEY;
  const [data, setData] = useState(null);
  const [ingredient, setIngredient] = useState("");
  const [listIngredients, setListIngredients] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);
  const [number, setNumber] = useState(10);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  const [instructions, setInstructions] = useState("");
  const [seeInstructionsId, setSeeInstructionsId] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false)
  const timeoutRef = useRef(null);
  const [backgroundColorMap, setBackgroundColorMap] = useState({});
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



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

  const foodList = [
    "Apple", "Banana", "Carrot", "Chicken", "Cheese", "Eggs", "Fish", "Grapes", "Lettuce", "Milk",
    "Onion", "Orange", "Pasta", "Potato", "Rice", "Tomato", "Avocado", "Broccoli", "Cucumber", "Strawberries",
    "Watermelon", "Beef", "Spinach", "Pineapple", "Blueberries", "Corn", "Mango", "Pepper", "Garlic", "Salmon",
    "Quinoa", "Yogurt", "Almonds", "Oats", "Peanut Butter", "Honey", "Walnuts", "Cashews", "Cabbage", "Cauliflower",
    "Kiwi", "Cherries", "Mushrooms", "Peach", "Green Beans", "Pears", "Strawberry", "Blackberries", "Lemon", "Turkey",
    "Zucchini", "Asparagus", "Celery", "Squash", "Pomegranate", "Dates", "Coconut", "Papaya", "Fig", "Hazelnuts",
    "Radish", "Apricot", "Cantaloupe", "Eggplant", "Artichoke", "Cranberries", "Raspberries", "Plum", "Prunes", "Tofu",
    "Chickpeas", "Lentils", "Kidney Beans", "Soybeans", "Green Peas", "Chia Seeds", "Flaxseeds", "Pumpkin Seeds",
    "Sunflower Seeds", "Sesame Seeds", "Quail", "Venison", "Trout", "Lobster", "Shrimp", "Scallops", "Crab",
    "Clams", "Mussels", "Sardines", "Tuna", "Cod", "Haddock", "Halibut"
  ];
  

  const handleIngredient = (e) => {
    const value = e.target.value;
    setIngredient(value);
    setSuggestions(getSuggestions(value));
  };
  
  const handleSuggestionClick = (suggestion) => {
    setListIngredients((prevIngredients) => [...prevIngredients, suggestion]);
    setIngredient("");
    setSuggestions([]);
  };
  

  const handleAdding = () => {
    setListIngredients((prevIngredients) => [...prevIngredients, ingredient]);
    setIngredient("");
    setSuggestions([]);
    
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && ingredient.trim() !== "") {
      handleAdding();
    }
  };

  const handleClearing = (index) => {
    const updatedIngredients = [...listIngredients];
    updatedIngredients.splice(index, 1);
    setListIngredients(updatedIngredients);
  };
  

  const filteredData = data && data.slice(0, number);

  const handleNumber = (e) => {
    setNumber(+e.target.value);
  };

 const handleSeeInstructions = (recipeId) => {
  if (seeInstructionsId === recipeId) {
    setIsExpanded(!isExpanded);
  } else {
    setSelectedRecipeId(recipeId);
    setIsExpanded(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsExpanded(true);
    }, 1000); // Delay of 1 second (1000 milliseconds)
  }
  setSeeInstructionsId(recipeId);
};

useEffect(() => {
  return () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
}, []);

useEffect(() => {
  const colors = ["bg-orange-200",
                    "bg-blue-200",
                    "bg-sky-200", 
                    "bg-purple-200",
                    "bg-rose-200",
                    "bg-amber-200",
                    "bg-yellow-200",
                    "bg-emerald-200",
                    "bg-pink-100"
                    ];
  const newBackgroundColorMap = {};

  listIngredients.forEach((ingredient, index) => {
    const color = colors[index % colors.length];
    newBackgroundColorMap[ingredient] = color;
  });

  setBackgroundColorMap(newBackgroundColorMap);
}, [listIngredients]);

const getSuggestions = (input) => {
  const inputValue = input.trim().toLowerCase();
  const inputLength = inputValue.length;
  return inputLength === 0
    ? []
    : foodList.filter((food) =>
        food.toLowerCase().startsWith(inputValue)
      );
};

const formattedNumber = number.toFixed(1).replace(/\.0$/, '');


                      
  
  
  return (
    <div className="flex flex-col justify-center mx-auto overflow-x-hidden">
      <div className="mt-36 space-x-2 items-center ">
        <div>
        <label className="underline font-carlito font-semibold text-slate-600 text-left text-lg"
        >Please provide what you have in your fridge:</label>
        </div>

        <div className="flex flex-row space-x-2 mt-8 mx-auto justify-center sm:mx-2">
             <div className="flex flex-col">
               <div className="flex flex-row space-x-2">
                  <input type="text"
                      value={ingredient} 
                      onChange={handleIngredient}
                      onKeyPress={handleKeyPress} 
                      className="h-8 w-80 md:w-96 bg-sky-50 rounded-md focus:outline-none px-3 py-1 
                                  font-carlito text-slate-600 drop-shadow-md border-slate-300
                                  border border-1" />
                    
                      
                      <button onClick={handleAdding}> 
                              <AddIcon className="bg-orange-500 h-8 rounded-md hover:bg-orange-700 text-white"/> 
                      </button>
               </div>
               
               <div className="static">
                  <div className="relative">
                    <div className="absolute z-10 w-80 md:w-96 bg-slate-50 text-slate-600 font-carlito cursor-pointer mb-24">
                      <ul>
                        {suggestions.map((suggestion) => (
                          <li key={suggestion} onClick={() => handleSuggestionClick(suggestion)} className="hover:bg-slate-300 ">
                            {suggestion}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="static mx-auto mb-8 mt-8 drop-shadow-2xl">
                      <ul className="flex flex-row h-96 w-80 md:w-96 bg-emerald-50 rounded-md px-5 py-3 font-carlito text-slate-600 border-2 border-slate-300">
                        <div className="flex flex-wrap h-6 items-center space-x-1 space-y-1">
                          {listIngredients &&
                            listIngredients.map((material, index) => (
                              <li className={`p-1 rounded-md ${backgroundColorMap[material]}`} key={index}>
                                {material}
                                <button key={index} onClick={() => handleClearing(index)}>
                                  <ClearIcon fontSize="small" />
                                </button>
                              </li>
                            ))}
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>

                              

                              </div> 
                            
                        </div>
                        
                      </div>
      
      
      

      <div className="flex flex-row mx-auto space-x-2 mt-6">
        <div><label className="text-slate-600 font-semibold font-carlito md:text-lg mx-auto"
        >Please provide a number of meal suggestions:</label></div>
        
        <div>
            <input  type="number"
                
                min={1}
                max={20}
                value={formattedNumber}
                onChange={handleNumber}
                className="h-8 w-16 px-3 py-1 md:px-5 md:py-3  border-2 items-center text-center space-x-2 
                           rounded-md font-carlito focus:outline-none font-semibold text-slate-600
                           [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none
                           [&::-webkit-inner-spin-button]:appearance-none"
          ></input>
        </div>
        
      </div>

      <button onClick={handleSearch}
               className="bg-green-700 border-2 border-green-700 text-white font-semibold rounded-md px-24
               md:px-16 py-4  shadow-lg font-carlito mx-auto mt-12
               hover:border-2 hover:border-orange-700 hover:text-orange-700 hover:bg-white
               hover:font-semibold active:bg-orange-300 active:duration-75 active:text-white"
      >Submit Ingredients</button>
      
      <div className="mt-40  justify-center flex flex-col font-carlito">
        {filteredData && (<h1 className="flex flex-col justify-center items-center text-orange-500 text-2xl md:text-4xl font-thin mb-4">
                            RESULTS</h1>)}
        <ul className="mx-4 sm:w-3/4 md:w-2/3 md:mx-auto ">
          {filteredData &&
            filteredData.map((recipe) => (
              <li className="rounded-md py-4 bg-green-100 mb-16 border-4 border-green-100 hover:shadow-2xl"
                  key={recipe.id}>

                <div className="justify-center mb-2 text-slate-700 font-semibold text-center"
                >{recipe.title}</div>
                <div className=" md:grid md:grid-cols-2">
                <div className="flex flex-col w-full md:w-auto justify-center">
                  <div className="md:w-auto">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="mx-auto w-full md:object-cover h-80 rounded-md hover:opacity-70 hover:duration-100"
                    />
                  </div>
                </div>

                  <div className="flex flex-col w-full md:w-auto ">
                  <div className="flex flex-wrap font-carlito px-2 mt-2 mb-8">
                    <div className="w-full">
                      <h1 className="text-slate-600 border-b-2 border-slate-400 text-left text-sm">MISSING INGREDIENTS</h1>
                      <div className="flex flex-wrap text-slate-600 pl-6 space-x-4">
                        {recipe.missedIngredients && recipe.missedIngredients.length>0 ? (
                        recipe.missedIngredients.map((missed) => (
                          <li key={missed.id} className="list-disc pr-2">{missed.name}</li>
                        ))
                      ) : (
                        <li className="list-disc pr-2">none</li>
                        )}

                      </div>
                    </div>
                  </div>

                  <div className="flex flex-grow"></div>
                  <div className="flex flex-wrap font-carlito px-2 mt-2 mb-8">
                    <div className="w-full">
                      <h1 className="text-slate-600 border-b-2 border-slate-400 text-left text-sm">UNUSED INGREDIENTS</h1>
                      <div className="flex flex-wrap text-slate-600 pl-6  space-x-4">
                        {recipe.unusedIngredients && recipe.unusedIngredients.length > 0 ? (
                          recipe.unusedIngredients.map((unused) => (
                            <li key={unused.id} className="list-disc pr-2">{unused.name}</li>
                          ))
                        ) : (
                          <li className="list-disc pr-2">none</li>
                          )}
                      </div>
                    </div>
                  </div>
                    
                    <div className="px-4 sm:mt-16 flex flex-row justify-end items-end md:bottom-0 md:items-end">
                      <div className="font-carlito  text-slate-600">

                      <button
                        onClick={() => handleSeeInstructions(recipe.id)}
                        className="text-sm rounded-md bg-orange-300 w-40 py-2 hover:bg-orange-600 hover:text-white"
                      >
                        {seeInstructionsId === recipe.id && isExpanded ? (
                          <p>HIDE INSTRUCTIONS</p> 
                        ) : (
                          <p>SEE INSTRUCTIONS</p>
                        )}
                      </button>


                      </div>
                    </div>
                  

                </div>
               
                </div>


                  {seeInstructionsId === recipe.id && isExpanded && (
                    <div
                      className="text-slate-800 sm:w-3/4 md:w-11/12 leading-loose sm:mx-2 my-2 px-4
                                 mx-auto justify-center text-left font-carlito "
                      dangerouslySetInnerHTML={{ __html: instructions }}
                    ></div>
                  )}


              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchMeal;
