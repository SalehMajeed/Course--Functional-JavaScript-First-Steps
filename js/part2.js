function get_date() {
	return new Date().toDateString();
}

console.log(get_date()); // not pure function because output changes with same input.

function get_workshop_date() {
	return new Date(2020, 11, 4).toDateString();
}

console.log(get_workshop_date()); // pure because return same output on same input.

function to_hex(n) {
	let hex = n.toString(16);
	return hex.padStart(2, '0');
}

console.log(to_hex(3)); // pure function because output is determineted on behalf of input.

function rgb_to_hex(R, G, B) {
	return '#' + [to_hex(R), to_hex(G), to_hex(B)].join();
}
console.log(rgb_to_hex(34, 23, 54)); // pure because output is fixed by input.

function set_color(R, G, B) {
	const hex = rgb_to_hex(R, G, B);
	const color_me = document.querySelector('body');
	color_me.setAttribute('style', 'color:' + hex);
}
console.log(set_color(43, 54, 32)); // impure because it's not returning anything and is access dom.

async function read_json_file(filename) {
	const file = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson');
	return await file.json();
}
console.log(read_json_file()); // impure becuase it's getting data outside and data could be change on same input.

function write_json_string(object) {
	return JSON.stringify(object, null, 2);
}
console.log(write_json_string({ greeting: 'hello' })); // pure because it's  return same output on same input.

function exclusive_or(A, B) {
	return (A || B) && !(A && B);
}
console.log(exclusive_or('A', 'B')); // pure.

function compute_truth_table(operator) {
	const truth_values = [true, false];
	const table = [];
	for (const A of truth_values) {
		for (const B of truth_values) {
			const value = operator(A, B);
			table.push({ A, B, value });
		}
	}
	return table;
}
console.log(compute_truth_table(exclusive_or)); //pure.

function show_truth_table() {
	console.log('show');
}

console.log(show_truth_table()); // impure.
