import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export class WeatherList extends Component {
  renderWeather({ city, list }) {
    const temps = list.map(weather => weather.main.temp);
    const pressure = list.map(weather => weather.main.pressure);
    const humidity = list.map(weather => weather.main.humidity);
    return (
      <tr key={city.population}>
        <td>{city.name}</td>
        <td>
          <Sparklines height={120} width={180} data={temps}>
            <SparklinesLine color="blue" />
          </Sparklines>
        </td>
        <td>
          <Sparklines height={120} width={180} data={pressure}>
            <SparklinesLine color="red" />
          </Sparklines>
        </td>
        <td>
          <Sparklines height={120} width={180} data={humidity}>
            <SparklinesLine color="green" />
          </Sparklines>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ weather }) => ({ weather });

export default connect(mapStateToProps)(WeatherList);
