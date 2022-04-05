import React, {useState, createContext, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const [dataGame, setDataGame] = useState([])
    const [input, setInput] = useState({
        name: "",
        category: "",
        description: "",
        releaseYear: 2007,
        size: 0,
        price: 0,
        rating: 0,
        imageUrl: "",
        androidApp: true,
        iosApp: true,
        search: ""
    });

    const [currentId, setCurrentId] = useState(null)
    const [alert, setAlert] = useState("")
    const [show, setShow] = useState(false)


    let history = useHistory()

    useEffect(() => {

         const fetchData = async () => {
             const result = await axios.get(`https://backendexample.sanbercloud.com/api/mobile-apps`)
             setDataGame(result.data.map(x => {return {id: x.id,
                                                        name: x.name,
                                                        description: x.description,
                                                        category: x.category,
                                                        size: x.size,
                                                        price: x.price,
                                                        rating: x.rating,
                                                        imageUrl: x.image_url,
                                                        releaseYear: x.release_year,
                                                        androidApp: x.is_android_app,
                                                        iosApp: x.is_ios_app}}))
         }
         fetchData()
     }, [])

     const handleSearch = (event) => {
         event.preventDefault()
         let {search} = input
         history.push(`/search/${search}`)
     }

     const handleEdit = (event) => {
         let idGame = event.target.value
         history.push(`/mobile-form/edit/${idGame}`)
         }

    const handleHapus = (event) => {
         let idGame = parseInt(event.target.value)
         axios.delete(`https://backendexample.sanbercloud.com/api/mobile-apps/${idGame}`)
         .then(() => {
             let newDataGame = dataGame.filter(el => {return el.id !== idGame})
             setDataGame(newDataGame)
             setAlert("delete")
             setShow(true)
         })
     }

     const handleChange = (event) => {
        let target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;
         setInput({ ...input, [name] : value})
     }

     const handleSubmit = (event) => {
         event.preventDefault()
         let {
         name, category, description,
         releaseYear, size, price,
         rating, imageUrl,
         androidApp, iosApp } = input

         if(name !== "") {
             if(category !== ""){
                 if(description !== ""){
                     if(releaseYear >= 2007 && releaseYear <= 2021){
                         if(size !== 0) {
                             if(price >= 0){
                                 if(rating >= 1 && rating <= 5){
                                     if(imageUrl !== ""){

                     if (currentId === null) {
                         axios.post(`https://backendexample.sanbercloud.com/api/mobile-apps`, {name: name,
                                                                                                description: description,
                                                                                                category: category,
                                                                                                size: size,
                                                                                                price: price,
                                                                                                rating: rating,
                                                                                                image_url: imageUrl,
                                                                                                release_year: releaseYear,
                                                                                                is_android_app: androidApp,
                                                                                                is_ios_app: iosApp})
                         .then(res => {
                             let data = res.data
                             setDataGame([...dataGame, {id: data.id,
                                                        name: data.name,
                                                        description: data.description,
                                                        category: data.category,
                                                        size: data.size,
                                                        price: data.price,
                                                        rating: data.rating,
                                                        imageUrl: data.image_url,
                                                        releaseYear: data.release_year,
                                                        androidApp: data.is_android_app,
                                                        iosApp: data.is_ios_app}])
                             setAlert("create")
                             setShow(true)
                             history.push('/mobile-list')
                         })
                     } else {
                          axios.put(`https://backendexample.sanbercloud.com/api/mobile-apps/${currentId}`, {name: name,
                                                                                                                description: description,
                                                                                                                category: category,
                                                                                                                size: size,
                                                                                                                price: price,
                                                                                                                rating: rating,
                                                                                                                image_url: imageUrl,
                                                                                                                release_year: releaseYear,
                                                                                                                is_android_app: androidApp,
                                                                                                                is_ios_app: iosApp})
                          .then(() => {
                              let singleGame = dataGame.find((el) => el.id === currentId);
                              singleGame.name = name;
                              singleGame.description = description;
                              singleGame.category = category;
                              singleGame.size = size;
                              singleGame.price = price;
                              singleGame.rating = rating;
                              singleGame.image_url = imageUrl;
                              singleGame.release_year = releaseYear;
                              singleGame.is_android_app = androidApp;
                              singleGame.is_ios_app = iosApp;
                              setDataGame([...dataGame]);
                              setAlert("update");
                              setShow(true);
                              history.push('/mobile-list');
                          })
                     }

                     setInput({
                        name: "",
                        category: "",
                        description: "",
                        releaseYear: 2007,
                        size: 0,
                        price: 0,
                        rating: 0,
                        imageUrl: "",
                        androidApp: true,
                        iosApp: true
                     })
                     setCurrentId(null)
                 }
             }
         }
        }
    }
}
}
}
}

    const handleSize = (params) => {
        if (params >= 1000) {
            return `${params/1000} GB`
        } else {
            return `${params} MB`
        }
        }
    const handlePrice = (params) => {
        if (params === 0) {
            return "Free"
        } else {
            return `Rp. ${params}`
        }
    }
    const handlePlatform = (android, ios) => {
        let apk =""
        let apple =""

        if(android) {
            apk ="Android"
        } if (ios) {
            apple = "iOS"
        }

        return `${apk}
                ${apple}`

    }

        const state = {
            dataGame, setDataGame,
            input, setInput,
            currentId, setCurrentId,
            alert, setAlert,
            show, setShow
        }

        const functionHandle = {
            handleChange,
            handleSubmit,
            handleEdit,
            handleHapus,
            handleSize,
            handlePrice,
            handlePlatform,
            handleSearch
        }

    return(
        <GlobalContext.Provider
            value={{
                state,
                functionHandle
            }}
        >
            {props.children}
            </GlobalContext.Provider>
    )
}
