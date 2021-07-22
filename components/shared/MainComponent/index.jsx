
const MainComponent = ({children}) => {
  return (
      <div className="d-flex flex-column sticky-footer-wrapper">
          
          <div className="container flex-fill">
              {children}
          </div>

      </div>
  )
}

export default MainComponent;