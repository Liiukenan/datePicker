import React, { useRef, useState, useEffect, useContext } from 'react'
import BScroll from '@better-scroll/core'
import '../assets/css/datePicker.styl'
import { _getData, _getDateData } from '../api/serverPath'
import { context } from '../store/index'
function DatePicker() {
  const scroll = useRef()
  const [dateList, setDateList] = useState([])
  const setDetailObj = useContext(context)[1]
  
  const getDateData = () => {
    // 获取日期数据
    return new Promise((resolve,reject)=>{
      return _getDateData(
      JSON.stringify({ jid: 'user_1042275@bj2.1-1.io', token: '111111' })
    ).then((res) => {
      let dataArr = res.data.data
      
      dataArr.forEach((item, index) => {
        item.checked = false
        if (index === dataArr.length - 1) {
          item.checked = true
        }
        setDateList(dataArr)
        resolve(res.data.data)
      })
      // 初始化日期
      new BScroll(scroll.current, {
        scrollX: true,
        probeType: 3,
        bounce: true,
        click:true,
      })
    })
      
    })
  }
  const fliterWeek = (date) => {
    //过滤日期
    if (date === 8) {
      return 'Weekly Report'
    }
    const arr = ['Sun', 'Mon', 'Tus', 'Thi', 'Fou', 'Fri', 'Sat']
    return arr[date]
  }
  const getData = (item) => {
    return new Promise((resolve, reject) => {
      return _getData(
        JSON.stringify({
          jid: 'anchor_1007383@bj2.1-1.io',
          token:
            'vTaDu3BBEZiUukt68NSpdQ5NA1jqgWavq5TpIpKzi9xfEtJ4qnJ3dLXERq31XBIM',
          type: item.type,
          value: item.value
        })
      ).then((res) => {
        let data = {
          total_gems_received: res.data.data.total_gems_received,
          online_duration: res.data.data.online_duration,
          gifts: res.data.data.gifts,
          host_duration: res.data.data.host_duration,
          host_gifts: res.data.data.host_gifts,
          in_room_duration: res.data.data.in_room_duration,
          live_call_duration: res.data.data.live_call_duration,
          live_call_gems: res.data.data.live_call_gems,
          on_mic_duration: res.data.data.on_mic_duration,
          on_mic_times: res.data.data.on_mic_times,
          room_gifts: res.data.data.room_gifts
        }
        setDetailObj(data)
      })
    })
  }
  // 点击选择日期
  const handleClickDate = (index, itemData) => {
    dateList.forEach((item) => {
      item.checked = false
    })
    dateList[index].checked = true
    setDateList(JSON.parse(JSON.stringify(dateList)))
    getData(itemData)
    
  }
  useEffect(() => {
    getDateData().then(
      (data)=>{
        getData({
          jid: 'anchor_1007383@bj2.1-1.io',
          token:'vTaDu3BBEZiUukt68NSpdQ5NA1jqgWavq5TpIpKzi9xfEtJ4qnJ3dLXERq31XBIM',
          type: data[data.length - 1].type,
          value: data[data.length - 1].value
        })
      }
    )

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const filterNum = (n) => {
    if (n > 9) {
      return n
    }
    return n
  }
  const fliterDate = (d) => {
    let month = filterNum(new Date(d.split('-')[0]).getMonth() + 1)
    let day = filterNum(new Date(d.split('-')[0]).getDate())
    let month1 = filterNum(new Date(d.split('-')[1]).getMonth() + 1)
    let day1 = filterNum(new Date(d.split('-')[1]).getDate())
    return `${month}/${day}-${month1}/${day1}`
  }
  const list = dateList.map((item, index) => {
    return (
      <div
        className={`scroll-item ${item.type === 'weekly' ? 'weekly' : ''} ${
          item.checked ? 'active' : ''
        }`}
        onClick={() => {
          handleClickDate(index, item)
        }}
        key={index+item.value}
      >
        <div className="date-title">
          {' '}
          {item.type !== 'weekly'
            ? fliterWeek(new Date(item.value).getDay())
            : fliterWeek(8)}
        </div>
        <div className="date-content">
          {item.type === 'weekly'
            ? fliterDate(item.value)
            : new Date(item.value).getDate()}
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
