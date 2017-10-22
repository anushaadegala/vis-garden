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


	   