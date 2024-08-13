import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import {useForm } from "react-hook-form";
import { useRef } from "react";

const ConfirmPage = styled.main`
    padding: 30px;
    display: flex;
    justify-content: center;

    & div#container{
        display: flex;
        gap: 25px;

        & div#compra{

            & label{
                margin-top: 15px;
                margin-bottom: 3px;
            }

            & h1{
                font-size: 32px;
                font-family: Inter;
                font-weight: 700;
                letter-spacing: 1px;
            }

            & form{
                background-color: #F5F5F5;
                display: flex;
                flex-direction: column;
                gap: 30px;

                & h2{
                    font-size: 20px;
                    font-family: Inter;
                    margin-bottom: 10px;
                    padding-bottom: 10px;
                    border-bottom: 1px #b8b8b8 solid;
                }

                & div{
                    display: flex;
                    flex-direction: column;
                    padding: 30px;
                    border-radius: 10px;
                    background-color: white;

                    & input{
                        background-color: #F5F5F5;
                        color: #4d4d4d;

                        width: 690px;
                        height: 40px;
                        padding: 10px;
                        border-radius: 10px;

                        
                    }

                    & input:focus{
                        outline: none;
                    }
                    
                }

                & div#paymentInfo{

                    & #paymentMethod{
                        width: 690px;
                        display: flex;
                        flex-direction: row;
                        justify-content: start;
                        align-items: center;
                        gap: 10px;
                        padding: 0;
                        padding-top: 10px;

                        & input[type="radio"]{
                            width: 15px;
                            
                        }

                        & label{
                            margin:0;
                        }
                    }

                    & #cardData{
                        padding: 0;
                        padding-top: 10px;
                        display: flex;
                        
                        
                    }

                    
                }
                & #finalizePurchase{

                        & p{
                            display: flex;
                            justify-content: end;
                            font-size: 12px;
                            letter-spacing: 1px;
                            font-weight: 500;
                            color: #8F8F8F;
                            margin-bottom: 10px;

                        }

                        & #total{
                            padding: 0;
                            height: 40px;
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                            align-items: end;
                            
                            font-size: 18px;
                            font-family: Inter;
                            font-weight: 700;
                            letter-spacing: 0.75px;

                            & p{
                                color: #EE4266;
                                font-size: 18px;
                                font-weight: 700;
                                margin: 0;
                            }
                            
                        }

                        & button{
                            height: 50px;
                            width: auto;
                            border-radius: 10px;

                            background-color: #ffaf03;
                            color: white;
                        }

                        & button:hover{
                            background-color: #da9a10
                        }
                    }


                
            }
        }

        & div#resumo{
            height: 439px;
            width: 400px;
            margin-top: 48px;
            border-radius: 10px;
            padding: 30px;
            background-color: white;

            & h2{
                font-size: 24px;
                font-family: Inter;
                margin-bottom: 10px;
                padding-bottom: 6px;
                border-bottom: 1px #b8b8b8 solid;
            }

            & #product{
                display: flex;
                align-items: center;
                padding-bottom: 10px;
                border-bottom: 1px #b8b8b8 solid;

                & img{
                    width: 100px;
                    margin-right: 30px;
                } 
                
                & h1{
                    font-weight: 500;  
                }
            }

            & label{
                display: flex;
                justify-content: space-between;
                margin-top: 10px;
                
                font-weight: 500;
                letter-spacing: 0.25px;
                color: #808080;

                & p{
                    color: black;
                }
            }

            & #finalize{
                height: auto;
                width: auto;
                margin-top: 15px;
                padding: 20px;
                border-radius: 5px;
                border: 1px solid #ffd884;
                background-color: #fff0d0;

                & p{ 
                    display: flex;
                    justify-content: end;
                    
                    font-size: 12px;
                    letter-spacing: 1px;
                    font-weight: 500;
                    color: #8F8F8F;
                }

                & h1{
                    display: flex;
                    justify-content: space-between;
                    
                    font-size: 24px;
                    font-weight: 700;

                    & p{
                        font-size: 24px;
                        font-weight: 700;
                        letter-spacing: 1px;
                        color: black;
                        
                    }
                }

                

            }
            & button{
                margin-top: 10px;
                height: 50px;
                width: 100%;
                border-radius: 10px;
                
                background-color: #ffaf03;
                color: white;
            }

            & button:hover{
                background-color: #da9a10
            }

        }
    }
    
`

