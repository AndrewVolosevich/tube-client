import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useInput } from "~/hooks/useInput";
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

  const nameInput = useInput("");
  const emailInput = useInput("");
  const passwordInput = useInput("");
  const comparePasswordInput = useInput("");

  const dispatch = useDispatch();
  const saveUser = (data: User) => {
    dispatch(setUser(data));
  };
  const submitHandler = () => {
    authType === "signUp"
      ? api
          .signUp({
            username: nameInput.value,
            email: emailInput.value,
            password: passwordInput.value,
          })
          .then(() => {
            api
              .signIn({
                email: emailInput.value,
                password: passwordInput.value,
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
            email: emailInput.value,
            password: passwordInput.value,
          })
          .then((resp: User) => {
            saveUser(resp);
          })
          .catch((err) => {
            console.error(err);
          });
  };
  return (
    <Layout>
      <PageTitle title={authType === "signUp" ? "Регистрация" : "Вход"} />
      <Container>
        <form
          className={styles.auth_form}
          onSubmit={(e) => {
            e.preventDefault();
            submitHandler();
          }}
        >
          <div className={styles.img_wrapper}>
            <LockImg />
          </div>
          {authType === "signUp" ? (
            <>
              <TextInput
                label={`Имя`}
                value={nameInput.value}
                onChange={nameInput.onChange}
              />
              <TextInput
                label={`Email`}
                value={emailInput.value}
                onChange={emailInput.onChange}
              />
              <TextInput
                label={`Пароль`}
                value={passwordInput.value}
                onChange={passwordInput.onChange}
              />
              <TextInput
                label={`Повторите пароль`}
                value={comparePasswordInput.value}
                onChange={comparePasswordInput.onChange}
              />
            </>
          ) : (
            <>
              <TextInput
                label={`Email`}
                value={emailInput.value}
                onChange={emailInput.onChange}
              />
              <TextInput
                label={`Пароль`}
                value={passwordInput.value}
                onChange={passwordInput.onChange}
              />
            </>
          )}
          <Button
            // disabled={true}
            type={"submit"}
            addedClasses={styles.btn}
            size={"wide"}
            color={"secondary"}
            fashion={"fill"}
            text={authType === "signUp" ? "Зарегистрироваться" : "Войти"}
          />
          <Link href={authType === "signUp" ? "/auth?signIn" : "/auth?signUp"}>
            <a className={styles.link}>
              {authType === "signUp"
                ? "Уже зарегистрированы? Войти."
                : "Нет аккаунта? Зарегистрируйтесь."}
            </a>
          </Link>
        </form>
      </Container>
      <br />
    </Layout>
  );
};

export default AuthPage;
