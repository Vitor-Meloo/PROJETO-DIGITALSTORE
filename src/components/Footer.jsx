import styled from "styled-components";
import logofooter from "../assets/images/logo-footer.png"
import iconfacebook from "../assets/icons/facebook.png"
import iconinstagram from "../assets/icons/instagram.png"
import icontwitter from "../assets/icons/twitter.png"

const FooterComponent = styled.footer`

    background-color: #1F1F1F;
    color: white;
    padding: 30px 30px 0px 30px;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
    & #container{
        display: flex;
        gap: 50px;
        justify-content: space-between;
        border-bottom: 1px solid white;
        & div{
            width: auto;
            height: auto;
            display: flex;
            flex-direction: column;
            gap: 25px;
            margin-bottom: 30px;

            & ul{
                display: flex;
                flex-direction: column;
                gap: 15px;
            }
        }

        & #conexoes{
            display: flex;
            flex-direction: column;
            gap: 25px;
            width: 600px;
            align-items: start;
            padding: 0 60px 0 0;

            & nav > ul{
                display: flex;
                flex-direction: row;
                gap:20px;
            }

            & .socialNetwork{
                height: 15px;
                width: auto;
            }
        }
    }

    & #imglogo{
        width: 200px;
    }

    & #copyright{
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
                            <li>Sobre a Drip Store</li>
                            <li>Segurança</li>
                            <li>Wishlist</li>
                            <li>Blog</li>
                            <li>Trabalhe conosco</li>
                            <li>Meus pedidos</li>
                        </ul>
                    </nav>
                </div>

                <div id="categorias">
                    <h4>Categorias</h4>
                    <nav>
                        <ul>
                            <li>Camisetas</li>
                            <li>Calças</li>
                            <li>Bonés</li>
                            <li>Headphones</li>
                            <li>Tênis</li>
                        </ul>
                    </nav>
                </div>

                <div id="contato">
                    <h4>Contato</h4>
                    <ul>
                        <li>Av.Santos Dumont, 1510 -1 andar - Aldeota,Fortaleza -CE,60150-161</li>
                        <li>(85) 3051-3411</li>
                    </ul>
                </div>

            </div>

            <div id="copyright"><p>@ 2022 Digital College</p></div>
            
            
        </FooterComponent>
  
    );
}
