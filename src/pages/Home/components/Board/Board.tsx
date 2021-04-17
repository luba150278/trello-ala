/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useActions } from '../../../../hooks/useActions';
import { useTypeSelector } from '../../../../hooks/useTypeSelector';
import { IBoard } from '../../../../interfaces/board';

/**
 * Get array item
 * @param arr - string array
 * @param index - array index
 * @returns number or string value
 */
function getElement(arr: string[], index: number, num: boolean): string {
  const el = String(arr[index].substring(arr[index].indexOf(':') + 1));
  if (num) return el;
  return el.substring(1, el.length - 1); // delete quotes ""
}
/**
 * Parse boards get from api
 * @param boards - parse boards Object
 * @returns - parsed boards array
 */
function getBoards(boards: IBoard[]): IBoard[] {
  const boardsObj: IBoard[] = [];
  try {
    const boardsObject = JSON.stringify(boards);
    const firstInd = boardsObject.indexOf('[') + 1;
    const secondInd = boardsObject.indexOf(']');
    const boardsArray = boardsObject.substring(firstInd, secondInd);
    const boardsItems: string[] = boardsArray.split(/,(?={)/);
    boardsItems.forEach((element) => {
      const newElement = element.substring(2, element.length - 1); // delete quotes {}
      const subArray = newElement.split(/,/);
      const id = Number(getElement(subArray, 0, true));
      const title = getElement(subArray, 1, false);
      const item: IBoard = { id, title };
      boardsObj.push(item);
    });
  } catch (e) {
    return [];
  }
  return boardsObj;
}
/**
 * Get and draw trello boards
 * @returns boards cards
 */
const Board: React.FC = () => {
  const { boards, error, loading } = useTypeSelector((state) => state.board);
  const { fetchBoards } = useActions();
  useEffect(() => {
    fetchBoards();
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  // boards.boards
  const boardsObj = getBoards(boards);
  if (boardsObj.length > 0) {
    return (
      <div>
        <h1>Boards</h1>
        <div className="row">
          {boardsObj.map((board) => (
            <Link to={`/board/${board.id}`} key={board.id} className="card col-md-3 mx-2 mb-2">
              {board.title}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Boards</h1>
      <h2>Boards wasn't create</h2>
    </div>
  );
};

export default Board;
