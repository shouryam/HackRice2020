import pandas as pd
from collections import defaultdict

data=pd.read_csv(r'Big_Cities_Health_Data_Inventory.csv')

indicators=data["Indicator"]
years=data["Year"]
races=data["Race/ Ethnicity"]
values=data["Value"]
places=data["Place"]
num_data=len(indicators)

def filter_by_race(target_indicator,target_place):
    """
    Given a target indicator and target place, this function returns the years, values, and races
    of the data points that match the indicator and place.
    
    Input
    Two strings representing the desired indicator and place.

    Returns
    The year, value, and race data in the datapoints that match the indicator and place.
    """
    fig_years=[]
    fig_vals=[]
    fig_race_labels=[]
    for idx in range(num_data):
        if indicators[idx]==target_indicator and places[idx]==target_place and not races[idx]=="All":
            fig_years.append(years[idx])
            fig_vals.append(values[idx])
            fig_race_labels.append(races[idx])
    return fig_years, fig_vals, fig_race_labels

def filter_all_races(target_indicator,target_place):
    """
    Given a target indicator and target place, this function returns the years and values 
    of the data points that describe "All" races and that match the indicator and place.
    Should be used when the data does not contain race data disaggregated by individual racial
    category.

    Input
    Two strings representing the desired indicator and place.

    Returns
    The year, value, and race data in the datapoints that match the indicator and place.
    The race data is simply a list containing only "All individuals".
    """
    fig_years=[]
    fig_vals=[]
    fig_race_labels=[]
    for idx in range(num_data):
        if indicators[idx]==target_indicator and places[idx]==target_place and races[idx]=="All":
            fig_years.append(years[idx])
            fig_vals.append(values[idx])
            fig_race_labels.append("All individuals")
    return fig_years, fig_vals, fig_race_labels

def filter(target_indicator,target_place):
    """
    Given a target indicator and target place, this function returns the years, values, and races
    of the data points that match the indicator and place. If the data is not disaggregated by race,
    the returned race data will be a list of strings "All individuals".
    
    Input
    Two strings representing the desired indicator and place.

    Returns
    The year, value, and race data in the datapoints that match the indicator and place.
    If the data is not disaggregated by race, the returned race data will be a list of
    strings "All individuals".
    """
    fig_years, fig_vals, fig_race_labels = filter_by_race(target_indicator,target_place)
    if fig_years==[]:
        fig_years, fig_vals, fig_race_labels = filter_all_races(target_indicator,target_place)
    return fig_years, fig_vals, fig_race_labels


#print(filter("AIDS Diagnoses Rate (Per 100,000 people)","Atlanta (Fulton County), GA"))
