const stripe = Stripe('pk_test_51QsLDSQRfEbXsJClPJEFCzamriWAgWqrdPplGoBK8s9BxSBXeCmGPFWby5SPHtipt858zpdaUJSh2usNTTfbFhwF00iaFL7drp');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
 stripe.redirectToCheckout({
   sessionId: sessionId
 })
});