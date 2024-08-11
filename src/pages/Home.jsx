import { Link } from "react-router-dom";
import styled from "styled-components";
import whitesneakers from "../assets/images/whitesneakers.png";
import ornament from "../assets/images/ornament.png";
import featured1 from "../assets/images/colection1.png"
import featured2 from "../assets/images/colection2.png"
import featured3 from "../assets/images/colection3.png"
import featuredcircle from "../assets/images/featuredscircle.png"
import tenisV8 from "../assets/images/K-SwissV8-Masculino.png"
import jordancolect from "../assets/images/JordanColect.png"



export const Home = () => {
    return ( 
        <HomePage>

           <div id="primarycontainer">
                  
                <div id="description">

                    <h4>Melhores ofertas personalizadas</h4>

                    <h1>Queima de stoque Nike 🔥</h1> 

                    <p>
                        Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                    </p> 

                    <Link><button>Ver Ofertas</button></Link>

              
                </div>  

                <div id="ShoesOrnamentImages">
                    <img id="WhiteSneakers" src={whitesneakers}/>  
                    <img id="ornament" src={ornament} />
                </div>

            </div> 

            <div id="CarouselImages">
                    <div id="carouselIndicators">
                        <span className="indicator"></span>
                        <span className="indicator"></span>
                        <span className="indicator"></span>
                        <span className="indicator"></span>
                    </div>
            </div>

            <h1 id="CollectionsTitle">Coleções em Destaque</h1>

            <div id="FeaturedCollections">
                <ul id="FeaturedUL">
                    <li class="FeaturedLI"><img src={featured1} alt="" /></li>
                    <li class="FeaturedLI"><img src={featured2} alt="" /></li>
                    <li class="FeaturedLI"><img src={featured3} alt="" /></li>                              
                </ul>                 
            </div>

            <div id="ContainerFeatureds">
                <h1>Coleções em destaque</h1>
                <img src={featuredcircle} alt=""/>
            </div>

            <div id="HeaderTrendingProducts">
                <h1>Produtos em Alta</h1>
                <h2> Ver todos &rarr;</h2>
            </div>

            <div id="ContainerTrendingProd">

                <div id="TrendingProducts">
                    <div className="product">
                        <figure>
                            <img src={tenisV8}/>  
                        </figure>
                        
                        <div id="ProductDesc">
                            <h6 className="ProductType">Tênis</h6>
                            <h4 className="NameProduct">K-SwissV8 - Masculino</h4>
                            <p className="preco">R$ 199,90</p>
                        </div>  
                    </div>  

                    <div className="product">
                        <figure>
                            <img src={tenisV8}/>  
                        </figure>
                        
                        <div id="ProductDesc">
                            <h6 className="ProductType">Tênis</h6>
                            <h4 className="NameProduct">K-SwissV8 - Masculino</h4>
                            <p className="preco">R$ 199,90</p>
                        </div>  
                    </div>    

                    <div className="product">
                        <figure>
                            <img src={tenisV8}/>  
                        </figure>
                        
                        <div id="ProductDesc">
                            <h6 className="ProductType">Tênis</h6>
                            <h4 className="NameProduct">K-SwissV8 - Masculino</h4>
                            <p className="preco">R$ 199,90</p>
                        </div>  
                    </div>    

                    <div className="product">
                        <figure>
                            <img src={tenisV8}/>  
                        </figure>
                        
                        <div id="ProductDesc">
                            <h6 className="ProductType">Tênis</h6>
                            <h4 className="NameProduct">K-SwissV8 - Masculino</h4>
                            <p className="preco">R$ 199,90</p>
                        </div>  
                    </div> 

                    <div className="product">
                        <figure>
                            <img src={tenisV8}/>  
                        </figure>
                        
                        <div id="ProductDesc">
                            <h6 className="ProductType">Tênis</h6>
                            <h4 className="NameProduct">K-SwissV8 - Masculino</h4>
                            <p className="preco">R$ 199,90</p>
                        </div>  
                    </div>  

                    <div className="product">
                        <figure>
                            <img src={tenisV8}/>  
                        </figure>
                        
                        <div id="ProductDesc">
                            <h6 className="ProductType">Tênis</h6>
                            <h4 className="NameProduct">K-SwissV8 - Masculino</h4>
                            <p className="preco">R$ 199,90</p>
                        </div>  
                    </div>  

                    <div className="product">
                        <figure>
                            <img src={tenisV8}/>  
                        </figure>
                        
                        <div id="ProductDesc">
                            <h6 className="ProductType">Tênis</h6>
                            <h4 className="NameProduct">K-SwissV8 - Masculino</h4>
                            <p className="preco">R$ 199,90</p>
                        </div>  
                    </div>  

                    <div className="product">
                        <figure>
                            <img src={tenisV8}/>  
                        </figure>
                        
                        <div id="ProductDesc">
                            <h6 className="ProductType">Tênis</h6>
                            <h4 className="NameProduct">K-SwissV8 - Masculino</h4>
                            <p className="preco">R$ 199,90</p>
                        </div>  
                    </div>  
                    
                </div>

            </div>

            <div id="SpecialOffer">

                <div id="OfferImage">
                    <img src={jordancolect}/>
                </div>

                <div id="ContainerOffer">

                    <h4>Oferta Especial</h4>

                    <h1>Air Jordan edição de colecionador</h1>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip
                    </p>

                    <Link><button>Ver Ofertas</button></Link>

                </div>

            </div>
            

        </HomePage>
     );
}

