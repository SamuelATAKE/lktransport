import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const payStatusState = {
  auth_token: "",
  identifier: "",
};

const PayementConfirm = () => {
  const navigate = useNavigate();
  const [payStatus, setPayStatus] = React.useState(payStatusState);
  console.log(sessionStorage.getItem("payment"));

  React.useEffect(() => {
    console.log(sessionStorage.getItem("payment"));
    payStatus.auth_token = JSON.parse(
      sessionStorage.getItem("payment")
    ).auth_token;
    payStatus.identifier = JSON.parse(
      sessionStorage.getItem("payment")
    ).identifier;

    const payement = JSON.parse(sessionStorage.getItem("payement"));

    axios
      .post(
        `https://paygateglobal.com/api/v2/status`,
        JSON.stringify(payStatus)
      )
      .then((res) => {
        console.log(res.data);
        axios
          .put(
            `https://lktransportbackend.herokuapp.com/payement`,
            JSON.stringify(payement),
            {
              headers: {
                "content-type": "application/json",
              },
            }
          )
          .then((res) => {
            console.log(res);
            navigate("/qrcode");
          });
      });
  }, []);
  return <div>payementConfirm</div>;
};

export default PayementConfirm;
