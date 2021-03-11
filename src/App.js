import React from 'react';

class Avatar extends React.Component {
  render() {
    return (
      <img className="avatar"
      alt={this.props.author}
      />
    )
  }
}


class Comment extends React.Component {
  render() {
    return (
      <div className="comment">
        <div className="userInfo">
          <Avatar />
          <div className="commentAuthor">
            {this.props.author}
          </div>
      </div>
      {this.props.children}
      </div>
    );
  }
};

class CommentForm extends React.Component {
  render() {
    return (
       <div className="commentForm">
         I am a comment form
       </div>
    );
  }
}


class CommentList extends React.Component {
  render() {
    return (
      <div className="commentList">
        Comment list
        <Comment author="Branka M.">First comment</Comment>
        <Comment author="Nikola P.">Good, second comment</Comment>
        <Comment author="Mara Mi.">Third comment, comes along!</Comment>
      </div>
    )
  }
}

class CommentBox extends React.Component {
render () {
  return (
    <div className="commentBox">
      <h1>This is a comment box</h1>
      <CommentForm />
      <CommentList />
    </div>
  )
  }
}


export default CommentBox;