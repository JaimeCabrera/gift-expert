
export const getGifs = async (category) => {
   // encode uri para eliminar espcios en las peticiones
   const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=5&api_key=lTed0SUVO3RxqNimew1FJoDwcw647EpL`;
   const res = await fetch(url);
   const { data } = await res.json();
   const gifs = data.map(img => {
      return {
         id: img.id,
         title: img.title,
         url: img.images.downsized_medium.url
      }
   });
   return gifs;
}