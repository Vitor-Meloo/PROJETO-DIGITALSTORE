import styled from "styled-components";
import { Link } from "react-router-dom";

const BodyComponent = styled.body`
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;

    & div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        & h1{
            font-size: 30px;
            font-weight: 500;
            color: red;
        }

        & p{
            font-size: 20px;
            font-weight: 500;
        }

        & button{
            background-color: #C92071;
            width: 120px;
            height: 40px;
            border-radius: 10px;
            color: white;
        }

        & button:hover{
            cursor: pointer;
            background-color: #8d0949;
        }


    }   

`
const NotFound = () =>{
    return(
        <BodyComponent>
            <div>
                <h1>Erro 404</h1>
                <p>A página que esta procurando é inexistente!</p>
                <Link id= "link" to={"/"}><button>voltar</button></Link>
            </div>
        </BodyComponent>
    )
}

export default NotFound;