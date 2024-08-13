import styled from "styled-components";
import tenis from "../assets/images/K-SwissV8-Masculino.png"
import { useNavigate } from "react-router-dom";

const ProductsPage = styled.main`
        padding: 100px;

        & #container{

             & h2{
                font-size: 24px;
                font-family: Inter;
                font-weight: 700;
                letter-spacing: 0.75px;
                color: #474747;
             }
             & #products{
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    display: flex;

                    & div.card{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        margin-top: 10px;
                        gap: 10px;

                        & figure{
                            width: 260px;
                            height: 234px;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            background-color: white;
                            border-radius: 5px;

                            & img{
                                width: 200px;
                                height: auto;
                                transition: 400ms;
                            }
                        }

                        & figure:hover{
                            cursor: pointer;

                            & img{
                                transform: rotate(-29.88deg);
                            }
                        }

                        & #productDesc{
                            
                            & h6.productType{
                                font-size: 12px;
                                font-family: Inter;
                                font-weight: 700;
                                letter-spacing: 0.75px;
                                color: #8F8F8F;
                            }

                            & h4{
                                font-size: 16px;
                                font-family: Inter;
                                font-weight: 400;
                                letter-spacing: 0.75px;
                                color: #474747;
                            }

                            & p.preco{
                                font-size: 16px;
                                font-family: Inter;
                                font-weight: 700;
                                letter-spacing: 0.75px;
                                color: #1F1F1F;
                            }
                        }
                    }
             }

        }
    
`;

const Products = () =>{
    const navigate = useNavigate()
    
    function click(e){
        const image = e.currentTarget.querySelector("img");
        const nomeImage = image.src.substring(image.src.lastIndexOf("/") + 1);
        const nome = e.currentTarget.querySelector("h4");
        const preco = e.currentTarget.querySelector("p");

        navigate(`/products/purchase/${nome.textContent}/${preco.textContent}/${nomeImage}`)
    }

    return(
        <ProductsPage>
            <div id="container">

                <h2>Produtos Relacionados</h2>
                
                <div id="products">

                    <div className="card" onClick={click}>
                        <figure>
                            <img src={tenis} alt="imagem do produto"/>
                        </figure>
                        
                        <div id="productDesc">
                            <h6 className="productType">Tênis</h6>
                            <h4>K-Swiss V8</h4>
                            <p className="preco">R$199,99</p>
                        </div>
                    </div>

                    <div className="card" onClick={click}>
                        <figure>
                            <img src={tenis} alt="imagem do produto"/>
                        </figure>
                        
                        <div id="productDesc">
                            <h6 className="productType">Tênis</h6>
                            <h4>K-Swiss V8</h4>
                            <p className="preco">R$199,99</p>
                        </div>

                    </div>

                    <div className="card" onClick={click}>
                        <figure>
                            <img src={tenis} alt="imagem do produto"/>
                        </figure>

                        <div id="productDesc">
                            <h6 className="productType">Tênis</h6>
                            <h4>K-Swiss V8</h4>
                            <p className="preco">R$199,99</p>
                        </div>

                    </div>

                    <div className="card" onClick={click}>
                        <figure>
                            <img src={tenis} alt="imagem do produto"/>
                        </figure>
                        
                        <div id="productDesc">
                            <h6 className="productType">Tênis</h6>
                            <h4>K-Swiss V8</h4>
                            <p className="preco">R$199,99</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </ProductsPage>
    )
}

export default Products;