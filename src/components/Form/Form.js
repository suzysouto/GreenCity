import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as F from './FormStyled';
import Error from './Error';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Deve ter um mínimo de 3 caracteres.")
    .max(50, "Deve ter no máximo 50 caracteres.")
    .required("Por favor, informe um nome!"),
  email: Yup.string()
    .email("Insira um endereço de email válido.")
    .max(100, "Deve ter no máximo 100 caracteres.")
    .required("Por favor, informe um email!"),
  message: Yup.string()
    .min(2, "Deve ter pelo menos 2 caracteres.")
    .max(500, "Tamanho máximo de 500 caracteres.")
    .required("Por favor, insira uma mensagem!")
});

function Form() {
  return (
    <Formik initialValues={{ name: "", email: "", message: "" }} 
      validationSchema={validationSchema}
      onSubmit={(values, {setSubmitting, resetForm}) => {
        setSubmitting(true);

        setTimeout(() => {
          alert("Mensagem enviada com suzesso!\nObrigada!");
          resetForm();
          setSubmitting(false);
        }, 500);
      }}
    >
      {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
        <F.FormStyled onSubmit={handleSubmit}>
            <h1>Vem tomar um café com a gente</h1>
          <div className="input-row">
            <input 
              type="text" 
              id="name" 
              placeholder="Nome" 
              onChange={handleChange} 
              onBlur={handleBlur} 
              value={values.name} 
              className={touched.name && errors.name ? "has-error" : null}
            />
            <Error touched={touched.name} message={errors.name} />
          </div>
          <div className="input-row">
            <input 
              type="email" 
              id="email" 
              placeholder="Email" 
              onChange={handleChange} 
              onBlur={handleBlur} 
              value={values.email} 
              className={touched.email && errors.email ? "has-error" : null}
            />
            <Error touched={touched.email} message={errors.email} />
          </div>

          <div className="input-row">
            <textarea 
              type="text" 
              id="message" 
              placeholder="Mensagem" 
              onChange={handleChange} 
              onBlur={handleBlur} 
              value={values.message} 
              className={touched.message && errors.message ? "has-error" : null}
            />
            <Error touched={touched.message} message={errors.message} />
          </div>

          <div className="input-row">
            <button type="submit" disabled={isSubmitting}>ENVIAR</button>
          </div>
        </F.FormStyled>
      )}
    </Formik>
  );
}

export default Form;