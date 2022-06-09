import React from "react";
import PigTile from './PigTile'

function PigTileList ( {hogs} ) {
    return (
        <ul>
            {hogs.map( (hog) => {
                return <PigTile key={hog.name} name={hog.name} image={hog.image} specialty={hog.specialty} weight={hog.weight} greased={hog.greased} medal={hog["highest medal achieved"]}/>
            })}
        </ul>
    )
}

export default PigTileList