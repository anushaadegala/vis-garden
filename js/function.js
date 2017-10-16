//6.2.1 getImportNExport4State
function getImportNExport4State(states, years, countries, commodities)
{
	//at least one year
	if(years.length>0)
		{
			console.log("states: " + states);
			console.log("years: " + years);
			console.log("countries: " + countries.length);
			console.log("commodities: "+ commodities.length);
	
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
				console.log("This is a parameter issue. (at getImportNExport4State)");
			}
				}
			//no year selected
			else
				{
			
				}
	return returnInformation;
}

//6.2.2 getPieChart4Country
function getPieChart4Country(states, years, countries, commodities, IE)
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
								
								//get data rows for each state
								//for example get 25 rows for Alabama
								var data4AStateAbout25 = data.filter(function(d) 
															 {
							  		if(d["statename"] == stateName && d["rank"] != "0")
        								{ 
            							return d;
        								}
									   
								});
								//get d[0], d[1], d[2], d[3] for each state	
								//for example get 2013 to 2016 for Alabama
			  					if(countries[0]=="B")
									{
										var tempAllCountryInformation=[];
										//build an array and fill 
										//d[0] country name
										for (b1=1;b1<country1stLevel.length;b1++)
											{
												eachCountry=[country1stLevel[b1][1],0,0,""];
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
													""]
												);
											}
										for (f=0;f<tempAllCountryInformation.length;f++)
											{
												if(parseFloat(tempAllCountryInformation[f][1])>0)
													{returnInformation.push(tempAllCountryInformation[f]);}
											}
									}
								else{
									console.log("This is a parameter issue. (You need to indicate B or S at getPieChart4Country via import-driven data)")
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
								
								//get data rows for each state
								//for example get 25 rows for Alabama
								var data4AStateAbout25 = data.filter(function(d) 
															 {
							  		if(d["statename"] == stateName && d["rank"] != "0")
        								{ 
            							return d;
        								}
									   
								});
								//get d[0], d[1], d[2], d[3] for each state	
								//for example get 2013 to 2016 for Alabama
			  					if(countries[0]=="B")
									{
										var tempAllCountryInformation=[];
										//build an array and fill 
										//d[0] country name
										for (b1=1;b1<country1stLevel.length;b1++)
											{
												eachCountry=[country1stLevel[b1][1],0,0,""];
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
													""]
												);
											}
										for (f=0;f<tempAllCountryInformation.length;f++)
											{
												if(parseFloat(tempAllCountryInformation[f][1])>0)
													{returnInformation.push(tempAllCountryInformation[f]);}
											}
									}
								else{
									console.log("This is a parameter issue. (You need to indicate B or S at getPieChart4Country via export-driven data)")
								}
		  					}
							});
						}
					 else
						{
							console.log("This is a parameter issue. (You need to indicate I or E at getPieChart4Country)")			
						}
				}
				}
			else{
				console.log("This is a parameter issue. (at getPieChart4Country)");
			}
		}
	//no year selected
	else
		{
			
		}
	return returnInformation;
}

d3.csv("file/commodity_ex.csv", function(error, data){
		  if(error)
		  {
			  console.log(error);
		  }
		  else
		  {
			  
		  }
});


	   