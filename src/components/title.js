import React from 'react';
import { Link } from 'react-router-dom';

export default function() {
  return (
    <div>
      <ul className='list-group'>
        <li className='list-group-item'>
          <Link to="/javascript">JavaScript</Link>
        </li>
        <li className='list-group-item'>
          <Link to="/haskell">Haskell</Link>
        </li>
        <li className='list-group-item'>
          <Link to="/coffeescript">CoffeeScript</Link>
        </li>
      </ul>
      <hr/>
    </div>
  );
};
