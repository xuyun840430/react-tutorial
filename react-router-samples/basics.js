/**
 * Created by Information on 2016/2/3.
 */

/**
 * Basics Samples of React-Router
 * A route configuration is basically a set of instructions that tell a router how to try to match the URL and what code
 * to run when it does.
 */

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import { IndexRoute } from 'react-router'
import { Redirect } from 'react-router'

/*
 Imagine we'd like to render another component inside of App when the URL is /. Currently, this.props.children inside
 of App's render method is undefined in this case. We can use an <IndexRoute> to specify a "default" page.
 */
const Dashboard = React.createClass({ // Create Dashboard page for index router
  render() {
    return <div>Welcome to the app!</div>
  }
});

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
});

const About = React.createClass({
  render() {
    return <h3>About</h3>
  }
});

const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your inbox"}
      </div>
    )
  }
});

const Message = React.createClass({
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
});

render((
  <Router>
    <Route path="/" component={App}>
      {/* Show the dashboard at / path. Inside App's render method this.props.children will be a <Dashboard> element,
      e.g.: 'http://localhost:3000/#/inbox/messages/5' */}
      <IndexRoute component={Dashboard} />
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
        {/* Redirect /inbox/messages/:id to /messages/:id */}
        <Redirect from="messages/:id" to="/messages/:id" />
      </Route>
      {/* Use /messages/:id instead of /inbox/messages/:id path. could remove the /inbox segment from the
      /inbox/messages/:id URL pattern, but still render Message nested inside the App -> Inbox UI. e.g.:
       "http://localhost:3000/#/messages/5" */}
      <Route component={Inbox}>
        <Route path="messages/:id" component={Message} />
      </Route>
    </Route>
  </Router>
), document.getElementById('react-router'));

















