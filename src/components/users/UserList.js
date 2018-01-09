import React from 'react';
import UserDetail from './UserDetail';
import { fetchUsers } from './userActions';
import { connect } from 'react-redux';


class UserList extends React.Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users, loading, error } = this.props;
    debugger;
    if (error) {
      return <h1>{error.message}</h1>
    } else {
      return (
        <div>
          {
            users.map(user => {
              return <UserDetail key={user.id} user={user} />
            })
          }
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.items,
    loading: state.users.loading,
    error: state.users.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);