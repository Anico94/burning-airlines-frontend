import { useEffect, useState } from "react";

export const useIdLoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    fetch("http://localhost:3000/logged_in", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((json) => {
        setLoggedIn(json.logged_in);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return loggedIn;
};

export const login = (params) => {
  const requestOptions = {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  };
  fetch("http://localhost:3000/login", requestOptions)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      console.log("you are login welocome");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const logout = (params) => {
  const requestOptions = {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  };
  fetch("http://localhost:3000/logout", requestOptions)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      console.log("lol");
    })
    .catch((err) => {
      console.log(err);
    });
};
