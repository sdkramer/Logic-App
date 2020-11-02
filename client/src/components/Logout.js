import React from 'react'

class Logout extends React.Component {

  logout = (e) => {
    e.preventDefault();
    localStorage.setItem('token', '');
    this.props.history.push('/')
    
  }

  render() {
    return (
      <button onClick={this.logout}>Log out</button>
    )
  }

}

export default Logout