import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import StringForm from '../components/Form';
import { addString } from '../redux_middleware/actions/index';
import Reducers from '../redux_middleware/reducers/index';

describe('>>>FORM --- Snapshot', () => {
  it('+++capturing Snapshot of Form', () => {
    const renderedValue = renderer.create(<StringForm stringChain="hello world!!" />).toJSON()
    expect(renderedValue).toMatchSnapshot();
  });

});

//*******************************************************************************************************

describe('>>>FORM --- Shallow Render REACT COMPONENTS', () => {
  let wrapper
  const stringChain = "hello world!!"

  beforeEach(() => {
    wrapper = shallow(<StringForm stringChain={stringChain} />)

  });

  it('+++ contains input', () => {
    expect(wrapper.find('input').at(0)
      .equals(<input type="text" placeholder="your string chain here!."></input>))
      .toBe(true)
  });

  it('+++ contains button with id="btnSend"', () => {
    expect(wrapper.find('button#btnSend').type()).toEqual('button')
  });

});

//*******************************************************************************************************

// describe('>>>FORM --- REACT-REDUX (Shallow + passing the {store} directly)', () => {
//   const initialState = { stringChain: "hello world!!" }
//   const mockStore = configureStore()
//   let store, container

//   beforeEach(() => {
//     store = mockStore(initialState)
//     container = shallow(<StringForm store={store} />)
//   })

//   it('+++ render the connected(SMART) component', () => {
//     expect(container.length).toEqual(1)
//   });

//   it('+++ check Prop matches with initialState', () => {
//     expect(container.prop('stringChain')).toEqual(initialState.stringChain)
//   });

// });

// //*******************************************************************************************************

// describe('>>>FORM --- REACT-REDUX (Mount + wrapping in <Provider>)', () => {
//   const initialState = { stringChain: "hello world!!" }
//   const mockStore = configureStore()
//   let store, wrapper

//   beforeEach(() => {
//     store = mockStore(initialState)
//     wrapper = mount(<Provider store={store}><StringForm /></Provider>)
//   });

//   it('+++ render the connected(SMART) component', () => {
//     expect(wrapper.find(StringForm).length).toEqual(1)
//   });

//   it('+++ check Prop matches with initialState', () => {
//     expect(wrapper.find(Form).prop('stringChain')).toEqual(initialState.stringChain)
//   });

//   it('+++ check action on dispatching ', () => {
//     let action
//     store.dispatch(addString("hello world!!"))
//     action = store.getActions()
//     expect(action[0].type).toBe("ADD_STRING")
//   });

// });
// //*******************************************************************************************************

// describe('>>>FORM --- REACT-REDUX (actual Store + reducers) more of Integration Testing', () => {
//   const initialState = { stringChain: "hello world!!" }
//   let store, wrapper

//   beforeEach(() => {
//     store = createStore(Reducers)
//     wrapper = mount(<Provider store={store}><StringForm /></Provider>)
//   });

//   it('+++ check Prop matches with initialState', () => {
//     store.dispatch(addString("hello world!!"))
//     expect(wrapper.find(StringForm).prop('stringChain')).toBe("hello world!!")
//   });

// });
//*******************************************************************************************************