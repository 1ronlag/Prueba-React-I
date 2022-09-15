import React, { useState, useEffect } from 'react'
import CharacterGrid from './CharacterGrid'
import Search from './Search';

//aqui extraje  los datos de la api de los personajes braking bad, utilicé los hook que provee react usseState y usseEffect


const MyApi = () => {
  //guarda los personajes filtrados 
  const [items, setItems] = useState([]);
  //guarda los datos de todos los personajes//
  const [characters, setCharacter] = useState([]);
  //guarda el mensaje de carga al extraer la informacion//
  const [isLoading, setIsLoading] = useState(true);
  //guardar valor de las busquedas//
  const [searchInput, setSearchInput] = useState('');


  //funcion para manejar los datos de busqueda del usuario//
   const handleChange = e => {
    const search = e.target.value.toLowerCase()
    //la cadena de busqueda debe ser mayor a 3 caracteres//
    if (search.length > 3) {
  // se comienza a iterar la info   // que los nombres de los char sea en minuscula para que coincida con lo que esta en el buscador
   //(indexOF) para la similitud de la palabra que se busca       
      const dataFilter = characters.filter(item => item.name.toLowerCase().indexOf(search) > -1);
       // seteamos los items    // sort cambia el orden     // data filter trae las coincidencias
     //datos filtrados y ordenados 
       setItems(sortName(dataFilter))
    } else {
      setItems(characters)
    }
    //se muestran los resultados de la busqueda//
    setSearchInput(e.target.value);
  }
  const sortName = (data) => {
    return data.sort(function (a, b) {
      //aca se ordena de forma ascendente
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }

// aca extraemos los datos de la api de breaking bad//

  useEffect(() => {
    const fetchItems = async () => {
      const url = ('https://www.breakingbadapi.com/api/characters');
      const result = await fetch(url);
      const data = await result.json();
      //seteamos la data
      setItems(data);
      setCharacter(data);
      setIsLoading(false);
    }
    fetchItems();
  }, []);
 
  return (

 <>
     
      <Search searchInput={searchInput} handleChange={handleChange}/>
      <CharacterGrid isLoading={isLoading} items={items} />
    </>
  )
}

export default MyApi


