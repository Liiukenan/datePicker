import React, { useContext } from 'react'
import '../assets/css/detailList.styl'
import { context } from '../store'
function DetailList() {
  const detailObj = useContext(context)[0]
  return (
      <div className="detailList">
        <div className="title flex-items-center">
          <img src={require('../assets/images/ic_data.png')} alt="" />
          <span className="fs-16"> Data detail</span>
        </div>
        <div className="list fs-16">
          <div className="ml-24 mr-24 flex-between flex-items-center">
            <span className="fc-hui6 ">Online Duration</span>
            <span>{detailObj.online_duration} mins</span>
          </div>
          <div className="ml-24 mr-24 flex-between flex-items-center">
            <span className="fc-hui6 ">In-room Duration</span>
            <span>{detailObj.in_room_duration} mins</span>
          </div>
          <div className="ml-24 mr-24 flex-between flex-items-center">
            <span className="fc-hui6 ">On-Mic Duration</span>
            <span>{detailObj.on_mic_duration} mins</span>
          </div>
          <div className="ml-24 mr-24 flex-between flex-items-center">
            <span className="fc-hui6 ">On-Mic Times</span>
            <span>{detailObj.on_mic_times}</span>
          </div>
          <div className="ml-24 mr-24 flex-between flex-items-center">
            <span className="fc-hui6 ">Live call Duration</span>
            <span>{detailObj.live_call_duration} mins</span>
          </div>
          <div className="ml-24 mr-24 flex-between flex-items-center">
            <span className="fc-hui6 ">Host duration</span>
            <span>{detailObj.host_duration} mins</span>
          </div>
        </div>
      </div>
  )
}
export default DetailList
