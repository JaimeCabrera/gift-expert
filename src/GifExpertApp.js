import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({defaultCategory=[]}) => {

   const [categories, setCategories] = useState(defaultCategory);

   // const handleAdd = () => {
   //    // para añadir nuevos elementos al array usamos el op spreed [...ArrayAnterior,nuevo elemento]
   //    // setCategories([...categories, 'futurama']);
   //    // otra forma utilizando la funcion callback
   //    setCategories(cats =>[...cats,'Futurama']);

   // }
   return (
      <>
         <h2>Gif Expert App</h2>
         <AddCategory setCategories={setCategories} />
         <hr />
         {/* <button onClick={handleAdd}>Agregar</button> */}
         <ol>
            {
               categories.map(category => (
                  <GifGrid
                     key={category}
                     category={category}
                  />
               ))
            }
         </ol>
      </>
   )
}

