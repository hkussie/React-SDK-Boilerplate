import React, { Component } from "react";
import axios from "axios";

class VINDecoder extends Component {
    state = {
        vehicleInfo: null,
        error: null
    };
    
    componentDidMount() {
        this.decodeVin(this.props.vin);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.vin !== this.props.vin) {
            this.decodeVin(this.props.vin);
        }
    }
    
    decodeVin = async (vin) => {
        const API_KEY = process.env.REACT_APP_API_KEY;
        const url = `https://car-api2.p.rapidapi.com/api/vin/${vin}`;

        try {
            const response = await axios.get(url, {
                headers: {
                    'x-rapidapi-key': API_KEY,
                    'x-rapidapi-host': 'car-api2.p.rapidapi.com'
                },
            });
            this.setState({ vehicleInfo: response.data, error: null });
        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    render() {
        const { vehicleInfo, error } = this.state;
        if (error) {
            return <div>Error: {error}</div>;
        }
        if (!vehicleInfo) {
            return <div>Loading...</div>;
        }

        // Render vehicle information, or pass it to callback:
        return (
            <div>
                <h3>Vehicle Information: </h3>
                <p>Make: {vehicleInfo.make}</p>
                <p>Model: {vehicleInfo.model}</p>
            </div>
        ); 
    }
}

export default VINDecoder;