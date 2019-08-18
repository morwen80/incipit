import React from 'react';

const SinglePrompt = ({ prompt }) =>
  <div>
    <p>{prompt.prompt}</p>
    <hr />
    <i className="fas fa-user"></i>{prompt.writer}
    <span className="likesNum">{prompt.likes} likes</span>
</div>


export default SinglePrompt
