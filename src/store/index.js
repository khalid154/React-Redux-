import { createStore } from 'redux';
import { combineReducers } from 'redux';
import reducer2 from './index1';

const initialState={
	name:'',
	list:[]
}

const reducer1 = (state=initialState,action)=>{
	switch(action.type){
		case "CHANGE":
		return Object.assign({}, state, {name:action.payload})

		case "ADDNAME":
		if(state.name!==''){
		  return {
		  	list: state.list.concat(state.name),
		  	name:''
		  }
		  
		}
		 
		 case "DELETE":
		 console.log(action.payload.key)
		 var list = state.list;
		 list.splice(action.payload.key,1);
		return { list,name:''}

		default:
		return state;
	}
}
//const reducer = combineReducers({reducer1,reducer2}) // to combine reducers from other file
const store = createStore(reducer1);
export default store;
