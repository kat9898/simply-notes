import React from 'react'
import { Divider, List, Typography } from 'antd';
import ListItem from './ListItem';

import './Sidebar.scss';

const data = [
  {
    name: 'Новая заметка',
    time: '12:17',
    text: 'Nsdrglk'
  },
  {
    name: 'Шмот',
    time: '12:16',
    text: 'Фроетцуа'
  },
  {
    name: 'выакенр',
    time: '24.06.2019',
    text: 'ТАпотоып тоыетодлфук катуsssssssssssssssss'
  },
  {
    name: 'РАБОТА',
    time: '03.01.2019',
    text: 'Nsdrglk'
  },
  {
    name: 'Новая заметка1',
    time: '07.12.2018',
    text: 'Nsdrglв епрурррр ррррррkvvvvvvvvvvv'
  }
];

// const data = [
//   'Racing car sprays burning fuel into crowd.',
//   'Japanese princess to wed commoner.',
//   'Australian walks 100km after outback crash.',
//   'Man charged over missing wedding girl.',
//   'Los Angeles battles huge wildfires.',
// ];


function Sidebar({notes, activeNote, setActiveNote}) {
  return (
    <div className='sidebarContainer'>
      <List
        size="large"
        bordered
        dataSource={notes}
        renderItem={(item) => <ListItem data={item} activeNote={activeNote} setActiveNote={setActiveNote} />}
      />
    </div>
  )
}

export default Sidebar