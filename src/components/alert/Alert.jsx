import css from "./Alert.module.css";
// const getBgColor = (variant) => {
//   switch (variant) {
//     case "success":
//       return "green";
//     case "error":
//       return "red";
//     case "warning":
//       return "yellow";
//     case "info":
//       return "blue";
//     default:
//       console.log("Такого варіанту не існує");
//       break;
//   }
// };
// const alertStyle = {
//   borderRadius: 10,
//   margin: 5,
//   padding: "10px 15px",
// };
const Alert = ({ children, variant, outline }) => {
  console.log(css);
  const classNames = [css.alert, css[variant]];
  if (outline === true) {
    classNames.push(css.outline);
  }
  return (
    <p
      className={classNames.join(" ")}
      //   style={{
      //     backgroundColor: getBgColor(variant),
      //   }}
    >
      {children}
    </p>
  );
};

export default Alert;
