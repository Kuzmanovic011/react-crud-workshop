import {useState} from 'react'
import './App.css'

function Filter({funkcija, props}){

    const [podatak, setPodatak] = useState({
        minCena: 0.0,
        maxCena: 0.0, 
        naziv: "",
        kategorija: "",
        minOcena: 0.0,
        maxOcena: 0.0
    });

    function posalji(){
        funkcija(podatak);
        setPodatak({
        minCena: 0.0,
        maxCena: 0.0,
        naziv: "",
        kategorija: "",
        minOcena: 0.0,
        maxOcena: 0.0
    })
    }

    const kat = props.map((el) => el.category);
    const kategorije =  new Set([...kat]);
    const konacno = [...kategorije];
   
        
    return( 
            <div className="grid grid-cols-1 grid-rows-3 gap-1 justify-items-center items-center border-2 border-gray-700 w-72 text-center text-black py-2">
                <span className="text-2xl my-2 italic text-black">Filtriranje proizvoda...</span>
                <div>
                    <span>Opseg cene</span><br />
                    <label htmlFor="minC">Min:{podatak.minCena}</label><br />
                    <input type="range" id="minC"  
                    min="0.0" max="5000.0" step="0.1"
                    onChange={(e)=>setPodatak({...podatak, minCena:e.target.value})}
                    value={podatak.minCena} className="bg-green-400 border-2 border-gray-700 p-1"
                    /> <br />
                    <label htmlFor="maxC">Max:{podatak.maxCena}</label><br />
                    <input type="range" id="maxC"  
                    min="0.0" max="5000.0" step="0.1"
                    onChange={(e)=>setPodatak({...podatak, maxCena:e.target.value})}
                    value={podatak.maxCena} className="bg-green-400 border-2 border-gray-700 p-1"
                    /> <br />
                </div>
                <div>
                    <label htmlFor="pro">Naziv proizvoda</label><br />
                    <input type="text" id="pro" placeholder='Unesite naziv...' 
                    value={podatak.naziv} 
                    onChange={(e)=>setPodatak({...podatak, naziv:e.target.value})} className="bg-green-400 border-2 border-gray-700 p-1"/>
                </div>
                <div>
                    <label htmlFor="kat">Naziv kategorije</label><br />
                    <select id="kat" className="bg-green-400 border-2 border-gray-700 p-1"
                    onChange={(e) => setPodatak({...podatak, kategorija: e.target.value})} value={podatak.kategorija}>
                        <option value="">Izaberite kategoriju</option>
                        {konacno.map((el, index) => <option key={index} className="bg-green-400" 
                         value={el} >{el}</option> )}
                    </select>
                </div>
                <div>
                    <span>Opseg ocene</span><br />
                    <label htmlFor="minR">Min:{podatak.minOcena}</label><br />
                    <input type="range" id="minR"  
                    min="0.0" max="5.0" step="0.1"
                    onChange={(e)=>setPodatak({...podatak, minOcena:e.target.value})}
                    value={podatak.minOcena} className="bg-green-400 border-2 border-gray-700 p-1"
                    /> <br />
                    <label htmlFor="maxR">Max:{podatak.maxOcena}</label><br />
                    <input type="range" id="maxR"  
                    min="0.0" max="5.0" step="0.1"
                    onChange={(e)=>setPodatak({...podatak, maxOcena:e.target.value})}
                    value={podatak.maxOcena} className="bg-green-400 border-2 border-gray-700 p-1"
                    /> <br />
                </div>
                    <button onClick={(e) => { console.log("Ovo nije iz main: ", podatak);posalji();}} 
                    className="bg-green-400 border-2 border-gray-700 p-1 hover:rounded-xl">Filtriraj</button>
            </div>
)
}

export default Filter;