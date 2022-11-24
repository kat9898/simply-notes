import React from 'react'
import { Layout, Modal } from 'antd';
import Sidebar from './Sidebar';
import HeaderContent from './HeaderContent';
import ContentComponent from './ContentComponent';
import {useState, useEffect} from 'react';
import {db} from '../db/db.js';

import './Home.scss'

const { Header, Sider, Content } = Layout;

function Home() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(0);
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredNotes = notes.filter(note => note.name.toLowerCase().includes(search.toLowerCase()));

  const sortedNotes = filteredNotes.sort((a, b) => {
    return b.time - a.time
  });


  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    deleteNote();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  async function addNote() {
    try {
      await db.notes.add({
        name: 'Untitled Note',
        time: Date.now(),
        text: ''
      });

      const newNotes = await db.notes.toArray();
      const newNote = newNotes[newNotes.length - 1];

      setNotes(newNotes);
      setActiveNote(newNote.id);
    } catch (error) {
      console.log(`Failed to add note: ${error}`);
    }
  }

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updatedNote;
      }

      editNote(updatedNote);

      return note;
    });

    setNotes(updatedNotesArray);
  }

  async function editNote(updatedNote) {
    try {
      await db.notes.put({
        id: updatedNote.id,
        name: updatedNote.name,
        text: updatedNote.text,
        time: updatedNote.time
      });
    } catch (error) {
      console.log(`Failed to edit note: ${error}`);
    }
  }

  async function deleteNote() {
    try {
      await db.notes.delete(activeNote);
      const newNotes = notes.filter(note => note.id != activeNote);
      setNotes(newNotes);

    } catch (error) {
      console.log(`Failed to delete note: ${error}`);
    }
  }

  
  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await db.notes.toArray();
      setNotes(data);
    }

    fetchData().catch(error => console.log(error))
  }, [])

  return (
    <>
    <Layout style={{height: "100%"}}>
      <Header className='header' style={{background: "linear-gradient(to bottom, #eeeeee, #cacaca)"}}><HeaderContent setSearch={setSearch} addNote={addNote} showModal={showModal} /></Header>
        <Layout>
          <Sider style={{background: "#f9f7f7", overflow: "auto"}}><Sidebar sortedNotes={sortedNotes} activeNote={activeNote} setActiveNote={setActiveNote} /></Sider>
          <Content><ContentComponent onUpdateNote={onUpdateNote} activeNote={getActiveNote() } /></Content> 
        </Layout>
      </Layout>
      <Modal title="Confirm delete" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Are you sure you want to delete this note?</p> 
      </Modal>
    </>
  )
}

export default Home