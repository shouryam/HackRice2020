/*src="https://d3js.org/d3.v5.js"
var csv="Big_Cities_Health_Data_Inventory.csv"

var data=pd.read_csv(csv)
console.log(parsed)

print(data)
*/
import React, {Component} from "react";

Papa.parse(fileInput.files[0], {
	complete: function(results) {
		console.log(results);
	}
});




var indicators=data["Indicator"]
var years=data["Year"]
var races=data["Race/ Ethnicity"]
var values=data["Value"]
var places=data["Place"]
var num_data=indicators.length()

filter_by_race=(target_indicator,target_place) => {
    /*
    Given a target indicator and target place, this function returns the years, values, and races
    of the data points that match the indicator and place.
    
    Input
    Two strings representing the desired indicator and place.

    Returns
    The year, value, and race data in the datapoints that match the indicator and place.
    */
    var fig_years=[]
    var fig_vals=[]
    var fig_race_labels=[]
    for (var idx=1; idx<num_data; idx++)
    {
        if (indicators[idx]==target_indicator && places[idx]==target_place && races[idx]!="All")
        {
            fig_years.push(years[idx])
            fig_vals.push(values[idx])
            fig_race_labels.push(races[idx])
        }
    }
    fig_data=new FigureData(fig_years,fig_vals,fig_race_labels)
    return fig_data
}
filter_all_races = (target_indicator,target_place) =>{
    /*
    Given a target indicator and target place, this function returns the years and values 
    of the data points that describe "All" races and that match the indicator and place.
    Should be used when the data does not contain race data disaggregated by individual racial
    category.

    Input
    Two strings representing the desired indicator and place.

    Returns
    The year, value, and race data in the datapoints that match the indicator and place.
    The race data is simply a list containing only "All individuals".
    */
    var fig_years=[]
    var fig_vals=[]
    var fig_race_labels=[]
    for (var idx=1; idx<num_data; idx++)
    {
        if (indicators[idx]==target_indicator && places[idx]==target_place && races[idx]=="All")
        {
            fig_years.push(years[idx])
            fig_vals.push(values[idx])
            fig_race_labels.push("All individuals")
        }
    }
    fig_data=new FigureData(fig_years,fig_vals,fig_race_labels)
    return fig_data
}
filter = (target_indicator,target_place) => {
    /*
    Given a target indicator and target place, this function returns the years, values, and races
    of the data points that match the indicator and place. If the data is not disaggregated by race,
    the returned race data will be a list of strings "All individuals".
    
    Input
    Two strings representing the desired indicator and place.

    Returns
    The year, value, and race data in the datapoints that match the indicator and place.
    If the data is not disaggregated by race, the returned race data will be a list of
    strings "All individuals".
    */
    fig_years, fig_vals, fig_race_labels = filter_by_race(target_indicator,target_place)
    if (fig_years==[])
    {
        fig_years, fig_vals, fig_race_labels = filter_all_races(target_indicator,target_place)
    }
    fig_data=new FigureData(fig_years,fig_vals,fig_race_labels)
    return fig_data
}

//print(filter("AIDS Diagnoses Rate (Per 100,000 people)","Atlanta (Fulton County), GA"))
