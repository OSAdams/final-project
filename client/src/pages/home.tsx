import { useState, useEffect } from 'react';
import.meta.env.SPOONACULAR_API_KEY;

export default function Home(props: { message: string, title: string }) {
  const [recipesData, setRecipesData] = useState([]);

  useEffect(() => {
    async function readRecipesData() {
      const resp = await fetch(`/api/recipes/landing/:mealType`)
      const data = await resp.json();

      console.log(`Data from Spoonacular:`, data)

      setRecipesData(data.recipes)
    }

    readRecipesData();
  }, []);

  return (
    <div>
      <h1>{ props?.title }</h1>
      <p>{ props?.message }</p>
    </div>
  )
}
