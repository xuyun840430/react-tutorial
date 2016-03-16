/**
 * Created by Information on 2016/1/26.
 */


/**
 * Simple Click Sample: Interactivity and Dynamic UIs
 */
var LinkButton = React.createClass({
  getInitialState: function () {
    return {liked: false};
  },
  handleClick: function (event) {
    this.setState({liked: !this.state.liked});
  },
  render: function () {
    var text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      <p onClick={this.handleClick}>
        You {text} this. Click to toggle.
      </p>
    );
  }
});

//ReactDOM.render(
//  <LinkButton />,
//  document.getElementById('tutorial-samples')
//);

/**
 * Composition Example:
 * Create a simple Avatar component which shows a Facebook page picture and name using the Facebook Graph API.
 */
var Avatar = React.createClass({
  render: function () {
    return (
      <div>
        <PagePic pagename={this.props.pagename} />
        <PageLink pagename={this.props.pagename} />
      </div>
    )
  }
});

var PagePic = React.createClass({
  render: function () {
    return (
      <img src={'https://graph.facebook.com/' + this.props.pagename + '/picture'} />
    );
  }
});

var PageLink = React.createClass({
  render: function () {
    return (
      <a href={'https://www.facebook.com/' + this.props.pagename}>
        {this.props.pagename}
      </a>
    );
  }
});


/**
 * A Complete Example by using Refs to Components: In this example, we get a reference to the text input
 * backing instance and we call focus() when the button is clicked.
 *
 * CAUTION:
 * - Never access refs inside of any component's render method – or while any component's render method is
 *   even running anywhere in the call stack.
 * - Refs may not be attached to a stateless function, because the component does not have a backing instance.
 *   You can always wrap a stateless component in a standard composite component and attach a ref to the composite
 *   component.
 */

// Keep in mind, however, that the JSX doesn't return a component instance! It's just a ReactElement
var MyComponent = React.createClass({
  handleClick: function () {
    // Explicitly focus the text input using the raw DOM API.
    // The 'ref' is the <input/> component itself with name 'myTextInput'.
    if (this.myTextInput !== null) {
      this.myTextInput.focus();
    }
  },

  /*
   React supports a special attribute that you can attach to any component. The ref attribute can be
   a callback function, and this callback will be executed immediately after the component is mounted.
   The referenced component will be passed in as a parameter, and the callback function may use the
   component immediately, or save the reference for future use (or both).
   It's as simple as adding a ref attribute to anything returned from render with ES6:

       render: function() {
         return <TextInput ref={(c) => this._input = c} />;
       },
       componentDidMount: function() {
         this._input.focus();
       },
   */
  render: function () {
    /*
     The ref attribute is a callback that saves a reference to the component to this.myTextInput when
     the component is mounted, i.e. the 'ref' here is the <input/> component itself with name 'myTextInput'.
     */
    return (
      <div>
        <input type="text" ref={(ref) => this.myTextInput = ref}/>
        <input
          type="button"
          value="Focus the text input"
          onClick={this.handleClick}
        />
      </div>
    );
  }
});



/**
 * Render UI (Must be placed at the end of file)
 */
ReactDOM.render(
  //<LinkButton />,
  //<Avatar pagename="Engineering"/>,
  <MyComponent />,
  document.getElementById('tutorial-samples')
);