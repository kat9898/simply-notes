import React from 'react'
import { Divider, List, Typography } from 'antd';
import ListItem from './ListItem';

import './Sidebar.scss';


function Sidebar({sortedNotes, activeNote, setActiveNote}) {
  return (
    <div className='sidebarContainer'>
      <List
        size="large"
        bordered
        dataSource={sortedNotes}
        renderItem={(item) => <ListItem data={item} activeNote={activeNote} setActiveNote={setActiveNote} />}
      />
    </div>
  )
}

export default Sidebar