import { Component } from "react";
import Modal from "./components/modal/Modal";

class App extends Component {
  state = {
    isModalOpen: false,
  };

  constructor() {
    super();
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }
  closeModal() {
    this.setState({ isModalOpen: false });
  }
  render() {
    return (
      <>
        <h1>Hello</h1>
        <button onClick={this.openModal}>Відкриття модалки</button>
        {this.state.isModalOpen && (
          <Modal isOpen={this.state.isModalOpen} onClose={this.closeModal} />
        )}
        ;
      </>
    );
  }
}

export default App;
