// import { MdClose } from "react-icons/md"
import "./RecipeDetails.css"

const CloseIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
            d="M12 4L4 12M4 4l8 8"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
        />
    </svg>
);


const RecipeDetails = (props) => {
    if (!props.show) return null;

    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">{props.data.recipe.label}</h4>
                </div>
                <div className="modal-body">
                    <img src={props.data.recipe.image} alt="" />
                    {/* <a href={ props.data.recipe.url } className="recipe-link">Full Recipe</a> */}
                    <ul className="modal-list">{props.data.recipe.ingredientLines.map((ingredients, index) => {
                        return <li key={index}>{ingredients}</li>
                    })}</ul>
                </div>
                <div>
                    <a href={props.data.recipe.url} target="_blank" rel="noopener noreferrer">Recipe Instructions</a>
                </div>
                <div className="modal-footer">
                    <button onClick={props.onClose} className="modal-close">
                        {/* <MdClose style={{ color: "#7b7b7b", width: "40px", height: "40px" }} /> */}
                        <CloseIcon />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RecipeDetails;