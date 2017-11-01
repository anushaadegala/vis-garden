var score5=0;
var score6=0;
var score7=0;

function loadData()
{
	buildMap();
	//buildMapPie();
	d3.select(".mapPieSVG").classed("hidden", true);
	d3.select("#mapPieTip").classed("hidden", true);
	d3.select("#mapState").classed("hidden", true);
	//buildBar();
	//buildBarPie();
	//buildBarLine();
	
}

function buildBarLine()
{
			var w = 250;
			var h = 100;
			var barPadding = 1;
			
			var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
							11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
	
			  var svg4barSVG = d3.select("#barLineSVG")
			                    .attr("width", w)
								.attr("height", h);
			  
			  svg4barSVG.selectAll("rect")
			   .data(dataset)
			   .enter()
			   .append("rect")
			   .attr("x", function(d, i) {
			   		return i * (w / dataset.length);
			   })
			   .attr("y", function(d) {
			   		return h - (d * 4);
			   })
			   .attr("width", w / dataset.length - barPadding)
			   .attr("height", function(d) {
			   		return d * 4;
			   })
			   .attr("fill", function(d) {
					return "rgb(0, 0, " + (d * 10) + ")";
			   });
}

function buildBarPie()
{
			var w = 250;
			var h = 100;
			var barPadding = 1;
			
			var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
							11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
	
			  var svg4barSVG = d3.select("#barPieSVG")
			                    .attr("width", w)
								.attr("height", h);
			  
			  svg4barSVG.selectAll("rect")
			   .data(dataset)
			   .enter()
			   .append("rect")
			   .attr("x", function(d, i) {
			   		return i * (w / dataset.length);
			   })
			   .attr("y", function(d) {
			   		return h - (d * 4);
			   })
			   .attr("width", w / dataset.length - barPadding)
			   .attr("height", function(d) {
			   		return d * 4;
			   })
			   .attr("fill", function(d) {
					return "rgb(0, 0, " + (d * 10) + ")";
			   });
}

function buildBar()
{
			var w = 500;
			var h = 100;
			var barPadding = 1;
			
			var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
							11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
	
			  var svg4barSVG = d3.select("#barSVG")
			                    .attr("width", w)
								.attr("height", h);
			  
			  svg4barSVG.selectAll("rect")
			   .data(dataset)
			   .enter()
			   .append("rect")
			   .attr("x", function(d, i) {
			   		return i * (w / dataset.length);
			   })
			   .attr("y", function(d) {
			   		return h - (d * 4);
			   })
			   .attr("width", w / dataset.length - barPadding)
			   .attr("height", function(d) {
			   		return d * 4;
			   })
			   .attr("fill", function(d) {
					return "rgb(0, 0, " + (d * 10) + ")";
			   });		
}

