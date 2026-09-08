import { useState } from "react";
import RecipeList from "./RecipeList";
import Axios from "axios";
import "./Search.css"

const Search = () => {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searched, setSearched] = useState(false);

    const APP_ID = import.meta.env.VITE_CONNECTION_ID;
    const APP_KEY = import.meta.env.VITE_CONNECTION_KEY;

    const urlV2 = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const getRecipes = async () => {
        setLoading(true);
        setSearched(true);
        try {
            let result = await Axios.get(urlV2);
            setRecipes(result.data.hits);
            console.log(result.data.hits);
        } catch(err) {
            console.error('Failed to fetch recipes:', err);
            setRecipes([]);
        } finally {
            setLoading(false);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getRecipes();
    }

    return (
        <div className="container">
            <img src="src\assets\kick-off-logo.png" className="logo" alt="src/assets/placeholder.gif" />
            <form className="search-form" onSubmit={handleSubmit}>
                <input 
                    className="user-input" 
                    type="text"
                    placeholder="Search by ingredient — chicken, lemon, garlic…"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <input className="search-button" type="submit" value="Search" />
            </form>
            {!searched && (
                <p className="instruction-text">Kick off your next meal! Find recipes based on what you have on hand.</p>
            )}

            {loading && (
                <div className="empty-state">Finding recipes…</div>
            )}

            {!loading && searched && recipes.length === 0 && (
                <div className="empty-state">
                    No recipes found for "{query}". Try a different ingredient.
                </div>
            )}

            {!loading && recipes.length > 0 && (
                <div className="recipe-list">
                    {recipes.map((recipe, index) => (
                        <RecipeList data={recipe} key={index} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;