import express from 'express';
import {WebSocketServer} from 'ws';

const app = express();
const port = 8080;

const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const wss = new WebSocketServer({ server }); 

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log("DATA FROM CLIENT %s:" , message);
        ws.send("Hello i am server",);
    });
});