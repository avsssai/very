import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className='w-full'>
			<div className='w-full flex items-center justify-content-center h-64'>
				<div className='text-center w-full  text-purple-600 font-bold text-5xl '>
					Eliminate Very from your vocabulary
				</div>
			</div>
			<div className='text-center font-bold text-2xl'>Compare the 2 sentences</div>
			<div className='text-center text-gray-400 font-medium'>Which one is more appealing?</div>
			<div className='flex justify-content-center mt-16 mb-16 divide-x'>
				<div className='text-center p-16 text-2xl font-bold text-gray-400 leading-relaxed'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugiat aperiam ipsa dolores rerum
					ipsum sed quam neque dicta temporibus non ducimus tempore quos quasi, eveniet fuga provident, id
					necessitatibus?
				</div>
				<div className='text-center p-16 text-2xl font-bold text-gray-400 leading-relaxed'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt aliquid velit, assumenda cum
					harum ipsa eius. Numquam sit voluptatum, nostrum rem aspernatur quam, reprehenderit assumenda quasi
					repellat molestiae enim?
				</div>
			</div>
			<div className='text-center font-bold text-2xl text-gray-500 mt-10 px-20'>
				The one on the right is just more Consise and pretty to read, the purpose of this site is to make you
				use the word Very as little as possible.
			</div>
			<div className='text-center font-medium text-2xl text-gray-400 mt-24 '>let's get started</div>
			<div className='flex justify-center w-full mt-16 gap-10'>
				<button className='p-3 text-center font-bold border-2 border-gray-400 text-gray-400  text-2xl'>
					<Link to='/glossary'>Glossary</Link>
				</button>
				<button className='p-3 text-center font-bold border-2 border-gray-400 text-gray-400 text-2xl'>
					<Link to='/quiz'>Quiz</Link>
				</button>
				<button className='p-3 text-center font-bold border-2 border-gray-400 text-gray-400 text-2xl'>
					<Link to='/practice'>Practice</Link>
				</button>
			</div>
		</div>
	);
};

export default Home;
