import React from 'react';
import './userCreate.css';

const UserCreate: React.FC = () => (
  <div className="container">
    <h1>Hello user!</h1>
    <div className="fields mb-4">
      <div className="field mr-4">
        <label htmlFor="title" className="label">
          Your email
        </label>
        <input type="text" id="title" placeholder="Input your email" />
      </div>

      <div className="field">
        <label htmlFor="password" className="label">
          Your password
        </label>
        <input type="text" id="password" placeholder="Input your password" />
      </div>
    </div>
    <button className="btn btn-success">Submit</button>
  </div>
);

export default UserCreate;
