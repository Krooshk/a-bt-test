function flat(arr) {
	const res = [];

	arr.forEach(element => {
		if (!Array.isArray(element)) {
			res.push(element);
		} else {
			res.push(...flat(element))
		}
	});

	return res;
}

console.log(flat([1, [2, 3, [3, 4, [5, 6, [7, [8, 0]], 45]]]]))