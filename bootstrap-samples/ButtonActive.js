
var ReactDOM = require('react-dom');
var ButtonToolbar = require('react-bootstrap');
const buttonsInstance = (
  <ButtonToolbar>
    <Button bsStyle="primary" bsSize="large" active>Primary button</Button>
    <Button bsSize="large" active>Button</Button>
  </ButtonToolbar>
);

ReactDOM.render(
  buttonsInstance,
  document.getElementById('container')
);
