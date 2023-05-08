import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const Login = () => {
  const validationForm = yup.object({
    email: yup
      .string()
      .email("Entre com um email válido!")
      .required("Email é obrigatório"),
    password: yup
      .string()
      .min(8, "Senha com no minímo 6 caracteres")
      .required("Senha é obrigaória"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationForm}
      onSubmit={(values) => {
        console.log(values)
        alert("Login realizado com sucesso!\n\nAbre o console para ser as informações de login");
        }
      }
    >
      <div className="container bg-[#1D1D1D] h-full shadow-[7px_0px_20px_1px_rgba(0,0,0,0.25)] px-8">
        <img
          src="/src/assets/logo.svg"
          alt="voxel"
          className="w-64 m-auto pt-[40px] mb-[70px]"
        />
        <Form>
          <div>
            <Field
              type="email"
              name="email"
              placeholder="Digite seu email"
              className="p-3 w-full rounded-md text-[15px] focus:outline-none"
            />
            <ErrorMessage component="div" name="email" className="text-[#FF0000] text-[12px] mt-1"/>
          </div>

          <div>
            <Field
              type="password"
              name="password"
              placeholder="Senha"
              className="p-3 w-full rounded-md text-[15px] focus:outline-none mt-3"
            />
            <ErrorMessage component="div" name="password" className="text-[#FF0000] text-[12px] mt-1"/>
            <p className="text-[#787878] text-[13px] text-right mt-1 cursor-pointer">
              Esqueci minha senha
            </p>
          </div>

          <button
            type="submit"
            className="bg-black text-white w-full mt-8 p-2 rounded-full"
          >
            Entrar
          </button>
          <p className="text-[#787878] text-[13px] text-center mt-7">
            Não possui conta?{" "}
            <a href="#">
              Cadastre-se aqui
            </a>
          </p>
        </Form>
      </div>
    </Formik>
  );
};

export default Login;
