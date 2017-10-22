

var width = 1000;
    var height = 600;


var projection = d3.geo.albersUsa()
    .scale(1100)
    .translate([width/2, height / 2]);

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select("body").append("svg")
    .style("width", width)
    .style("height", height);


//svg.append("rect")
  //  .attr("class", "background")
    //.attr("width", width)
    //.attr("height", height);
//    .on("click", clicked);

var g = svg.append("g");

d3.json("us.json", function(unitedState) {
  var data = topojson.feature(unitedState, unitedState.objects.states).features;
  d3.tsv("us-state-names.tsv", function(tsv){
    var names = {};
	var fullNames= {};
    tsv.forEach(function(d,i){
      names[d.id] = d.code;
	  fullNames[d.id] = d.name;
    });
    
    g.append("g")
      .attr("class", "states-bundle")
      .selectAll("path")
      .data(data)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("stroke", "white")
      .attr("class", "states")
	.on("mouseover", function(d) {

					//Get this bar's x/y values, then augment for the tooltip
					//var xPosition = parseFloat(d3.select(this).attr("x")) + xScale.rangeBand() / 2;
					//var yPosition = parseFloat(d3.select(this).attr("y")) / 2 + h / 2;

					//Update the tooltip position and value
					/*d3.select("#tooltip")
						.style("left", xPosition + "px")
						.style("top", yPosition + "px")						
						.select("#value")
						.text(d);*/
		
					/*d3.select("#tooltip")
						.style("left", path.centroid(d)[0]+"px")
						.style("top", path.centroid(d)[1]-100+"px")						
						.select("#valueState")
						.text(fullNames[d.id]);*/
		
					
				var pupuset = getImportNExport4AState([fullNames[d.id]], 
										 ["2013","2014","2015","2016"], 
										 ["S","N","All"],
										 ["0"]);
		
				d3.select("#tooltip")
						.style("left", path.centroid(d)[0]+"px")
						.style("top", path.centroid(d)[1]-100+"px")						
						.select("#valueState")
						.text(fullNames[d.id]+". The amount of import: "+pupuset);
		
		
					//Show the tooltip
					d3.select("#tooltip").classed("hidden", false);

			   })
			   .on("mouseout", function() {
			   
					//Hide the tooltip
					d3.select("#tooltip").classed("hidden", true);
					
			   });
      
     g.append("g")
      .attr("class", "states-names")
      .selectAll("text")
      .data(data)
      .enter()
      .append("svg:text")
      .text(function(d){
        return names[d.id];
      })
      .attr("x", function(d){
          return path.centroid(d)[0];
      })
      .attr("y", function(d){
          return  path.centroid(d)[1];
      })
      .attr("text-anchor","middle")
      .attr('fill', 'green');

  });
});