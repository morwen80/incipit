import React from 'react';

const SinglePrompt = ({ prompt }) =>
  <div>
    <p>{prompt.prompt}</p>
    <hr />
    added by: {prompt.writer}
</div>


export default SinglePrompt
