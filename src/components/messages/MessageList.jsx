// цей компонент має рендерити список повідомлень
import PropTypes from "prop-types";
import MessageItem from "./messageItem/MessageItem";

const MessageList = ({ messages = [] }) => {
  console.log(messages);
  return (
    <ul>
      {messages &&
        messages.map((message, index) => (
          <MessageItem key={index} message={message} />
        ))}
    </ul>
  );
};

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default MessageList;
