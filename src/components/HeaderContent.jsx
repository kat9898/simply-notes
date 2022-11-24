import React from 'react';
import { EditOutlined, SearchOutlined, PushpinOutlined, FontSizeOutlined, PictureOutlined, TableOutlined, UserAddOutlined, LockOutlined, FormOutlined, ImportOutlined, CopyOutlined, CheckCircleOutlined, DeleteOutlined, MenuOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';

import './HeaderContent.scss';

function HeaderContent({setSearch, addNote, showModal, setEditMode}) {
    const handleEdit = () => {
        setEditMode(true);
    };

    const handleLock = () => {
        setEditMode(false);
    };
  
  return (
    <div className='headerContainer'>
        <div className='buttonDisplayGroup'>
            <Button icon={<MenuOutlined />} style={{marginRight: "5px", width: "45px"}} />
        </div>
        <div className='buttonEditGroup'>
            <Button icon={<PushpinOutlined />} style={{marginRight: "5px", width: "45px"}} />
            <Button onClick={handleEdit} icon={<EditOutlined />} style={{marginRight: "5px", width: "45px"}} />
            <Button icon={<DeleteOutlined onClick={showModal} />} style={{marginRight: "5px", width: "45px"}} />
            <Button onClick={addNote} icon={<FormOutlined />} style={{marginRight: "5px", width: "45px"}} />
        </div>
        <div className='buttonControlGroup'>
            <Button onClick={handleLock} icon={<LockOutlined />} style={{marginRight: "5px", width: "45px"}} />
            <Button icon={<TableOutlined />} style={{marginRight: "5px", width: "45px"}} />
            <Button icon={<CheckCircleOutlined />} style={{marginRight: "5px", width: "45px"}} />
            <Button icon={<FontSizeOutlined />} style={{marginRight: "5px", width: "45px"}} />
        </div>
        <div className='buttonConnectionGroup'>
            <Button icon={<PictureOutlined />} style={{marginRight: "5px", width: "65px"}} />
            <Button icon={<UserAddOutlined />} style={{marginRight: "5px", width: "65px"}} />
            <Button icon={<ImportOutlined />} style={{marginRight: "5px", width: "65px"}} />
            <Input placeholder="Search" onChange={(e) => {
                setSearch(e.target.value)
                }} prefix={<SearchOutlined />} />
        </div>
        
        
        
        
    </div>
  )
}

export default HeaderContent