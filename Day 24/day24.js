// Create a function that finds the maximum range of a triangles third edge.

function nextEdge(side1, side2) {
	return (side1 + side2) - 1;
}

console.log(nextEdge(8, 10));
