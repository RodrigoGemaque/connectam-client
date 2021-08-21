import Datails from "./Datails"
import getTravel from '../../../services/getTravel'

import {useRouter} from 'next/router'
import {Alert, Spinner} from 'react-bootstrap'
import { Container } from "react-bootstrap"

const DatailTravels = () => {
  const router = useRouter()
  const { id } = router.query
  const {travel, isLoading, isError} = getTravel(id)

  if (isError)
    
    return <Alert>Erro ao Carregar</Alert>
  else if (isLoading)
    return <Spinner animation = "border"></Spinner>
    

  return (
    <>
    <br/>
    <Datails {...travel}/>   
    
    </>
  )
}

export default DatailTravels