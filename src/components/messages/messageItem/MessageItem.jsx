import PropTypes from "prop-types";
import Button from "../../button/Button";

const MessageItem = ({ message }) => {
  return (
    <>
      <li>{message}</li>
      <Button text={"Видалити"} type={"delete"} />
      <Button text={"Додати"} type={"add"} />
      <Button text={"Виправити"} type={"re"} />
    </>
  );
};

MessageItem.propTypes = {
  message: PropTypes.string.isRequired,
};

export default MessageItem;
