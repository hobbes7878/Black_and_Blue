///////// DATA //////////


/// VIZ 1 ///
//organized: black | other | white
var outer_dataset = {
Y2012:  [4318, 842,  13994],
Y2011:  [4907, 949,  18098],
Y2010:  [4907, 949,  18098],
Y2009:  [4766, 944,  16938],
Y2008:  [3913, 745,  12268],
Y2007:  [3724, 737,  11273],
Y2006:  [3162, 658,  10783],
Y2005:  [2917, 568,  10084],
Y2004:  [3904, 699,  13961],
Y2003:  [3131, 639,  11530],
};
//organized: black | other | white 
var inner_dataset = {
Y2012:  [  10.05, 10.41, 79.54],
Y2011:  [  9.94, 10.7, 79.36],
Y2010:  [ 10.14, 8.62, 81.24],
Y2009:  [ 10.07, 8.64, 81.29],
Y2008:  [ 10.37, 9, 80.53],
Y2007:  [ 10.16, 8.42, 81.42],
Y2006:  [  9.84, 8.11, 82.05],
Y2005:  [  9.82, 8.52, 81.67],
Y2004:  [  9.31, 8.05, 82.64],
Y2003:  [  9.30, 7.89, 82.81],
};
var total_dataset = {
Y2012:  [19154],
Y2011:  [23954],
Y2010:  [23954],
Y2009:  [22648],
Y2008:  [16926],
Y2007:  [15734],
Y2006:  [14603],
Y2005:  [13569],
Y2004:  [18564],
Y2003:  [15300],
};
var black_overrep = {
Y2012:  ["2.2x"],
Y2011:  ["2.1x"],
Y2010:  ["2.0x"],
Y2009:  ["2.1x"],
Y2008:  ["2.2x"],
Y2007:  ["2.3x"],
Y2006:  ["2.2x"],
Y2005:  ["2.2x"],
Y2004:  ["2.3x"],
Y2003:  ["2.2x"],
};

/// VIZ 2 ///
//organized: black | other | white
var prestop = {
  Investigative:  [163,    17,   213  ],
  Moving:         [1361,  327,  5260 ],
  Non_moving:     [2266,  385,  6470 ]
};

/// VIZ 3 ///
var poststop ={
  Citation:     [1175,  255,  4293 ],
  Warning:      [3016,  567,  9741 ],
  Arrest:       [465,   58,   538  ],
  Drug_Arrest:  [73,    4,    84   ]
};

var pop2012 ={
  Y2012:  [  10.05, 10.41, 79.54],
};




///////// CONSTANTS //////////
var outer_width = 400,
    outer_height = 400,
    outer_radius = Math.min(outer_width, outer_height) / 2;

var inner_radius = outer_radius - 82;


var color = d3.scale.ordinal()
    .range(colorbrewer.MySet[1]);
//var color = d3.scale.category10();



///////// VIZ #1 //////////

var outer_pie = d3.layout.pie()
    .sort(null);
var inner_pie = d3.layout.pie()
    .sort(null);
var outer_arc = d3.svg.arc()
    .innerRadius(outer_radius - 100)
    .outerRadius(outer_radius - 50);
var inner_arc = d3.svg.arc()
    .innerRadius(inner_radius - 70)
    .outerRadius(inner_radius - 20);


var inner_svg = d3.select(".svg_container#AG_total").append("svg")
    .attr("class","inner")
    .attr("width", outer_width)
    .attr("height", outer_height)
  .append("g")
    .attr("transform", "translate(" + outer_width / 2  + "," + outer_height / 2  + ")")
    .attr("stroke","white")
    .attr("stroke-width",2);

var outer_svg = d3.select(".svg_container#AG_total").append("svg")
    .attr("class","outer")
    .attr("width", outer_width)
    .attr("height", outer_height)
  .append("g")
    .attr("transform", "translate(" + outer_width / 2 + "," + outer_height / 2 + ")")
    .attr("stroke","white")
    .attr("stroke-width",2);
    //trial
    
var outer_path = outer_svg.selectAll("path")
    .data(outer_pie(outer_dataset.Y2012))
  .enter().append("path")
    .attr("fill", function(d, i) { return color(i); })
    .attr("d", outer_arc)
    .each(function(d) { this._current = d; }); // store the initial values

var inner_path = inner_svg.selectAll("path")
    .data(inner_pie(inner_dataset.Y2012))
  .enter().append("path")
    .attr("fill", function(d, i) { return color(i); })
    .attr("d", inner_arc)
    .each(function(d) { this._current = d; });



///////// VIZ #2 //////////

var pre_outer_pie = d3.layout.pie()
    .sort(null);

var pre_inner_pie = d3.layout.pie()
    .sort(null);


var pre_outer_arc = d3.svg.arc()
    .innerRadius(outer_radius - 100)
    .outerRadius(outer_radius - 50);
var pre_inner_arc = d3.svg.arc()
    .innerRadius(inner_radius - 70)
    .outerRadius(inner_radius - 20);


var pre_inner_svg = d3.select(".svg_container#prestop").append("svg")
    .attr("class","inner")
    .attr("width", outer_width)
    .attr("height", outer_height)
  .append("g")
    .attr("transform", "translate(" + outer_width / 2  + "," + outer_height / 2  + ")")
    .attr("stroke","white")
    .attr("stroke-width",2);

var pre_outer_svg = d3.select(".svg_container#prestop").append("svg")
    .attr("class","outer")
    .attr("width", outer_width)
    .attr("height", outer_height)
  .append("g")
    .attr("transform", "translate(" + outer_width / 2 + "," + outer_height / 2 + ")")
    .attr("stroke","white")
    .attr("stroke-width",2);

