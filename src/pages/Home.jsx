import { Link } from "react-router-dom";
import styled from "styled-components";
import shoesHome from "../assets/images/shoeshome.png"
import Ornament from "../assets/images/ornament.png"

export const Home = () => {
    return ( 
        <HomePage>
           <div id="container">
                
                <div id="description">

                    <h4>Melhores ofertas personalizadas</h4>

                    <h1>Queima de Estoque Nike</h1> 

                    <p>
                        Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                    </p> 

                    <Link><button>Ver Ofertas</button></Link>
   
                </div>  

                <div id="imagesdescription">
                    <img id="shoeshome" src={shoesHome} alt="foto de tenis nike branco e vermelho"/> 
                    <img id="ornament" src={Ornament}/>      
                </div>     
              
                <div id="carrossel">
                    <h1>Carrosel</h1>




                </div>

                       
            
            
            </div> 





        </HomePage>
     );
}

const HomePage = styled.main`
    
    & #container { 
       display: flex;
       flex-wrap: wrap;
       margin-left: 10%;
        & #description {
            background-color: red;
            flex-basis: 30%;
            border-width:0px;

            & h4{
                color: #da9a10;
            }

            & h1{
                font-size: 64px;
                font-weight: 600;
                font-family: Inter;
                width: 500px;
            }

            & p{
               font-family: Inter;
               color: #474747; 
               font-weight: 500;
               width: 495px;
            }

            & button{
            width: 180px;
            height: 40px;
            color: #F5F5F5;
            background-color: #C92071;
            border-radius: 5px;
            padding: 10px 40px;
            border: none;
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

        }

        & #imagesdescription{
            background-color: #44ca1f;
            flex-basis: 60%;
        }

        & #carrossel{
            background-color:yellow;
        }


    }

`;
 
