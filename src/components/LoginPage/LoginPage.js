import React from 'react';
import { connect } from 'react-redux';
import { logInUser } from './sessionActions';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { credentials: { email: '', password: '' } };
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    this.setState({credentials});
  }

  onSave(event) {
    event.preventDefault();
    this.props.logInUser(this.state.credentials);
  }

  render() {
    return (
      <div>
        <form>
          <input
            name="email"
            type="text"
            value={this.state.credentials.email}
            onChange={this.onChange} />

          <input
            name="password"
            type="password"
            value={this.state.credentials.password}
            onChange={this.onChange} />

          <button
            type="submit"
            onClick={this.onSave}>Submit</button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logInUser: (credentials) => dispatch(logInUser(credentials))
  }
}

export default connect(null, mapDispatchToProps)(LoginPage);