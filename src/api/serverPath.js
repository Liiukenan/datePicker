import axios from 'axios'
if(process.env.CMLINT_ENV === 'production'){
    axios.defaults.baseURL='http://www.baidusssss.com/'
}else{
    axios.defaults.baseURL='http://54.223.205.242:8300/'
}
export function _getDateData(data){
    return axios.post('v1/anchor/income-report-dates',data)
}
export function _getData(data){
    return axios.post('v1/anchor/income-report-detail',data)
}