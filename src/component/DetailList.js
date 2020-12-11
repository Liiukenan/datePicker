import React from 'react'
import '../assets/css/detailList.styl'
function DetailList() {
        return (
            <div className="detailList">
               <div className="title flex-items-center">
                   <img src={require("../assets/images/ic_data.png")} alt=""/>
                   <span className="fs-16">Data detail</span>
               </div>
               <div className="list fs-16">
                    <div className="ml-24 mr-24 flex-between flex-items-center">
                        <span className="fc-hui6 ">
                            Online Duration
                        </span>
                        <span>
                            211 mins
                        </span>
                    </div>
                    <div className="ml-24 mr-24 flex-between flex-items-center">
                        <span className="fc-hui6 ">
                        In-room Duration
                        </span>
                        <span>
                        12 mins
                        </span>
                    </div>
                    <div className="ml-24 mr-24 flex-between flex-items-center">
                        <span className="fc-hui6 ">
                        On-Mic Duration
                        </span>
                        <span>
                        5321 mins
                        </span>
                    </div>
                    <div className="ml-24 mr-24 flex-between flex-items-center">
                        <span className="fc-hui6 ">
                        On-Mic Times
                        </span>
                        <span>
                            52
                        </span>
                    </div>
                    <div className="ml-24 mr-24 flex-between flex-items-center">
                        <span className="fc-hui6 ">
                        Live call Duration
                        </span>
                        <span>
                        52 mins
                        </span>
                    </div>
                    <div className="ml-24 mr-24 flex-between flex-items-center">
                        <span className="fc-hui6 ">
                        Host duration
                        </span>
                        <span>
                            211 mins
                        </span>
                    </div>
               </div>
            </div>
        );
    }
export default DetailList;