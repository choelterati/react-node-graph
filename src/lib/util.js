/* not bound to style, should be computed */

export function computeInOffsetByIndex(x,y,index) {
	let outx = x + 16.5;
	let outy = y + 41 + (index * 20);

	return {x:outx, y:outy};
}

export function computeOutOffsetByIndex(x,y,index) {

	let outx = x + 471.5;
	let outy = y + 43 + (index * 22);

	return {x:outx, y:outy};

}
