class FigureData
{
    constructor(fig_years, fig_vals, fig_race_labels)
    {
        this.fig_years=fig_years;
        this.fig_vals=fig_vals;
        this.fig_race_labels=fig_race_labels;
    }
    getYears()
    {
        return this.fig_years
    }
    getVals()
    {
        return this.fig_vals
    }
    getRaceLabels()
    {
        return this.fig_race_labels
    }
}