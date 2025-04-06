import { Component } from "react";
import { GiCrossFlare } from "react-icons/gi";
import styled, { keyframes } from "styled-components";
import s from "./modal.module.css";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  animation: ${fadeIn} 700ms ease-in-out;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: fit-content;
  padding: 50px 40px;
  color: black;
  background-color: tomato;
  z-index: 20;
`;

class Modal extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.closeOnEsc);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.closeOnEsc);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isOpen !== this.props.isOpen) {
      console.log("Modal state changed", this.props.isOpen);
    }
  }

  closeOnEsc = (e) => {
    if (e.key === "Escape") {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Backdrop onClick={this.props.onClose}>
        <ModalWrapper onClick={(e) => e.stopPropagation()}>
          <button onClick={this.props.onClose} className={s.button}>
            <GiCrossFlare />
          </button>
          <h2>Hello world</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            dolores culpa aspernatur consequuntur veniam alias blanditiis.
            Tenetur, necessitatibus accusamus. Ipsa.
          </p>
        </ModalWrapper>
      </Backdrop>
    );
  }
}

export default Modal;
