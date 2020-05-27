import { useState, useEffect } from "react";

const useValidation = (stateInitial, validate, fn) => {
  const [values, saveValues] = useState(stateInitial);
  const [errors, saveErrors] = useState({});
  const [submitForm, saveSubmitForm] = useState(false);

  useEffect(() => {
    if (submitForm) {
      const noErrors = Object.keys(errors).length === 0;

      if (noErrors) {
        fn(); // Fn = Funcion que se ejecuta en el componente
      }
      saveSubmitForm(false);

    }
  }, [errors, fn, submitForm]);

  // Funcion que se ejecuta conforme el usuario escribe algo

  const handleChange = e => {
    saveValues({
        ...values,
        [e.target.name] : e.target.value
    })

  }

  // Funcion que se ejecuta cuando el usuario hace submit

  const handleSubmit = e => {
      e.preventDefault()
      const errorsValidation = validate(values);
      saveErrors(errorsValidation);
      saveSubmitForm(true);

  }

  return {
      values,
      errors,
      submitForm,
      handleChange,
      handleSubmit,

  }
};

export default useValidation;
