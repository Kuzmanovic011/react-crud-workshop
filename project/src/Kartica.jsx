import './App.css';

function Kartica({props}){
    return (
        <div className="w-72 rounded overflow-hidden shadow-lg border-2 border-gray-700 bg-green-400 grid content-center">
            <img src={props.images} className="w-full h-48 object-contain my-2" alt={`proizvod_${props.title}_slika`}/> 
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{props.title}</div>
            </div>
            <div className="grid grid-cols-2 px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">Cena: {props.price}</span>
              <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">Ocena: {props.rating}</span>
            </div>
        </div>
    )
}

export default Kartica;