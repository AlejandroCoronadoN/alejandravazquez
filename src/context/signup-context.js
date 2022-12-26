import React from 'react';

export default React.createContext({
  signupContent : {
    heading: "Create an account!",
    content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
    formHeading: "Sign Up",
    formContent: "Fill all fields so we can get some info about you. We'll never send you spam",
    formText: "Already have an account?",
    btnText: "Sign Up",
    btnText_2: "Sign In"}
  ,

  addProductToCart: product => {},
  removeProductFromCart: productId => {}
});


