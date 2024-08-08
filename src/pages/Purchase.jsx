import { useParams } from "react-router-dom"
import styled from "styled-components"

const PurchasePage = styled.main`
        padding: 100px;

        & #container{
            display: flex;

            & figure{
                background-color: white;
                width: 450px;
                height: 300px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 10px;

                & img{
                    width: 400px;
                    height: auto;
                }
            }

            & #productDesc{
                
            }
        }
    
`
const Purchase = () =>{
    const {nome, preco, image} = useParams();

    const renderedImage = `${window.location.origin}/src/assets/images/${image}`

    return(
        <PurchasePage>
            <div id="container">
                <figure>
                    <img src={renderedImage} alt="Imagem do produto" />
                </figure>

                <div id="productDesc">
                    <h1>{nome}</h1>
                    <h2>{preco}</h2>
                </div>
                
                
            </div>
        </PurchasePage>
    )
}

export default Purchase;