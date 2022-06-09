function PigDetails({ hog }) {
    return (
        <div>
            <p>{hog.greased ? "Greased" : "Nongreased"}</p>
            <p>Highest Medal Achieved: {hog.medal}</p>
            <p>{hog.weight}</p>
        </div>
    );

}

export default PigDetails;