import "./App.css";
import Container from "./components/container/Container";
import MessageList from "./components/messages/MessageList";

function App() {
  const isAdult = true;
  const url = "https://images.prom.ua/1065621053_w600_h600_1065621053.jpg";

  const unreadMessages = ["asd", "qwe", "zxc"];
  // const unreadMessages = [
  //   { id: 1, message: "Привіт" },
  //   { id: 2, message: "ПР" },
  //   { id: 3, message: "дшфх" },
  // ];
  return (
    <Container>
      {isAdult && <p>Lorem10</p>}
      <ul>
        <li>
          <img src={url && "https://picsum.photos/200/300"} alt="" />
        </li>
        <li>
          <a href=""></a>
        </li>
        <li>3</li>
        {/* {unreadMessages.length > 0 && (
          <li>You have {unreadMessages.length} unread messages</li>
        )} */}
      </ul>

      <MessageList />
      {/* {unreadMessages.length > 0 ? (
        <li>You have {unreadMessages.length} unread messages</li>
      ) : (
        <li> "No unread messages"</li>
      )}
      <ul>
        {unreadMessages.map(
          (message, index) =>
            message.length > 0 && <li key={index}>{message}</li>
        )}
      </ul> */}
    </Container>
  );
}

export default App;
