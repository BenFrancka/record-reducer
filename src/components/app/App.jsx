import React, { useReducer } from 'react';
//import useRecord from '../../hooks/useRecord';
import colorReducer, { initialValue } from '../../hooks/useColorReducer';

export default function App() {
  //const { current, undo, redo, record } = useRecord('#FF0000');
  const [state, dispatch] = useReducer(colorReducer, initialValue);

  return (
    <>
      <button aria-label="undo-button" onClick={undo}>
        undo
      </button>
      <button aria-label="redo-button" onClick={redo}>
        redo
      </button>
      <input
        aria-label="color-picker"
        type="color"
        value={current}
        onChange={({ target }) => record(target.value)}
      />
      <div
        aria-label="display"
        style={{ backgroundColor: current, width: '10rem', height: '10rem' }}
      ></div>
    </>
  );
}
