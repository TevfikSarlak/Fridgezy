import './App.css';
import { useState, useEffect } from 'react';

function App() {
  
  const appKey = '4e2876b4a1f3461498d7cb68c911ede8'
  const [data, setData] = useState(null);
  const [ingredients, setIngredients] = useState('');
 
 

  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${appKey}&ingredients=${ingredients}`)
    .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the data to the console
        setData(data);
      });
  }, [ingredients]);

  return (
    <div className="App">
      <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
      <ul>
        {data && data.map((recipe) => <li key={recipe.id}>
          {recipe.title}
          </li>)}
      </ul>
    </div>
  );
}

export default App;
