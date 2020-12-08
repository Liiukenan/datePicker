import React, { useContext, useReducer } from 'react'
import '../assets/css/receive.styl'
import { NumContext } from '../App'
function Receive() {
  const { num, setNum } = useContext(NumContext)
  const initial={n:1};
  const reducer=(state,action)=>{
      if(action.type==='add'){
          return{n:state.n+action.number};
      }else if(action.type==="multi"){
          return {n:state.n * action.number}
      }else {
          throw new Error('没有对应操作')
      }
  }
  const [state,dispatch]=useReducer(reducer,initial);
  return (
    <div className="receive">
    {state.n}
    <button onClick={()=>dispatch({type:'add',number:10})}>+10</button>
    <button onClick={()=>dispatch({type:'multi',number:5})}>x5</button>
      <div className="title flex-items-center">
        <img
          src={require('../assets/images/ic_gem.png')}
          alt=""
          className="ml-23"
        />
        <span className="fs-16 ml-7">Total Gems receive 11111{num}</span>
      </div>
      <div className="number mt-8 flex-items-center flex-justify-center">
        <img src={require('../assets/images/ic_gems_money.png')} alt="" />
        <span className="ml-6">921</span>
      </div>
      <div className="receive-list mt-20">
        <div className="list-data flex-between flex-items-center">
          <span className="fs-16 fc-hui6">Live call Gem</span>
          <span className="fs-15 flex-items-center">
            <img src={require('../assets/images/ic_gems_money.png')} alt="" />
            <i className="ml-2">12</i>
          </span>
        </div>

        <div className="list-data flex-between flex-items-center">
          <span className="fs-16 fc-hui6">Gifts</span>
          <span className="fs-15 flex-items-center">
            <img src={require('../assets/images/ic_gems_money.png')} alt="" />
            <i className="ml-2">12</i>
          </span>
        </div>
        <div className="list-data flex-between flex-items-center">
          <span className="fs-16 fc-hui6">Host room gifts</span>
          <span className="fs-15 flex-items-center">
            <img src={require('../assets/images/ic_gems_money.png')} alt="" />
            <i className="ml-2">12</i>
          </span>
        </div>
        <div className="list-data flex-between flex-items-center">
          <span className="fs-16 fc-hui6">Host gifts</span>
          <span className="fs-15 flex-items-center">
            <img src={require('../assets/images/ic_gems_money.png')} alt="" />
            <i className="ml-2">12</i>
          </span>
        </div>
      </div>
    </div>
  )
}
export default Receive
