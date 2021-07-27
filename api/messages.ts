import client from "./client";

const send = (message: any, listingId: any) =>
  client.post("/messages", {
    message,
    listingId,
  });

export default {
  send,
};