const Confirm = () =>{
    const {name, price, image} = useParams();
    const img = `${window.location.origin}/src/assets/images/${image}`

    const Price = Number(price.replace("R$", "").trim().replace(",","."));
    const finalPrice = (Price/10).toFixed(2)
    const formattedPrice = (finalPrice.toString()).replace(".",",")

    const {register, handleSubmit, watch} = useForm();
    const paymentMethod = watch("paymentMethod")
    

    function buy(dados) {
        alert("comprou")
        console.log(dados)
        
    }


    return(
        <ConfirmPage>
            <div id="container">

                <div id="compra">
                    <h1>Finalizar compra</h1>
                    <form onSubmit={handleSubmit(buy)}>
                        <div id="personalInfo">
                            <h2>Informações Pessoais</h2>
                            
                            <label htmlFor="name">Nome completo *</label>
                            <input type="text" id="name" placeholder="Insira seu nome" {...register("name", {required: true})}/>

                            <label htmlFor="cpf">CPF *</label>
                            <input type="text" id="cpf" placeholder="Insira seu CPF" {...register("cpf", {required: true})}/>

                            <label htmlFor="email">E-mail *</label>
                            <input type="email" id="email" placeholder="Insira seu email" {...register("email", {required: true})}/>

                            <label htmlFor="phone">Celular *</label>
                            <input type="text" id="phone" placeholder="Insira seu número" {...register("phone", {required: true})}/>
                        </div>

                        <div id="deliveryInfo">
                            <h2>Informações de Entrga</h2>

                            <label htmlFor="address" >Endereço *</label>
                            <input type="text" id="address" placeholder="Insira seu endereço" {...register("address", {required: true})}/>

                            <label htmlFor="district">Bairro *</label>
                            <input type="text" id="district" placeholder="Insira o nome do seu bairro" {...register("district", {required: true})}/>

                            <label htmlFor="city">Cidade *</label>
                            <input type="text" id="city" placeholder="Insira o nome da sua cidade" {...register("city", {required: true})}/>

                            <label htmlFor="cep">CEP*</label>
                            <input type="text" id="cep" placeholder="Insira o CEP da sua cidade" {...register("cep", {required: true})}/>

                            <label htmlFor="complement">Complemento</label>
                            <input type="text" id="complement" placeholder="Insira um complemento (opcional)" {...register("complement")}/>

                        </div>

                        <div id="paymentInfo">
                            <h2>Informações de Pagamento</h2>

                            <label htmlFor="paymentMethod">Forma de pagamento</label>

                            <div id="paymentMethod">

                                <input type="radio"
                                        id="credit"
                                        value="credit"
                                        {...register("paymentMethod", {required: true})}
                                />
                                <label htmlFor="credit">Cartão de Crédito</label>

                                <input type="radio" 
                                        id="ticket" 
                                        value="ticket"
                                        {...register("paymentMethod", {required: true})}
                                />
                                <label htmlFor="ticket">Boleto bancário</label>
                            </div>

                            {paymentMethod === "credit" && (

                                <div id="cardData">
                                    <label htmlFor="cardName">Nome do Cartão *</label>
                                    <input type="text" id="cardName" placeholder="Insira o nome do cartão"/>

                                    <label htmlFor="cardNumber">Número do cartão *</label>
                                    <input type="text" id="cardNumber" placeholder="Insira o número do cartão"/>

                                    <label htmlFor="cardValideDate">Data de validade do Cartão *</label>
                                    <input type="text" id="cardValideDate" placeholder="Insira a data de valdiade do cartão"/>

                                    <label htmlFor="cvvCode">Código CVV *</label>
                                    <input type="text" id="cvvCode" placeholder="Insira o código de segurança CVV"/>
                                </div>
                            )}

                            
                        </div>

                            {paymentMethod && (
                                <div id="finalizePurchase">
                                    <h2>Finalizar compra</h2>
                                    <div id="total">
                                        <label htmlFor="total">Total</label>
                                        <p>{price}</p>
                                    </div>
                                    <p>ou de 10x de R${formattedPrice}</p>
                                    <button type="submit" >Realizar pagamento</button>
                                </div>

                            )}

                    </form>
                </div>

                <div id="resumo">
                    <h2>Resumo</h2>
                    <div id="product">
                        <img src={img} alt="imagem do produto" />
                        <h1>Tênis Nike {name}</h1>
                    </div>

                    <label htmlFor="subTotal">Subtotal: <p>{price}</p></label>
                    <label htmlFor="freight">Frete: <p>R$0,00</p></label>
                    <label htmlFor="discount">Desconto <p>R$0,00</p></label>

                    <div id="finalize">
                        <h1>Total <p>{price}</p></h1>
                        <p>ou de 10x de R${formattedPrice}</p>
                    </div>
                    
                    
                </div>
  
            </div>
         
        </ConfirmPage>
    )
}

export default Confirm;