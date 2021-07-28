import React, { useState } from "react";
import { Link } from "react-router-dom";
import { words } from "../utils/words";
import Modal from "./Modal";
import WordCard from "./WordCard";

const Glossary = () => {
	const keys = Object.keys(words);
	const [modalOpen, setModalOpen] = useState(false);
	const [word, setWord] = useState("");

	const selectWord = (word) => {
		setWord(word);
		setModalOpen(true);
		console.log(word);
	};
	const closeModal = () => {
		console.log("close modal called");
		setModalOpen(false);
	};
	return (
		<div>
			{modalOpen && <Modal word={words[word]} meaning={word} closeModal={closeModal} />}
			<Link to='/'>
				<div className='text-gray-400 mb-5'>&#8592; Back to Home</div>
			</Link>
			<div className='grid grid-flow-row grid-cols-3 gap-4'>
				{keys.map((word) => {
					return <WordCard key={word} word={word} selectWord={selectWord} />;
				})}
			</div>
		</div>
	);
};

export default Glossary;
