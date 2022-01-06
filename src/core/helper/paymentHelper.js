import { API } from "../../backend";

export const getmeToken = (userId, token) => {
  return fetch(`${API}payment/gettoken/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      console.log("response token ", response);
      return response.json();
    })
    .catch(err => {
      console.log(err)
      console.log("can't find token for some unknown reasons");
    });
};

export const processPayment = (userId, token, paymentInfo) => {
  return fetch(`${API}/payment/braintree/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(paymentInfo)
  })
    .then(reponse => {
      return reponse.json();
    })
    .catch(err => console.log(err));
};
