import React from 'react'

import './ContentComponent.scss';

function ContentComponent({time, activeNote, onUpdateNote}) {
    const handleName = (e) => {
      onUpdateNote({
        id: activeNote.id,
        name: e.target.value,
        text: activeNote.text,
        time: activeNote.time
      });
    };

    const handleText = (e) => {
      onUpdateNote({
        id: activeNote.id,
        name: activeNote.name,
        text: e.target.value,
        time: activeNote.time
      });
    }; 
    // console.log(time);
    // console.log(new Date(time).toLocaleDateString("en-GB", {
    //   hour: "2-digit",
    //   minute: "2-digit"
    // }));  "DD Month YYYY, HH:MM" `${activeNote.time.getDate()} ${} ${}, ${}`

    const date = new Date(activeNote.time);
    console.log(date.getDate());
    console.log(date.getMonth());
    console.log(date.getYear());
    console.log(date.getHours());
    console.log(date.getMinutes());

  return (
    <div className='contentContainer'>
        <div className='data'>23 November 2022, 23:18 {new Date(time).toLocaleDateString("en-GB", {
          hour: "2-digit",
          minute: "2-digit"
        })}</div>
        {/* <input className='nameInput' type="text" placeholder='Name' onChange={handleName} autoFocus />
        <textarea className='textInput' onChange={handleText} placeholder="Write your note here..." /> */}
        <input className='nameInput' value={activeNote.name} type="text" placeholder='Name' onChange={handleName} autoFocus />
        <textarea className='textInput' value={activeNote.text} onChange={handleText} placeholder="Write your note here..." />
    </div>
  )
}

export default ContentComponent