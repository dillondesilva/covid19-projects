import React from 'react';

class LatestUpdates extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalDeaths: 0,
            totalCases: 0,
            totalRecoveries: 0
        }
    }

    componentWillMount() {
        let totalDeathCount = 0;
        let totalCaseCount = 0;
        let totalRecoveredCount = 0;
        fetch("https://coronavirus-tracker-api.herokuapp.com/v2/latest")
        .then((response) => {
            response.json().then((data) => {
                console.log(data)
                totalDeathCount = data.latest.deaths;
                totalCaseCount = data.latest.confirmed;
                totalRecoveredCount = data.latest.recovered;
                this.setState({
                    totalDeaths: totalDeathCount,
                    totalCases: totalCaseCount,
                    totalRecoveries: totalRecoveredCount
                })
            })
        })
        .catch((err) => {
            console.log("error")
        })
    }

    render() {
        return (
            <div>
                <h3>Latest Updates</h3>
                <h4>Total Cases: {this.state.totalCases}</h4>
                <h4>Total Deaths: {this.state.totalDeaths}</h4>
                <h4>Total Recoveries: {this.state.totalRecoveries}</h4>
            </div>
        )
    }
}

export default LatestUpdates;