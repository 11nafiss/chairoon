import io from "socket.io-client"; // Add this
// config
import { BASE_URL } from "./config";

let socket;

const connectSocket = (user_id) => {
  socket = io(`${BASE_URL}`, {
    query: `user_id=${user_id}`,
    transportOptions: {
      polling: {
        extraHeaders: {
          "x-client-header": "value", // Add any required headers here
        },
      },
    },
  });
}; // Add this -- our server will run on port 4000, so we connect to it from here

export { socket, connectSocket };
