import {useState} from 'react'

function Forma({funkcija}){

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

        setProizvod({
            id:"",
            title:"", 
            description:"",
            category:"",
            price:"",
            rating:""
        })
    }

    return(
        
        <div className="grid grid-cols-1 grid-rows-6 gap-1 justify-items-center items-center border-2 border-gray-700 w-72 text-center text-black py-2">
            <span className="text-2xl my-2 italic text-black">Unos novog proizvoda...</span>
            <div>
            <label htmlFor="nas">Naslov</label> <br />
            <input 
            onChange={(e)=> setProizvod({...proizvod, title:e.target.value})}
            type="text" name="" id="nas" 
            placeholder="Unesite naslov..."
            value={proizvod.title} className="bg-green-400 border-2 border-gray-700 p-1"
            />
            </div>

            <div>
            <label htmlFor="opi">Opis</label><br />
            <input
            onChange={(e)=> setProizvod({...proizvod, description:e.target.value})}
            type="text" name="" id="opi" placeholder="Unesite opis..."
            value={proizvod.description} className="bg-green-400 border-2 border-gray-700 p-1"
            />
            </div>

            <div>
            <label htmlFor="kat">Kategorija</label><br />
            <input 
            onChange={(e)=> setProizvod({...proizvod, category:e.target.value})}
            type="text" name="" id="kat" 
            placeholder="Unesite kategoriju..."
            value={proizvod.category} className="bg-green-400 border-2 border-gray-700 p-1"
            />
            </div>

            <div>
            <label htmlFor="cen">Cena</label><br />
            <input 
            onChange={(e)=> setProizvod({...proizvod, price:e.target.value})} 
            type="number" name="" id="cen" 
            placeholder="Unesite cenu..." 
            value={proizvod.price} className="bg-green-400 border-2 border-gray-700 p-1"
            />
            </div>

            <div>
            <label htmlFor="oce">Ocena</label><br />
            <input 
            onChange={(e)=> setProizvod({...proizvod, rating:e.target.value})} 
            type="number" name="" id="oce" 
            placeholder="Unesite ocenu..."
            value={proizvod.rating} className="bg-green-400 border-2 border-gray-700 p-1"
            />
            </div>

            <div> 
            <button onClick={posalji} className="bg-green-400 border-2 border-gray-700 p-1 hover:rounded-xl">Unesi prozivod</button>
            </div>
        </div>
    )
}

export default Forma