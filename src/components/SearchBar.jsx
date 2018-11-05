import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {
  state = {
    term: ''
  };

  onInputChange = e => this.setState({ term: e.target.value });

  onFormSubmit = e => {
    e.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          value={this.state.term}
          placeholder="get a five day forecast in your favorite cities"
          className="form-control"
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            search
          </button>
        </span>
      </form>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = { fetchWeather };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
