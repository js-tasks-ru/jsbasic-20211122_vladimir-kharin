import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {

    const Modal = createElement(`
      <div class="modal">
        <div class="modal__overlay"></div>
        <div class="modal__inner">
          <div class="modal__header">
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>
            <h3 class="modal__title">
            </h3>
          </div>
          <div class="modal__body">
          </div>
        </div>
      </div>
    `)

    this.modal = Modal;

    this.modal.getElementsByClassName('modal__close')[0].addEventListener('click' , ()=>{
      closeAll()
    });

    document.addEventListener('keydown' , keyCheck);

    function closeAll () {
      if (document.body.classList.contains('is-modal-open')){
        document.body.classList.remove('is-modal-open');
        document.removeEventListener('keydown' , keyCheck);
        document.getElementsByClassName('modal')[0].remove();
      }
    }

    function keyCheck (event) {
      console.log("CheckedKey")
      if (event.code === 'Escape') closeAll()
    }

  }



  setBody(node) {

    this.modal.getElementsByClassName('modal__body')[0].innerHTML = '';
    this.modal.getElementsByClassName('modal__body')[0].append(node);

  }

  setTitle(title) {

    this.modal.getElementsByClassName('modal__title')[0].innerHTML = title;

  }

  open() {
    document.body.append(this.modal);
    document.body.classList.add('is-modal-open');
  }

  close() { 
    if (document.body.classList.contains('is-modal-open')){
      document.body.classList.remove('is-modal-open');
      document.getElementsByClassName('modal')[0].remove();
    }
  }

}