import React from 'react';
import { Remarkable } from 'remarkable';

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
  rawMarkup() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
}
  render() {
    return (
      <div className="comment">
        <div className="userInfo">
          <Avatar />
          <div className="commentAuthor">
            {this.props.author}
          </div>
        </div>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />      </div>
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

var data = [
  {id:1, author: "Branka M.", text: "First comment" },
  {id:2, author: "Nikola P.", text: "Good, second comment"},
  {id:3, author: "Mara Mi.", text: "Third comment, follows along!"}
];

class CommentList extends React.Component {
  render() {
    var commentNodes = this.props.data.map(function(comment) {
      return(
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });

    return (
      <div className="commentList">
        Comment list:
        {commentNodes}
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
      <CommentList data={this.props.data} />
    </div>
  )
  }
}


export default CommentBox;
export {data};