function buildMapPie(stateName)
{
    var w = 300,                        //width
    h = 300,                            //height
    r = 150,                            //radius
    color = d3.scale.category20c();     //builtin range of colors

	var paraCommodity=$("#wayCommodity").prop('checked');
	var paraCountry=$("#wayCountry").prop('checked');
	if (paraCountry)
		{
			var paraExport=$("#wayExport").prop('checked');
			var paraImport=$("#wayImport").prop('checked');
			if (paraExport)
				{
					d3.csv("file/country_ex.csv", function(error, data){
		  					if(error)
		  					{
			  					console.log(error);
		  					}
		  					else
		  					{
								var paraFirstLayer=$("#firstLayer").prop('checked');
								var paraSecondLayer=$("#secondLayer").prop('checked');
								var para2013=$("#year2013").prop('checked');
								var para2014=$("#year2014").prop('checked');
								var para2015=$("#year2015").prop('checked');
								var para2016=$("#year2016").prop('checked');
								if (paraFirstLayer)
									{
										var returnInformation=[];
										var tempAllCountryInformation=[];
										
										//build an array and fill 
										//d[0] country name
										for (b1=1;b1<country1stLevel.length;b1++)
											{
												eachCountry=[country1stLevel[b1][1],0,0,"",0,0,0,0];
												tempAllCountryInformation.push(eachCountry);
											}
										
										
										for (ri=1;ri<=25;ri++)
											{
												var data4AState = data.filter(function(d)
																	  {
												if(d["statename"] == stateName && d["rank"] == ri)
												{ 
            										return d;
        										} 
    					  						});
												
						  						var theAmount=0;
												if(para2013)
													{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2013;}}))}
												if(para2014)
													{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2014;}}))}
												if(para2015)
													{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2015;}}))}
												if(para2016)
													{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2016;}}))}
												
												for (ci=0;ci<tempAllCountryInformation.length;ci++)
													{
														if (tempAllCountryInformation[ci][0]==get1stCountryNameby2ndCountryName(data4AState.map(function(d)
														   {
															return d.countryd;
													})))
															{
																//add [1] the amount
																tempAllCountryInformation[ci][1]=(
																	parseFloat(tempAllCountryInformation[ci][1])+
																	parseFloat(theAmount)).toFixed(2);
															}
													}
											}
										for (f=0;f<tempAllCountryInformation.length;f++)
											{
												if(parseFloat(tempAllCountryInformation[f][1])>0)
													{returnInformation.push({
														"label": tempAllCountryInformation[f][0], "value": parseFloat(tempAllCountryInformation[f][1])});}
													//{returnInformation.push(tempAllCountryInformation[f]);}
											}
										//console.log("CEB");
										//console.log(returnInformation);
										var vis = d3.select("body")
										.append("svg:svg")              
										.data([returnInformation])                   
										.attr("width", w)           
										.attr("height", h)
										.attr("class","mapPiePanel")
										.attr("id","mapPieSVG")
										.append("svg:g")                
										.attr("transform", "translate(" + r + "," + r + ")")    

									var arc = d3.svg.arc()              
										.outerRadius(r);

									var pie = d3.layout.pie()           
										.value(function(d) { return d.value; });    

									var arcs = vis.selectAll("g.slice")     
										.data(pie)                          
										.enter()                            
										.append("svg:g")                
										.attr("class", "slice");   
     
										arcs.append("svg:path")
											.attr("fill", function(d, i) { return color(i); } ) 
											.attr("d", arc)
										    .on("mouseover", function(d, i) {
											d3.select("#mapPieSVG").classed("hidden", false);
											d3.select("#mapPieTip").classed("hidden", false);
											$('#mapPielValue').html(returnInformation[i].label).show();
										})
											.on("mouseout", function() {
											d3.select("#mapPieTip").classed("hidden", true);
				   							});
										
										arcs.append("svg:text")                                     
												.attr("transform", function(d) {                    
												d.innerRadius = 0;
												d.outerRadius = r;
												return "translate(" + arc.centroid(d) + ")";       
											})
											.attr("text-anchor", "middle")                         
											.text(function(d, i) { return get16Characters(returnInformation[i].label); });
									}
								else if (paraSecondLayer)
									{
										var returnInformationSecond=[];
										var tempAllCountryInformation=[];
										for (ri=1;ri<=25;ri++)
											{
												var data4AState = data.filter(function(d)
																	  {
												if(d["statename"] == stateName && d["rank"] == ri)
												{ 
            										return d;
        										} 
    					  						});
												
												var theAmount=0;
												if(para2013)
													{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2013;}}))}
												if(para2014)
													{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2014;}}))}
												if(para2015)
													{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2015;}}))}
												if(para2016)
													{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2016;}}))}
												
												tempAllCountryInformation.push([
													(data4AState.map(function(d)
														   {
																return d.countryd;
																		})).toString(),
													(parseFloat(theAmount)).toFixed(2)]
												);
											}
										for (f=0;f<tempAllCountryInformation.length;f++)
											{
												if(parseFloat(tempAllCountryInformation[f][1])>0)
													{returnInformationSecond.push({
														"label": tempAllCountryInformation[f][0], "value":parseFloat(tempAllCountryInformation[f][1])});}
													//{returnInformation.push(tempAllCountryInformation[f]);}
											}
										
										
										//console.log("CES");
										//console.log(data);
										//console.log(returnInformation);
										var vis = d3.select("body")
										.append("svg:svg")              
										.data([returnInformationSecond])                   
										.attr("width", w)           
										.attr("height", h)
										.attr("class","mapPiePanel")
										.attr("id","mapPieSVG")
										.append("svg:g")                
										.attr("transform", "translate(" + r + "," + r + ")")    

									var arc = d3.svg.arc()              
										.outerRadius(r);

									var pie = d3.layout.pie()           
										.value(function(d) { return d.value; });    

									var arcs = vis.selectAll("g.slice")     
										.data(pie)                          
										.enter()                            
										.append("svg:g")                
										.attr("class", "slice");   
  
										arcs.append("svg:path")
											.attr("fill", function(d, i) { return color(i); } ) 
											.attr("d", arc)
											.on("mouseover", function(d, i) {
											d3.select("#mapPieSVG").classed("hidden", false);
											d3.select("#mapPieTip").classed("hidden", false);
											$('#mapPielValue').html(returnInformationSecond[i].label).show();
										})
											.on("mouseout", function() {
											d3.select("#mapPieTip").classed("hidden", true);
				   							});
											

										arcs.append("svg:text")                                     
												.attr("transform", function(d) {                    
												d.innerRadius = 0;
												d.outerRadius = r;
												return "translate(" + arc.centroid(d) + ")";       
											})
											.attr("text-anchor", "middle")                         
											.text(function(d, i) { return get16Characters(returnInformationSecond[i].label); });
									}
								else 
									{console.log("no value from firstLayer or secondLayer. (at buildMapPie())");}
		  					}
							});
				}
			else if (paraImport)
				{
					d3.csv("file/country_in.csv", function(error, data){
		  					if(error)
		  					{
			  					console.log(error);
		  					}
		  					else
		  					{
								var paraFirstLayer=$("#firstLayer").prop('checked');
								var paraSecondLayer=$("#secondLayer").prop('checked');
								var para2013=$("#year2013").prop('checked');
								var para2014=$("#year2014").prop('checked');
								var para2015=$("#year2015").prop('checked');
								var para2016=$("#year2016").prop('checked');
								if (paraFirstLayer)
									{
										var returnInformation=[];
										var tempAllCountryInformation=[];
										
										//build an array and fill 
										//d[0] country name
										for (b1=1;b1<country1stLevel.length;b1++)
											{
												eachCountry=[country1stLevel[b1][1],0,0,"",0,0,0,0];
												tempAllCountryInformation.push(eachCountry);
											}
										
										
										for (ri=1;ri<=25;ri++)
											{
												var data4AState = data.filter(function(d)
																	  {
												if(d["statename"] == stateName && d["rank"] == ri)
												{ 
            										return d;
        										} 
    					  						});
												
						  						var theAmount=0;
												if(para2013)
													{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2013;}}))}
												if(para2014)
													{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2014;}}))}
												if(para2015)
													{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2015;}}))}
												if(para2016)
													{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2016;}}))}
												
												for (ci=0;ci<tempAllCountryInformation.length;ci++)
													{
														if (tempAllCountryInformation[ci][0]==get1stCountryNameby2ndCountryName(data4AState.map(function(d)
														   {
															return d.countryd;
													})))
															{
																//add [1] the amount
																tempAllCountryInformation[ci][1]=(
																	parseFloat(tempAllCountryInformation[ci][1])+
																	parseFloat(theAmount)).toFixed(2);
															}
													}
											}
										for (f=0;f<tempAllCountryInformation.length;f++)
											{
												if(parseFloat(tempAllCountryInformation[f][1])>0)
													{returnInformation.push({
														"label": tempAllCountryInformation[f][0], "value": parseFloat(tempAllCountryInformation[f][1])});}
													//{returnInformation.push(tempAllCountryInformation[f]);}
											}
										//console.log("CEB");
										//console.log(returnInformation);
										var vis = d3.select("body")
										.append("svg:svg")              
										.data([returnInformation])                   
										.attr("width", w)           
										.attr("height", h)
										.attr("class","mapPiePanel")
										.attr("id","mapPieSVG")
										.append("svg:g")                
										.attr("transform", "translate(" + r + "," + r + ")")    

									var arc = d3.svg.arc()              
										.outerRadius(r);

									var pie = d3.layout.pie()           
										.value(function(d) { return d.value; });    

									var arcs = vis.selectAll("g.slice")     
										.data(pie)                          
										.enter()                            
										.append("svg:g")                
										.attr("class", "slice");   

										arcs.append("svg:path")
											.attr("fill", function(d, i) { return color(i); } ) 
											.attr("d", arc)
											.on("mouseover", function(d, i) {
											d3.select("#mapPieSVG").classed("hidden", false);
											d3.select("#mapPieTip").classed("hidden", false);
											$('#mapPielValue').html(returnInformation[i].label).show();
										})
											.on("mouseout", function() {
											d3.select("#mapPieTip").classed("hidden", true);
				   							});                                    

										arcs.append("svg:text")                                     
												.attr("transform", function(d) {                    
												d.innerRadius = 0;
												d.outerRadius = r;
												return "translate(" + arc.centroid(d) + ")";       
											})
											.attr("text-anchor", "middle")                         
											.text(function(d, i) { return get16Characters(returnInformation[i].label); });
									}
								else if (paraSecondLayer)
									{
										var returnInformationSecond=[];
										var tempAllCountryInformation=[];
										for (ri=1;ri<=25;ri++)
											{
												var data4AState = data.filter(function(d)
																	  {
												if(d["statename"] == stateName && d["rank"] == ri)
												{ 
            										return d;
        										} 
    					  						});
												
												var theAmount=0;
												if(para2013)
													{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2013;}}))}
												if(para2014)
													{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2014;}}))}
												if(para2015)
													{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2015;}}))}
												if(para2016)
													{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2016;}}))}
												
												tempAllCountryInformation.push([
													(data4AState.map(function(d)
														   {
																return d.countryd;
																		})).toString(),
													(parseFloat(theAmount)).toFixed(2)]
												);
											}
										for (f=0;f<tempAllCountryInformation.length;f++)
											{
												if(parseFloat(tempAllCountryInformation[f][1])>0)
													{returnInformationSecond.push({
														"label": tempAllCountryInformation[f][0], "value":parseFloat(tempAllCountryInformation[f][1])});}
													//{returnInformation.push(tempAllCountryInformation[f]);}
											}
										
										
										//console.log("CES");
										//console.log(data);
										//console.log(returnInformation);
										var vis = d3.select("body")
										.append("svg:svg")              
										.data([returnInformationSecond])                   
										.attr("width", w)           
										.attr("height", h)
										.attr("class","mapPiePanel")
										.attr("id","mapPieSVG")
										.append("svg:g")                
										.attr("transform", "translate(" + r + "," + r + ")")    

									var arc = d3.svg.arc()              
										.outerRadius(r);

									var pie = d3.layout.pie()           
										.value(function(d) { return d.value; });    

									var arcs = vis.selectAll("g.slice")     
										.data(pie)                          
										.enter()                            
										.append("svg:g")                
										.attr("class", "slice");   

										/*arcs.append("svg:path")
											.attr("fill", function(d, i) { return color(i); } ) 
											.attr("d", arc);*/   
										arcs.append("svg:path")
											.attr("fill", function(d, i) { return color(i); } ) 
											.attr("d", arc)
											.on("mouseover", function(d, i) {
											d3.select("#mapPieSVG").classed("hidden", false);
											d3.select("#mapPieTip").classed("hidden", false);
											$('#mapPielValue').html(returnInformationSecond[i].label).show();
										})
											.on("mouseout", function() {
											d3.select("#mapPieTip").classed("hidden", true);
				   							});
											

										arcs.append("svg:text")                                     
												.attr("transform", function(d) {                    
												d.innerRadius = 0;
												d.outerRadius = r;
												return "translate(" + arc.centroid(d) + ")";       
											})
											.attr("text-anchor", "middle")                         
											.text(function(d, i) { return get16Characters(returnInformationSecond[i].label); });
									}
								else 
									{console.log("no value from firstLayer or secondLayer. (at buildMapPie())");}
		  					}
							});
				}
			else 
				{console.log("no value from exports or imports. (at buildMapPie())");}
		}
	else if (paraCommodity)
		{
			var paraExport=$("#wayExport").prop('checked');
			var paraImport=$("#wayImport").prop('checked');
			if (paraExport)
				{
					d3.csv("file/commodity_ex.csv", function(error, data){
		  					if(error)
		  					{
			  					console.log(error);
		  					}
		  					else
		  					{
								var paraFirstLayer=$("#firstLayer").prop('checked');
								var paraSecondLayer=$("#secondLayer").prop('checked');
								var para2013=$("#year2013").prop('checked');
								var para2014=$("#year2014").prop('checked');
								var para2015=$("#year2015").prop('checked');
								var para2016=$("#year2016").prop('checked');
								if (paraFirstLayer)
									{
										var returnInformation=[];
										var tempAllCommodityInformation=[];
										for (b1=1;b1<commodity1stLevel.length;b1++)
											{
												eachCommodity=[commodity1stLevel[b1][1],0];
												tempAllCommodityInformation.push(eachCommodity);
											}
										
										//console.log(tempAllCommodityInformation);
										for (ri=1;ri<=25;ri++)
											{
												var data4AState = data.filter(function(d)
																	  {
												if(d["statename"] == stateName && d["rank"] == ri)
												{ 
            										return d;
        										} 
    					  						});
												
												var theAmount=0;
												if(para2013)
													{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2013;}}))}
												if(para2014)
													{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2014;}}))}
												if(para2015)
													{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2015;}}))}
												if(para2016)
													{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2016;}}))}
												
											for (ci=0;ci<tempAllCommodityInformation.length;ci++)
													{
														if (tempAllCommodityInformation[ci][0]==get1stCommodityNameby2ndCommodityName(data4AState.map(function(d)
														   {
															return d.hs6;
													})))
															{
																//add [1] the amount
																tempAllCommodityInformation[ci][1]=(
																	parseFloat(tempAllCommodityInformation[ci][1])+
																	parseFloat(theAmount)).toFixed(2);
															}
													}
											}

										for (f=0;f<tempAllCommodityInformation.length;f++)
											{
												if(parseFloat(tempAllCommodityInformation[f][1])>0)
													{returnInformation.push({
														"label": tempAllCommodityInformation[f][0], "value":parseFloat(tempAllCommodityInformation[f][1])});}
													//{returnInformation.push(tempAllCommodityInformation[f]);}
											}

										//console.log("CEB");
										//console.log(returnInformation);
										var vis = d3.select("body")
										.append("svg:svg")              
										.data([returnInformation])                   
										.attr("width", w)           
										.attr("height", h)
										.attr("class","mapPiePanel")
										.attr("id","mapPieSVG")
										.append("svg:g")                
										.attr("transform", "translate(" + r + "," + r + ")")    

									var arc = d3.svg.arc()              
										.outerRadius(r);

									var pie = d3.layout.pie()           
										.value(function(d) { return d.value; });    

									var arcs = vis.selectAll("g.slice")     
										.data(pie)                          
										.enter()                            
										.append("svg:g")                
										.attr("class", "slice");   

										arcs.append("svg:path")
											.attr("fill", function(d, i) { return color(i); } ) 
											.attr("d", arc)
											.on("mouseover", function(d, i) {
											d3.select("#mapPieSVG").classed("hidden", false);
											d3.select("#mapPieTip").classed("hidden", false);
											$('#mapPielValue').html(returnInformation[i].label).show();
										})
											.on("mouseout", function() {
											d3.select("#mapPieTip").classed("hidden", true);
				   							});                                    

										arcs.append("svg:text")                                     
												.attr("transform", function(d) {                    
												d.innerRadius = 0;
												d.outerRadius = r;
												return "translate(" + arc.centroid(d) + ")";       
											})
											.attr("text-anchor", "middle")                         
											.text(function(d, i) { return get16Characters(returnInformation[i].label); });
									}
								else if (paraSecondLayer)
									{
										var returnInformationSecond=[];
										var tempAllCommodityInformation=[];
										for (ri=1;ri<=25;ri++)
											{
												var data4AState = data.filter(function(d)
																	  {
												if(d["statename"] == stateName && d["rank"] == ri)
												{ 
            										return d;
        										} 
    					  						});
												
												var theAmount=0;
												if(para2013)
													{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2013;}}))}
												if(para2014)
													{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2014;}}))}
												if(para2015)
													{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2015;}}))}
												if(para2016)
													{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2016;}}))}
												
												tempAllCommodityInformation.push([
													getCommodityNamebyCommodityCodeFromCVS(data4AState.map(function(d)
														   {
															return d.hs6;
													})),
													(parseFloat(theAmount)).toFixed(2)]
												);
											}
										
										//combine the same name of commodity names
										var temp2AllCommodityInformation=[];
										for(tj=0;tj<tempAllCommodityInformation.length;tj++)
											{
												if(tj==0)
													{
														temp2AllCommodityInformation.push(tempAllCommodityInformation[tj]);
													}
												else
												{
													var repeated=false;
													for (tk=0;tk<temp2AllCommodityInformation.length;tk++)
														{	
															if(temp2AllCommodityInformation[tk][0]==tempAllCommodityInformation[tj][0])
																{
																	//edit
																	//d[1] amount
																	temp2AllCommodityInformation[tk][1]=
																		(parseFloat(temp2AllCommodityInformation[tk][1])+
																		parseFloat(tempAllCommodityInformation[tj][1])).toFixed(2);
																		
																	repeated=true;
																	break;
																}
														}
													//add
													if(!repeated)
														{
															temp2AllCommodityInformation.push(tempAllCommodityInformation[tj]);
														}
												}
											}
										for (f=0;f<temp2AllCommodityInformation.length;f++)
											{
												if(parseFloat(temp2AllCommodityInformation[f][1])>0)
													{returnInformationSecond.push({
														"label": tempAllCommodityInformation[f][0], "value":parseFloat(tempAllCommodityInformation[f][1])});}
													//{returnInformation.push(temp2AllCommodityInformation[f]);}
											}
										
										
										//console.log("CES");
										//console.log(data);
										//console.log(returnInformation);
										var vis = d3.select("body")
										.append("svg:svg")              
										.data([returnInformationSecond])                   
										.attr("width", w)           
										.attr("height", h)
										.attr("class","mapPiePanel")
										.attr("id","mapPieSVG")
										.append("svg:g")                
										.attr("transform", "translate(" + r + "," + r + ")")    

									var arc = d3.svg.arc()              
										.outerRadius(r);

									var pie = d3.layout.pie()           
										.value(function(d) { return d.value; });    

									var arcs = vis.selectAll("g.slice")     
										.data(pie)                          
										.enter()                            
										.append("svg:g")                
										.attr("class", "slice");   

										/*arcs.append("svg:path")
											.attr("fill", function(d, i) { return color(i); } ) 
											.attr("d", arc);*/   
										arcs.append("svg:path")
											.attr("fill", function(d, i) { return color(i); } ) 
											.attr("d", arc)
											.on("mouseover", function(d, i) {
											d3.select("#mapPieSVG").classed("hidden", false);
											d3.select("#mapPieTip").classed("hidden", false);
											$('#mapPielValue').html(returnInformationSecond[i].label).show();
										})
											.on("mouseout", function() {
											d3.select("#mapPieTip").classed("hidden", true);
				   							});
											

										arcs.append("svg:text")                                     
												.attr("transform", function(d) {                    
												d.innerRadius = 0;
												d.outerRadius = r;
												return "translate(" + arc.centroid(d) + ")";       
											})
											.attr("text-anchor", "middle")                         
											.text(function(d, i) { return get16Characters(returnInformationSecond[i].label); });
									}
								else 
									{console.log("no value from firstLayer or secondLayer. (at buildMapPie())");}
		  					}
							});
				}
			else if (paraImport)
				{
					d3.csv("file/commodity_in.csv", function(error, data){
		  					if(error)
		  					{
			  					console.log(error);
		  					}
		  					else
		  					{
								var paraFirstLayer=$("#firstLayer").prop('checked');
								var paraSecondLayer=$("#secondLayer").prop('checked');
								var para2013=$("#year2013").prop('checked');
								var para2014=$("#year2014").prop('checked');
								var para2015=$("#year2015").prop('checked');
								var para2016=$("#year2016").prop('checked');
								if (paraFirstLayer)
									{
										var returnInformation=[];
										var tempAllCommodityInformation=[];
										for (b1=1;b1<commodity1stLevel.length;b1++)
											{
												eachCommodity=[commodity1stLevel[b1][1],0];
												tempAllCommodityInformation.push(eachCommodity);
											}
										
										//console.log(tempAllCommodityInformation);
										for (ri=1;ri<=25;ri++)
											{
												var data4AState = data.filter(function(d)
																	  {
												if(d["statename"] == stateName && d["rank"] == ri)
												{ 
            										return d;
        										} 
    					  						});
												
												var theAmount=0;
												if(para2013)
													{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2013;}}))}
												if(para2014)
													{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2014;}}))}
												if(para2015)
													{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2015;}}))}
												if(para2016)
													{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2016;}}))}
												
											for (ci=0;ci<tempAllCommodityInformation.length;ci++)
													{
														if (tempAllCommodityInformation[ci][0]==get1stCommodityNameby2ndCommodityName(data4AState.map(function(d)
														   {
															return d.hs6;
													})))
															{
																//add [1] the amount
																tempAllCommodityInformation[ci][1]=(
																	parseFloat(tempAllCommodityInformation[ci][1])+
																	parseFloat(theAmount)).toFixed(2);
															}
													}
											}

										for (f=0;f<tempAllCommodityInformation.length;f++)
											{
												if(parseFloat(tempAllCommodityInformation[f][1])>0)
													{returnInformation.push({
														"label": tempAllCommodityInformation[f][0], "value":parseFloat(tempAllCommodityInformation[f][1])});}
													//{returnInformation.push(tempAllCommodityInformation[f]);}
											}

										//console.log("CEB");
										//console.log(returnInformation);
										var vis = d3.select("body")
										.append("svg:svg")              
										.data([returnInformation])                   
										.attr("width", w)           
										.attr("height", h)
										.attr("class","mapPiePanel")
										.attr("id","mapPieSVG")
										.append("svg:g")                
										.attr("transform", "translate(" + r + "," + r + ")")    

									var arc = d3.svg.arc()              
										.outerRadius(r);

									var pie = d3.layout.pie()           
										.value(function(d) { return d.value; });    

									var arcs = vis.selectAll("g.slice")     
										.data(pie)                          
										.enter()                            
										.append("svg:g")                
										.attr("class", "slice");   

										arcs.append("svg:path")
											.attr("fill", function(d, i) { return color(i); } ) 
											.attr("d", arc)
											.on("mouseover", function(d, i) {
											d3.select("#mapPieSVG").classed("hidden", false);
											d3.select("#mapPieTip").classed("hidden", false);
											$('#mapPielValue').html(returnInformation[i].label).show();
										})
											.on("mouseout", function() {
											d3.select("#mapPieTip").classed("hidden", true);
				   							});                                    

										arcs.append("svg:text")                                     
												.attr("transform", function(d) {                    
												d.innerRadius = 0;
												d.outerRadius = r;
												return "translate(" + arc.centroid(d) + ")";       
											})
											.attr("text-anchor", "middle")                         
											.text(function(d, i) { return get16Characters(returnInformation[i].label); });
									}
								else if (paraSecondLayer)
									{
										var returnInformationSecond=[];
										var tempAllCommodityInformation=[];
										for (ri=1;ri<=25;ri++)
											{
												var data4AState = data.filter(function(d)
																	  {
												if(d["statename"] == stateName && d["rank"] == ri)
												{ 
            										return d;
        										} 
    					  						});
												
												var theAmount=0;
												if(para2013)
													{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2013;}}))}
												if(para2014)
													{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2014;}}))}
												if(para2015)
													{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2015;}}))}
												if(para2016)
													{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2016;}}))}
												
												tempAllCommodityInformation.push([
													getCommodityNamebyCommodityCodeFromCVS(data4AState.map(function(d)
														   {
															return d.hs6;
													})),
													(parseFloat(theAmount)).toFixed(2)]
												);
											}
										
										//combine the same name of commodity names
										var temp2AllCommodityInformation=[];
										for(tj=0;tj<tempAllCommodityInformation.length;tj++)
											{
												if(tj==0)
													{
														temp2AllCommodityInformation.push(tempAllCommodityInformation[tj]);
													}
												else
												{
													var repeated=false;
													for (tk=0;tk<temp2AllCommodityInformation.length;tk++)
														{	
															if(temp2AllCommodityInformation[tk][0]==tempAllCommodityInformation[tj][0])
																{
																	//edit
																	//d[1] amount
																	temp2AllCommodityInformation[tk][1]=
																		(parseFloat(temp2AllCommodityInformation[tk][1])+
																		parseFloat(tempAllCommodityInformation[tj][1])).toFixed(2);
																		
																	repeated=true;
																	break;
																}
														}
													//add
													if(!repeated)
														{
															temp2AllCommodityInformation.push(tempAllCommodityInformation[tj]);
														}
												}
											}
										for (f=0;f<temp2AllCommodityInformation.length;f++)
											{
												if(parseFloat(temp2AllCommodityInformation[f][1])>0)
													{returnInformationSecond.push({
														"label": tempAllCommodityInformation[f][0], "value":parseFloat(tempAllCommodityInformation[f][1])});}
													//{returnInformation.push(temp2AllCommodityInformation[f]);}
											}
										
										
										//console.log("CES");
										//console.log(data);
										//console.log(returnInformation);
										var vis = d3.select("body")
										.append("svg:svg")              
										.data([returnInformationSecond])                   
										.attr("width", w)           
										.attr("height", h)
										.attr("class","mapPiePanel")
										.attr("id","mapPieSVG")
										.append("svg:g")                
										.attr("transform", "translate(" + r + "," + r + ")")    

									var arc = d3.svg.arc()              
										.outerRadius(r);

									var pie = d3.layout.pie()           
										.value(function(d) { return d.value; });    

									var arcs = vis.selectAll("g.slice")     
										.data(pie)                          
										.enter()                            
										.append("svg:g")                
										.attr("class", "slice");   
 
										arcs.append("svg:path")
											.attr("fill", function(d, i) { return color(i); } ) 
											.attr("d", arc)
											.on("mouseover", function(d, i) {
											d3.select("#mapPieSVG").classed("hidden", false);
											d3.select("#mapPieTip").classed("hidden", false);
											$('#mapPielValue').html(returnInformationSecond[i].label).show();
										})
											.on("mouseout", function() {
											d3.select("#mapPieTip").classed("hidden", true);
				   							});
											

										arcs.append("svg:text")                                     
												.attr("transform", function(d) {                    
												d.innerRadius = 0;
												d.outerRadius = r;
												return "translate(" + arc.centroid(d) + ")";       
											})
											.attr("text-anchor", "middle")                         
											.text(function(d, i) { return get16Characters(returnInformationSecond[i].label); });
									}
								else 
									{console.log("no value from firstLayer or secondLayer. (at buildMapPie())");}
		  					}
							});
				}
			else 
				{console.log("no value from exports or imports. (at buildMapPie())");}
		}
	else{
		console.log("no value from country or commodity. (at buildMapPie())");
	}
	
    /*data = [{"label":"one", "value":20}, 
            {"label":"two", "value":50}, 
            {"label":"three", "value":30}];*/
    
	//from here
    /*var vis = d3.select("body")
        .append("svg:svg")              
        .data([data])                   
        .attr("width", w)           
        .attr("height", h)
		.attr("class","mapPiePanel")
	    .attr("id","mapPieSVG")
        .append("svg:g")                
        .attr("transform", "translate(" + r + "," + r + ")")    

    var arc = d3.svg.arc()              
        .outerRadius(r);

    var pie = d3.layout.pie()           
        .value(function(d) { return d.value; });    

    var arcs = vis.selectAll("g.slice")     
        .data(pie)                          
        .enter()                            
        .append("svg:g")                
        .attr("class", "slice");   

        arcs.append("svg:path")
            .attr("fill", function(d, i) { return color(i); } ) 
            .attr("d", arc);                                    

        arcs.append("svg:text")                                     
                .attr("transform", function(d) {                    
                d.innerRadius = 0;
                d.outerRadius = r;
                return "translate(" + arc.centroid(d) + ")";       
            })
            .attr("text-anchor", "middle")                         
            .text(function(d, i) { return data[i].label; });  */ 
	//to here
}

