import styled from "styled-components";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ConfirmPage = styled.main`
    padding: 100px;

    & div#container{
        display: flex;
        gap: 25px;

        & div#compra{

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
                    }

                    & #cardData{
                        padding: 0;
                        padding-top: 10px;
                        display: flex;
                        
                        
                    }

                    
                }
                & #finalizePurchase{

                        & #total{
                            padding: 0;
                            height: 70px;
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                            align-items: center;
                            
                            font-size: 18px;
                            font-family: Inter;
                            font-weight: 700;
                            letter-spacing: 0.75px;

                            & p{
                                color: #EE4266;
                            }
                            
                        }
                        & button{
                            background-color: #ffaf03;
                            height: 50px;
                            width: auto;
                            border-radius: 10px;
                        }

                        & button:hover{
                            background-color: #da9a10
                        }
                    }


                
            }
        }

        & div#resumo{
            height: 367px;
            width: 400px;
            margin-top: 48px;
            border-radius: 10px;
            padding: 30px;
            background-color: white;

            & h2{
                    font-size: 20px;
                    font-family: Inter;
                    margin-bottom: 10px;
                    padding-bottom: 10px;
                    border-bottom: 1px #b8b8b8 solid;
            }
        }
    }
    
`

const Confirm = () =>{
    const [paymentMethod, setPaymentMethod] = useState("");
    

    const click = (e)=>{
        console.log(e.target.value)
        setPaymentMethod(e.target.value)
    }

    return(
        <ConfirmPage>
            <div id="container">

                <div id="compra">
                    <h1>Finalizar compra</h1>
                    <form>
                        <div id="personalInfo">
                            <h2>Informações Pessoais</h2>
                            
                            <label htmlFor="name">Nome completo *</label>
                            <input type="text" id="name" placeholder="Insira seu nome"/>

                            <label htmlFor="cpf">CPF *</label>
                            <input type="text" id="cpf" placeholder="Insira seu CPF"/>

                            <label htmlFor="email">E-mail *</label>
                            <input type="email" id="email" placeholder="Insira seu email"/>

                            <label htmlFor="phone">Celular *</label>
                            <input type="text" id="phone" placeholder="Insira seu número"/>
                        </div>

                        <div id="deliveryInfo">
                            <h2>Informações de Entrga</h2>

                            <label htmlFor="address">Endereço *</label>
                            <input type="text" id="address" placeholder="Insira seu endereço"/>

                            <label htmlFor="district">Bairro *</label>
                            <input type="text" id="district" placeholder="Insira o nome do seu bairro"/>

                            <label htmlFor="city">Cidade *</label>
                            <input type="text" id="city" placeholder="Insira o nome da sua cidade"/>

                            <label htmlFor="cep">CEP*</label>
                            <input type="text" id="cep" placeholder="Insira o CEP da sua cidade"/>

                            <label htmlFor="complement">Complemento</label>
                            <input type="text" id="complement" placeholder="Insira um complemento (opcional)"/>

                        </div>

                        <div id="paymentInfo">
                            <h2>Informações de Pagamento</h2>

                            <label htmlFor="paymentMethod">Forma de pagamento</label>

                            <div id="paymentMethod">

                                <input type="radio"
                                        id="credit"
                                        name="payment" 
                                        value="credit"
                                        checked={paymentMethod === "credit"}
                                        onChange={click}
                                />
                                <label htmlFor="credit">Cartão de Crédito</label>

                                <input type="radio" 
                                        id="ticket" 
                                        name="payment" 
                                        value="ticket"
                                        checked={paymentMethod === "ticket"}
                                        onChange={click}
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

                        {(paymentMethod) && (
                                <div id="finalizePurchase">
                                    <h2>Finalizar compra</h2>
                                    <div id="total">
                                        <label htmlFor="total">Total</label>
                                        <p>valor</p>
                                    </div>
                                    <button>Realizar pagamento</button>
                                </div>
                            )
                        }
                        
                       
                    </form>
                </div>

                <div id="resumo">
                    <h2>Resumo</h2>
                </div>
  
            </div>
         
        </ConfirmPage>
    )
}

export default Confirm;