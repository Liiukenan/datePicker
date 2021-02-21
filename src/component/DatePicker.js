import React, { useRef, useState, useContext, useMemo } from 'react'
import BScroll from '@better-scroll/core'
import '../assets/css/datePicker.styl'
import { _getData, _getDateData } from '../api/serverPath'
import { context } from '../store/index'
function DatePicker() {
  const scroll = useRef()
  // 初始化日期列表
  const [dateList, setDateList] = useState([])
  // 初始化头部年月
  const [topDateArr,setTopDateArr]=useState([])
  // 初始化数据对象
  const setDetailObj = useContext(context)[1]
  const handleDay = (date) => {
    // 月份
    const dateArr = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
    // 设置顶部年月
    setTopDateArr([dateArr[new Date(date).getMonth()],new Date(
      date
    ).getFullYear()])
  }
  const getDateData = () => {
    // 获取日期数据
    return new Promise((resolve, reject) => {
      return _getDateData(
        JSON.stringify({ jid: 'user_1042275@bj2.1-1.io', token: '111111' })
      ).then((res) => {
        // 获取日期数据
        let dataArr = res.data.data
        dataArr.forEach((item, index) => {
          item.checked = false
          if (index === dataArr.length - 1) {
            item.checked = true
          }
          setDateList(dataArr)
          resolve(res.data.data)
        })
        // 日期横向动画初始化
        new BScroll(scroll.current, {
          scrollX: true,
          probeType: 3,
          bounce: true,
          click: true
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
        // let data = {
        //   total_gems_received: res.data.data.total_gems_received || 0,
        //   online_duration: res.data.data.online_duration || 20,
        //   gifts: res.data.data.gifts || 20,
        //   host_duration: res.data.data.host_duration || 30,
        //   host_gifts: res.data.data.host_gifts || 35,
        //   in_room_duration: res.data.data.in_room_duration || 40,
        //   live_call_duration: res.data.data.live_call_duration || 45,
        //   live_call_gems: res.data.data.live_call_gems || 20,
        //   on_mic_duration: res.data.data.on_mic_duration || 25,
        //   on_mic_times: res.data.data.on_mic_times || 15,
        //   room_gifts: res.data.data.room_gifts || 10
        // }
        let data = {
          total_gems_received: 20,
          online_duration:  20,
          gifts: 20,
          host_duration: 30,
          host_gifts: 35,
          in_room_duration: 40,
          live_call_duration: 45,
          live_call_gems: 20,
          on_mic_duration: 25,
          on_mic_times: 15,
          room_gifts: 10
        }
        // 设置全局化数据
        setDetailObj(data)
      })
    })
  }
  // 点击选择日期
  const handleClickDate = (index, itemData) => {
    // active样式
    dateList.forEach((item) => {
      item.checked = false
    })
    dateList[index].checked = true
    setDateList(JSON.parse(JSON.stringify(dateList)))

    // 更新数据
    getData(itemData)

    // 顶部年月更新
    if(itemData.type==='day'){
      handleDay(itemData.value)
    }else {
      handleDay(itemData.value.split('-')[0])
    }
    


  }
  useMemo(() => {
    // 初始化日期内容
    getDateData().then((data) => {
      // 初始化数据内容
      getData({
        jid: 'anchor_1007383@bj2.1-1.io',
        token:
          'vTaDu3BBEZiUukt68NSpdQ5NA1jqgWavq5TpIpKzi9xfEtJ4qnJ3dLXERq31XBIM',
        type: data[data.length - 1].type,
        value: data[data.length - 1].value
      })
      handleDay(data[data.length - 1].value)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const filterNum = (n) => {
    if (n > 9) {
      return n
    }
    return n
  }
  const fliterDate = (d) => {
    // 过滤选择的日期
    let month = filterNum(new Date(d.split('-')[0]).getMonth() + 1)
    let day = filterNum(new Date(d.split('-')[0]).getDate())
    let month1 = filterNum(new Date(d.split('-')[1]).getMonth() + 1)
    let day1 = filterNum(new Date(d.split('-')[1]).getDate())
    return `${month}/${day}-${month1}/${day1}`
  }
  const list = dateList.map((item, index) => {
    // 日历列表遍历
    return (
      <div
        className={`scroll-item ${item.type === 'weekly' ? 'weekly' : ''} ${
          item.checked ? 'active' : ''
        }`}
        onClick={() => {
          handleClickDate(index, item)
        }}
        key={index + item.value}
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
      <div className="report-date-title flex-items-center fs-16 pl-24">
        {topDateArr[0]}, <span className="fc-hui6 ml-4">{topDateArr[1]}</span>
      </div>
      <div className="scroll-wrapper" ref={scroll}>
        <div className="scroll-content fs-12">{list}</div>
      </div>
    </div>
  )
}
export default DatePicker