function buildMap()
{	
	var width = 800;
	var height = 600;
	var pupuset = [];

	var projection = d3.geo.albersUsa()
		.scale(800)
		.translate([width/2.5, height / 3]);

	var path = d3.geo.path()
		.projection(projection);

	/*var svg = d3.select("body").append("svg")
		.style("width", width)
		.style("height", height);*/
	var svg = d3.select("#mapSVG")
			  .attr("width", width)
			  .attr("height", height);

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
		  .on("click", function(d){
		      buildMapPie(fullNames[d.id]);
			  d3.select("#mapState").classed("hidden", false);
			  $('#mapState').html(fullNames[d.id]).show();
		  })
		  .on("mouseover", function(d) {
					var eachState=[];
				  		var stateName=fullNames[d.id];
				  
				  		eachState=[];
			
				  		//[0] state name
				  		eachState.push(stateName);
			
				  		//[1] the amount of import
						//[2] the amount of export
						var paraCommodity=$("#wayCommodity").prop('checked');
						var paraCountry=$("#wayCountry").prop('checked');
						if(paraCountry)
							{
							d3.csv("./file/country_in.csv", function(error, data){
					  		if(error){
						  		console.log(error);
					  		}
		  			  		else
		  			  		{
								var para2013=$("#year2013").prop('checked');
								var para2014=$("#year2014").prop('checked');
								var para2015=$("#year2015").prop('checked');
								var para2016=$("#year2016").prop('checked');
								
						  		var data4AState = data.filter(function(d) 
															 {
							  		if(d["statename"] == stateName && d["rank"] == "0" && d["countryd"] == "Top 25")
        								{ 
            							return d;
        								} 
    					  		});

						  	    var theAmount=0;
						  		if(para2013)
									{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2013;}}))}
								if(para2014)
									{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2014;}}))}
								if(para2015)
									{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2015;}}))}
								if(para2016)
									{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2016;}}))}
								
								eachState.push(theAmount.toFixed(2));
		  			  		}
				  		});
						d3.csv("./file/country_ex.csv", function(error, data){
					  		if(error){
						  		console.log(error);
					  		}
		  			  		else
		  			  		{
								var para2013=$("#year2013").prop('checked');
								var para2014=$("#year2014").prop('checked');
								var para2015=$("#year2015").prop('checked');
								var para2016=$("#year2016").prop('checked');
								
						  		var data4AState = data.filter(function(d) 
															 {
							  		if(d["statename"] == stateName && d["rank"] == "0" && d["countryd"] == "Top 25")
        								{ 
            							return d;
        								} 

    					  		});
								
								var theAmount=0;
						  		if(para2013)
									{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2013;}}))}
								if(para2014)
									{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2014;}}))}
								if(para2015)
									{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2015;}}))}
								if(para2016)
									{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2016;}}))}
								
								eachState.push(theAmount.toFixed(2));
								
								d3.select("#tooltip")
								.style("left", path.centroid(d)[0]+"px")
								.style("top", path.centroid(d)[1]-50+"px");
								
								d3.select('#valueState')
									.text(eachState[0]);
								d3.select('#valueImports')
									.text(numberWithCommas(eachState[1]));
								d3.select('#valueExports')
									.text(numberWithCommas(eachState[2]));
		  			  		}
				  		});
							}
						else if(paraCommodity)
							{
						    d3.csv("./file/commodity_in.csv", function(error, data){
					  		if(error){
						  		console.log(error);
					  		}
		  			  		else
		  			  		{
								var para2013=$("#year2013").prop('checked');
								var para2014=$("#year2014").prop('checked');
								var para2015=$("#year2015").prop('checked');
								var para2016=$("#year2016").prop('checked');
								
						  		var data4AState = data.filter(function(d) 
															 {
							  		if(d["statename"] == stateName && d["rank"] == "0" && d["hs6"] == "25")
        								{ 
            							return d;
        								} 

    					  		});
								
						  	    var theAmount=0;
						  		if(para2013)
									{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2013;}}))}
								if(para2014)
									{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2014;}}))}
								if(para2015)
									{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2015;}}))}
								if(para2016)
									{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2016;}}))}
								eachState.push(theAmount.toFixed(2));
		  			  		}
				  		});
						d3.csv("./file/commodity_ex.csv", function(error, data){
					  		if(error){
						  		console.log(error);
					  		}
		  			  		else
		  			  		{
								var para2013=$("#year2013").prop('checked');
								var para2014=$("#year2014").prop('checked');
								var para2015=$("#year2015").prop('checked');
								var para2016=$("#year2016").prop('checked');
								
						  		var data4AState = data.filter(function(d) 
															 {
							  		if(d["statename"] == stateName && d["rank"] == "0" && d["hs6"] == "25")
        								{ 
            							return d;
        								} 

    					  		});
								
						  	    var theAmount=0;
						  		if(para2013)
									{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2013;}}))}
								if(para2014)
									{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2014;}}))}
								if(para2015)
									{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2015;}}))}
								if(para2016)
									{theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d) {{return d.val2016;}}))}
								eachState.push(theAmount.toFixed(2));
								
								d3.select("#tooltip")
								.style("left", path.centroid(d)[0]+"px")
								.style("top", path.centroid(d)[1]-500+"px");
								
								d3.select('#valueState')
									.text(eachState[0]);
								d3.select('#valueImports')
									.text(numberWithCommas(eachState[1]));
								d3.select('#valueExports')
									.text(numberWithCommas(eachState[2]));
		  			  		}
				  		});
							}
						else
						{
							console.log("This is a parameter issue. (at buildMap())");
						}
	
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
}

