import overlayAction from "./overlay-actions";

const signUpHandler = evt => {
  const signUpModal = document.getElementsByClassName('sign-up-modal')[0];
  overlayAction(signUpModal);
};

export default signUpHandler;
