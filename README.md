# Peer to peer real-time collaboration demo webapp
![Peer to peer banner](/public/collaborate.PNG)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).  

## Tech stack:  
- React  
- Bootstrap  
- yjs  
- y-webRTC  
- y-Codemirror  

## Contributors  
- Anthony Phung

## How to run:
- Download this repository to your machine
- Navigate to the local repository
- Run `yarn` to install the dependencies for the React webapp
    - You can check if `yarn` is installed by running `yarn --version`
    - If it isn't installed run `npm install --global yarn`
- Run `yarn start` to run the app in development mode

---

### Starting a peer

Once the app is running, navigate to [http://localhost:3000](http://localhost:3000) to view it in your browser.  
Then enter your desired username and room name to create and hit the join room button to start collaborating!  
Changes to the editor will be reflected in real-time across all peers.

### Adding another peer

To run another peer, you can either:
1. Open a new tab in your browser at [http://localhost:3000](http://localhost:3000)  
2. Or on another computer's browser in the same network, but replace localhost with its local ipv4 address 
  
Then enter your desired username and room name you want to join your peer to.  
Collaborate away!  

### Leaving a room/terminating a peer  
To exit a room or terminate a peer, simply hit the disconnect button on the top right corner.