function get16Characters(originalString)
{
	if (originalString.length<=16) {return originalString;}
	else {return originalString.substring(0,15)+"...";}
}


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//6.2.1 getImportNExport4AState
function getImportNExport4AState(states, years, countries, commodities)
{
	//at least one year
	if(years.length>0)
		{
			//state selected by Country on the map, so get data from country_ex.csv and country_in.csv
			if(countries.length>=3)
				{
					var returnInformation=[];
					var eachState=[];
					for(i = 0; i < states.length; i++) 
			  		{
				  		var stateName=states[i];
				  
				  		eachState=[];
				  		//[0] state name
				  		eachState.push(stateName);
				  		//[1] the amount of import
						
				  		d3.csv("./file/country_in.csv", function(error, data){
					  		if(error){
						  		console.log(error);
					  		}
		  			  		else
		  			  		{
						  		var data4AState = data.filter(function(d) 
															 {
							  		if(d["statename"] == stateName && d["rank"] == "0" && d["countryd"] == "Top 25")
        								{ 
            							return d;
        								} 

    					  		});
								
						  	    var theAmount=0;
						  		for(y = 0; y < years.length; y++)
							  		{										
								 		theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d)
														   {
											if (years[y]=="2013")
												{return d.val2013;}
											else if (years[y]=="2014")
												{return d.val2014;}
											else if (years[y]=="2015")
												{return d.val2015;}
											else if (years[y]=="2016")
												{return d.val2016;}
										})); 
							  		}
								eachState.push(theAmount.toFixed(2));
		  			  		}
				  		});
				  			//console.log(eachState);
							//[2] the amount of export
						d3.csv("./file/country_ex.csv", function(error, data){
					  		if(error){
						  		console.log(error);
					  		}
		  			  		else
		  			  		{
						  		var data4AState = data.filter(function(d) 
															 {
							  		if(d["statename"] == stateName && d["rank"] == "0" && d["countryd"] == "Top 25")
        								{ 
            							return d;
        								} 

    					  		});
								
						  	    var theAmount=0;
						  		for(y = 0; y < years.length; y++)
							  		{										
								 		theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d)
														   {
											if (years[y]=="2013")
												{return d.val2013;}
											else if (years[y]=="2014")
												{return d.val2014;}
											else if (years[y]=="2015")
												{return d.val2015;}
											else if (years[y]=="2016")
												{return d.val2016;}
										})); 
							  		}
								eachState.push(theAmount.toFixed(2));
		  			  		}
				  		});
						//console.log("eachState:" + eachState);
						returnInformation.push(eachState);
			  		}
					//console.log("the result:" + returnInformation);
				}
			//state selected by Commodity on the map, so get data from commodity_ex.csv and commodity_in.csv
			else if(commodities.length>=3)
				{
					var returnInformation=[];
					var eachState=[];
					for(i = 0; i < states.length; i++) 
			  		{
				  		var stateName=states[i];
				  
				  		eachState=[];
				  		//[0] state name
				  		eachState.push(stateName);
				  		//[1] the amount of import
				  		d3.csv("./file/commodity_in.csv", function(error, data){
					  		if(error){
						  		console.log(error);
					  		}
		  			  		else
		  			  		{
						  		var data4AState = data.filter(function(d) 
															 {
							  		if(d["statename"] == stateName && d["rank"] == "0" && d["hs6"] == "25")
        								{ 
            							return d;
        								} 

    					  		});
								
						  	    var theAmount=0;
						  		for(y = 0; y < years.length; y++)
							  		{										
								 		theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d)
														   {
											if (years[y]=="2013")
												{return d.val2013;}
											else if (years[y]=="2014")
												{return d.val2014;}
											else if (years[y]=="2015")
												{return d.val2015;}
											else if (years[y]=="2016")
												{return d.val2016;}
										})); 
							  		}
								eachState.push(theAmount.toFixed(2));
		  			  		}
				  		});
				  
							//[2] the amount of export
						d3.csv("./file/commodity_ex.csv", function(error, data){
					  		if(error){
						  		console.log(error);
					  		}
		  			  		else
		  			  		{
						  		var data4AState = data.filter(function(d) 
															 {
							  		if(d["statename"] == stateName && d["rank"] == "0" && d["hs6"] == "25")
        								{ 
            							return d;
        								} 

    					  		});
								
						  	    var theAmount=0;
						  		for(y = 0; y < years.length; y++)
							  		{										
								 		theAmount=parseFloat(theAmount)+parseFloat(data4AState.map(function(d)
														   {
											if (years[y]=="2013")
												{return d.val2013;}
											else if (years[y]=="2014")
												{return d.val2014;}
											else if (years[y]=="2015")
												{return d.val2015;}
											else if (years[y]=="2016")
												{return d.val2016;}
										})); 
							  		}
								eachState.push(theAmount.toFixed(2));
		  			  		}
				  		});
						
						returnInformation.push(eachState);
						
			  		}
					//console.log("the result:" + returnInformation);
				}
			else
			{
				console.log("This is a parameter issue. (at getImportNExport4AState)");
			}
				}
			//no year selected
			else
				{
			
				}
	//console.log("here");
	//console.log(returnInformation);
	return returnInformation;
}

//6.2.2 getCountry4AState
function getCountry4AState(states, years, countries, commodities, IE)
{
	var returnInformation=[];
	//at least one year
	if(years.length>0)
		{
			if(countries.length>=3)
				{
					var eachCountry=[];
					for(i = 0; i < states.length; i++) 
			  		{
				  		var stateName=states[i];
				  
				  		eachCountry=[];
					
					if(IE == "I")
						{
							d3.csv("file/country_in.csv", function(error, data){
		  					if(error)
		  					{
			  					console.log(error);
		  					}
		  					else
		  					{
								//get the total amount for a state
								//for example get 2013 to 2016 for Alabama
								var data4AState = data.filter(function(d) 
															 {
							  		if(d["statename"] == stateName && d["rank"] == "0" && d["countryd"] == "Top 25")
        								{ 
            							return d;
        								} 

    					  		});
								
								var theTotalAmount4AState=0;
						  		for(y = 0; y < years.length; y++)
							  		{										
								 		theTotalAmount4AState=parseFloat(theTotalAmount4AState)+parseFloat(data4AState.map(function(d)
														   {
											if (years[y]=="2013")
												{return d.val2013;}
											else if (years[y]=="2014")
												{return d.val2014;}
											else if (years[y]=="2015")
												{return d.val2015;}
											else if (years[y]=="2016")
												{return d.val2016;}
										})); 
							  		}
								
								/*//get data rows for each state
								//for example get 25 rows for Alabama
								var data4AStateAbout25 = data.filter(function(d) 
															 {
							  		if(d["statename"] == stateName && d["rank"] != "0")
        								{ 
            							return d;
        								}
									   
								});*/
								//get d[0], d[1], d[2], d[3] for each state	
								//for example get 2013 to 2016 for Alabama
			  					if(countries[0]=="B")
									{
										var tempAllCountryInformation=[];
										//build an array and fill 
										//d[0] country name
										for (b1=1;b1<country1stLevel.length;b1++)
											{
												eachCountry=[country1stLevel[b1][1],0,0,"",0,0,0,0];
												tempAllCountryInformation.push(eachCountry);
											}
										
										
										for (ri=1;ri<=25;ri++)
											{
												var data4AState = data.filter(function(d)
																	  {
												if(d["statename"] == stateName && d["rank"] == ri)
												{ 
            										return d;
        										} 
    					  						});
												
												var theTotalAmount=0;
						  						for(y = 0; y < years.length; y++)
							  					{										
								 					theTotalAmount=parseFloat(theTotalAmount)+parseFloat(data4AState.map(function(d)
														   {
											if (years[y]=="2013")
												{return d.val2013;}
											else if (years[y]=="2014")
												{return d.val2014;}
											else if (years[y]=="2015")
												{return d.val2015;}
											else if (years[y]=="2016")
												{return d.val2016;}
													})); 
							  					
												}
												
												//console.log("amount: "+theTotalAmount.toFixed(2));
											
												
												/*console.log(get1stCountryNameby2ndCountryName(data4AState.map(function(d)
														   {
											return d.countryd;
													})));*/
												
												for (ci=0;ci<tempAllCountryInformation.length;ci++)
													{
														if (tempAllCountryInformation[ci][0]==get1stCountryNameby2ndCountryName(data4AState.map(function(d)
														   {
															return d.countryd;
													})))
															{
																//add [1] the amount
																tempAllCountryInformation[ci][1]=(
																	parseFloat(tempAllCountryInformation[ci][1])+
																	parseFloat(theTotalAmount)).toFixed(2);
																
																//add [2] the percentage
																tempAllCountryInformation[ci][2]=
																	((parseFloat(tempAllCountryInformation[ci][1])/theTotalAmount4AState)*100).toFixed(2);
																
																//add [3] subcategory information
																tempAllCountryInformation[ci][3]=
																	tempAllCountryInformation[ci][3]+
																	data4AState.map(function(d)
														   {
															return d.countryd;
													})+
																	" "+
																	theTotalAmount.toFixed(2)+
																	", "
																	;
															}
													}
											}
										for (f=0;f<tempAllCountryInformation.length;f++)
											{
												if(parseFloat(tempAllCountryInformation[f][1])>0)
													{returnInformation.push(tempAllCountryInformation[f]);}
											}									    
									}
								else if(countries[0]=="S")
									{
										var tempAllCountryInformation=[];
										for (ri=1;ri<=25;ri++)
											{
												var data4AState = data.filter(function(d)
																	  {
												if(d["statename"] == stateName && d["rank"] == ri)
												{ 
            										return d;
        										} 
    					  						});
												
												var theTotalAmount=0;
						  						for(y = 0; y < years.length; y++)
							  					{
													theTotalAmount=parseFloat(theTotalAmount)+parseFloat(data4AState.map(function(d)
														   {
																if (years[y]=="2013")
																	{return d.val2013;}
																else if (years[y]=="2014")
																	{return d.val2014;}
																else if (years[y]=="2015")
																	{return d.val2015;}
																else if (years[y]=="2016")
																	{return d.val2016;}
																		})); 
							  					
												}
												
												tempAllCountryInformation.push([
													(data4AState.map(function(d)
														   {
																return d.countryd;
																		})).toString(),
													(parseFloat(theTotalAmount)).toFixed(2),
													((((parseFloat(theTotalAmount)).toFixed(2))/theTotalAmount4AState)*100).toFixed(2),
													"",
													parseFloat(data4AState.map(function(d)
														   {return d.val2013;
																		})),
													parseFloat(data4AState.map(function(d)
														   {return d.val2014;
																		})),
													parseFloat(data4AState.map(function(d)
														   {return d.val2015;
																		})),
													parseFloat(data4AState.map(function(d)
														   {return d.val2016;
																		}))
												]
												);
											}
										for (f=0;f<tempAllCountryInformation.length;f++)
											{
												if(parseFloat(tempAllCountryInformation[f][1])>0)
													{returnInformation.push(tempAllCountryInformation[f]);}
											}
									}
								else{
									console.log("This is a parameter issue. (You need to indicate B or S at getCountry4AState via import-driven data)")
								}
		  					}
							});
						}
					else if (IE == "E")
						{
							d3.csv("file/country_ex.csv", function(error, data){
		  					if(error)
		  					{
			  					console.log(error);
		  					}
		  					else
		  					{
								//get the total amount for a state
								//for example get 2013 to 2016 for Alabama
								var data4AState = data.filter(function(d) 
															 {
							  		if(d["statename"] == stateName && d["rank"] == "0" && d["countryd"] == "Top 25")
        								{ 
            							return d;
        								} 

    					  		});
								
								var theTotalAmount4AState=0;
						  		for(y = 0; y < years.length; y++)
							  		{										
								 		theTotalAmount4AState=parseFloat(theTotalAmount4AState)+parseFloat(data4AState.map(function(d)
														   {
											if (years[y]=="2013")
												{return d.val2013;}
											else if (years[y]=="2014")
												{return d.val2014;}
											else if (years[y]=="2015")
												{return d.val2015;}
											else if (years[y]=="2016")
												{return d.val2016;}
										})); 
							  		}
								
								/*//get data rows for each state
								//for example get 25 rows for Alabama
								var data4AStateAbout25 = data.filter(function(d) 
															 {
							  		if(d["statename"] == stateName && d["rank"] != "0")
        								{ 
            							return d;
        								}
									   
								});*/
								//get d[0], d[1], d[2], d[3] for each state	
								//for example get 2013 to 2016 for Alabama
			  					if(countries[0]=="B")
									{
										var tempAllCountryInformation=[];
										//build an array and fill 
										//d[0] country name
										for (b1=1;b1<country1stLevel.length;b1++)
											{
												eachCountry=[country1stLevel[b1][1],0,0,"",0,0,0,0];
												tempAllCountryInformation.push(eachCountry);
											}
										
										
										for (ri=1;ri<=25;ri++)
											{
												var data4AState = data.filter(function(d)
																	  {
												if(d["statename"] == stateName && d["rank"] == ri)
												{ 
            										return d;
        										} 
    					  						});
												
												var theTotalAmount=0;
						  						for(y = 0; y < years.length; y++)
							  					{										
								 					theTotalAmount=parseFloat(theTotalAmount)+parseFloat(data4AState.map(function(d)
														   {
											if (years[y]=="2013")
												{return d.val2013;}
											else if (years[y]=="2014")
												{return d.val2014;}
											else if (years[y]=="2015")
												{return d.val2015;}
											else if (years[y]=="2016")
												{return d.val2016;}
													})); 
							  					
												}
												
												//console.log("amount: "+theTotalAmount.toFixed(2));
											
												
												/*console.log(get1stCountryNameby2ndCountryName(data4AState.map(function(d)
														   {
											return d.countryd;
													})));*/
												
												for (ci=0;ci<tempAllCountryInformation.length;ci++)
													{
														if (tempAllCountryInformation[ci][0]==get1stCountryNameby2ndCountryName(data4AState.map(function(d)
														   {
															return d.countryd;
													})))
															{
																//add [1] the amount
																tempAllCountryInformation[ci][1]=(
																	parseFloat(tempAllCountryInformation[ci][1])+
																	parseFloat(theTotalAmount)).toFixed(2);
																
																//add [2] the percentage
																tempAllCountryInformation[ci][2]=
																	((parseFloat(tempAllCountryInformation[ci][1])/theTotalAmount4AState)*100).toFixed(2);
																
																//add [3] subcategory information
																tempAllCountryInformation[ci][3]=
																	tempAllCountryInformation[ci][3]+
																	data4AState.map(function(d)
														   {
															return d.countryd;
													})+
																	" "+
																	theTotalAmount.toFixed(2)+
																	", "
																	;
															}
													}
											}
										for (f=0;f<tempAllCountryInformation.length;f++)
											{
												if(parseFloat(tempAllCountryInformation[f][1])>0)
													{returnInformation.push(tempAllCountryInformation[f]);}
											}									    
									}
								else if(countries[0]=="S")
									{
										var tempAllCountryInformation=[];
										for (ri=1;ri<=25;ri++)
											{
												var data4AState = data.filter(function(d)
																	  {
												if(d["statename"] == stateName && d["rank"] == ri)
												{ 
            										return d;
        										} 
    					  						});
												
												var theTotalAmount=0;
						  						for(y = 0; y < years.length; y++)
							  					{
													theTotalAmount=parseFloat(theTotalAmount)+parseFloat(data4AState.map(function(d)
														   {
																if (years[y]=="2013")
																	{return d.val2013;}
																else if (years[y]=="2014")
																	{return d.val2014;}
																else if (years[y]=="2015")
																	{return d.val2015;}
																else if (years[y]=="2016")
																	{return d.val2016;}
																		})); 
							  					
												}
												
												tempAllCountryInformation.push([
													(data4AState.map(function(d)
														   {
																return d.countryd;
																		})).toString(),
													(parseFloat(theTotalAmount)).toFixed(2),
													((((parseFloat(theTotalAmount)).toFixed(2))/theTotalAmount4AState)*100).toFixed(2),
													"",
													parseFloat(data4AState.map(function(d)
														   {return d.val2013;
																		})),
													parseFloat(data4AState.map(function(d)
														   {return d.val2014;
																		})),
													parseFloat(data4AState.map(function(d)
														   {return d.val2015;
																		})),
													parseFloat(data4AState.map(function(d)
														   {return d.val2016;
																		}))]
												);
											}
										for (f=0;f<tempAllCountryInformation.length;f++)
											{
												if(parseFloat(tempAllCountryInformation[f][1])>0)
													{returnInformation.push(tempAllCountryInformation[f]);}
											}
									}
								else{
									console.log("This is a parameter issue. (You need to indicate B or S at getCountry4AState via export-driven data)")
								}
		  					}
							});
						}
					 else
						{
							console.log("This is a parameter issue. (You need to indicate I or E at getCountry4AState)")			
						}
				}
				}
			else{
				console.log("This is a parameter issue. (at getCountry4AState)");
			}
		}
	//no year selected
	else
		{
			
		}
	return returnInformation;
}

