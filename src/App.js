import React from 'react';
import {connect } from 'react-redux';

const mapStateToProps=(state)=>{
  return {
    state : state
  }
}
const mapDispatchToProps=(dispatch)=>{
  this.state={
     num : true,
  }
  return {
    handleChange : (evt)=>{
    const action = {type:'CHANGE',payload:evt.target.value};
    dispatch(action);
    },
    handleSubmit : (evt)=>{
      const action = {type:'ADDNAME',payload:''}
      evt.preventDefault()
      dispatch(action)
    },
    handleClick : (list,key) =>{
        const action = {type:'DELETE', payload:{key,list}}
        dispatch(action)
    }
  }
}

function Index(props){console.log("props= ",props)
    return(
       <div>
       { props.state.list.map((item,key)=>
          <h1 key={key}>name of item {key} is : {item}<button  onClick={()=>props.handleClick(props.state.list,key)}>Delete</button></h1> )
     }
      <form onSubmit={event=>props.handleSubmit(event)}>
      Hit Enter to add Item<input  value={props.state.name}  onChange={props.handleChange}/>
      </form>
</div>
      )
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);

