import React, {useState} from "react";
import PigDetails from "./PigDetails";


function PigTile ( {hog} ) {
    const [showDetails, setShowDetails] = useState(false);

    function detailsClick() {
        setShowDetails((showDetails) => !showDetails);
    }

    const { name, image } = hog

    return (
        <div className ="ui eight wide column" >
            <div className="image">
                <img src={image}/>
            </div>
            <div>
                <h3>{name}</h3>
            </div>
            <div>
                {showDetails ? <PigDetails hog={hog} /> : null}
                <button onClick={detailsClick}>{showDetails ? "Less Info" : "Info"}</button>
            </div>
        </div>
    );
}

export default PigTile;