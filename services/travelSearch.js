import useSWR from 'swr'
import {useRouter} from 'next/router'
import {useSelector} from 'react-redux'
import api from './api'
import TravelsService from './travels'


const getTravels = () => {
  const router = useRouter()
  const { departure, arrival,date} = router.query
  
  // const { departure, arrival, date} = useSelector(state => state.travel)




  let params = ''
  
  if (departure && arrival&& date){
    params = `${params == '' ? '?' : '&'}departure=${departure}&arrival=${arrival}&date=${date}`
  }
  
  
  const fetcher = (...args) => fetch(...args).then((res) => res.json())


  const { data,error} = useSWR(

    `${process.env.apiUrl}/admin/v1/travels${params}`,
    fetcher, {
      revalidateOnFocus: false
    }
  )
  
  return {
    travels: data, 
    isLoading: !error && !data,
    isError: error
  }
}



export default getTravels







