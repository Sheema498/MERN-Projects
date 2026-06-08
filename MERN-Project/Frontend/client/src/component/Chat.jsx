// Create Chat Component
import { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

function Chat() {

    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const sendMessage = () => {

        if (!username || !message) {
            alert("Enter username and message");
            return;
        }

        const messageData = {
            username,
            message,
            time: new Date().toLocaleTimeString(),
        };

        socket.emit("send_message", messageData);

        setMessage("");
    };

    useEffect(() => {

        socket.on("receive_message", (data) => {

            setMessages((prev) => [...prev, data]);

        });

        return () => {
            socket.off("receive_message");
        };

    }, []);

    return (
        <div
            style={{
                width: "500px",
                margin: "50px auto",
                border: "1px solid #ccc",
                padding: "20px",
                borderRadius: "10px"
            }}
        >
            <h1>Chat Application</h1>

            <input
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{
                    width: "90%",
                    padding: "10px",
                    marginBottom: "10px"
                }}
            />

            <input
                type="text"
                placeholder="Enter Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{
                    width: "90%",
                    padding: "10px",
                    marginBottom: "10px"
                }}
            />

            <button
                onClick={sendMessage}
                style={{
                    width: "100%",
                    padding: "10px"
                }}
            >
                Send
            </button>

            <hr />

            <div
                style={{
                    height: "300px",
                    overflowY: "auto"
                }}
            >
                {
                    messages.map((msg, index) => (
                        <div
                            key={index}
                            style={{
                                border: "1px solid gray",
                                margin: "15px 0",
                                padding: "10px",
                                borderRadius: "5px"
                            }}
                        >
                            <strong>{msg.username}</strong>

                            <p>{msg.message}</p>

                            <small>{msg.time}</small>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Chat;