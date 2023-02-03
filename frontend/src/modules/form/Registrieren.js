// function checkEmail(emailaddress) {
//   auth
//     .createUserWithEmailAndPassword(emailaddress, "")
//     .then((userCredential) => {})
//     .catch((error) => {
//       switch (error.code) {
//         case "auth/email-already-in-use":
//           signInEmail(emailaddress);
//       }
//     });
// }

// const handleSubmit = (event) => {
//   event.preventDefault();
//   // validate email
//   if (!validateEmail(emailaddress)) {
//     alert("Please enter a valid email address");
//   } else {
//     // adds email to the list
//     signUpEmail(emailaddress);
//     setOpen(true);
//     // clears the input fields
//     setEmailaddress("");
//   }
// };
