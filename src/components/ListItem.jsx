import React from 'react';
import { List} from 'antd';

import './ListItem.scss';

function ListItem(data) {
  const item = data.data;
  console.log(item);
  return (
    <List.Item>
      <div className='itemContainer'>
        <p className='noteName'>{item.name}</p>
        <p>{item.time}  <span>{item.text}</span></p>
      </div>
    </List.Item>
  )
}

export default ListItem