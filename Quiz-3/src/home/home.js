import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const Home = () => {
    const {state, functionHandle} = useContext(GlobalContext)
    const {dataGame, setDataGame,
           setInput} = state
    const {handlePrice, handleSize} = functionHandle

    return (
          <>
            <h1>Popular Mobile Apps</h1>
            { dataGame !== null && 
            (<div>
                {
                    dataGame.map((item, index) => {
                    return(      
                        <div key={index}>
                  <h2>{item.name}</h2>
                  <h5>Release Year : {item.releaseYear}</h5>
                  <img classname="fakeimg" style={{width: '50%', height: '300px', objectFit: 'cover'}} src={item.imageUrl} alt={item.name} />
                  <br />
                  <br />
                  <div>
                    <strong>Price: {handlePrice(item.price)}</strong><br />
                    <strong>Rating: {item.rating}</strong><br />
                    <strong>Size: {handleSize(item.size)}</strong><br />
                    <strong style={{marginRight: '10px'}}>Platform : Android &amp; IOS
                    </strong>
                    <br />
                  </div>
                  <p>
                    <strong style={{marginRight: '10px'}}>Description :</strong>
                    {item.description}
                  </p>
                  <br />
                  <hr />
                  <br />
                </div>
                    )
                })
            }
            
            
                </div>)}
        </>
      );
      };
export default Home