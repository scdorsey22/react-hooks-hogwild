import PigTile from "./PigTile"

function PigTileList ( {hogs} ) {
    return (
        <div className="ui three stackable cards">
            {hogs.map(hog => (
                <PigTile 
                 key={hog.name}
                 hog={hog}   
                />
            ))}
        </div>
    );
}

export default PigTileList;