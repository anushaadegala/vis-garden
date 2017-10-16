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