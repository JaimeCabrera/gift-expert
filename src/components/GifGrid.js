import React from 'react'
import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {

   // para renombrar en la desetructuracion name:newname
   const {data:images, loading} = useFetchGifs(category);
   // const [images, setImages] = useState([]);

   // useEffect(() => {
   //    getGifs(category).then(gifs => setImages(gifs));
   // }, [category])

   // recibimos la categoria y buscamos los gifs de esa categoria
   
   return (
      <>
         <h3 className="animate__animated animate__fadeIn">{category}</h3>
         {loading && <p className="animate__animated animate__flash">Cargando...</p>}
         <div className="card-grid">
            {
               images.map(img => {
                  // return <li key={id}>{title}</li>
                  return <GifGridItem
                     key={img.id}
                     {...img}
                  />
               })
            }

         </div>
      </>
   )
}

GifGrid.propTypes = {
   category:PropTypes.string
}

export default GifGrid
