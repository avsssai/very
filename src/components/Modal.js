import React from "react";

const Modal = ({ closeModal, word }) => {
	return (
		<div>
			<div
				className='absolute top-0 left-0 h-full w-full bg-gray-300 flex mx-auto bg-opacity-75'
				onClick={closeModal}>
				<div className='container mx-auto sm:w-full sm:h-1/6 lg:h-1/6 lg:w-1/3 bg-white rounded-lg mt-24 '>
					<h1 className='text-3xl font-extrabold'>{word}</h1>
				</div>
			</div>
		</div>
	);
};

export default Modal;
