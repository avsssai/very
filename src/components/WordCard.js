import React from "react";
import { words } from "../utils/words";

const WordCard = ({ word, selectWord }) => {
	return (
		<div className='p-4 bg-gray-200 rounded-lg text-center' onClick={() => selectWord(word)}>
			<div className='text-2xl font-extrabold text-purple-600'>{words[word]}</div>
			<div className='text-md font-bold text-gray-600'>{word}</div>
		</div>
	);
};

export default WordCard;
