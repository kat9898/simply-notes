import React from 'react'

import './ContentComponent.scss';

function ContentComponent({activeNote, editNote, editMode}) {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  console.log(activeNote);
  const handleName = (e) => {
    editNote({
        id: activeNote.id,
        name: e.target.value,
        text: activeNote.text,
        time: Date.now()
      });
    };

    const handleText = (e) => {
      editNote({
        id: activeNote.id,
        name: activeNote.name,
        text: e.target.value,
        time: Date.now()
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
        <input className='nameInput' value={activeNote ? activeNote.name : ""} type="text" disabled={editMode ? false : true} placeholder={editMode ? 'Name' : ""} onChange={handleName} autoFocus />
        <textarea className='textInput' disabled={editMode ? false : true} value={activeNote ? activeNote.text: ""} onChange={handleText} placeholder={editMode ? "Write your note here..." : ""} />
    </div>
  )
}

export default ContentComponent