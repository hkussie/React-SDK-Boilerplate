import React, { Component } from 'react';
import axios from 'axios';

class Years extends Component {
  state = {
    years: [],
    error: null,
  };

  componentDidMount() { 
    this.fetchYears();
  }

  fetchYears = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const url = 'https://car-api2.p.rapidapi.com/api/years';
    const { options } = this.props;

    try {
      const response = await axios.get(url, {
        headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': 'car-api2.p.rapidapi.com',
        },
        params: options,
      });

      this.setState({ years: response.data, error: null });
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  render() {
    const { years, error } = this.state;

    if (error) {
      return <div>Error: {error}</div>;
    }

    if (years.length === 0) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Vehicle Years</h3>
        <ul>
          {years.map((year, index) => (
            <li key={index}>{year}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Years;