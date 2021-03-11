import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommentBox, {data} from './App.js';

ReactDOM.render(
    <CommentBox data={data} />,
  document.getElementById('root')
);
