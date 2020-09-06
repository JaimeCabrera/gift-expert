import React from 'react'

import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import {GifGridItem} from '../../components/GifGridItem';

describe('Pruebas en el componente GifGridItem.js', () => {

   const title = "esto es un titulo";
   const url = "https://imagenes/img.jpg";
   const wrapper = shallow(<GifGridItem title={title} url={url} />);

   test('debe renderizar el componente <GifGridItem/> correctament', () => {
      expect(wrapper).toMatchSnapshot();
   });

   test('Debe de mostrar un parrafo {p} con el titulo ', () => {
      const p = wrapper.find('p');
      expect(p.text().trim()).toBe(title);
   });

   test('debe de mostrar una imagen {img} con el url y title del props ', () => {
      const img = wrapper.find('img');
      // para ver los atributos seria img.html() pero si uso img.props se ve un obj de propiedades
      // si solo se quirer evaluar una propiedad seria img.prop('src)
      expect(img.props().src).toBe(url);
      expect(img.props().alt).toBe(title);
   });

   test('Debe el div principal debe de tener la clase animate__fadeIn ', () => {
      const div = wrapper.find('div');
      const clasName = div.props().className;
      expect(clasName.includes('animate__fadeIn')).toBe(true);
   })
   
   
   
})