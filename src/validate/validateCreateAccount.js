export default function validateCreateAccount(values) {
  let errors = {};

  // Validar el nombre del usuario
  if (!values.name) {
    errors.name = "El nombre es obligatorio";
  }

  // Validar el email
  if (!values.email) {
    errors.email = "El email es obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email no valido";
  }

  // Validar password
  if (!values.password) {
      errors.password = 'El password es obligatorio'
  }else if (values.password.lenght < 6) {
      errors.password = 'El password debe ser de al menos 6 caracteres'
  }

  return errors;
}
