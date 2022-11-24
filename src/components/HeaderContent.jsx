import React from 'react';
import { SearchOutlined, PushpinOutlined, FontSizeOutlined, PictureOutlined, TableOutlined, UserAddOutlined, LockOutlined, FormOutlined, ImportOutlined, CopyOutlined, CheckCircleOutlined, DeleteOutlined, MenuOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';

import './HeaderContent.scss';

function HeaderContent({addNote, deleteNote}) {
  return (
    <div className='headerContainer'>
        <div className='buttonDisplayGroup'>
            <Button icon={<MenuOutlined />} href="https://www.google.com" style={{marginRight: "5px", width: "45px"}} />
        </div>
        <div className='buttonEditGroup'>
            <Button icon={<PushpinOutlined />} href="https://www.google.com" style={{marginRight: "5px", width: "45px"}} />
            <Button icon={<DeleteOutlined onClick={deleteNote} />} href="https://www.google.com" style={{marginRight: "5px", width: "45px"}} />
            <Button onClick={addNote} icon={<FormOutlined />} href="https://www.google.com" style={{marginRight: "5px", width: "45px"}} />
        </div>
        <div className='buttonControlGroup'>
            <Button icon={<LockOutlined />} href="https://www.google.com" style={{marginRight: "5px", width: "45px"}} />
            <Button icon={<TableOutlined />} href="https://www.google.com" style={{marginRight: "5px", width: "45px"}} />
            <Button icon={<CheckCircleOutlined />} href="https://www.google.com" style={{marginRight: "5px", width: "45px"}} />
            <Button icon={<FontSizeOutlined />} href="https://www.google.com" style={{marginRight: "5px", width: "45px"}} />
        </div>
        <div className='buttonConnectionGroup'>
            <Button icon={<PictureOutlined />} href="https://www.google.com" style={{marginRight: "5px", width: "65px"}} />
            <Button icon={<UserAddOutlined />} href="https://www.google.com" style={{marginRight: "5px", width: "65px"}} />
            <Button icon={<ImportOutlined />} href="https://www.google.com" style={{marginRight: "5px", width: "65px"}} />
            <Input placeholder="Search" prefix={<SearchOutlined />} />
        </div>
        
        
        
        
    </div>
  )
}

export default HeaderContent