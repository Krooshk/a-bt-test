import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import './index.css';
import Select from './Select';


const data = require('./data.json');

function onlyDog(data) {
	return data.filter(el => el.type === "dog")
}
function onlyCat(data) {
	return data.filter(el => el.type === "cat")
}

function App() {
	const [selectedValue, setSelectedValue] = useState('');

	const handleSelect = value => {
		setSelectedValue(value);
	};

	return (
		<div>
			<h3>All items</h3>
			<Select data={data} onSelect={handleSelect} filter={(x) => x} />
			<h3>only dogs</h3>
			<Select data={data} onSelect={handleSelect} filter={onlyDog} />
			<h3>only cats</h3>
			<Select data={data} onSelect={handleSelect} filter={onlyCat} />
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

	<React.StrictMode>
		<App></App>
	</React.StrictMode>
);


