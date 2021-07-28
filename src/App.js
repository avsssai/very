import React from "react";
import PageRouter from "./components/Router";

const App = () => {
	return (
		<div className='w-full h-full min-h-screen bg-purple-200 flex relative'>
			<div className='container bg-white mx-auto m-3 rounded-lg p-4'>
				<PageRouter />
			</div>
		</div>
	);
};

export default App;