const HomePage = styled.main`
    
    & #primarycontainer {
        display: flex;
        padding-left:160px;
        padding-top: 140px;
        background-color: #F5F5F5;
        position:relative;

        & #description {
            margin-top:-50px;
            display: flex;
            flex-direction:column;
            margin-bottom:250px;

            & h4{
                color: #da9a10;
                margin-bottom: 15px;
            }

            & h1{
                font-size: 64px;
                font-weight: 800;
                font-family: Inter;
                width: 500px;
                line-height: 70px;
                margin-bottom:20px;
            }

            & p{
                font-family: Inter;
                color: #474747; 
                font-weight: 500;
                width: 495px;
                margin-bottom:30px;
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
            display: flex;
            flex-direction:row;
            margin-top:-50px;
            margin-bottom: 0px;
            position:relative;
    
            & #WhiteSneakers{
                margin-top: -100px;
                margin-left: -100px;
                clip-path: inset(14.5%)
            }

            & #ornament{
               height: 130px;
               position: relative;
               left: -120px;
               width: 130px;
               height: 130px;  
               margin-bottom: -30px;
            }

        }

    }

    & #CarouselImages{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position:absolute;
            margin-top: -60px;
            left:48%;
            

            & #carousel{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 80%; 
                height: 20px; 
                overflow: hidden;
                background-color: #f0f0f0; 
                border-radius: 10px;
                position: relative;
            }

                

            & #carouselIndicators{
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 0px;
            }    

                .indicator{
                    width: 12px;
                    height: 12px;
                    background-color: #ccc;
                    border-radius: 50%;
                    margin: 0 5px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }

                .indicator:hover {
                    background-color: #ec187f;
                }

    }

    &  #CollectionsTitle{
        font-family:Inter;
        padding-left:150px;
        margin-bottom: 10px;
        font-size: 24px;
        color:#474747
    }

    & #FeaturedCollections{
        width: 100%;
        overflow:hidden;
        padding-left:150px;
        justify-content:space-between;

        & #FeaturedUL{
            display:flex;
            padding: 0;
            margin: 0;
            list-style: none;

        }

            .FeaturedLI{
                margin-right:15px;
                width: 400px; 
                cursor:pointer;
            }
    }

    & #ContainerFeatureds{
       display: flex; 
       flex-direction:column;
       align-items: center;
       justify-content: center;
       height: 50vh;
       text-align:center;
       font-size: 24px;
       font-family: Inter;
    }

    & #HeaderTrendingProducts{
            display:flex;
            justify-content: space-between;
            margin-left:150px;
            margin-right: 150px;
        }

        #HeaderTrendingProducts h1 {
        color: #474747;
        font-family: Inter;
        font-size: 24px;
        }
        
        #HeaderTrendingProducts h2{
            color: #C92071;
            font-size: 18px;
            cursor: pointer;
        }


    & #ContainerTrendingProd{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        
        & #TrendingProducts{
            width:100%;
            height: 700px;
            display: flex;
            flex-wrap:wrap;
            padding-left: 150px;
            padding-right: 150px;
            padding-top: 20px;
            justify-content:center;

            & .product{
                background-color:#FFFFFF;
                display:flex;
                flex-direction:column;
                margin-right:30px;
                height:300px;
                width: 250px;
                cursor: pointer;
                   
                #ProductDesc{
                  background-color: #F5F5F5;
                  margin-top: 56px; 
                  
                  & h6.ProductType{
                    font-size: 12px;
                    color: #9e9a9a;
                    font-family: Inter;
                  }

                  .NameProduct{
                    font-family: Inter;
                    font-size: 18px; 
                  }

                  .preco{
                    font-family: Inter;
                    font-size: 18px;
                  }
                }

                figure{
                    width:220px;
                    height: 135px;
                    margin-top: 40px;
                    img{
                        transform: rotate(-30deg);
                    }
                }

            }

        }
            
    }

    & #SpecialOffer{
        display:flex;
        align-items:center;
        gap:80px;
        background-color:#FFFFFF;
        height:500px;
        margin-top:80px;

        & #OfferImage{
            width: 500px;
            height: 400px;
            border-radius:50%;
            background: linear-gradient(to bottom, #b09ee140, #FFFFFF00); 
            margin-left:130px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            position:relative;
            overflow: visible;

                img{
                    position:absolute;
                    width: 570px;
                    height: 330px;
                    object-position: cover;
                    top:50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
               

        }

        & #ContainerOffer{
            width:550px;
            display:flex;
            flex-direction:column;
            gap:20px;

            & h4{
                color:#C92071
            }

            & h1{
                font-size:48px;
                font-family:Inter;
                line-height:50px;
            }

            & p{
                font-size:16px;
                font-family:Inter;  
                margin-top:-5px; 
            }

            & button{
                width: 200px;
                height: 40px;
                color: #F5F5F5;
                background-color: #C92071;
                border-radius: 5px;
                padding: 10px 40px;
                border: none;
                border-radius: 8px;
                font-size: 14px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: Inter;
                transition: 200ms;
            }
        }

    }

`;
 
