// цей компонент має рендерити список повідомлень

import MessageItem from "./messageItem/MessageItem";

const MessageList = ({ messages }) => {
  console.log(messages);
  return (
    <ul>
      {messages.length > 0
        ? messages.map((message, index) => (
            <MessageItem key={index} message={message} />
          ))
        : null}
    </ul>
  );
};

export default MessageList;
