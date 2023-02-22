import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Clayful } from "clayful/client-js";

function RegisterPage() {
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const handleEmailChange = (e) => {
    setInfo({
      ...info,
      email: e.target.value,
    });
  };

  const handlePWChange = (e) => {
    setInfo({
      ...info,
      password: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //리프레시를 막아줌

    var Customer = Clayful.Customer;

    var payload = {
      email: info.email,
      password: info.password,
    };

    Customer.createMe(payload, function (err, result) {
      if (err) {
        console.log(err.code);
        return;
      }

      navigate("/login");
    });
  };

  return (
    <AuthWrapper>
      <BasicText>회원가입</BasicText>
      <ForDiv>
        <RegForm onSubmit={handleSubmit}>
          <RegInput onChange={handleEmailChange} placeholder="apple ID" type="email" name="email" value={info.email} autoComplete="off" />
          <RegInput onChange={handlePWChange} placeholder="password" type="password" name="password" value={info.password} autoComplete="off" />
          <div>
            <RegBtn type="submit">회원가입</RegBtn>
            <LinktoLogin to="/login">이미 애플 아이디가 있다면? 지금 로그인</LinktoLogin>
          </div>
        </RegForm>
      </ForDiv>
    </AuthWrapper>
  );
}

export default RegisterPage;

const AuthWrapper = styled.div`
  text-align: center;
`;

const ForDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const BasicText = styled.h1`
  font-weight: 700;
  margin-top: 30px;
  font-size: 40px;
`;

const RegForm = styled.form`
  margin-top: 15px;
  width: 400px;
`;

const RegInput = styled.input`
  width: 389.1px;
  border-color: #d2d2d7;
  height: 3.29412rem;
  border-radius: 12px;
  border-style: solid;
  margin-bottom: 20px;
  padding: 0px;
  padding-left: 8px;
`;

const RegBtn = styled.button`
  background: #0071e3;
  color: #fff;
  font-size: 17px;
  line-height: 1.17648;
  min-width: 28px;
  height: 50px;
  width: 400px;
  border-radius: 12px;
  margin-bottom: 10px;
  border: none;
`;

const LinktoLogin = styled(Link)`
  color: gray;
  text-decoration: none;
  margin-top: 10px;
  color: #06c;
  font-size: 12px;
`;
