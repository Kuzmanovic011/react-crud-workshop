import { useState, useEffect, isValidElement } from 'react'
import axios from "axios"
import './App.css'
import Tabela from './Tabela'
import Kartica from './Kartica'
import Forma from './Dodavanje'
import Pretraga from './Pretraga'
import Izmena from './Izmena'
import Filter from './Filter'

function App() {
  const [nizPodataka, setnizPodataka] = useState([]);
  const [prikazPodaci, setPrikazPodaci] = useState([]);

  useEffect(()=>{
    axios.get("https://dummyjson.com/products")
    .then((res) => {
      setnizPodataka(res.data.products);
      setPrikazPodaci(res.data.products);
    })
    .catch((err)=>{console.log(err);});
  }, []);

  const sortiraniPodaci = [...prikazPodaci].sort(
    (podatak, podatak1) =>
      podatak.title.localeCompare(podatak1.title)
  );

  const najveciRating = [...prikazPodaci].sort((podatak, podatak1) => podatak.rating > podatak1.rating ? -1 : 1 ).slice(0, 3);

  return (
    <>
    <span className="text-3xl my-2 italic text-black">Najbolje ocenjeni proizvodi...</span>
      <div className="grid grid-cols-3 gap-6 justify-items-center">
        {najveciRating[0]&&<Kartica props={najveciRating[0]}/>}
        {najveciRating[1]&&<Kartica props={najveciRating[1]}/>}
        {najveciRating[2]&&<Kartica props={najveciRating[2]}/>}
      </div>
      <div className="grid grid-rows-1 grid-cols-2 justify-items-center my-2 items-center">
      <Pretraga funkcija={pretraga}/>
      <Filter props={prikazPodaci} funkcija={filtriranje}/>
      </div>
      <Tabela props={sortiraniPodaci} funkcija={obrisi}/>
      <div className="grid grid-cols-2 justify-items-center my-2 items-center">
        <Forma funkcija={dodaj}/>
        <Izmena props={nizPodataka} funkcija={izmeni}/>
      </div>
    </>
  )

  function filtriranje(podatak){
    
    const kat = nizPodataka.map((el) => el.category);
    const kategorije =  new Set([...kat]);
    const konacno = [...kategorije];


    podatak = {
      ...podatak,
      minCena: Number(podatak.minCena), 
      maxCena: Number(podatak.maxCena) ==0.0 ? 50000.0 : Number(podatak.maxCena), 
      minOcena: Number(podatak.minOcena),
      maxOcena: Number(podatak.maxOcena)===0.0 ? 5.0 : Number(podatak.maxOcena),
      kategorija: podatak.kategorija.length==0 ? konacno.join(" ") : podatak.kategorija
    }

    if(podatak.minOcena > podatak.maxOcena || podatak.maxOcena < podatak.minOcena || podatak.minCena > podatak.maxCena
      || podatak.maxCena < podatak.minCena)
      alert("Pogresan unos!")
    else{
      const filtriraniNiz = nizPodataka.filter((el) => {
        if((el.rating <=podatak.maxOcena && el.rating >= podatak.minOcena) && el.title.includes(podatak.naziv) 
          && podatak.kategorija.includes(el.category) && (el.price <= podatak.maxCena && el.price >= podatak.minCena
         ))
          return true;
          
      });
      setPrikazPodaci(filtriraniNiz);
      }
  }

  function pretraga(podatak){
    const nizPretraga = nizPodataka.filter((el) => el.title.toLowerCase().includes(podatak.toLowerCase()))
    nizPretraga.length < 1 ? alert("nema takvog!") : setnizPodataka(nizPretraga);
  }

  function izmeni(podatak){

    const stariPodatak = nizPodataka[podatak.id - 1]

    podatak = {
      ...podatak,
      id: Number(podatak.id), 
      title: podatak.title.length == 0 ? stariPodatak.title : podatak.title,
      description: podatak.description.length == 0 ? stariPodatak.description : podatak.description,
      category: podatak.category.length == 0 ? stariPodatak.category : podatak.category,
      price: Number(podatak.price) <=0 || Number(podatak.price)>5 ? stariPodatak.price : Number(podatak.price),
      rating: Number(podatak.rating) <=0 || Number(podatak.rating)>5 ? stariPodatak.rating : Number(podatak.rating),
    }

    const izmenjeniPodaci = nizPodataka.filter((el) => el.id != podatak.id);
    setnizPodataka([...izmenjeniPodaci, podatak]);
    setPrikazPodaci([...izmenjeniPodaci, podatak]);
    
  }


  function obrisi(idE){
    const noviNiz = nizPodataka.filter((p) => p.id !== idE)
    setnizPodataka(noviNiz);
    setPrikazPodaci(noviNiz);
  }



  function dodaj(dProizvod){
    const maxID= Math.max(...nizPodataka.map((p)=>p.id))

    const noviProizvod = {
      ...dProizvod,
      id: maxID+1, 
      price: isNaN(dProizvod.price) ? 0 : Number(dProizvod.price),
      rating: isNaN(dProizvod.rating) ? -1 : Number(dProizvod.rating) 
    }
    if (noviProizvod.title==="" || noviProizvod.description==="" || noviProizvod.price<=0 || noviProizvod.rating <=0 || noviProizvod.rating>5 || noviProizvod==="")
      alert("GRESKA")
    else {
      setnizPodataka((prethodni) => [...prethodni, noviProizvod])
      setPrikazPodaci((prethodni) => [...prethodni, noviProizvod])
    }
  }
}

export default App