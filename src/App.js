import React from 'react';
// import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import PostList from './component/PostList';

function App() {
  return (
    <div className="bg-dark">
       <PostList/>
    </div>
  );
}

export default App;