//6.2.3 getCommodity4AState
function getCommodity4AState(states, years, countries, commodities, IE)
{
	var returnInformation=[];
	//at least one year
	if(years.length>0)
		{
			if(commodities.length>=3)
				{
					var eachCommodity=[];
					for(i = 0; i < states.length; i++) 
			  		{
				  		var stateName=states[i];
				  
				  		eachCommodity=[];
					
					if(IE == "I")
						{
							d3.csv("file/commodity_in.csv", function(error, data){
		  					if(error)
		  					{
			  					console.log(error);
		  					}
		  					else
		  					{
								//get the total amount for a state
								//for example get 2013 to 2016 for Alabama
								var data4AState = data.filter(function(d) 
															 {
							  		if(d["statename"] == stateName && d["rank"] == "0" && d["hs6"] == "25")
        								{ 
            							return d;
        								} 

    					  		});
								
								var theTotalAmount4AState=0;
						  		for(y = 0; y < years.length; y++)
							  		{										
								 		theTotalAmount4AState=parseFloat(theTotalAmount4AState)+parseFloat(data4AState.map(function(d)
														   {
											if (years[y]=="2013")
												{return d.val2013;}
											else if (years[y]=="2014")
												{return d.val2014;}
											else if (years[y]=="2015")
												{return d.val2015;}
											else if (years[y]=="2016")
												{return d.val2016;}
										})); 
							  		}
								
								//get data rows for each state
								//for example get 25 rows for Alabama
								/*var data4AStateAbout25 = data.filter(function(d) 
															 {
							  		if(d["statename"] == stateName && d["rank"] != "0")
        								{ 
            							return d;
        								}
									   
								});*/
								//get d[0], d[1], d[2], d[3] for each state	
								//for example get 2013 to 2016 for Alabama
			  					if(commodities[0]=="B")
									{
										var tempAllCommodityInformation=[];
										//build an array and fill 
										//d[0] commodity name
										for (b1=1;b1<commodity1stLevel.length;b1++)
											{
												eachCommodity=[commodity1stLevel[b1][1],0,0,"",0,0,0,0];
												tempAllCommodityInformation.push(eachCommodity);
											}
										
										
										for (ri=1;ri<=25;ri++)
											{
												var data4AState = data.filter(function(d)
																	  {
												if(d["statename"] == stateName && d["rank"] == ri)
												{ 
            										return d;
        										} 
    					  						});
												
												var theTotalAmount=0;
						  						for(y = 0; y < years.length; y++)
							  					{										
								 					theTotalAmount=parseFloat(theTotalAmount)+parseFloat(data4AState.map(function(d)
														   {
											if (years[y]=="2013")
												{return d.val2013;}
											else if (years[y]=="2014")
												{return d.val2014;}
											else if (years[y]=="2015")
												{return d.val2015;}
											else if (years[y]=="2016")
												{return d.val2016;}
													})); 
							  					
												}
												
												//console.log("amount: "+theTotalAmount.toFixed(2));
											
												
												/*console.log(get1stCountryNameby2ndCountryName(data4AState.map(function(d)
														   {
											return d.countryd;
													})));*/
												
												for (ci=0;ci<tempAllCommodityInformation.length;ci++)
													{
														if (tempAllCommodityInformation[ci][0]==get1stCommodityNameby2ndCommodityName(data4AState.map(function(d)
														   {
															return d.hs6;
													})))
															{
																//add [1] the amount
																tempAllCommodityInformation[ci][1]=(
																	parseFloat(tempAllCommodityInformation[ci][1])+
																	parseFloat(theTotalAmount)).toFixed(2);
																
																//add [2] the percentage
																tempAllCommodityInformation[ci][2]=
																	((parseFloat(tempAllCommodityInformation[ci][1])/theTotalAmount4AState)*100).toFixed(2);
																
																//add [3] subcategory information
																tempAllCommodityInformation[ci][3]=
																	tempAllCommodityInformation[ci][3]+
																	getCommodityNamebyCommodityCodeFromCVS(data4AState.map(function(d)
														   {
															return d.hs6;
													}))+
																	" "+
																	theTotalAmount.toFixed(2)+
																	", "
																	;
															}
													}
											}
										for (f=0;f<tempAllCommodityInformation.length;f++)
											{
												if(parseFloat(tempAllCommodityInformation[f][1])>0)
													{returnInformation.push(tempAllCommodityInformation[f]);}
											}									    
									}
								else if(commodities[0]=="S")
									{
										var tempAllCommodityInformation=[];
										for (ri=1;ri<=25;ri++)
											{
												var data4AState = data.filter(function(d)
																	  {
												if(d["statename"] == stateName && d["rank"] == ri)
												{ 
            										return d;
        										} 
    					  						});
												
												var theTotalAmount=0;
						  						for(y = 0; y < years.length; y++)
							  					{
													theTotalAmount=parseFloat(theTotalAmount)+parseFloat(data4AState.map(function(d)
														   {
																if (years[y]=="2013")
																	{return d.val2013;}
																else if (years[y]=="2014")
																	{return d.val2014;}
																else if (years[y]=="2015")
																	{return d.val2015;}
																else if (years[y]=="2016")
																	{return d.val2016;}
																		})); 
							  					
												}
												
												tempAllCommodityInformation.push([
													getCommodityNamebyCommodityCodeFromCVS(data4AState.map(function(d)
														   {
															return d.hs6;
													})),
													(parseFloat(theTotalAmount)).toFixed(2),
													((((parseFloat(theTotalAmount)).toFixed(2))/theTotalAmount4AState)*100).toFixed(2),
													"",
													parseFloat(data4AState.map(function(d)
														   {return d.val2013;
																		})),
													parseFloat(data4AState.map(function(d)
														   {return d.val2014;
																		})),
													parseFloat(data4AState.map(function(d)
														   {return d.val2015;
																		})),
													parseFloat(data4AState.map(function(d)
														   {return d.val2016;
																		}))]
												);
											}
										
										//combine the same name of commodity names
										var temp2AllCommodityInformation=[];
										for(tj=0;tj<tempAllCommodityInformation.length;tj++)
											{
												if(tj==0)
													{
														temp2AllCommodityInformation.push(tempAllCommodityInformation[tj]);
													}
												else
												{
													var repeated=false;
													for (tk=0;tk<temp2AllCommodityInformation.length;tk++)
														{
															/*console.log("here");
															console.log("tk:"+tk+"; tj: "+tj);
															console.log(temp2AllCommodityInformation[tk][0] );
															console.log(tempAllCommodityInformation[tj][0] );*/
															//console.log("[2]: "+temp2AllCommodityInformation );
															
															if(temp2AllCommodityInformation[tk][0]==tempAllCommodityInformation[tj][0])
																{
																	/*console.log(temp2AllCommodityInformation[tk][0]+"------"+(parseFloat(temp2AllCommodityInformation[tk][1])+
																		parseFloat(tempAllCommodityInformation[tj][1])).toFixed(2));*/
																	//edit
																	//d[1] amount
																	temp2AllCommodityInformation[tk][1]=
																		(parseFloat(temp2AllCommodityInformation[tk][1])+
																		parseFloat(tempAllCommodityInformation[tj][1])).toFixed(2);
																	
																	//d[2] percentage
																	temp2AllCommodityInformation[tk][2]=
																		((((parseFloat(temp2AllCommodityInformation[tk][1])).toFixed(2))/theTotalAmount4AState)*100).toFixed(2);
																	
																	//d[4] 2013 value
																	temp2AllCommodityInformation[tk][4]=
																	(parseFloat(temp2AllCommodityInformation[tk][4])+
																		parseFloat(tempAllCommodityInformation[tj][4])).toFixed(2);
																	
																	//d[5] 2014 value
																	temp2AllCommodityInformation[tk][5]=
																	(parseFloat(temp2AllCommodityInformation[tk][5])+
																		parseFloat(tempAllCommodityInformation[tj][5])).toFixed(2);
																	
																	//d[6] 2015 value
																	temp2AllCommodityInformation[tk][6]=
																	(parseFloat(temp2AllCommodityInformation[tk][6])+
																		parseFloat(tempAllCommodityInformation[tj][6])).toFixed(2);
																	
																	//d[7] 2016 value
																	temp2AllCommodityInformation[tk][7]=
																	(parseFloat(temp2AllCommodityInformation[tk][7])+
																		parseFloat(tempAllCommodityInformation[tj][7])).toFixed(2);
																		
																	repeated=true;
																	break;
																}
														}
													//add
													if(!repeated)
														{
															temp2AllCommodityInformation.push(tempAllCommodityInformation[tj]);
														}
												}
											}
										for (f=0;f<temp2AllCommodityInformation.length;f++)
											{
												if(parseFloat(temp2AllCommodityInformation[f][1])>0)
													{returnInformation.push(temp2AllCommodityInformation[f]);}
											}
									}
								else{
									console.log("This is a parameter issue. (You need to indicate B or S at getCommodity4AState via import-driven data)")
								}
		  					}
							});
						}
					else if (IE == "E")
						{
							d3.csv("file/commodity_ex.csv", function(error, data){
		  					if(error)
		  					{
			  					console.log(error);
		  					}
		  					else
		  					{
								//get the total amount for a state
								//for example get 2013 to 2016 for Alabama
								var data4AState = data.filter(function(d) 
															 {
							  		if(d["statename"] == stateName && d["rank"] == "0" && d["hs6"] == "25")
        								{ 
            							return d;
        								} 

    					  		});
								
								var theTotalAmount4AState=0;
						  		for(y = 0; y < years.length; y++)
							  		{										
								 		theTotalAmount4AState=parseFloat(theTotalAmount4AState)+parseFloat(data4AState.map(function(d)
														   {
											if (years[y]=="2013")
												{return d.val2013;}
											else if (years[y]=="2014")
												{return d.val2014;}
											else if (years[y]=="2015")
												{return d.val2015;}
											else if (years[y]=="2016")
												{return d.val2016;}
										})); 
							  		}
								
								//get data rows for each state
								//for example get 25 rows for Alabama
								/*var data4AStateAbout25 = data.filter(function(d) 
															 {
							  		if(d["statename"] == stateName && d["rank"] != "0")
        								{ 
            							return d;
        								}
									   
								});*/
								//get d[0], d[1], d[2], d[3] for each state	
								//for example get 2013 to 2016 for Alabama
			  					if(commodities[0]=="B")
									{
										var tempAllCommodityInformation=[];
										//build an array and fill 
										//d[0] commodity name
										for (b1=1;b1<commodity1stLevel.length;b1++)
											{
												eachCommodity=[commodity1stLevel[b1][1],0,0,"",0,0,0,0];
												tempAllCommodityInformation.push(eachCommodity);
											}
										
										
										for (ri=1;ri<=25;ri++)
											{
												var data4AState = data.filter(function(d)
																	  {
												if(d["statename"] == stateName && d["rank"] == ri)
												{ 
            										return d;
        										} 
    					  						});
												
												var theTotalAmount=0;
						  						for(y = 0; y < years.length; y++)
							  					{										
								 					theTotalAmount=parseFloat(theTotalAmount)+parseFloat(data4AState.map(function(d)
														   {
											if (years[y]=="2013")
												{return d.val2013;}
											else if (years[y]=="2014")
												{return d.val2014;}
											else if (years[y]=="2015")
												{return d.val2015;}
											else if (years[y]=="2016")
												{return d.val2016;}
													})); 
							  					
												}
												
												//console.log("amount: "+theTotalAmount.toFixed(2));
											
												
												/*console.log(get1stCountryNameby2ndCountryName(data4AState.map(function(d)
														   {
											return d.countryd;
													})));*/
												
												for (ci=0;ci<tempAllCommodityInformation.length;ci++)
													{
														if (tempAllCommodityInformation[ci][0]==get1stCommodityNameby2ndCommodityName(data4AState.map(function(d)
														   {
															return d.hs6;
													})))
															{
																//add [1] the amount
																tempAllCommodityInformation[ci][1]=(
																	parseFloat(tempAllCommodityInformation[ci][1])+
																	parseFloat(theTotalAmount)).toFixed(2);
																
																//add [2] the percentage
																tempAllCommodityInformation[ci][2]=
																	((parseFloat(tempAllCommodityInformation[ci][1])/theTotalAmount4AState)*100).toFixed(2);
																
																//add [3] subcategory information
																tempAllCommodityInformation[ci][3]=
																	tempAllCommodityInformation[ci][3]+
																	getCommodityNamebyCommodityCodeFromCVS(data4AState.map(function(d)
														   {
															return d.hs6;
													}))+
																	" "+
																	theTotalAmount.toFixed(2)+
																	", "
																	;
															}
													}
											}
										for (f=0;f<tempAllCommodityInformation.length;f++)
											{
												if(parseFloat(tempAllCommodityInformation[f][1])>0)
													{returnInformation.push(tempAllCommodityInformation[f]);}
											}									    
									}
								else if(commodities[0]=="S")
									{
										var tempAllCommodityInformation=[];
										for (ri=1;ri<=25;ri++)
											{
												var data4AState = data.filter(function(d)
																	  {
												if(d["statename"] == stateName && d["rank"] == ri)
												{ 
            										return d;
        										} 
    					  						});
												
												var theTotalAmount=0;
						  						for(y = 0; y < years.length; y++)
							  					{
													theTotalAmount=parseFloat(theTotalAmount)+parseFloat(data4AState.map(function(d)
														   {
																if (years[y]=="2013")
																	{return d.val2013;}
																else if (years[y]=="2014")
																	{return d.val2014;}
																else if (years[y]=="2015")
																	{return d.val2015;}
																else if (years[y]=="2016")
																	{return d.val2016;}
																		})); 
							  					
												}
												
												tempAllCommodityInformation.push([
													getCommodityNamebyCommodityCodeFromCVS(data4AState.map(function(d)
														   {
															return d.hs6;
													})),
													(parseFloat(theTotalAmount)).toFixed(2),
													((((parseFloat(theTotalAmount)).toFixed(2))/theTotalAmount4AState)*100).toFixed(2),
													"",
													parseFloat(data4AState.map(function(d)
														   {return d.val2013;
																		})),
													parseFloat(data4AState.map(function(d)
														   {return d.val2014;
																		})),
													parseFloat(data4AState.map(function(d)
														   {return d.val2015;
																		})),
													parseFloat(data4AState.map(function(d)
														   {return d.val2016;
																		}))]
												);
											}
										
										//combine the same name of commodity names
										var temp2AllCommodityInformation=[];
										for(tj=0;tj<tempAllCommodityInformation.length;tj++)
											{
												if(tj==0)
													{
														temp2AllCommodityInformation.push(tempAllCommodityInformation[tj]);
													}
												else
												{
													var repeated=false;
													for (tk=0;tk<temp2AllCommodityInformation.length;tk++)
														{
															/*console.log("here");
															console.log("tk:"+tk+"; tj: "+tj);
															console.log(temp2AllCommodityInformation[tk][0] );
															console.log(tempAllCommodityInformation[tj][0] );*/
															//console.log("[2]: "+temp2AllCommodityInformation );
															
															if(temp2AllCommodityInformation[tk][0]==tempAllCommodityInformation[tj][0])
																{
																	/*console.log(temp2AllCommodityInformation[tk][0]+"------"+(parseFloat(temp2AllCommodityInformation[tk][1])+
																		parseFloat(tempAllCommodityInformation[tj][1])).toFixed(2));*/
																	//edit
																	//d[1] amount
																	temp2AllCommodityInformation[tk][1]=
																		(parseFloat(temp2AllCommodityInformation[tk][1])+
																		parseFloat(tempAllCommodityInformation[tj][1])).toFixed(2);
																	
																	//d[2] percentage
																	temp2AllCommodityInformation[tk][2]=
																		((((parseFloat(temp2AllCommodityInformation[tk][1])).toFixed(2))/theTotalAmount4AState)*100).toFixed(2);
																		
																	//d[4] 2013 value
																	temp2AllCommodityInformation[tk][4]=
																	(parseFloat(temp2AllCommodityInformation[tk][4])+
																		parseFloat(tempAllCommodityInformation[tj][4])).toFixed(2);
																	
																	//d[5] 2014 value
																	temp2AllCommodityInformation[tk][5]=
																	(parseFloat(temp2AllCommodityInformation[tk][5])+
																		parseFloat(tempAllCommodityInformation[tj][5])).toFixed(2);
																	
																	//d[6] 2015 value
																	temp2AllCommodityInformation[tk][6]=
																	(parseFloat(temp2AllCommodityInformation[tk][6])+
																		parseFloat(tempAllCommodityInformation[tj][6])).toFixed(2);
																	
																	//d[7] 2016 value
																	temp2AllCommodityInformation[tk][7]=
																	(parseFloat(temp2AllCommodityInformation[tk][7])+
																		parseFloat(tempAllCommodityInformation[tj][7])).toFixed(2);
																	
																	repeated=true;
																	break;
																}
														}
													//add
													if(!repeated)
														{
															temp2AllCommodityInformation.push(tempAllCommodityInformation[tj]);
														}
												}
											}
										for (f=0;f<temp2AllCommodityInformation.length;f++)
											{
												if(parseFloat(temp2AllCommodityInformation[f][1])>0)
													{returnInformation.push(temp2AllCommodityInformation[f]);}
											}
									}
								else{
									console.log("This is a parameter issue. (You need to indicate B or S at getCommodity4AState via import-driven data)")
								}
		  					}
							});
						}
					 else
						{
							console.log("This is a parameter issue. (You need to indicate I or E at getCommodity4AState)")			
						}
				}
				}
			else{
				console.log("This is a parameter issue. (at getCommodity4AState)");
			}
		}
	//no year selected
	else
		{
			
		}
	return returnInformation;
}

