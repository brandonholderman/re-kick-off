import { useState } from "react";
import RecipeDetails from "./RecipeDetails";
import "./RecipeList.css"



const RecipeList = ({ data }) => {

    const [show, setShow] = useState(false);
    const [recipeData, setRecipeData] = useState({});

    const { recipe } = data;
    const cuisineType = recipe.cuisineType?.[0] ?? null;
    // const mealType = recipe.mealType?.[0] ?? null;
    // const totalTime = recipe.totalTime > 0 ? `${recipe.totalTime} min` : null;

    return (
        <div className="recipe-tile">
            <img className="recipe-img" src={recipe.image} alt="src\assets\placeholder.gif" />
            <div className="recipe-card-body">
                <h2 className="recipe-label">{recipe.label}</h2>
                    <div className="recipe-meta">
                        {cuisineType && (
                            <span style={{ textTransform: "capitalize" }}>{cuisineType}</span>
                        )}
                    </div>
                        {/* {(cuisineType || mealType || totalTime) && ( */}
                        {/* {cuisineType && (mealType || totalTime) && (
                            <span className="recipe-meta-dot" />
                        )} */}
                        {/* {mealType && (
                            <span style={{ textTransform: "capitalize" }}>{mealType}</span>
                        )} */}
                        {/* {mealType && totalTime && <span className="recipe-meta-dot" />} */}
                        {/* {totalTime && <span>{totalTime}</span>} */}
                {/* )} */}
                <div className="recipe-button">
                    <button className="details-button"
                        onClick={() => { setShow(true); setRecipeData(data) }}>Recipe Details</button>
                    <RecipeDetails onClose={() => setShow(false)} show={show} data={recipeData} />
                </div>
            </div>
        </div>
    );
}

export default RecipeList;