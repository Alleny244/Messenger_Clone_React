
import { useEffect, useState } from 'react';
import './App.css';
import { Button} from '@material-ui/core';
import { FormControl,Input,InputLabel } from '@material-ui/core';
import MessageList from './components/messageList';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
function App() {
  const [input,setInput]=useState('');
  const [messages,setMessage]=useState([]);
  const[username,setUsername]=useState('');
useEffect(()=>{
  db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot=>{
    setMessage(snapshot.docs.map(doc=>{
      return ({id:doc.id,message:doc.data()})}))
  })
},[])

useEffect(()=>{
  setUsername(prompt("Please enter your username"));
  
},[])

  const storeInput= event=>{
    event.preventDefault();
    db.collection('messages').add({
      username:username,
      text:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
  
    setInput('');
  }
  console.log(input);
  return (
    <div className="App">
     
      <img className="mt" src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100"></img>
      <h1 id='as'>Messenger</h1>
      <form className="aform">
      <FormControl className="formc">
  <InputLabel >Enter your message</InputLabel>
  <Input className="inputt" placeholder="Enter a message..." type="text" value={input} onChange={event=>{
       setInput(event.target.value);
     }}/>
     <IconButton disabled={!input} variant="contained" color="primary"  type='submit' onClick={storeInput} className='sendbutton'>
       <SendIcon/>
     </IconButton>
   
</FormControl>
     
     </form>
     <FlipMove>
     {
  messages.map(({id,message})=>{
    return<MessageList key={id} message={message} username={username}/>
  })
}
     </FlipMove>

    
     </div> );
 
}

export default App;
