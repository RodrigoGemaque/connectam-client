import styles from './styles.module.css'
import { Table } from 'react-bootstrap'
// import StyledButton from '../StyledButton';
// import Pagination from '../Pagination';

const AdminListTable = ({ children, first_title, second_title, third_title, fourth_title, fifth_title, sixth_title, meta }) => {
  return (
    <div className={styles.admin_panel}>
      <Table borderless={true} hover={true} responsive={true}>
        <thead>
          <tr>
            {first_title && <th>{first_title}</th>}
            {second_title && <th>{second_title}</th>}
            {third_title && <th>{third_title}</th>}
            {fourth_title && <th>{fourth_title}</th>}
            {fifth_title && <th>{fifth_title}</th>}
            {sixth_title && <th>{sixth_title}</th>}
            <th colSpan={2}>Ações</th>
          </tr>
        </thead>

        <tbody>
          {children}
        </tbody>
      </Table>
{/* Pagination */}
     {/* <Pagination {...meta} /> */}

    </div>
  )
}

export default AdminListTable;