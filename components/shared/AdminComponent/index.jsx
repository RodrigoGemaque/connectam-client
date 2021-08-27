import AdminHeader from '../AdminHeader';
// import AdminFooter from '../AdminFooter';
import { Col, Row } from 'react-bootstrap';
import LateralMenu from '../LateralMenu';

const AdminComponent = ({children}) => {
    return(
        <Row className="me-lg-4">
            <Col lg={3}>
                <LateralMenu />
            </Col>

            <Col lg={9}>
                <div className="d-flex flex-column sticky-footer-wrapper container">
                    <AdminHeader/>

                    <div className="flex-fill text-center">
                        { children }
                    </div>
                     
                    {/* <AdminFooter /> */}
                </div>
            </Col>
        </Row>
    )
}

export default AdminComponent;