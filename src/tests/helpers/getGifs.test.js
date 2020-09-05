import { getGifs } from "../../helpers/getGifs"

describe('Pruebas en el helper getGifs -> fetch', () => {
   
   test('Debe de traer 5 elementos desde el api de gyphi', async () => {
      const gifs = await getGifs('futurama');
      expect(gifs.length).toBe(5);
   });

   test('Debe de retorna [] sin enviar la categoria al api', async () => {
      const gifs = await getGifs('');
      expect(gifs.length).toBe(0);
   });
   
})
