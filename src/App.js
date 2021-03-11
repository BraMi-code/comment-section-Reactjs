import React from 'react';

class Comment extends React.Component {
  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
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