//6.2.4 getCountry4AllStates
function getCountry4AllStates(states, years, countries, commodities, IE)
{
	var returnInformation=[];
	//at least one year
	if(years.length>0)
		{
			if(countries.length>=3)
				{
					var tempAllCountryInformation=[];
					var eachCountry=[];
					/*for(ci = 0; ci < country2ndLevel.length; ci++) 
			  		{
				  		var countryNamePoo=country2ndLevel[ci][1];
						//console.log("country name(1): "+countryNamePoo);
						console.log("ci: "+ci);
				  		tempAllCountryInformation=[]
				  		eachCountry=[];*/
					
					if(IE == "I")
						{
							d3.csv("file/country_in.csv", function(error, data){
		  					if(error)
		  					{
			  					console.log(error);
		  					}
		  					else
		  					{
								for(ci = 0; ci < country2ndLevel.length; ci++) 
								{
									var countryNamePoo=country2ndLevel[ci][1];
									//console.log("country name(1): "+countryNamePoo);
									//console.log("ci: "+ci);
									tempAllCountryInformation=[]
									eachCountry=[];
									
									//console.log("country name(4): "+countryNamePoo);
								//get d[0] (country name), d[1] (the amount) for each country
								//for example get 2013 to 2016 for Taiwan for tradding with 50 states
			  					if(countries[0]=="B")
									{
										//later, Pal								    
									}
								
								else if(countries[0]=="S")
									{
										var theTotalAmount=0;
										for (si=0;si<states50.length;si++)
											{
												var data4ACountry = data.filter(function(d)
																	  {
												if(d["countryd"] == countryNamePoo && d["statename"] == states50[si][1] && d["rank"] != 0)
												{ 
            										return d;
        										} 
    					  						});												
												
												//console.log("there");
												//console.log(data4AState);
												for (sj=0;sj<data4ACountry.length;sj++)
													{
														
															theTotalAmount=parseFloat(theTotalAmount)+
																((years.includes("2013"))?parseFloat((data4ACountry[sj]).val2013):0)+
																((years.includes("2014"))?parseFloat((data4ACountry[sj]).val2014):0)+
																((years.includes("2015"))?parseFloat((data4ACountry[sj]).val2015):0)+
																((years.includes("2016"))?parseFloat((data4ACountry[sj]).val2016):0);
													//console.log("total amount"+theTotalAmount+" for each state");
													}	
													
											}
										//console.log("total amount: "+theTotalAmount);
										if(theTotalAmount>0)
										{
											eachCountry.push(countryNamePoo);
											eachCountry.push((parseFloat(theTotalAmount)).toFixed(2));
											returnInformation.push(eachCountry);
										}
									}
								else{
									console.log("This is a parameter issue. (You need to indicate B or S at getCountry4AllStates via import-driven data)")
								}
								}
		  					}
							});
						}
					else if (IE == "E")
						{
							d3.csv("file/country_ex.csv", function(error, data){
		  					if(error)
		  					{
			  					console.log(error);
		  					}
		  					else
		  					{
								for(ci = 0; ci < country2ndLevel.length; ci++) 
								{
									var countryNamePoo=country2ndLevel[ci][1];
									//console.log("country name(1): "+countryNamePoo);
									//console.log("ci: "+ci);
									tempAllCountryInformation=[]
									eachCountry=[];
									
									//console.log("country name(4): "+countryNamePoo);
								//get d[0] (country name), d[1] (the amount) for each country
								//for example get 2013 to 2016 for Taiwan for tradding with 50 states
			  					if(countries[0]=="B")
									{
										//later, Pal								    
									}
								
								else if(countries[0]=="S")
									{
										var theTotalAmount=0;
										for (si=0;si<states50.length;si++)
											{
												var data4AState = data.filter(function(d)
																	  {
												if(d["countryd"] == countryNamePoo && d["statename"] == states50[si][1] && d["rank"] != 0)
												{ 
            										return d;
        										} 
    					  						});												
												
												//console.log("there");
												//console.log(data4AState);
												for (sj=0;sj<data4AState.length;sj++)
													{
															theTotalAmount=parseFloat(theTotalAmount)+
																((years.includes("2013"))?parseFloat((data4AState[sj]).val2013):0)+
																((years.includes("2014"))?parseFloat((data4AState[sj]).val2014):0)+
																((years.includes("2015"))?parseFloat((data4AState[sj]).val2015):0)+
																((years.includes("2016"))?parseFloat((data4AState[sj]).val2016):0);
													//console.log("total amount"+theTotalAmount+" for each state");
													}	
											}
										
										//console.log("total amount: "+theTotalAmount);
										if(theTotalAmount>0)
										{
											eachCountry.push(countryNamePoo);
											eachCountry.push((parseFloat(theTotalAmount)).toFixed(2));
											returnInformation.push(eachCountry);
										}
									}
								else{
									console.log("This is a parameter issue. (You need to indicate B or S at getCountry4AllStates via import-driven data)")
								}
								}
		  					}
							});
						}
					 else
						{
							console.log("This is a parameter issue. (You need to indicate I or E at getCountry4AllStates)")			
						}	
				//}	
				}
			else{
				console.log("This is a parameter issue. (at getCountry4AllStates)");
			}
		}
	//no year selected
	else
		{
			
		}
	return returnInformation;
}

