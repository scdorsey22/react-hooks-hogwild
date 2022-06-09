function PigDetails({ hog }) {
    // const { greased, weight, "highest medal achieved": medal } = hog
    return (
        <div>
            <p>{hog.greased ? "Greased" : "Nongreased"}</p>
            <p>Highest Medal Achieved: {hog.medal}</p>
            <p>{hog.weight}</p>
        </div>
    );
    console.log(hog)
}

export default PigDetails;