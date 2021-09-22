export const swap = (arr, a, b) => {
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
	return arr;
};

export const reset = (notes) => {
	return notes.map((note) => {
		if (note.selected === true) note.selected = false;
		return note;
	});
};
