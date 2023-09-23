import React, { useState, useEffect, useRef } from 'react';

function Select({ data, filter, onSelect }) {
	const [filteredOptions, setFilteredOptions] = useState([]);
	const [inputValue, setInputValue] = useState('');
	const [isOpen, setIsOpen] = useState(false);
	const wrapperRef = useRef(null);
	data = filter(data).map(el => el.name);

	useEffect(() => {
		const filtered = data.filter(option =>
			option.toLowerCase().includes(inputValue.toLowerCase())
		);
		setFilteredOptions(filtered);
	}, [inputValue]);

	const handleInputChange = event => {
		setInputValue(event.target.value);
		setIsOpen(true);
	};

	const handleSelectOption = option => {
		setInputValue(option);
		onSelect(option);
	};

	const handleClickOutside = event => {
		if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
			setIsOpen(false);
		}
	};

	const openItems = () => {
		setIsOpen(true);
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);
	}, []);

	return (
		<div ref={wrapperRef} className='widget'>
			<input
				type="text"
				value={inputValue}
				onChange={handleInputChange}
				placeholder="Введите значение"
				onClick={openItems}
			/>
			{isOpen && <ul>
				{filteredOptions.map((option, index) => (
					<li key={index} onClick={() => handleSelectOption(option)}>
						{option}
					</li>
				))}
			</ul>}
		</div>
	);
}

export default Select;