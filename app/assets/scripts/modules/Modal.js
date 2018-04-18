import $ from "jquery";

class Modal {
  constructor() {
    this.btn_OpenModal = $(".open-modal");
    this.modal = $(".modal");
    this.btn_CloseModal = $(".modal__close");
    this.events();
  }

  events() {
    //click the open modal button
    this.btn_OpenModal.click(this.openModal.bind(this));
    //click the x to close modal
    this.btn_CloseModal.click(this.closeModal.bind(this));
    //pushes escape key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode === 27) {
      this.closeModal();
    }
  }

  openModal() {
    //reveal modal with transition
    this.modal.addClass("modal--is-visible");
    return false;
  }

  closeModal() {
    //hide modal with transition
    this.modal.removeClass("modal--is-visible");
  }
}

export default Modal;
