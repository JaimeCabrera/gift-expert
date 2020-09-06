import { renderHook } from "@testing-library/react-hooks"
import '@testing-library/jest-dom';
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Pruebas en el custom hook useFetchGifs', () => {

   test('Debe de retornar el estado incial', async() => {
      
      const { result,waitForNextUpdate } = renderHook(() =>  useFetchGifs('one punch') );
      await waitForNextUpdate();

      const { data, loading } = result.current;
      expect(data).toEqual([]);
      expect(loading).toBe(true);
   });

   test('Debe retornar un arreglo de images y el loading en false', async () => {
      // waitForNextUpdate -> para los cambios de estado de los hooks
      const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('one punch'));
      await waitForNextUpdate();

      const { data, loading } = result.current;
      expect(data.length).toBe(10);
      expect(loading).toBe(false);
   })
   

})
