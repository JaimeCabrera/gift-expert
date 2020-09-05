import React from 'react'
import { shallow } from "enzyme";
import { default as AddCategory } from "../../components/AddCategory";

describe('Pruebas en el componente <AddCategory/>', () => {
   
   const setCategories = jest.fn();//para referenciar una funcion con jest
   let wrapper = shallow(<AddCategory setCategories={setCategories}/>);
   
   // ciclo de vida de la funciones
   beforeEach(() => {
      jest.clearAllMocks();
      wrapper = shallow(<AddCategory setCategories={setCategories} />);

   })
   
   test('debe mostrar correctamente el componente', () => {
      expect(wrapper).toMatchSnapshot();
   });

   test('Debe de cambiar la caja de texto', () => {
      const input = wrapper.find('input');
      const value = "hola mundo";
      input.simulate('change',{target:{value}});
   });

   test('no debe de postear la informacion con submit', () => {
      wrapper.find('form').simulate('submit', { preventDefault() { } });
      expect(setCategories).not.toBeCalled();
   });

   test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
      const value = "futurama";
      // 1. simular el inputChange
      wrapper.find('input').simulate('change', { target: { value } });
      // 2. simular el submit del formulario
      wrapper.find('form').simulate('submit', { preventDefault() { } });
      // 3. setCategories 1 vez
      expect(setCategories).toHaveBeenCalled();
      
      // expect(setCategories).toHaveBeenCalledTimes(2);

      // 4. el value del input debe estar vacio
      expect(wrapper.find('input').prop('value')).toBe('');

   })
   
   
   
   
   

})
