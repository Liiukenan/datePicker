import axios from 'axios'
if(process.env.CMLINT_ENV === 'production'){
    axios.defaults.baseURL='https://www.fastmock.site/mock/9dfa740c2dcc093fde885622066768ec/datedata/'
}else{
    axios.defaults.baseURL='https://www.fastmock.site/mock/9dfa740c2dcc093fde885622066768ec/datedata/'
}
export function _getDateData(data){
    return axios.post('date',data)
}
export function _getData(data){
    return axios.post('v1/anchor/income-report-detail',data)
}