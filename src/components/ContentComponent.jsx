import React from 'react'

import './ContentComponent.scss';

function ContentComponent({activeNote, onUpdateNote}) {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
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

    const date = activeNote ? new Date(activeNote.time) : "";

  return (
    <div className='contentContainer'>
        <div className='data'>{date ? date.toLocaleDateString("en-GB", {
          day: 'numeric',
          year: 'numeric',
          month: 'long',
          hour: "2-digit",
          minute: "2-digit"
        }): ""}</div>
        <input className='nameInput' value={activeNote ? activeNote.name : ""} type="text" placeholder='Name' onChange={handleName} autoFocus />
        <textarea className='textInput' value={activeNote ? activeNote.text: ""} onChange={handleText} placeholder="Write your note here..." />
    </div>
  )
}

export default ContentComponent