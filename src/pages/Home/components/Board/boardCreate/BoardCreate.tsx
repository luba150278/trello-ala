/* eslint-disable no-console */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { fetchCreateBoard, setBoardTitle } from '../../../../../store/acrionCreators/boardCreate';
import { BoardCreateAction } from '../../../../../types/boardCreate';
import './boardCreate.css';

type ITitle = {
  title: string;
};
const BoardCreate: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => setTitle(event.target.value);
  const newBoard: ITitle = { title };
  useEffect(() => {
    fetchCreateBoard(newBoard);
  }, [newBoard]);

  const xxx = (event: React.MouseEvent): BoardCreateAction => {
    event.preventDefault();
    return setBoardTitle(newBoard);
  };

  return (
    <div className="container">
      <h1>Board Creator</h1>
      <div className="fields mb-4">
        <div className="field mr-4">
          <label htmlFor="title" className="label">
            Board name
          </label>
          <input onChange={changeHandler} value={title} type="text" id="title" placeholder="Enter board name" />
        </div>
      </div>
      <button className="btn btn-success mr-2" onClick={(event): BoardCreateAction => xxx(event)}>
        Submit
      </button>

      <button
        className="btn btn-success mr-2"
        onClick={async (): Promise<Response> => {
          console.log(newBoard);
          return axios.post('https://trello-back.shpp.me/lmyetolkina/api/v1/board', {
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer 123',
            },
            body: {
              newBoard,
            },
          });
        }}
      >
        add use axios
      </button>

      <button
        className="btn btn-success"
        onClick={async (): Promise<Response> => {
          console.log(newBoard);
          return fetch('https://trello-back.shpp.me/lmyetolkina/api/v1/board', {
            method: 'POST',
            headers: { Authorization: 'Bearer 123', 'Content-type': 'application/json' },
            body: JSON.stringify(newBoard),
          });
        }}
      >
        add use fetch
      </button>
    </div>
  );
};

export default BoardCreate;
