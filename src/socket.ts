import Message, { messageDocument } from "./models/message";

export async function socket(server) {
    const io = require("socket.io")(server, {
        cors: {
            origin: "*"
        }
    });
    io.on("connection", async (socket) => {
        console.log("connected to socket", socket.id);

        io.on("new-message", async (data: messageDocument) => {
            let newMessage = await Message.create({ ...data });
            socket.emit("message-response", data);
            socket.broadcast.emit("message-broadcast", newMessage);
        });
    });
}
