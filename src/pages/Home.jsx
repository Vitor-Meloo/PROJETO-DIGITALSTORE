import { Link } from "react-router-dom";
import styled from "styled-components";
import whitesneakers from "../assets/images/whitesneakers.png";




export const Home = () => {
    return ( 
        <HomePage>

           <div id="primarycontainer">
                
                <div id="description">

                    <h4>Melhores ofertas personalizadas</h4>

                    <h1>Queima de Estoque Nike</h1> 

                    <p>
                        Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                    </p> 

                    <Link><button>Ver Ofertas</button></Link>

              
                </div>  

                <div id="ShoesOrnamentImages">
                    <img id="WhiteSneakers" src={whitesneakers}/>   
                </div>
            
            </div> 


        </HomePage>
     );
}

const HomePage = styled.main`
    
    & #primarycontainer {
        display: flex;
        padding-left:150px;
        padding-top: 140px;

        & #description {
            
            & h4{
                color: #da9a10;
            }

            & h1{
                font-size: 64px;
                font-weight: 800;
                font-family: Inter;
                width: 500px;
                line-height: 70px;
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

        & #ShoesOrnamentImages{



        }


    }















`;
 
