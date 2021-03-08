const svg = d3.select('svg');
const width = +svg.attr('width');
const height = +svg.attr('height');	

const makeFruit = type => ({ 
	type,
	id: Math.random()	
});
let fruits = d3.range(5)
	.map(() => makeFruit('apple'));
	
const render = fruitBowl;
	
render(svg, { fruits });
setTimeout(() => {
	fruits.pop();
	render(svg, { fruits });
}, 1000);

setTimeout(() => {
	fruits[2].type = 'lemon';
	render(svg, { fruits });
}, 2000);

setTimeout(() => {
	fruits = fruits.filter((d, i) => i !== 1);
	render(svg, { fruits });
}, 3000);

		