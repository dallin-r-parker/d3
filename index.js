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


    //Scales examples

    //Linear scales are the most straightforward as they
    //directly translate values from one context to another.

const percentToDecimal = d3.scaleLinear()
  .domain([0,100])
  .range([0, 1]);

  console.log(percentToDecimal(0))
  console.log(percentToDecimal(50))
  console.log(percentToDecimal(100))

 // SVG ================================
  d3.selectAll('svg').style('background', 'yellow')

  // ENTER & EXIT =======================
d3.select('body')
    .selectAll('p')
    .data([5,10,15])
    .enter().append('p')
    .text(d => (`I'm number ${d}!`))

let p = d3.select('body')
    .selectAll('p')
    .data([5,10,15])
    .text(d => (d));

p.enter().append('p')
    .text(d => (d))
    .style('color', 'white');

p.exit().remove()

// TRANSITIONS ==============================
d3.select('body').transition()
    .duration(1000)
    .delay((d, i) => (i * 10))
    .style('background-color', 'black')

// d3.selectAll('circle').transition()
//     .duration(750)
//     .delay((d, i) => (i * 10))
//     .attr('r', d => (Math.sqrt(d * scale)));
    //todo: need to fix scale not being defined


// DAY TWO ====================================
const foo = d3.select('#foo').transition()
.duration(1500)
.style('background', 'green')
