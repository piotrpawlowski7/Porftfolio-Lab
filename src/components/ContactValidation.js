const ContactValidation = (formValues) => {
    let errors = {};
  
    if (formValues.name.indexOf(' ') > -1) {
      errors.name = 'Podane imię jest nieprawidłowe!';
    }
  
    if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = 'Podany email jest nieprawidłowy!';
    }
    if (formValues.message.length < 120) {
      errors.message = 'Wiadomość musi mieć co najmniej 120 znaków!';
    }
    return errors;
  };
  
  export default ContactValidation;