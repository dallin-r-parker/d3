d3.select('h1').style('color', 'red')

d3.selectAll('p')
    .data([25, 30, 35])
    .style('font-size', d => (`${d}px`))

    // Selection examples

d3.select('#foo')    
// selects the element with an id="foo" attribute 
d3.selectAll('.primary') 
// selects all elements with CSS class primary 
d3.selectAll('div')   
// select all divs on the page 