function get1stCountryNameby2ndCountryName(countryName2nd)
{
	for(i=0;i<country2ndLevel.length;i++)
		{
			if(country2ndLevel[i][1]==countryName2nd)
				{
					for (j=0;j<country1stLevel.length;j++)
						{
							if((parseFloat(country2ndLevel[i][0])>=parseFloat((country1stLevel[j][0]).substring(0,3)))&&
							   (parseFloat(country2ndLevel[i][0])<=parseFloat((country1stLevel[j][0]).substring(4,7))))
								{
									return country1stLevel[j][1];}
						}
				}
		}
}

function get1stCommodityNameby2ndCommodityName(commodityCodefromCSV)
{
	
	var normalizedCommodityCode="";
	//console.log("length: "+commodityCodefromCSV.toString().length);
	if(commodityCodefromCSV.toString().length==1) {normalizedCommodityCode="00000"+commodityCodefromCSV.toString();}
	else if(commodityCodefromCSV.toString().length==2) {normalizedCommodityCode="0000"+commodityCodefromCSV.toString();}
	else if(commodityCodefromCSV.toString().length==3) {normalizedCommodityCode="000"+commodityCodefromCSV.toString();}
	else if(commodityCodefromCSV.toString().length==4) {normalizedCommodityCode="00"+commodityCodefromCSV.toString();}
	else if(commodityCodefromCSV.toString().length==5) {normalizedCommodityCode="0"+commodityCodefromCSV.toString();}
	else if(commodityCodefromCSV.toString().length==6) {normalizedCommodityCode=commodityCodefromCSV.toString();}
	//console.log("normalized code:"+normalizedCommodityCode);
	var commodityCodeFirst2Digits=normalizedCommodityCode.substring(0,2);
	//console.log("three digits: "+commodityCodeFirst3Digits);
					for (j=0;j<commodity1stLevel.length;j++)
						{
							//console.log("first 3: "+(commodity1stLevel[j][0]).substring(0,3));
							//console.log("last 3: "+(commodity1stLevel[j][0]).substring(4,7));
							if((parseFloat(commodityCodeFirst2Digits)>=parseFloat((commodity1stLevel[j][0]).substring(0,3)))&&
							   (parseFloat(commodityCodeFirst2Digits)<=parseFloat((commodity1stLevel[j][0]).substring(4,7))))
								{
									return commodity1stLevel[j][1];}
						}
}

function getCommodityNamebyCommodityCodeFromCVS(commodityCodefromCSV)
{
	//console.log(commodityCodefromCSV);
	var normalizedCommodityCode="";
	if(commodityCodefromCSV.toString().length==1) normalizedCommodityCode="00000"+commodityCodefromCSV.toString();
	else if(commodityCodefromCSV.toString().length==2) normalizedCommodityCode="0000"+commodityCodefromCSV.toString();
	else if(commodityCodefromCSV.toString().length==3) normalizedCommodityCode="000"+commodityCodefromCSV.toString();
	else if(commodityCodefromCSV.toString().length==4) normalizedCommodityCode="00"+commodityCodefromCSV.toString();
	else if(commodityCodefromCSV.toString().length==5) normalizedCommodityCode="0"+commodityCodefromCSV.toString();
	else if(commodityCodefromCSV.toString().length==6) {normalizedCommodityCode=commodityCodefromCSV.toString();}
	
	var commodityCodeFirst2Digits=normalizedCommodityCode.substring(0,2);
	for (i=0;i<commodity2ndLevel.length;i++)
		{
			if (parseFloat(commodityCodeFirst2Digits)==parseFloat(commodity2ndLevel[i][0]))
				{
					//console.log("after:"+commodity2ndLevel[i][1]);
					return commodity2ndLevel[i][1];
				}
		}
}