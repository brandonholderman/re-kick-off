// import { MdClose } from "react-icons/md"
import { filterHealthLabels } from "../utils/filterLabels";
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
    const healthLabels = filterHealthLabels(props.data.recipe.healthLabels);
    const nutritionInfo = props.data.recipe.digest;

    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">{props.data.recipe.label}</h4>
                    {/* <button onClick={props.onClose} className="modal-full-recipe"> */}
                        {/* <MdClose style={{ color: "#7b7b7b", width: "40px", height: "40px" }} /> */}
                        {/* <CloseIcon />
                    </button> */}
                </div>
                <div className="modal-body">
                    <img src={props.data.recipe.image} alt="src\assets\placeholder.gif" />
                    
                    

                    <div className="modal-section show-allergy">
                        <p className="modal-section-label">Dietary Info</p>
                        <ul>
                            {healthLabels.map(label => (
                                <li key={label}>{label}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="modal-section">
                        <p className="modal-section-label">Nutrition Info</p>
                        <div className="show-nutrition">
                            {nutritionInfo.map(info => (
                                <ul key={info.label}>
                                    <li>
                                        <span>{info.label}</span>
                                        <span style={{ fontWeight: 500 }}>
                                            {Math.floor(info.total)}{info.unit}
                                        </span>
                                    </li>
                                </ul>
                            ))}
                        </div>
                    </div>

                    <div className="modal-section">
                        <p className="modal-section-label">Ingredients</p>
                        <div className="modal-list">
                            <ul>
                                {props.data.recipe.ingredientLines.map((ingredients, index) => (
                                    <li key={index}>{ingredients}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="recipe-link">
                    {/* <span className="recipe-link-dot" /> */}
                    <a href={props.data.recipe.url} target="_blank" rel="noopener noreferrer" className="modal-full-recipe">Full recipe ↗</a>
                    <button onClick={props.onClose} className="modal-full-recipe">Close</button>
                </div>

                <div className="modal-footer">
                </div>
            </div>
        </div>
    );
}

export default RecipeDetails;