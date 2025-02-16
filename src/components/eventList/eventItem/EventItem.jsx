import styles from "./eventItem.module.css";

const EventItem = ({ location, speaker, end, start, type }) => {
  console.log(styles);
  return (
    <li className={styles.item}>
      <p className=""> Місце проведення: {location}</p>
      <p className="">Виконавець: {speaker}</p>
      <p className="">Початок{start}</p>
      <p className="">Кінець{end}</p>
      <p className="">Вхід: {type}</p>
    </li>
  );
};
// інлайнові стилі
// модульні стилі
// глобальні стилі
// бібліотеки

export default EventItem;
