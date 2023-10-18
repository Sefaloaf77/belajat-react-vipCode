import axios from "axios";
import jwt_decode from "jwt-decode";

export const loginUser = (data, callback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      callback(true, res.data.token);
    })
    .catch((error) => {
      callback(false, error);
    });
};

export const getUsername = (token) => {
  var decoded = jwt_decode(token);
  return decoded.user;
};
