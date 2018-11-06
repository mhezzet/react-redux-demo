import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';

class PostsShow extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  render() {
    const { post } = this.props;

    if (!post) return <p>there is no such a post</p>;
    return (
      <div>
        <h3>{post.title}</h3> <h6>{post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }, ownProps) => ({
  post: posts[ownProps.match.params.id]
});

export default connect(
  mapStateToProps,
  { fetchPost }
)(PostsShow);
