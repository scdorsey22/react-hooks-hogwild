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
            <div className="extra content">
                {showDetails ? <PigDetails hog={hog} /> : null}
                <button className="ui button" onClick={detailsClick}>Show Details</button>
            </div>
        </div>
    );
}

export default PigTile;