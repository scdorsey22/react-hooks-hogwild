function Filter() {






    return (
    <div className="filterWrapper">
        <div className="ui menu">
                <div className="ui item">
                    Sort By
                    <select name="sort">
                        <option value="name">Name</option>
                        <option value="weight">Weight</option>
                    </select>
                </div>
                <div className="ui item">
                    Greased
                    <input type="checkbox" />
                </div>
        </div>
    </div>
    )
}
export default Filter;