import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "~/components/layout";
import Container from "~/UI/containers/container";
import PageTitle from "~/components/page-title/page-title";
import Button from "~/UI/button";
import TextInput from "~/UI/text-input";
import styles from "~/styles/auth.module.scss";
import LockImg from "~/assets/icons/authorization/lock.svg";
import api from "~/api/api";
import { useDispatch } from "react-redux";
import { setUser } from "~/stores/user/actions";
import { User } from "~/interfaces/api-types";
import { Formik, FormikHelpers } from "formik";

interface AuthFields {
  username?: string | undefined;
  email?: string | undefined;
  password?: string | undefined;
  repeatPassword?: string | undefined;
}

const AuthPage = () => {
  const router = useRouter();
  const [authType, setAuthType] = useState<"signIn" | "signUp">("signUp");
  useEffect(() => {
    if (router.query.signIn === "") {
      setAuthType("signIn");
    } else if (router.query.signUp === "") {
      setAuthType("signUp");
    }
  }, [router.query]);

  const dispatch = useDispatch();
  const saveUser = (data: User) => {
    dispatch(setUser(data));
  };
  const submitHandler = (values: AuthFields) => {
    if (values && authType === "signUp") {
      return api
        .signUp({
          username: values.username,
          email: values.email,
          password: values.password,
        })
        .then(() => {
          api
            .signIn({
              email: values.email,
              password: values.password,
            })
            .then((resp) => {
              saveUser(resp);
            });
        })
        .catch((err) => {
          console.error(err);
        });
    } else if (values && authType === "signIn") {
      api
        .signIn({
          email: values.email,
          password: values.password,
        })
        .then((resp: User) => {
          saveUser(resp);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const validateSignUpHandler = (values: AuthFields) => {
    const errors: AuthFields = {};
    if (!values.username) {
      errors.username = "Поле обязательно для заполнения";
    } else if (!values.email) {
      errors.email = "Поле обязательно для заполнения";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Проверьте вводимую почту";
    } else if (!values.password) {
      errors.password = "Поле обязательно для заполнения";
    } else if (values.password.length < 6) {
      errors.password = "Длина пароля должна быть не менее 6 символов";
    } else if (!(values.repeatPassword === values.password)) {
      errors.repeatPassword = "Пароли должны совпадать";
    }
    return errors;
  };
  const validateSignInHandler = (values: AuthFields) => {
    const errors: AuthFields = {};
    if (!values.email) {
      errors.email = "Поле обязательно для заполнения";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Проверьте вводимую почту";
    } else if (!values.password) {
      errors.password = "Поле обязательно для заполнения";
    } else if (values.password.length < 6) {
      errors.password = "Длина пароля должна быть не менее 6 символов";
    }
    return errors;
  };

  return (
    <Layout>
      <PageTitle title={authType === "signUp" ? "Регистрация" : "Вход"} />
      <Container>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            repeatPassword: "",
          }}
          validate={
            authType === "signUp"
              ? validateSignUpHandler
              : validateSignInHandler
          }
          onSubmit={(
            values,
            { setSubmitting, resetForm }: FormikHelpers<AuthFields>
          ) => {
            // @ts-ignore
            submitHandler(values).then(() => {
              resetForm();
              setSubmitting(false);
            });
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            isValid,
            isSubmitting,
          }) => (
            <form
              className={styles.auth_form}
              onSubmit={handleSubmit}
              noValidate
            >
              <div className={styles.img_wrapper}>
                <LockImg />
              </div>
              {authType === "signUp" ? (
                <>
                  <TextInput
                    label={`Имя`}
                    name="username"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.username}
                    errorMessage={errors.username}
                  />
                  <TextInput
                    label={`Почта`}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    errorMessage={errors.email}
                  />
                  <TextInput
                    label={`Пароль`}
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    errorMessage={errors.password}
                  />
                  <TextInput
                    label={`Повторите пароль`}
                    name="repeatPassword"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.repeatPassword}
                    errorMessage={errors.repeatPassword}
                  />
                </>
              ) : (
                <>
                  <TextInput
                    label={`Почта`}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    errorMessage={errors.email}
                  />
                  <TextInput
                    label={`Пароль`}
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    errorMessage={errors.password}
                  />
                </>
              )}
              <Button
                disabled={isSubmitting || !isValid}
                type={"submit"}
                addedClasses={styles.btn}
                size={"wide"}
                color={"secondary"}
                fashion={"fill"}
                text={authType === "signUp" ? "Зарегистрироваться" : "Войти"}
              />
              <a
                className={styles.link}
                onClick={() => {
                  handleReset();
                  if (authType === "signUp") {
                    router.push("/auth?signIn");
                  } else if (authType === "signIn") {
                    router.push("/auth?signUp");
                  }
                }}
              >
                {authType === "signUp"
                  ? "Уже зарегистрированы? Войти."
                  : "Нет аккаунта? Зарегистрируйтесь."}
              </a>
            </form>
          )}
        </Formik>
      </Container>
      <br />
    </Layout>
  );
};

export default AuthPage;