var pre_outer_path = pre_outer_svg.selectAll("path")
    .data(pre_outer_pie(prestop.Investigative))
  .enter().append("path")
    .attr("fill", function(d, i) { return color(i); })
    .attr("d", pre_outer_arc)
    .each(function(d) { this._current = d; }); // store the initial values

var pre_inner_path = pre_inner_svg.selectAll("path")
    .data(pre_inner_pie(pop2012.Y2012))
  .enter().append("path")
    .attr("fill", function(d, i) { return color(i); })
    .attr("d", pre_inner_arc)
    .each(function(d) { this._current = d; });


///////// VIZ #3 //////////

var post_outer_pie = d3.layout.pie()
    .sort(null);

var post_inner_pie = d3.layout.pie()
    .sort(null);

var post_outer_arc = d3.svg.arc()
    .innerRadius(outer_radius - 100)
    .outerRadius(outer_radius - 50);
var post_inner_arc = d3.svg.arc()
    .innerRadius(inner_radius - 70)
    .outerRadius(inner_radius - 20);


var post_inner_svg = d3.select(".svg_container#poststop").append("svg")
    .attr("class","inner")
    .attr("width", outer_width)
    .attr("height", outer_height)
  .append("g")
    .attr("transform", "translate(" + outer_width / 2  + "," + outer_height / 2  + ")")
    .attr("stroke","white")
    .attr("stroke-width",2);

var post_outer_svg = d3.select(".svg_container#poststop").append("svg")
    .attr("class","outer")
    .attr("width", outer_width)
    .attr("height", outer_height)
  .append("g")
    .attr("transform", "translate(" + outer_width / 2 + "," + outer_height / 2 + ")")
    .attr("stroke","white")
    .attr("stroke-width",2);

var post_outer_path = post_outer_svg.selectAll("path")
    .data(post_outer_pie(poststop.Arrest))
  .enter().append("path")
    .attr("fill", function(d, i) { return color(i); })
    .attr("d", pre_outer_arc)
    .each(function(d) { this._current = d; }); // store the initial values

var post_inner_path = post_inner_svg.selectAll("path")
    .data(post_inner_pie(pop2012.Y2012))
  .enter().append("path")
    .attr("fill", function(d, i) { return color(i); })
    .attr("d", pre_inner_arc)
    .each(function(d) { this._current = d; });




///////// CONSTANTS //////////

var tooltips= d3.selectAll("path")
  .append("title")
    //.style("pointer-events","all")
    .classed("tooltip", true)
    .text(function(d) {
      return d.value + " stops"
    });




d3.selectAll("#AG_select").on("change", change_viz1);
d3.selectAll("input[type='radio'][name='prestop']").on("change", change_viz2);
d3.selectAll("input[type='radio'][name='stop_result']").on("change", change_viz3);


/// CHANGE FUNCTIONS ///


function change_viz1() {
  outer_path = outer_path.data(outer_pie(outer_dataset[this.value])); // update the data
  outer_path.transition().duration(750).attrTween("d", arcOuterTween); // redraw the arcs
  outer_path.select("title").text(function(d) {return d.value + " stops"});

  inner_path = inner_path.data(inner_pie(inner_dataset[this.value])); // update the data
  inner_path.transition().duration(750).attrTween("d", arcInnerTween);
  
  

  document.getElementById("total_stops").innerHTML ="<font style=\"font:italic 11px Constantina,Georgia,'Nimbus Roman No9 L',serif;\">Total Stops:</font> <br>"+total_dataset[AG_select.value]; // redraw the arcs
  document.getElementById("discrepancy").innerHTML = "<font style=\"font:italic 11px Constantina,Georgia,'Nimbus Roman No9 L',serif;\">Black Overrepresentation:</font> <br>"+black_overrep[AG_select.value] +"<br>";
}





// Store the displayed angles in _current.
// Then, interpolate from _current to the new angles.
// During the transition, _current is updated in-place by d3.interpolate.

function arcOuterTween(a) {
  var i = d3.interpolate(this._current, a);
  this._current = i(0);
  return function(t) {
    return outer_arc(i(t));
  };
}

function arcInnerTween(a) {
  var i = d3.interpolate(this._current, a);
  this._current = i(0);
  return function(t) {
    return inner_arc(i(t));
  };
}

function change_viz2() {
  pre_outer_path = pre_outer_path.data(pre_outer_pie(prestop[this.value])); // update the data
  pre_outer_path.transition().duration(750).attrTween("d", pre_arcOuterTween); // redraw the arcs
  pre_outer_path.select("title").text(function(d) {return d.value + " stops"});
}

// Store the displayed angles in _current.
// Then, interpolate from _current to the new angles.
// During the transition, _current is updated in-place by d3.interpolate.

function pre_arcOuterTween(a) {
  var i = d3.interpolate(this._current, a);
  this._current = i(0);
  return function(t) {
    return pre_outer_arc(i(t));
  };
}


function change_viz3() {
  post_outer_path = post_outer_path.data(post_outer_pie(poststop[this.value])); // update the data
  post_outer_path.transition().duration(750).attrTween("d", post_arcOuterTween); // redraw the arcs
  post_outer_path.select("title").text(function(d) {return d.value});
}



function post_arcOuterTween(a) {
  var i = d3.interpolate(this._current, a);
  this._current = i(0);
  return function(t) {
    return post_outer_arc(i(t));
  };
}

