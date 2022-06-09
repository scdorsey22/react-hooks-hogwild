import React, {useState} from "react";
import PigDetails from "./PigDetails";


function PigTile ( {hog} ) {
    const [showDetails, setShowDetails] = useState(false);

    function detailsClick() {
        setShowDetails((showDetails) => !showDetails);
    }

    return (
        <div className ="ui card eight wide column pigTile" >
            <div className="image">
                <img src={hog.image}/>
            </div>
            <div className="header">
                <h3>{hog.name}</h3>
            </div>
            <div>
                {showDetails ? <PigDetails hog={hog} /> : null}
                <button onClick={detailsClick}>{showDetails ? "Less Details" : "More Details"}</button>
            </div>
        </div>
    );
}

export default PigTile;