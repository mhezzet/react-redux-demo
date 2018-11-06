import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions/index';
import _ from 'lodash';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts = () => {
    return _.map(this.props.posts, post => (
      <li className="list-group-item" key={post.id}>
        {post.title}
      </li>
    ));
  };

  render() {
    console.log(this.props.posts);

    return (
      <div>
        <div className="float-right">
          <Link className="btn btn-primary" to="/new">
            Create a new post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({ posts: state.posts });

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostsIndex);
