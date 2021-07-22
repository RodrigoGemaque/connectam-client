import styles from './styles.module.css'

const ContainerComponent = ({children}) => {
  return (
    <div className = {styles.main}>
      {children}
    </div>
  )
}

export default ContainerComponent
 