function PigDetails({ hog }) {
    const { greased, weight, "highest medal achieved": medal } = hog
    return (
        <div>
            <p>{greased ? "Greased" : "Nongreased"}</p>
            <p>Highest Medal Achieved: {medal}</p>
            <p>{weight}</p>
        </div>
    );
    console.log(hog)
}

export default PigDetails;