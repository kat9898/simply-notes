import React from 'react';
import { List} from 'antd';

import './ListItem.scss';

function ListItem({data, activeNote, setActiveNote}) {

  return (
    <List.Item onClick={() => {
      setActiveNote(data.id);
      console.log(activeNote, data.id);
      }}
      className={`itemContainer ${data.id === activeNote && "active"}`}
      >
      <div>
        <p className='noteName'>{data.name}</p>
        <p>{data.name}  <span>{data.text}</span></p>
      </div>
    </List.Item>
  )
}

export default ListItem