//6.2.5 getState4ACountry
function getState4ACountry(states, years, countries, commodities, IE)
{
	var returnInformation=[];
	//at least one year
	if(years.length>0)
		{
			if(countries.length>=3)
				{
					var eachState=[];
					for(ci = 2; ci < countries.length; ci++) 
			  		{
				  		var countryName=countries[ci];
					
					if(IE == "I")
						{
							d3.csv("file/country_in.csv", function(error, data){
		  					if(error)
		  					{
			  					console.log(error);
		  					}
		  					else
		  					{
								//get d[0], d[1], d[2], d[3] for each state	
								//for example get 2013 to 2016 for Alabama
			  					if(countries[0]=="B")
									{
										//later, Pal									    
									}
								else if(countries[0]=="S")
									{
										var tempAllCountryInformation=[];
												/*var data4ACountry = data.filter(function(d)
																	  {
												if(d["countryd"] == countryName && d["rank"] != 0)
												{ 
            										return d;
        										} 
    					  						});*/
												
												var theTotalAmount=0;
												var stateName="";
												for (sj=0;sj<states50.length;sj++)
													{
														eachState=[];	
														stateName = states50[sj][1];
														theTotalAmount=0;
														var data4ACountry = data.filter(function(d)
														{
															if(d["countryd"] == countryName && d["statename"] == states50[sj][1] && d["rank"] != 0)
															{ 
																return d;
															} 
														});		
														for (sk=0;sk<data4ACountry.length;sk++)
														{	
															theTotalAmount=parseFloat(theTotalAmount)+
																((years.includes("2013"))?parseFloat((data4ACountry[sk]).val2013):0)+
																((years.includes("2014"))?parseFloat((data4ACountry[sk]).val2014):0)+
																((years.includes("2015"))?parseFloat((data4ACountry[sk]).val2015):0)+
																((years.includes("2016"))?parseFloat((data4ACountry[sk]).val2016):0);
														}
														if(theTotalAmount>0)
														{
															eachState.push(stateName);
															eachState.push((theTotalAmount).toFixed(2));
															returnInformation.push(eachState);
														}	
													}				
													
									}
								else{
									console.log("This is a parameter issue. (You need to indicate B or S at getState4ACountry via import-driven data)")
								}
		  					}
							});
						}
					else if (IE == "E")
						{
							d3.csv("file/country_ex.csv", function(error, data){
		  					if(error)
		  					{
			  					console.log(error);
		  					}
		  					else
		  					{
								//get d[0], d[1], d[2], d[3] for each state	
								//for example get 2013 to 2016 for Alabama
			  					if(countries[0]=="B")
									{
										//later, Pal									    
									}
								else if(countries[0]=="S")
									{
										var tempAllCountryInformation=[];
												
												var theTotalAmount=0;
												var stateName="";
												for (sj=0;sj<states50.length;sj++)
													{
														eachState=[];	
														stateName = states50[sj][1];
														theTotalAmount=0;
														var data4ACountry = data.filter(function(d)
														{
															if(d["countryd"] == countryName && d["statename"] == states50[sj][1] && d["rank"] != 0)
															{ 
																return d;
															} 
														});		
														for (sk=0;sk<data4ACountry.length;sk++)
														{	
															theTotalAmount=parseFloat(theTotalAmount)+
																((years.includes("2013"))?parseFloat((data4ACountry[sk]).val2013):0)+
																((years.includes("2014"))?parseFloat((data4ACountry[sk]).val2014):0)+
																((years.includes("2015"))?parseFloat((data4ACountry[sk]).val2015):0)+
																((years.includes("2016"))?parseFloat((data4ACountry[sk]).val2016):0);
														}
														if(theTotalAmount>0)
														{
															eachState.push(stateName);
															eachState.push((theTotalAmount).toFixed(2));
															returnInformation.push(eachState);
														}	
													}				
													
									}
								else{
									console.log("This is a parameter issue. (You need to indicate B or S at getState4ACountry via import-driven data)")
								}
		  					}
							});
						}
					 else
						{
							console.log("This is a parameter issue. (You need to indicate I or E at getState4ACountry)")			
						}
				}
				}
			else{
				console.log("This is a parameter issue. (at getState4ACountry)");
			}
		}
	//no year selected
	else
		{
			
		}
	return returnInformation;
}

//6.2.6 getCommodity4AllStates
function getCommodity4AllStates(states, years, countries, commodities, IE)
{
	var returnInformation=[];
	//at least one year
	if(years.length>0)
		{
			if(commodities.length>=3)
				{
					var tempAllommodityInformation=[];
					var eachommodity=[];
					
					if(IE == "I")
						{
							d3.csv("file/commodity_in.csv", function(error, data){
		  					if(error)
		  					{
			  					console.log(error);
		  					}
		  					else
		  					{
								for(ci = 0; ci < commodity2ndLevel.length; ci++) 
								{
									var commodityNamePoo=commodity2ndLevel[ci][1];
									tempAllCommodityInformation=[]
									eachCommodity=[];
									
								//get d[0] (commodity name), d[1] (the amount) for each commodity
								//for example get 2013 to 2016 for Taiwan for tradding with 50 states
			  					if(commodities[0]=="B")
									{
										//later, Pal								    
									}
								
								else if(commodities[0]=="S")
									{
										var theTotalAmount=0;
										for (si=0;si<states50.length;si++)
											{
												
												var data4ACommodity = data.filter(function(d)
																	  {
												if(getCommodityNamebyCommodityCodeFromCVS(d["hs6"]) == commodityNamePoo && d["statename"] == states50[si][1] && d["rank"] != 0)
												{ 
            										return d;
        										} 
    					  						});												
												for (sj=0;sj<data4ACommodity.length;sj++)
													{
														
															theTotalAmount=parseFloat(theTotalAmount)+
																((years.includes("2013"))?parseFloat((data4ACommodity[sj]).val2013):0)+
																((years.includes("2014"))?parseFloat((data4ACommodity[sj]).val2014):0)+
																((years.includes("2015"))?parseFloat((data4ACommodity[sj]).val2015):0)+
																((years.includes("2016"))?parseFloat((data4ACommodity[sj]).val2016):0);
													}	
													
											}
										if(theTotalAmount>0)
										{	
											eachCommodity.push(commodityNamePoo);
											eachCommodity.push((parseFloat(theTotalAmount)).toFixed(2));
											returnInformation.push(eachCommodity);
										}
									}
								else{
									console.log("This is a parameter issue. (You need to indicate B or S at getCommodity4AllStates via import-driven data)")
								}
								}
		  					}
							});
						}
					else if (IE == "E")
						{
							d3.csv("file/commodity_ex.csv", function(error, data){
		  					if(error)
		  					{
			  					console.log(error);
		  					}
		  					else
		  					{
								for(ci = 0; ci < commodity2ndLevel.length; ci++) 
								{
									var commodityNamePoo=commodity2ndLevel[ci][1];
									tempAllCommodityInformation=[]
									eachCommodity=[];
									
								//get d[0] (commodity name), d[1] (the amount) for each commodity
								//for example get 2013 to 2016 for Taiwan for tradding with 50 states
			  					if(commodities[0]=="B")
									{
										//later, Pal								    
									}
								
								else if(commodities[0]=="S")
									{
										var theTotalAmount=0;
										for (si=0;si<states50.length;si++)
											{
												
												var data4ACommodity = data.filter(function(d)
																	  {
												if(getCommodityNamebyCommodityCodeFromCVS(d["hs6"]) == commodityNamePoo && d["statename"] == states50[si][1] && d["rank"] != 0)
												{ 
            										return d;
        										} 
    					  						});												
												for (sj=0;sj<data4ACommodity.length;sj++)
													{
														
															theTotalAmount=parseFloat(theTotalAmount)+
																((years.includes("2013"))?parseFloat((data4ACommodity[sj]).val2013):0)+
																((years.includes("2014"))?parseFloat((data4ACommodity[sj]).val2014):0)+
																((years.includes("2015"))?parseFloat((data4ACommodity[sj]).val2015):0)+
																((years.includes("2016"))?parseFloat((data4ACommodity[sj]).val2016):0);
													}	
													
											}
										if(theTotalAmount>0)
										{	
											eachCommodity.push(commodityNamePoo);
											eachCommodity.push((parseFloat(theTotalAmount)).toFixed(2));
											returnInformation.push(eachCommodity);
										}
									}
								else{
									console.log("This is a parameter issue. (You need to indicate B or S at getCommodity4AllStates via import-driven data)")
								}
								}
		  					}
							});
						}
					 else
						{
							console.log("This is a parameter issue. (You need to indicate I or E at getCountry4AllStates)")			
						}	
				//}	
				}
			else{
				console.log("This is a parameter issue. (at getCountry4AllStates)");
			}
		}
	//no year selected
	else
		{
			
		}
	return returnInformation;
}

