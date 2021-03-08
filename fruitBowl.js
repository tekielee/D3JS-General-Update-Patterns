const colorScale = d3.scaleOrdinal()
	.domain(['apple', 'lemon'])
	.range(['#c11d1d', '#eae600']);
	
const radiusScale = d3.scaleOrdinal()
	.domain(['apple', 'lemon'])
	.range([50, 30]);

const fruitBowl = (selection, { fruits }) => {	
	const circle = selection.selectAll('circle').data(fruits, d => d.id);
	const bowl = selection.selectAll('rect')
		.data([null])
		.enter().append('rect')
			.attr('y', 110)
			.attr('width', 605)
			.attr('height', 300)
			.attr('rx', 300 /2);
		
	circle
		.enter().append('circle')
			.attr('cx', (d, i) => i * 120 + 60)
			.attr('cy', height / 2)
			.attr('r', 0)
		.merge(circle)
			.attr('fill', d => colorScale(d.type))
		.transition().duration(1000)
			.attr('cx', (d, i) => i * 120 + 60)
			.attr('r', d => radiusScale(d.type));
	circle.exit()
		.transition().duration(1000)
			.attr('r', 0)
		.remove();
		
	const text = selection.selectAll('text').data(fruits);
	
	text
		.enter().append('text')
			.attr('x', (d, i) => i * 120 + 60)
			.attr('y', height / 2 + 80)
		.merge(text)
			.text(d => d.type)
	text.exit().remove();	
}