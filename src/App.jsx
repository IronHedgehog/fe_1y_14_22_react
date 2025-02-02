import "./App.css";
import Alert from "./components/alert/Alert";
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

  const imgStylesRadius = {
    display: "block",
    width: 600,
    height: 400,
    padding: "12px 16px",
    borderRadius: "50%",
  };

  const imgStylesKvadrat = {
    display: "block",
    width: 600,
    height: 400,
    padding: "12px 16px",
    borderRadius: 50,
  };

  const imgs = "квадра";
  return (
    <Container>
      <Alert outline={false} variant={"info"}>
        Будь яке повідомлення
      </Alert>
      <Alert outline={true} variant={"error"}>
        Будь яке повідомлення
      </Alert>
      <Alert outline={false} variant={"success"}>
        Будь яке повідомлення
      </Alert>
      <Alert outline={true} variant={"warning"}>
        Будь яке повідомлення
      </Alert>

      {isAdult && <p>Lorem10</p>}
      <ul>
        <li>
          <img
            style={imgs === "квадрат" ? imgStylesKvadrat : imgStylesRadius}
            src={url && "https://picsum.photos/200/300"}
            alt=""
          />
        </li>
        <li>
          <a href=""></a>
        </li>
        <li>3</li>
        {/* {unreadMessages.length > 0 && (
          <li>You have {unreadMessages.length} unread messages</li>
        )} */}
      </ul>

      <MessageList messages={unreadMessages} />
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
