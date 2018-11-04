import React, { Component } from 'react';
import { connect } from 'react-redux';

export class BookDetails extends Component {
  render() {
    if (!this.props.book) {
      return <div>select a book to get started</div>;
    }
    return (
      <div>
        <h1>Details for :</h1>
        {this.props.book.title}
        <div>{this.props.book.pages}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ book: state.activeBook });

export default connect(mapStateToProps)(BookDetails);
