

# Realtime Polling API with Node.js

This project demonstrates a real-time polling API using Node.js, Express, and Socket.io. The client is a CLI tool that connects to the server, sends a predefined request, and receives an automatic response without any waiting logic.

## Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)

## Setup Instructions

### Server Setup
1. **Install required packages**:

    ```bash
    npm install 
    ```
2. **Start the server**:

    ```bash
    node server.js
    ```

### Client Setup


1. **Install the `socket.io-client` package**:

    ```bash
    npm install 
    ```

2. **Run the client**:

    ```bash
    node client/client.js
    ```

## Explanation

- The server uses `Express` to create a basic HTTP server and `Socket.io` to handle real-time communication.
- When a client connects, it listens for a `predefinedRequest` event. Upon receiving this event, the server sends an `automaticResponse` event back to the client.
- The client connects to the server using `Socket.io-client`, sends a `predefinedRequest` event, and listens for the `automaticResponse` event.
- This setup ensures real-time communication without a waiting logic, as `Socket.io` handles asynchronous communication efficiently.

