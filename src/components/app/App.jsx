import React, { useReducer } from 'react';
//import useRecord from '../../hooks/useRecord';
import colorReducer, { initialValue } from '../../hooks/useColorReducer';

export default function App() {
  //const { current, undo, redo, record } = useRecord('#FF0000');
  const [state, dispatch] = useReducer(colorReducer, initialValue);

  return (
    <>
      <button
        aria-label="undo-button"
        onClick={() => dispatch({ type: 'undo' })}
      >
        undo
      </button>
      <button
        aria-label="redo-button"
        onClick={() => dispatch({ type: 'redo' })}
      >
        redo
      </button>
      <input
        aria-label="color-picker"
        type="color"
        value={state.current}
        onChange={({ target }) => dispatch({ 
          type: 'colorSelection', payload: target.value })}
      />
      <div
        aria-label="display"
        style={{
          backgroundColor: state.current,
          width: '10rem',
          height: '10rem',
        }}
      ></div>
    </>
  );
}
