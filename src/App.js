import React,{useEffect,useReducer,useState} from 'react';
import DatePicker from './component/DatePicker'
import DetailList from './component/DetailList'
import Receive from './component/Receive'
import './assets/css/report.styl'
import { Provider } from './store/createContext'
function Report() {
  const [datailObj,setDetailObj]=useState({})
  return (
  <Provider value={{ datailObj, setDetailObj }}>
      <div className="report">
          <DatePicker />
          <div className="report-main">
            <Receive />
            <DetailList />
          </div>
          <div className="income fs-14 fc-hui3 text-center mt-16">
            The income report data above takes UTC+2 as standard
            {/* {num} */}
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
    </Provider>
  )
}
export default Report
