
import useSWR from 'swr'


const getTravel = (id) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())


  const {data, error} = useSWR(
    id ?`${process.env.apiUrl}/admin/v1/travels/${id}`: null,
    fetcher, {
      revalidateOnFocus: false 
    } 
  )
  return {
    travel: data,
    isLoading: !error && !data,
    isError: error
  }

}

export default getTravel