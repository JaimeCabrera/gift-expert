import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas en el componente <GifExpertApp />', () => {
   

   test('Debe renderizar correctamente el componente', () => {
      const wrapper = shallow(<GifExpertApp />);
      expect(wrapper).toMatchSnapshot();
   });

   test('debe demostrar una lista de categorias o <GifGrids/>', () => {
      const categories = ['one punch', 'dragon bz'];
      const wrapper = shallow(<GifExpertApp defaultCategory={categories}/>);
      // expect(wrapper.find('GifGrid').length).toBe(categories.length);
   })
   
   

})
