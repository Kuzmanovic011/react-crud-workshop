import { useState } from "react"
import "./App.css"

function Izmena({props, funkcija}){


    const [proizvod, setProizvod] = useState({
        id:"", 
        title:"", 
        description:"", 
        category:"", 
        price:"", 
        rating:""
    });

    function posalji(){

        funkcija(proizvod)
        const prazanProizvod = {
            id:"", 
            title:"", 
            description:"", 
            category:"", 
            price:"", 
            rating:""
        }
        setPrimer(prazanProizvod)
    }

    return (
        <div className="grid grid-cols-1 grid-rows-6 gap-1 justify-items-center items-center border-2 border-gray-700 w-72 text-center text-black py-2">
            <span className="text-2xl my-2 italic text-black">Izmena proizvoda...</span>
            <div>
                <label htmlFor="i">Proizvod</label> <br />
                <select id="i" className="bg-green-400 border-2 border-gray-500 p-1"
                onChange={(e)=>setProizvod({...proizvod, id:e.target.value}) } value={proizvod.id}
                >
                    <option value="">Izaberite proizvod</option>
                {props.map(((el, index)=> <option key={index} className="bg-green-400" value={el.id}>{el.id}</option>))}
                </select>
            </div>
            <div>
                <label htmlFor="san">Naslov</label><br />
                <input type="text" id="san" className="bg-green-400 border-2 border-gray-700 p-1" placeholder="Unesite naslov..."
                onChange={(e)=> setProizvod({...proizvod, title:e.target.value})} value={proizvod.title}
                />
            </div>
            <div>
                <label htmlFor="ipo">Opis</label><br />
                <input type="text" id="ipo" className="bg-green-400 border-2 border-gray-700 p-1" placeholder="Unesite opis..."
                onChange={(e)=> setProizvod({...proizvod, description:e.target.value})} value={proizvod.description}
                />
            </div>
            <div>
                <label htmlFor="taj">Kategorija</label><br />
                <input type="text" id="taj" className="bg-green-400 border-2 border-gray-700 p-1" placeholder="Unesite kategoriju..."
                onChange={(e)=> setProizvod({...proizvod, category:e.target.value})} value={proizvod.category}
                />
            </div>
            <div>
                <label htmlFor="nec">Cena</label><br />
                <input type="number" id="nec" className="bg-green-400 border-2 border-gray-700 p-1" placeholder="Unesite cenu..."
                onChange={(e)=> setProizvod({...proizvod, price:e.target.value})} value={proizvod.price}
                />
            </div>
            <div>
                <label htmlFor="eco">Ocena</label><br />
                <input type="number" id="eco" className="bg-green-400 border-2 border-gray-700 p-1" placeholder="Unesite ocenu..."
                onChange={(e)=> setProizvod({...proizvod, rating:e.target.value})} value={proizvod.rating}
                />
            </div>
            <button onClick={(e) => posalji()} className="bg-green-400 border-2 border-gray-700 p-1 hover:rounded-xl">Izmena podatka</button>
        </div>
    )
}

export default Izmena;