import React from 'react';
import { Link } from 'react-router-dom';
import Board from './components/Board/Board';

const Main: React.FC = () => (
  <section>
    <div className="container mb-4">
      <Link className="board-title mr-4" to="/user">
        Users
      </Link>
      <Link className="board-title" to="/todo">
        ToDo
      </Link>
    </div>
    <div className="container">
      <h1>My Boards</h1>
      <p>This is a training React-project. An analogue of the "Trello" service.</p>
      <Board />
    </div>
  </section>
);
export default Main;
