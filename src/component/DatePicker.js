import React, { useRef, useState, useEffect,useContext} from 'react'
import BScroll from '@better-scroll/core'
import '../assets/css/datePicker.styl'
import { _getData, _getDateData } from '../api/serverPath'
import {Consumer} from '../store/createContext'
// import {NumContext} from '../App'
function DatePicker() {
  const scroll = useRef()
  const [dateList, setDateList] = useState([])
  const {setDetailObj}=useContext(storeContext)
  const getDateData = () => {
    
    // 获取日期数据
    _getDateData(JSON.stringify({ jid: 'user_1042275@bj2.1-1.io',token:'111111' })).then((res) => {
          let dataArr=res.data.data;
          dataArr.forEach((item,index)=>{
            item.checked=false;
            if(index===dataArr.length - 1){
              item.checked=true;
            }
          })
          setDateList(dataArr)
          setTimeout(()=>{
             // 初始化日期
              new BScroll(scroll.current, {
                scrollX: true,
                probeType: 3,
                bounce: true,
                click: true
              })
          })
        })
   
  }
  const fliterWeek=(date)=>{
    //过滤日期
    if(date===8){
      return 'Weekly Report'
    }
    const arr=['Sun','Mon','Tus','Thi','Fou','Fri','Sat']
    return arr[date]
  }
  const getData=(item)=>{
    _getData(JSON.stringify({
      "jid": "anchor_1007383@bj2.1-1.io",
      "token": "vTaDu3BBEZiUukt68NSpdQ5NA1jqgWavq5TpIpKzi9xfEtJ4qnJ3dLXERq31XBIM",
      "type": "day",
      "value": "2020/12/3",
  })).then(res=>{
    setDetailObj({
      Online_duration:res.data.Online_duration,
      gifts:res.data.gifts,
      host_duration:res.data.host_duration,
      host_gifts:res.data.host_gifts,
      in_room_duration:res.data.in_room_duration,
      live_call_duration:res.data.live_call_duration,
      live_call_gems:res.data.live_call_gems,
      on_mic_duration:res.data.on_mic_duration,
      on_mic_times:res.data.on_mic_times,
      room_gifts:res.data.room_gifts
    })
  })
  }
  // 点击选择日期
  const handleClickDate = (index,itemData) => {
   
    dateList.forEach((item) => {
      item.checked = false
    })
    dateList[index].checked = true
    setDateList(JSON.parse(JSON.stringify(dateList)))
    getData(itemData)
    
    
  }
  useEffect(() => {
    getDateData();
    getData();
  }, [])
  const filterNum=(n)=>{
    if(n>9){
      return n
    }
    return n
  }
  const fliterDate=(d)=>{
    let month=filterNum(new Date(d.split('-')[0]).getMonth())
    let day=filterNum(new Date(d.split('-')[0]).getDate())
    let month1=filterNum(new Date(d.split('-')[1]).getMonth())
    let day1=filterNum(new Date(d.split('-')[1]).getDate())
    return `${month}/${day}-${month1}/${day1}`
  }
  const list = dateList.map((item, index) => {
    return (
      <div
        className={`scroll-item ${item.type==='weekly' ? 'weekly' : ''} ${
          item.checked  ? 'active' : ''
        }`}
        onClick={() => {
          handleClickDate(index,item.value)
        }}
        key={index}
      >
        <div className="date-title"> {item.type!=="weekly"?fliterWeek(new Date(item.value).getDay()):fliterWeek(8)}</div>
        <div className="date-content">
          {item.type==='weekly' ? fliterDate(item.value) : new Date(item.value).getDate()}
        </div>
      </div>
    )
  })
  
  return (

    <div className="datePickers">
     {/* {num}11111111111 */}
      {/* <button onClick={()=>setNum(num+1)}>点击</button> */}
      <div className="report-date-title flex-items-center fs-16 pl-24">
        December, <span className="fc-hui6 ml-4">2020</span>
      </div>
      <div className="scroll-wrapper" ref={scroll}>
        <div className="scroll-content fs-12">{list}</div>
      </div>
    </div>
  )
}
export default DatePicker
