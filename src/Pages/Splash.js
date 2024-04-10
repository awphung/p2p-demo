import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import '../App.css';

const Splash = () => {
    const [username, setUsername] = useState('');
    const [roomname, setRoomname] = useState('');
    const navigate = useNavigate(); 

    return (
        <div className = {'mainContainer'}>
            <div className='titleContainer'>
                <h1>P2P Collaboration Demo</h1>
            </div>
            <br />
            <div className='inputContainer'>
                <input
                value = {username}
                placeholder = 'Enter your username'
                onChange = {(e) => setUsername(e.target.value)}
                className = {'inputBox'}
                />
            </div>
            <br />
            <div className = 'inputContainer'>
                <input
                value = {roomname}
                placeholder='Enter room name:'
                onChange = {(e) => setRoomname(e.target.value)}
                className = {'inputBox'}
                />
            </div>
            <br />
            <div className = 'buttonContainer'>
                <button
                onClick = {() => navigate('/editor', {state: {user: username, room: roomname}})}
                className = {'button'}
                >
                Join Room
                </button>
            </div>
        </div>
    )
};

export default Splash;
