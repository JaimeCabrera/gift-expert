import React from 'react';

import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';

// fingir la lamada al archivo usefetchgiufs
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el componente <GifGrid/>', () => {

   const category = "futurama";
   test('debe cargar correctamente el componente', () => {

      useFetchGifs.mockReturnValue({
         data: [],
         loading: true
      });
      const wrapper = shallow(<GifGrid category={category} />);
      expect(wrapper).toMatchSnapshot();
   });

   test('Debde de mostrar items cuando se cargan las imagens, useFetchGifs', () => {

      const gifs = [{
         id: '1',
         title: 'titulo del gif',
         url: 'http://gifs/gif.jpg'
      }];

      useFetchGifs.mockReturnValue({
         data: gifs,
         loading: false
      });
      // hacer un mock fingir algo ->usamos el userFetchGifs el import pero no lo usamos
      const wrapper = shallow(<GifGrid category={category} />);
      // asercion que es lo que necesito evaluar
      expect(wrapper).toMatchSnapshot();
      // exists() no deberia existri
      expect(wrapper.find('p').exists()).toBe(false);
      expect(wrapper.find('GifGridItem').length).toBe(gifs.length)

   })



})
