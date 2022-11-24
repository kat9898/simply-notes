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

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [text, setText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log('name', name);
  console.log('text', text);
  console.log('notes', notes);

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
      // setName("Untitled Note");
      // setTime(new Date(Date.now()));
      // setText("ahrhaergirgkfsthhjk");

      await db.notes.add({
        name: 'Untitled Note',
        time: Date.now(),
        text: 'ahrhaergirgkfsthhjk'
      });

      // await db.notes.add({
      //   name,
      //   time,
      //   text
      // });
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

  async function deleteNote() {
    try {
      await db.notes.delete(id);
      const activeNote = db.notes.toArray()[0];
      setId(activeNote.id);
      setName(activeNote.name);
      setTime(activeNote.date);
      setText(activeNote.text);
    } catch (error) {
      console.log(`Failed to delete note: ${error}`);
    }
  }

  async function editNote(updatedNote) {
    try {
      await db.notes.put({
        id: updatedNote.id,
        name: updatedNote.name,
        text: updatedNote.text
      });
    } catch (error) {
      console.log(`Failed to edit note: ${error}`);
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
    <Layout>
      <Header className='header' style={{background: "linear-gradient(to bottom, #eeeeee, #cacaca)"}}><HeaderContent addNote={addNote} deleteNote={deleteNote} /></Header>
      <Layout>
        <Sider style={{background: "#f9f7f7"}}><Sidebar notes={notes} activeNote={activeNote} setActiveNote={setActiveNote} /></Sider>
        <Content><ContentComponent name={name} time={time} text={text} setName={setName} setText={setText} onUpdateNote={onUpdateNote} activeNote={getActiveNote() } /></Content>
      </Layout>
    </Layout>
  )
}

export default Home