import React from 'react';
import { List} from 'antd';

import './ListItem.scss';

function ListItem({data, activeNote, setActiveNote}) {
  

  const getDate = (rowDate) => {
    if (rowDate != undefined && rowDate != "" ) {
      console.log(rowDate);

      const date = new Date(rowDate);
      const today = new Date(Date.now());
  
      console.log(date, today);
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();
      const hour = date.getHours();
      const minute = date.getMinutes();
  
      console.log(day, month, year, hour, minute);
      const todayDay = today.getDate();
      const todayMonth = today.getMonth();
      const todayYear = today.getFullYear();
  
      console.log(todayDay, todayMonth, todayYear);
      const convertedDate = new Date(day, month, year);
      const convertedToday = new Date(todayDay, todayMonth, todayYear);
      
      console.log(convertedDate - convertedToday);
      return convertedDate - convertedToday === 0 ? `${hour}:${minute}` : `${day}.${month}.${year}`
    } else return ""
  }

  return (
    <List.Item onClick={() => setActiveNote(data.id)}
      className={`itemContainer ${data.id === activeNote && "active"}`}
      >
      <div>
        <p className='noteName'>{data.name}</p>
        <p>{getDate(data.time)}  <span>{data.text}</span></p>
      </div>
    </List.Item> 
  )
}

export default ListItem