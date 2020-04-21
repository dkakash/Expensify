import React from 'react';
import {shallow} from 'enzyme'
import Login from '../../../components/Login'

test('should correctly render Login page',()=>{
    const wrapper=shallow(<Login />)
    expect(wrapper).toMatchSnapshot()
})