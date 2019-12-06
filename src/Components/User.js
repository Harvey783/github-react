import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      following,
      followers,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;
    return (
      <Fragment>
        <Link to="/">Back to Search</Link>
      </Fragment>
    );
  }
}

export default User;
