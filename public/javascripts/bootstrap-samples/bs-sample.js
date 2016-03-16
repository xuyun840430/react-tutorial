/**
 * Created by pc on 2016/3/15.
 */
var Alert = ReactBootstrap.Alert;
var Button = ReactBootstrap.Button;

//const alertInstance = (
//  <Alert bsStyle="warning">
//    <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
//  </Alert>
//);
//
//ReactDOM.render(
//  alertInstance,
//  document.getElementById('bootstrap-container')
//);

//var App = React.createClass({
//  render: function() {
//    return (
//      <form className="form-inline" role="form">
//        <div className="form-group">
//          <label className="sr-only">Field 1</label>
//          <input className="form-control" placeholder="Field 1" />
//        </div>&nbsp;
//        <div className="form-group">
//          <label className="sr-only">Field 2</label>
//          <input className="form-control" placeholder="Field 2" />
//        </div>&nbsp;
//        <button type="submit" className="btn btn-primary">Apply</button>&nbsp;
//        <button type="button" className="btn">Reset</button>
//      </form>
//    );
//  }
//});
//
//ReactDOM.render(<App />, document.getElementById('bootstrap-container'));

const AlertDismissable = React.createClass({
  getInitialState() {
    return {
      alertVisible: true
    };
  },

  render() {
    if (this.state.alertVisible) {
      return (
        <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
          <h4>Oh snap! You got an error!</h4>
          <p>Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p>
          <p>
            <Button bsStyle="danger">Take this action</Button>
            <span> or </span>
            <Button onClick={this.handleAlertDismiss}>Hide Alert</Button>
          </p>
        </Alert>
      );
    }

    return (
      <Button onClick={this.handleAlertShow}>Show Alert</Button>
    );
  },

  handleAlertDismiss() {
    this.setState({alertVisible: false});
  },

  handleAlertShow() {
    this.setState({alertVisible: true});
  }
});

ReactDOM.render(<AlertDismissable />, document.getElementById('bootstrap-container'));