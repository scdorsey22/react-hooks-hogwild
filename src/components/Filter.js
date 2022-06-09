function Filter() {
    return (
    <div className="filterWrapper">
            <div>
                <select name="sort">
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                </select>
            </div>
    </div>
    )
}
export default Filter;