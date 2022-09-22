/*
STATES:

1. song
2. isShown
3. editedSong

FUNCTIONS

1. handleShowMore
2. handleChange
3. handleSubmit

RENDER

form - only show if 'isShown'
form - set defaultValue to song.value
form - input - use handleChange to save to editedSong
form - submit - kick off DB function

s = state
f = function
r - render

*/
import React, { useState, useReducer } from "react";

// how do I store te songToEdit in a state before anything happens? So that I can render existing values in defaultValue
const initialState = { songToEdit }; // does this need to be destructured?

function reducer(state, action) {
  switch (action.type) {
    case "has the edit button been clicked": // S: isShown F: handleShowMore R: isShown &&()
      return { count: state.count + 1 };
    case "has the input text changed": // S: editedSong F: handleChange R: nothing to render, but needs to return editedSong
      return { count: state.count - 1 };
    case "has the submit button been clicked": // invoke editsong(editedSong) Maybe render confirmation?
      return { count: state.count + 1 };
    default:
      throw new Error();
  }
}

function EditSong(songToEdit) {
  const [state, dispatch] = useReducer(reducer, initialState);
}
