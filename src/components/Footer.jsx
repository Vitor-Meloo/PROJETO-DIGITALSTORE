import styled from "styled-components";
import logofooter from "../assets/images/logo-footer.png"
import iconfacebook from "../assets/icons/facebook.png"
import iconinstagram from "../assets/icons/instagram.png"
import icontwitter from "../assets/icons/twitter.png"

const FooterComponent = styled.footer`

    background-color: #1F1F1F;
    color: white;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    padding-bottom: 0;
    margin: 0;
    
    
    & #container{
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        border-bottom: 1px solid gray;

        & h4{
            font-weight: 600;
        }

        & p{
            color: #e0e0e0;
            font-size: 15px;
        }

        & div{
            width: 200px;
            height: auto;
            display: flex;
            flex-direction: column;
            gap: 25px;
            margin-bottom: 40px;

            & ul{
                display: flex;
                flex-direction: column;
                gap: 15px;
            }
        }

        & #conexoes{
            display: flex;
            flex-direction: column;
            gap: 35px;
            width: 600px;
            align-items: start;
            padding: 0 60px 0 0;

            & #imglogo{
                width: 200px;
            }

            & nav > ul{
                display: flex;
                flex-direction: row;
                gap:20px;
            }

            & nav > ul >li:hover{
                cursor: pointer;
            }

            & .socialNetwork{
                height: 15px;
                width: auto;
            }
        }
    }

    & #copyright{
        font-size: 13px;
        color: #e0e0e0;
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const Footer = () => {
    return ( 
        <FooterComponent>
            <div id="container">

                <div id="conexoes">
                    <img id="imglogo" src={logofooter}></img>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates neque nihil nisi, expedita mollitia voluptate enim exercitationem ullam aperiam fuga atque sit dignissimos dicta, tempore, culpa nobis earum. Voluptas, asperiores!</p>

                    <nav>
                        <ul>
                            <li><img className="socialNetwork" src={iconfacebook}></img></li>
                            <li><img className="socialNetwork" src={iconinstagram}></img></li>
                            <li><img className="socialNetwork" src={icontwitter}></img></li>
                        </ul>
                    </nav>
                </div>

                <div id="informacao">
                    <h4>Informação</h4>
                    <nav>
                        <ul>
                            <li><p>Sobre Drip Store</p></li>
                            <li><p>Segurança</p></li>
                            <li><p>Wishlist</p></li>
                            <li><p>Blog</p></li>
                            <li><p>Trabalhe conosco</p></li>
                            <li><p>Meus pedidos</p></li>
                        </ul>
                    </nav>
                </div>

                <div id="categorias">
                    <h4>Categorias</h4>
                    <nav>
                        <ul>
                            <li><p>Camisetas</p></li>
                            <li><p>Calças</p></li>
                            <li><p>Bonés</p></li>
                            <li><p>Headphones</p></li>
                            <li><p>Tênis</p></li>
                        </ul>
                    </nav>
                </div>

                <div id="contato">
                    <h4>Contato</h4>
                    <ul>
                        <li><p>Av.Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza -CE,60150-161</p></li>
                        <li><p>(85) 3051-3411</p></li>
                    </ul>
                </div>

            </div>

            <div id="copyright"><p>@ 2022 Digital College</p></div>
            
            
        </FooterComponent>
  
    );
}
