import { useEffect, useState, useRef } from 'react';
import { WebrtcProvider } from 'y-webrtc';
import { UnControlled as CodeMirrorEditor } from "react-codemirror2";
import {CodeMirrorBinding} from 'y-codemirror';
import * as Y from "yjs";
import RandomColor from "randomcolor";
import 'codemirror/lib/codemirror.css';
import "codemirror/theme/darcula.css";
import { useLocation, useNavigate } from 'react-router-dom';

function Editor(){
  const location = useLocation();
  const data = location.state;
  const username = data.user;
  const roomname = data.room;
  const [editorRef, setEditorRef] = useState(null)
  const [code, setCode] = useState('');
  const navigate = useNavigate(); 

  const handleEditorMounting = (editor) => {
    setEditorRef(editor);
  }
  
  useEffect(() => {
    if(editorRef){
      const ydoc = new Y.Doc();

      const provider = new WebrtcProvider(roomname, ydoc, "wss://signaling.yjs.dev");

      const yText = ydoc.getText('codemirror');

      const yUndoManager = new Y.UndoManager(yText);

      const color = RandomColor();

      const awareness = provider.awareness;

      awareness.setLocalStateField('user', {
        color: color,
        name: username,
      });

      const binding = new CodeMirrorBinding(yText, editorRef, awareness, {
        yUndoManager,
      });

      return () => {
        if(provider){
          provider.disconnect();
          ydoc.destroy();
        }
      }
    }
  }, [editorRef]);

  const disconnect = () => {
    navigate('/', {state: {username: '', roomname: ''}})
  };

  return (
    <div className='mainEditorContainer'>
      <div className='editorTitleContainer'>
        <h1>Room name: {roomname}</h1>
      </div>
      <CodeMirrorEditor 
        onChange={(editorRef, data, value) => {
          setCode(value);
        }}
        autoScroll
        options={
          {
            mode: 'null',
            theme: 'darcula',
            lineNumbers: true,
            lineWrapping: true,
            firstLineNumber: 1,
            fontSize: 20,
            tabSize: 2,
            viewportMargin: Infinity,
          }
        }
        editorDidMount={(editor) => {
          handleEditorMounting(editor);
          editor.setSize("100vh", "100%");
        }}
        />
      <button className = "disconnectButton" onClick={disconnect}>
        disconnect
      </button>
    </div>
  );
}

  export default Editor;
