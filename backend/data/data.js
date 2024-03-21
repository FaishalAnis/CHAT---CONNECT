const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: "Ayush ",
        email: "ayush@example.com",
      },
      {
        name: "Faishal",
        email: "faishal@example.com",
      },
    ],
    _id: "617a077e18c25468bc7c4dd4",
    chatName: "Ayush Jha",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Guest User",
        email: "guest@example.com",
      },
      {
        name: "Faishal",
        email: "faishal@example.com",
      },
    ],
    _id: "617a077e18c25468b27c4dd4",
    chatName: "Guest User",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Zaid",
        email: "zaid@example.com",
      },
      {
        name: "Faishal",
        email: "faishal@example.com",
      },
    ],
    _id: "617a077e18c2d468bc7c4dd4",
    chatName: "Zaid",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Ayush Jha",
        email: "ayushjha@example.com",
      },
      {
        name: "Zaid",
        email: "zaid@example.com",
      },
      {
        name: " Faishal",
        email: "faishal@example.com",
      },
    ],
    _id: "617a518c4081150716472c78",
    chatName: "Friends",
    groupAdmin: {
      name: "Faishal",
      email: "Faishal@example.com",
    },
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Adil Moin",
        email: "adilmoin@example.com",
      },
      {
        name: "Faishal",
        email: "faishal@example.com",
      },
    ],
    _id: "617a077e18c25468bc7cfdd4",
    chatName: "JAdil Moin",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Ayush",
        email: "ayush@example.com",
      },
      {
        name: "faishal",
        email: "faishal@example.com",
      },
      {
        name: "zaid",
        email: "zaid@example.com",
      },
    ],
    _id: "617a518c4081150016472c78",
    chatName: "Chill Zone",
    groupAdmin: {
      name: "Zaid",
      email: "zaid@example.com",
    },
  },
];
module.exports = { chats };
