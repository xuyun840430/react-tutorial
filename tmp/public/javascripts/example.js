/**
 * Example of React Tutorial
 */

/**
 * Tutorial1
 */
// build the CommentBox component, which is just a simple <div>
var CommentBox = React.createClass({
  // Note that native HTML element names start with a lowercase letter,
  // while custom React class names begin with an uppercase letter.
  render: function () {
    // Notice how we're mixing HTML tags and components we've built
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

/**
 * Tutorial2
 */
var CommentList = React.createClass({
  render: function () {
    // Pass it the author name and comment text to 'Comment' class
    return (
      <div className="commentList">
        <Comment author="Yun Xu">This is one comment</Comment>
        <Comment author="Qian Zhu">This is *another* comment</Comment>
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function () {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

/**
 * Tutorial3
 * create the Comment component, which will depend on data passed in from its parent.
 * Data passed in from a parent component is available as a 'property' on the child component.
 */
var Comment = React.createClass({
  render: function () {
    // These 'properties' are accessed through this.props. Using props, we will be able to
    // read the data passed to the Comment from the CommentList
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});


// It is important that ReactDOM.render remain at the bottom of the script for this tutorial.
// ReactDOM.render should only be called after the composite components have been defined.
ReactDOM.render(
  <CommentBox />,
  document.getElementById('container')
);
