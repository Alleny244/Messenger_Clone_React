import React, { Component,forwardRef  } from 'react';
import { CardContent,Card,Typography } from '@material-ui/core';
import './message.css'

const MessageList =forwardRef(({message,username},ref) => {
    
    const isUser=username===message.username;
    return (<div ref={ref} className={`nonuser ${isUser && `user`}`}>
 <Card className={isUser?"userCard":"nonUserCard"
}>
      <CardContent>
        <Typography color="white"variant="h5" Component='h2'>
        {!isUser &&  `${message.username || "Unknown User"} :`}  {message.text}
        </Typography>
       
        
      </CardContent>
    </Card>


       
        </div>
    );
})
 
export default MessageList;