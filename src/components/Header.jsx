import React from "react";
import styled from "styled-components";
import logo from "..//assets/images/logo.png";
import 'primeicons/primeicons.css';

export const Header = () => {
  return (
    <HeaderContainer>
      <div>

        
      </div>
        <Logo src={logo} alt="Logo Digital Store" />

        <SearchContainer>
          <Input type="text" placeholder="Pesquisar produto..." />
          <i className="pi pi-search" />
        </SearchContainer>

        
        <Button>Cadastre-se</Button>

        <ButtonStyled>Entrar</ButtonStyled>

        <i 
          className="pi pi-shopping-cart" 
          style={{ fontSize: '30px', color: '#C92071', marginLeft: '10px' }} 
        />
        <span>2</span>


      
      

    </HeaderContainer>
  );
};


const HeaderContainer = styled.header`
  width: 100%;
  height: 192px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid black;
`;

const Logo = styled.img`
  height: 44px;
  padding-left: 20px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px 10px;
`;

const Input = styled.input`
  border: none;
  outline: none;

  
  margin-left: 10px;
`;

const Button = styled.button`
  width: 102px;
  height: 28px;
  text-decoration: underline;

`;

const ButtonStyled = styled.button`
  color: #F5F5F5;
  background-color: #C92071;
  border-radius: 5px;
  padding: 10px 40px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  display: inline-block;
  text-align: center;
  font-family: Inter;

`;
