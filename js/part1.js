const thesis = { name: "church's", date: 1936 };

function rename_thesis(old_thesis, new_name) {
	return {
		name: new_name,
		data: old_thesis.date,
	};
}

const thesis2 = rename_thesis(thesis, 'Church-Turing');
console.log(thesis);
console.log(thesis2);
