import React from 'react';
import { List} from 'antd';

import './ListItem.scss';

function ListItem({data, activeNote, setActiveNote}) {
  

  const getDate = (rowDate) => {
    if (rowDate != undefined && rowDate != "" ) {
      const date = new Date(rowDate);
      const today = new Date(Date.now());
  
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();
      const hour = date.getHours();
      const minute = date.getMinutes();
  
      const todayDay = today.getDate();
      const todayMonth = today.getMonth();
      const todayYear = today.getFullYear();
  
      const convertedDate = new Date(day, month, year);
      const convertedToday = new Date(todayDay, todayMonth, todayYear);
      
      return convertedDate - convertedToday === 0 ? `${hour}:${minute}` : `${day}.${month}.${year}`
    } else return ""
  }

  return (
    <List.Item onClick={() => setActiveNote(data.id)}
      className={`${data.id === activeNote && "active"}`}
      style={{width: "100%"}}
      >
      <div className='itemContainer'>
        <p className='noteName'>{data.name.length > 17 ? data.name.substr(0, 17) + '...' : data.name}</p>
        <p className='noteText'>{getDate(data.time)}  <span>{data.text}</span></p>
      </div>
    </List.Item> 
  )
}

export default ListItem