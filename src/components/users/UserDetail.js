import React from 'react';

export default class UserDetail extends React.Component {
  render() {
    const { user: { name, age, gender } } = this.props;
    return (
      <div>
        <p>My name is {name} and I am {age} years old! :D</p>
      </div>
    );
  }
}