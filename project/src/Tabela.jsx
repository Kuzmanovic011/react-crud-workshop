import './App.css';

function Tabela ({props, funkcija}){

  return(
      <table className="border-collapse border border-gray-400 text-center text-black">
<caption className="text-3xl my-2 italic">
  Tabela proizvoda
</caption>
<thead>
  <tr className="bg-green-400">
    <th className="border-2 border-gray-700 p-2">ID</th>
    <th className="border-2 border-gray-700 p-2">TITLE</th>
    <th className="border-2 border-gray-700 p-2">DESCRIPTION</th>
    <th className="border-2 border-gray-700 p-2">CATEGORY</th>
    <th className="border-2 border-gray-700 p-2">PRICE</th>
    <th className="border-2 border-gray-700 p-2">RATING</th>
    <th className="border-2 border-gray-700 p-2">OBRISI</th>
  </tr>
</thead>
<tbody>
    {props.map((podatak)=> {
      return <tr key={podatak.id} className="border-2 border-gray-700"> 
          <th className="border-2 border-gray-700 px-4 py-2">{podatak.id}</th>
          <th className="border-2 border-gray-700 px-4 py-2">{podatak.title}</th>
          <th className="border-2 border-gray-700 px-4 py-2">{podatak.description}</th>
          <th className="border-2 border-gray-700 px-4 py-2">{podatak.category}</th>
          <th className="border-2 border-gray-700 px-4 py-2">{podatak.price}</th>
          <th className="border-2 border-gray-700 px-4 py-2">{podatak.rating}</th>
          <th><button onClick={() => funkcija(podatak.id)} className="bg-green-400 border-2 border-gray-700 underline p-2 m-2 hover:rounded-xl">OBRISI</button></th>
          </tr>
    })}
</tbody>
</table>
)
}

export default Tabela;