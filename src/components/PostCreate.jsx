import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { createPost } from '../actions/index';

class PostCreate extends Component {
  renderField(field) {
    const {
      meta: { touched, error }
    } = field;

    const className = `form-control ${touched &&
      error &&
      'is-invalid'} ${touched && !error && 'is-valid'}`;
    return (
      <div className="form-group">
        <label className={`${touched && error && 'text'}`}>{field.label}</label>
        <input className={className} type="text" {...field.input} />
        {touched && error && <p className="text-danger">{error}</p>}
      </div>
    );
  }

  onSubmitHandler = values => {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmitHandler)}>
        <Field name="title" label="title" component={this.renderField} />
        <Field
          name="categories"
          label="categories"
          component={this.renderField}
        />
        <Field name="content" label="content" component={this.renderField} />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a title';
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories';
  }
  if (!values.content) {
    errors.content = 'Enter a content';
  }

  return errors;
}

export default reduxForm({ validate, form: 'CreatPostForm' })(
  connect(
    null,
    { createPost }
  )(PostCreate)
);
