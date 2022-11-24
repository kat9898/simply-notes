import React from 'react'
import { Divider, List, Typography } from 'antd';
import ListItem from './ListItem';

import './Sidebar.scss';


function Sidebar({filteredNotes, activeNote, setActiveNote}) {
  return (
    <div className='sidebarContainer'>
      <List
        size="large"
        bordered
        dataSource={filteredNotes}
        renderItem={(item) => <ListItem data={item} activeNote={activeNote} setActiveNote={setActiveNote} />}
      />
    </div>
  )
}

export default Sidebar