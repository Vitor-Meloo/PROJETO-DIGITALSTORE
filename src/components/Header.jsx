import React from "react";
import styled from "styled-components";
import logo from "..//assets/images/logo.png";
import 'primeicons/primeicons.css';
import iconCart from "../assets/icons/mini-cart.png"
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  
  
  return (
    <HeaderContainer>
      <div>
        <img id="logo" src={logo} alt="Logo Digital Store" />

        <SearchContainer>
        <input type="text" placeholder="Pesquisar produto..." />
        <i className="pi pi-search" />
        </SearchContainer>
        <Link id="cadastro">Cadastre-se</Link>
        <Link><button>Entrar</button></Link>
        <img id="cart" src={iconCart} alt="" />

      </div>

      <nav>
        <ul>
          <li><NavLink to={"/"} className="nav-link" activeClassName="active">Home</NavLink></li>
          <li><NavLink to={"/products"} className="nav-link" activeClassName="active">Produtos</NavLink></li>
          <li><NavLink to={"/categories"} className="nav-link" activeClassName="active">Categorias</NavLink></li>
          <li><NavLink to={"/my-products"} className="nav-link" activeClassName="active">Meus Produtos</NavLink></li>
        </ul>
      </nav>
      

    </HeaderContainer>
  );
};


const HeaderContainer = styled.header`
  background-color: white;
  width: 100%;
  height: 192px;
  display: flex;
  align-items: end;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 10%;

  & div{
      width: 100%;
      display: flex;
      align-items: center;
      gap: 30px;

    & img#logo{
        height: 44px;
        width: auto;
        margin-left: 5px;
    }

    & button{
        width: 102px;
        height: 40px;
        color: #F5F5F5;
        background-color: #C92071;
        padding: 10px 40px;
        border-radius: 8px;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Inter;
        transition: 200ms;
    }

    & button:hover{
        cursor: pointer;
        background-color: #8d0949;
        transition: 200ms;
    }

    & #cadastro{
        color: #666666;
        width: 180px;
        display: flex;
        align-items: center;
        text-decoration: underline;
    }

    & input{
        background-color: #F5F5F5;
        border: none;
        outline: none;
        width: 100%;

      & i{
         color: #CCCCCC;
      }
    }

    & img#cart{
        height: 20px;
        width: auto;
    }

    & img#cart:hover{
       cursor: pointer;
    }
  }

  & nav{
      width: 100%;
      padding-bottom: 20px;
    & ul{
        display: flex;
        gap: 30px;
      
      & .nav-link{
          color: #666666;
          padding: 5px;
      }

      & .active{
          font-weight: 500;
          color: #C92071;
          border-bottom: 2px solid #C92071;
      }


    }

  }
`;


const SearchContainer = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  border-radius: 5px;
  padding: 5px 15px;
  background-color: #F5F5F5;
`;
