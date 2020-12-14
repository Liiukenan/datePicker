import React, { useState } from 'react'
import DatePicker from './component/DatePicker'
import DetailList from './component/DetailList'
import Receive from './component/Receive'
import './assets/css/report.styl'
import { context } from './store'
function Details(){
  let store = useState({})
  console.log(process.env)
  return(
    <context.Provider value={store}>
      <DatePicker />
      <div className="report-main">
            <Receive />
            <DetailList />
          </div>
    
    </context.Provider>
  )
}
function Report() {
    return (
        <div className="report">
          <Details />
          <div className="income fs-14 fc-hui3 text-center mt-16">
            The income report data above takes UTC+2 as standard
          </div>
          <div className="question mt-16 flex-column">
            <div className="mt-16 fs-15 flex-justify-center">
              Do you have any questions?
            </div>
            <div className="mt-16 flex-justify-center">
              <button className="fs-12">TALK TO MY MANAGER</button>
            </div>
          </div>
        </div>
    )
  
}
export default Report
