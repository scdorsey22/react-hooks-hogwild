import React from "react";
import Nav from "./Nav";
import PigTileList from "./PigTileList";

import hogs from "../porkers_data";
import Filter from "./Filter";

function App() {
	return (
		<div className="App">
			<div>
				<Nav />
			</div>
			<div>
				<Filter />
			</div>
			<div className="ui grid container" >
				<PigTileList hogs={hogs}/>
			</div>
		</div>
		
	);
}

export default App;
