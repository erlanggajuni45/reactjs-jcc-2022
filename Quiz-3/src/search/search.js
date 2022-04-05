import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const Search = () => {
    let {valueOfSearch} = useParams()
    const {state, functionHandle} = useContext(GlobalContext)
    const {dataGame, setDataGame} = state
    const {handlePrice, handleSize} = functionHandle

    useEffect(() => {
        if (valueOfSearch !== undefined){
            axios.get(`https://backendexample.sanbercloud.com/api/mobile-apps`)
        .then(() => {
        let searchData = dataGame.filter(el => {return el.name === valueOfSearch})
            setDataGame(searchData)
        })
    }
    })
    return (
          <>
            <h1 className="text-center">Popular Mobile Apps</h1>
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
export default Search