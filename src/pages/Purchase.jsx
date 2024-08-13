import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"

const PurchasePage = styled.main`
        padding: 100px;

        & #container{
            display: flex;
            width: auto;
            justify-content: center;
            gap: 20px;
            

            & figure{
                background-color: white;
                width: 350px;
                height: 250px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 10px;

                & img{
                    width: 300px;
                    height: auto;
                }
            }

            & #productDetails{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                

                & #productDesc{
                    & h1{
                        font-size: 34px;
                        font-family: Inter;
                        font-weight: 700;
                        letter-spacing: 0.75px;
                    }

                    & h5{
                        font-size: 16px;
                        font-family: Inter;
                        font-weight: 600;
                        letter-spacing: 0.75px;
                        color: #8F8F8F;
                    }

                    & h2{
                        font-size: 26px;
                        font-family: Inter;
                        font-weight: 700;
                        letter-spacing: 0.75px;
                    }
                }

                & h5{
                    font-size: 16px;
                    font-family: Inter;
                    font-weight: 600;
                    letter-spacing: 0.75px;
                    color: #8F8F8F;
                }
                
                & div#footSize{
                    display: flex;
                    justify-content: start;
                    gap: 10px;
 

                    & div.size{
                        font-family: Inter;
                        font-weight: 600;
                        letter-spacing: 0.75px;

                        height: 35px;
                        width: 35px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border: 1px black solid;
                        border-radius: 8px;
                    }

                    & div.size:hover{
                        cursor: pointer;
                        background-color: #cacaca;
                    }
                }

                & button{
                    font-size: 26px;
                    font-family: Inter;
                    font-weight: 700;
                    letter-spacing: 0.75px;

                    height: 50px;
                    width: 260px;
                    border-radius: 10px;
                    color: white;
                    background-color: #ffaf03;
                }

                & button:hover{
                    background-color: #da9a10
                }
            }

        }
    
`
const Purchase = () =>{
    const {name, price, image} = useParams();
    const renderedImage = `${window.location.origin}/src/assets/images/${image}`;
    const navigate = useNavigate();

    var size = null;
    function getSize(e){
        size = e.currentTarget.querySelector("p").textContent
    }

    function comprar(){
        if(!size){
            window.alert("Você precisa escolher o tamanho")
        }else{
            navigate(`/products/purchase/confirm/${name}/${price}/${image}`)
        }
    }
    
    return(
        <PurchasePage>
            <div id="container">
                <figure>
                    <img src={renderedImage} alt="Imagem do produto" />
                </figure>

                <div id="productDetails">

                    <div id="productDesc">
                        <h1>Nike - {name}</h1>
                        <h5>Tênis | Casual | Nike | Adulto | Masculino</h5>
                        <h2>{price}</h2> 
                    </div>
                    

                    <h5>Tamanho</h5>
                    <div id="footSize">
                        <div className="size" onClick={getSize}><p>38</p></div>
                        <div className="size" onClick={getSize}><p>39</p></div>
                        <div className="size" onClick={getSize}><p>40</p></div>
                        <div className="size" onClick={getSize}><p>41</p></div>
                        <div className="size" onClick={getSize}><p>42</p></div>
                        <div className="size" onClick={getSize}><p>43</p></div>
                    </div>
                    <button onClick={comprar}>Comprar</button>
                </div>

                
                
                
            </div>
        </PurchasePage>
    )
}

export default Purchase;