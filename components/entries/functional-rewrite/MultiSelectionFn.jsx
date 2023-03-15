import React, { useContext, useState } from 'react'

function MultiSelectionFn({ selections }) {
  /*  const multiSelectionValidate = () => {
          return true
      }
  
      const validates = {
          ...upperValidates,
          multiSelectionValidate
      } */

  return (
    <>
    <AnswerContext.Consumer>
      {selections.map((selection) => (
        <button key={selection.value}
          onClick={() => context.dispatch({type: selection.requirement})}>
          {selection.value}
        </button>
      ))}
    </AnswerContext.Consumer>
    </>
  )
}

export default MultiSelectionFn;