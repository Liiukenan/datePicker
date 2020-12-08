import React, { useRef, useState, useEffect,useContext} from 'react'
import BScroll from '@better-scroll/core'
import '../assets/css/datePicker.styl'
import axios from 'axios'
import {NumContext} from '../App'
function DatePicker() {
  const scroll = useRef()
  const [dateList, setDateList] = useState([])
  const {num,setNum}=useContext(NumContext)
  const getData = () => {
    // 获取日期数据
    return new Promise(() => {
      axios
        .post(
          'https://www.fastmock.site/mock/348b3d6d2caee5a41791c6b57688ac48/hiyya/list',
          { todayTime: 1606914592000 }
        )
        .then((res) => {
          let dataArr=res.data.data.dataList;
          dataArr.forEach((item,index) => {
            if(new Date(item.date).getDay()===0){
              dataArr.splice(index+1,0,{date:"week"})
            }
          });
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
  // 点击选择日期
  const handleClickDate = (index) => {
    dateList.forEach((item) => {
      item.checked = false
    })
    dateList[index].checked = true
    
    setDateList(JSON.parse(JSON.stringify(dateList)))
  }
  useEffect(() => {
    getData();
  }, [])
  const list = dateList.map((item, index) => {
    return (
     
      <div
        className={`scroll-item ${item.date==='week' ? 'weekly' : ''} ${
          item.checked  ? 'active' : ''
        }`}
        onClick={() => {
          handleClickDate(index)
        }}
        key={index}
      >
      
        <div className="date-title"> {item.date!=="week"?fliterWeek(new Date(item.date).getDay()):fliterWeek(8)}</div>
        <div className="date-content">
          {item.date==='week' ? '11/30~12/07' : new Date(item.date).getDate()}
        </div>
      </div>
    )
  })
  
  return (

    <div className="datePickers">
     {num}11111111111
      <button onClick={()=>setNum(num+1)}>点击</button>
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
