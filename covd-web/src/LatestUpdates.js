import React from 'react';

class LatestUpdates extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalDeaths: 0
        }
    }

    componentWillMount() {
        let totalDeathCount = 0;
        fetch("https://coronavirus-tracker-api.herokuapp.com/v2/latest")
        .then((response) => {
            response.json().then((data) => {
                console.log(data)
                totalDeathCount = data.latest.deaths
                this.setState({
                    totalDeaths: totalDeathCount
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
                <h4>Global deaths: {this.state.totalDeaths}</h4>
            </div>
        )
    }
}

export default LatestUpdates;