import { useState } from "react";
import './App.css'

function Pretraga({funkcija}){

    const [podatak, setPodatak] = useState("");

    return (
        <div className="grid grid-rows-3 gap-4 justify-items-center items-center my-2 bg-green-400 border-2 border-gray-700 p-3">
            <div>
                <span className="text-3xl my-2 italic text-black">Pretraga po nazivu...</span>
            </div>
            <div> 
                <label htmlFor="nzv">Naziv proizvoda</label>
                <input type="text" id='nzv' value={podatak} onChange={(e) => setPodatak(e.target.value)} 
                className="w-full max-w-md border-2 border-gray-700 bg-green-400 p-1" placeholder="Unesite naziv..."/>
            </div>
            <div>
                <button onClick={()=>funkcija(podatak)} className="bg-green-400 border-2 border-gray-700 p-1 hover:rounded-xl">Pretraga</button>
            </div>
        </div>
    )
}

export default Pretraga;