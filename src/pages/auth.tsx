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
  username?: string;
  email: string;
  password: string;
  repeatPassword?: string;
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

  const initialFields =
    authType === "signIn"
      ? { email: "", password: "" }
      : { username: "", email: "", password: "", repeatPassword: "" };

  const dispatch = useDispatch();
  const saveUser = (data: User) => {
    dispatch(setUser(data));
  };
  const submitHandler = (values: any) => {
    authType === "signUp"
      ? api
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
          })
      : api
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
  };

  const validateHandler = (values: AuthFields) => {
    const errors: AuthFields = initialFields;

    if (authType === "signUp") {
      if (!values.email) {
        errors.email = "Поле обязательно для заполнения";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Проверьте вводимую почту";
      } else if (!values.password) {
        errors.password = "Поле обязательно для заполнения";
      } else if (values.password.length < 6) {
        errors.password = "Длина пароля должна быть не менее 6 символов";
      } else if (!values.username) {
        errors.username = "Поле обязательно для заполнения";
      } else if (!(values.repeatPassword === values.password)) {
        errors.repeatPassword = "Пароли должны совпадать";
      }
      return errors;
    } else if (authType === "signIn") {
      if (!values.email) {
        errors.email = "Поле обязательно для заполнения";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Проверьте вводимую почту";
      } else if (!values.password) {
        errors.password = "Поле обязательно для заполнения";
      } else if (values.password.length < 6) {
        errors.password = "Длина пароля должна быть не менее 6 символов";
      }
      return errors;
    }
  };

  return (
    <Layout>
      <PageTitle title={authType === "signUp" ? "Регистрация" : "Вход"} />
      <Container>
        <Formik
          initialValues={initialFields}
          validate={validateHandler}
          onSubmit={(values, { setSubmitting }: FormikHelpers<AuthFields>) => {
            setTimeout(() => {
              submitHandler(values);
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isValidating,
            isSubmitting,
          }) => (
            <form className={styles.auth_form} onSubmit={handleSubmit}>
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
                  />
                  <TextInput
                    label={`Почта`}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email}
                  <TextInput
                    label={`Пароль`}
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                  />
                  <TextInput
                    label={`Повторите пароль`}
                    name="repeatPassword"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.repeatPassword}
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
                  />
                  <TextInput
                    label={`Пароль`}
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                  />
                </>
              )}
              <Button
                // disabled={!isSubmitting}
                type={"submit"}
                addedClasses={styles.btn}
                size={"wide"}
                color={"secondary"}
                fashion={"fill"}
                text={authType === "signUp" ? "Зарегистрироваться" : "Войти"}
                onClick={() => {
                  console.log(errors, touched);
                  console.log(values);
                  console.log(isValidating, isSubmitting);
                }}
              />
              <Link
                href={authType === "signUp" ? "/auth?signIn" : "/auth?signUp"}
              >
                <a className={styles.link}>
                  {authType === "signUp"
                    ? "Уже зарегистрированы? Войти."
                    : "Нет аккаунта? Зарегистрируйтесь."}
                </a>
              </Link>
            </form>
          )}
        </Formik>
      </Container>
      <br />
    </Layout>
  );
};

export default AuthPage;
