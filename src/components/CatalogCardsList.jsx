import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CatalogCard from "./CatalogCard";
import LoadingCard from "./LoadingCard";
import Error from "./Error";
function CatalogCardsList(){

    const [cards, setCards] = useState([]);
    const  [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false)

    useEffect(() =>  {
        async function fetchCards() {
            try{
                setIsLoading(true);
                const response = await axios.get('https://bc100de5414e264e.mokky.dev/cards');
                setCards(response.data);
            } catch(error){
                setIsError(true)
                console.log(error);
            } finally{
                setIsLoading(false);
            }
        }
        fetchCards();
    }, []);

    if (isError) {
        return <Error />
    }


    return(
        <section className="catalog" id="catalog">
            <div className="container">
                {isLoading ? (<LoadingCard />) : (
                    <>
                        <h1>Каталог</h1>
                        <div className="catalog__cards">
                            {cards.map((card) => (
                                <CatalogCard key={card.id} card={card}/>
                            ))}
                        </div>  
                    </>
                )}
            </div>
        </section>
    );
}



export default CatalogCardsList;