//6.2.7 getState4ACommodity
function getState4ACommodity(states, years, countries, commodities, IE)
{
	var returnInformation=[];
	//at least one year
	if(years.length>0)
		{
			if(commodities.length>=3)
				{
					var eachState=[];
					for(ci = 2; ci < commodities.length; ci++) 
			  		{
				  		var commodityName=commodities[ci];
					
					if(IE == "I")
						{
							d3.csv("file/commodity_in.csv", function(error, data){
		  					if(error)
		  					{
			  					console.log(error);
		  					}
		  					else
		  					{
								//get d[0], d[1], d[2], d[3] for each state	
								//for example get 2013 to 2016 for Alabama
			  					if(commodities[0]=="B")
									{
										//later, Pal									    
									}
								else if(commodities[0]=="S")
									{
										var tempAllCommodityInformation=[];
												
												var theTotalAmount=0;
												var stateName="";
												for (sj=0;sj<states50.length;sj++)
													{
														eachState=[];	
														stateName = states50[sj][1];
														theTotalAmount=0;
														var data4ACommodity = data.filter(function(d)
														{
															if(getCommodityNamebyCommodityCodeFromCVS(d["hs6"]) == commodityName && d["statename"] == states50[sj][1] && d["rank"] != 0)
															{ 
																return d;
															} 
														});		
														for (sk=0;sk<data4ACommodity.length;sk++)
														{	
															theTotalAmount=parseFloat(theTotalAmount)+
																((years.includes("2013"))?parseFloat((data4ACommodity[sk]).val2013):0)+
																((years.includes("2014"))?parseFloat((data4ACommodity[sk]).val2014):0)+
																((years.includes("2015"))?parseFloat((data4ACommodity[sk]).val2015):0)+
																((years.includes("2016"))?parseFloat((data4ACommodity[sk]).val2016):0);
														}
														if(theTotalAmount>0)
														{
															eachState.push(stateName);
															eachState.push((theTotalAmount).toFixed(2));
															returnInformation.push(eachState);
														}	
													}				
													
									}
								else{
									console.log("This is a parameter issue. (You need to indicate B or S at getState4ACommodity via import-driven data)")
								}
		  					}
							});
						}
					else if (IE == "E")
						{
							d3.csv("file/commodity_ex.csv", function(error, data){
		  					if(error)
		  					{
			  					console.log(error);
		  					}
		  					else
		  					{
								//get d[0], d[1], d[2], d[3] for each state	
								//for example get 2013 to 2016 for Alabama
			  					if(commodities[0]=="B")
									{
										//later, Pal									    
									}
								else if(commodities[0]=="S")
									{
										var tempAllCommodityInformation=[];
												
												var theTotalAmount=0;
												var stateName="";
												for (sj=0;sj<states50.length;sj++)
													{
														eachState=[];	
														stateName = states50[sj][1];
														theTotalAmount=0;
														var data4ACommodity = data.filter(function(d)
														{
															if(getCommodityNamebyCommodityCodeFromCVS(d["hs6"]) == commodityName && d["statename"] == states50[sj][1] && d["rank"] != 0)
															{ 
																return d;
															} 
														});		
														for (sk=0;sk<data4ACommodity.length;sk++)
														{	
															theTotalAmount=parseFloat(theTotalAmount)+
																((years.includes("2013"))?parseFloat((data4ACommodity[sk]).val2013):0)+
																((years.includes("2014"))?parseFloat((data4ACommodity[sk]).val2014):0)+
																((years.includes("2015"))?parseFloat((data4ACommodity[sk]).val2015):0)+
																((years.includes("2016"))?parseFloat((data4ACommodity[sk]).val2016):0);
														}
														if(theTotalAmount>0)
														{
															eachState.push(stateName);
															eachState.push((theTotalAmount).toFixed(2));
															returnInformation.push(eachState);
														}	
													}				
													
									}
								else{
									console.log("This is a parameter issue. (You need to indicate B or S at getState4ACommodity via import-driven data)")
								}
		  					}
							});
						}
					 else
						{
							console.log("This is a parameter issue. (You need to indicate I or E at getState4ACommodity)")			
						}
				}
				}
			else{
				console.log("This is a parameter issue. (at getState4ACommodity)");
			}
		}
	//no year selected
	else
		{
			
		}
	return returnInformation;
}

/*d3.csv("file/commodity_ex.csv", function(error, data){
		  if(error)
		  {
			  console.log(error);
		  }
		  else
		  {
			  
		  }
});*/

function build1Map()
{
	var width = 500;
	var height = 300;
	var pupuset = [];

	var projection = d3.geo.albersUsa()
		.scale(600)
		.translate([width/2, height / 2]);

	var path = d3.geo.path()
		.projection(projection);

	/*var svg = d3.select("body").append("svg")
		.style("width", width)
		.style("height", height);*/
	var svg = d3.select("#map1SVG")
			  .attr("width", width)
			  .attr("height", height);

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
		  .on("click", function(d){
		      buildMapPie(fullNames[d.id]);
			  d3.select("#mapState").classed("hidden", false);
			  $('#mapState').html(fullNames[d.id]).show();
		  })
		  .on("click", function(d) {
					if(fullNames[d.id]=="California")
						{showRightP_5();}
					else
						{showWrongP_5();}
			
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
}

function build2Map()
{
	var width = 500;
	var height = 300;
	var pupuset = [];

	var projection = d3.geo.albersUsa()
		.scale(600)
		.translate([width/2, height / 2]);

	var path = d3.geo.path()
		.projection(projection);

	/*var svg = d3.select("body").append("svg")
		.style("width", width)
		.style("height", height);*/
	var svg = d3.select("#map2SVG")
			  .attr("width", width)
			  .attr("height", height);

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
		  .on("click", function(d){
		      buildMapPie(fullNames[d.id]);
			  d3.select("#mapState").classed("hidden", false);
			  $('#mapState').html(fullNames[d.id]).show();
		  })
		  .on("click", function(d) {
					if(fullNames[d.id]=="Indiana")
						{showRightP_6();}
					else
						{showWrongP_6();}
			
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
}

function playIt(file)
	{
		var audio = new Audio(file);
		audio.play();
	}

function go1()
{
	$("#panel_1").css("visibility", "visible");
	$("#panel_2").css("visibility", "hidden");
	$("#panel_3").css("visibility", "hidden");
	$("#panel_4").css("visibility", "hidden");
	$("#panel_5").css("visibility", "hidden");
	$("#panel_6").css("visibility", "hidden");
	$("#panel_7").css("visibility", "hidden");
	$("#panel_8").css("visibility", "hidden");
	
	build1Map();
	build2Map();
}

function go2()
{
	$("#panel_1").css("visibility", "hidden");
	$("#panel_2").css("visibility", "visible");
	$("#panel_3").css("visibility", "hidden");
	$("#panel_4").css("visibility", "hidden");
	$("#panel_5").css("visibility", "hidden");
	$("#panel_6").css("visibility", "hidden");
	$("#panel_7").css("visibility", "hidden");
	$("#panel_8").css("visibility", "hidden");
}

function go3()
{
	$("#panel_1").css("visibility", "hidden");
	$("#panel_2").css("visibility", "hidden");
	$("#panel_3").css("visibility", "visible");
	$("#panel_4").css("visibility", "hidden");
	$("#panel_6").css("visibility", "hidden");
	$("#panel_7").css("visibility", "hidden");
	$("#panel_8").css("visibility", "hidden");
}

function go4()
{
	$("#panel_1").css("visibility", "hidden");
	$("#panel_2").css("visibility", "hidden");
	$("#panel_3").css("visibility", "hidden");
	$("#panel_4").css("visibility", "visible");
	$("#panel_5").css("visibility", "hidden");
	$("#panel_6").css("visibility", "hidden");
	$("#panel_7").css("visibility", "hidden");
	$("#panel_8").css("visibility", "hidden");
}

function go5()
{
	$("#panel_1").css("visibility", "hidden");
	$("#panel_2").css("visibility", "hidden");
	$("#panel_3").css("visibility", "hidden");
	$("#panel_4").css("visibility", "hidden");
	$("#panel_5").css("visibility", "visible");
	$("#panel_6").css("visibility", "hidden");
	$("#panel_7").css("visibility", "hidden");
	$("#panel_8").css("visibility", "hidden");
}

function go6()
{
	$("#panel_1").css("visibility", "hidden");
	$("#panel_2").css("visibility", "hidden");
	$("#panel_3").css("visibility", "hidden");
	$("#panel_4").css("visibility", "hidden");
	$("#panel_5").css("visibility", "hidden");
	$("#panel_6").css("visibility", "visible");
	$("#panel_7").css("visibility", "hidden");
	$("#panel_8").css("visibility", "hidden");
}

function go7()
{
	$("#panel_1").css("visibility", "hidden");
	$("#panel_2").css("visibility", "hidden");
	$("#panel_3").css("visibility", "hidden");
	$("#panel_4").css("visibility", "hidden");
	$("#panel_5").css("visibility", "hidden");
	$("#panel_6").css("visibility", "hidden");
	$("#panel_7").css("visibility", "visible");
	$("#panel_8").css("visibility", "hidden");
}

function go8()
{
	$("#panel_1").css("visibility", "hidden");
	$("#panel_2").css("visibility", "hidden");
	$("#panel_3").css("visibility", "hidden");
	$("#panel_4").css("visibility", "hidden");
	$("#panel_5").css("visibility", "hidden");
	$("#panel_6").css("visibility", "hidden");
	$("#panel_7").css("visibility", "hidden");
	$("#panel_8").css("visibility", "visible");
	
	var score=0;
	score=score5+score6+score7;
	if(score==3) {$("#question_8").text("Your score is: A+ (Nice job! Very Impressed!)");}
	else if (score==2) {$("#question_8").text("Your score is: A (Try it next time. You will be better.)");}
	else if (score==1) {$("#question_8").text("Your score is: A- (Try it next time. You will be better.)");}
	else if (score==0) {$("#question_8").text("Your score is: B (Try it next time. You will be better.)");}
}

function showWrongP_5()
{
	score5=0;
	$("#imgWrong_5").css("display", "block");
	$("#imgRight_5").css("display", "none");
	$("#description_5").html("Through 2013 to 2016, <strong>California</strong> is the most popular trading partner with Taiwan and the amount is <strong>77,550.17</strong>, including 47,851.85 for imports and 29,695.32 between California and Taiwan.").show();
}

function showRightP_5()
{
	score5=1;
	$("#imgRight_5").css("display", "block");
	$("#imgWrong_5").css("display", "none");
	$("#description_5").html("Through 2013 to 2016, <strong>California</strong> is the most popular trading partner with Taiwan and the amount is <strong>77,550.17</strong>, including 47,851.85 for imports and 29,695.32 between California and Taiwan.").show();
}
	
function showWrongP_6()
{
	score6=0;
	$("#imgWrong_6").css("display", "block");
	$("#imgRight_6").css("display", "none");
	$("#description_6").html("Tell me about that!").show();
}

function showRightP_6()
{
	score6=1;
	$("#imgRight_6").css("display", "block");
	$("#imgWrong_6").css("display", "none");
	$("#description_6").html("Tell me about that!").show();
}

function showWrongP_7()
{
	score7=0;
	$("#imgWrong_7").css("display", "block");
	$("#imgRight_7").css("display", "none");
	$("#description_7").html("The amount of imports and exports is <strong>2,316,877.09</strong> between <strong>Canada</strong> and U.S.A..; The amount of imports and exports is <strong>2,309,795.77</strong> between <strong>China</strong> and U.S.A..").show();
}

function showRightP_7()
{
	score7=1;
	$("#imgRight_7").css("display", "block");
	$("#imgWrong_7").css("display", "none");
	$("#description_7").html("The amount of imports and exports is <strong>2,316,877.09</strong> between <strong>Canada</strong> and U.S.A..; The amount of imports and exports is <strong>2,309,795.77</strong> between <strong>China</strong> and U.S.A..").show();
}