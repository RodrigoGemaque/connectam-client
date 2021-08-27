import { useState, useEffect } from 'react';
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import AdminListTable from '../../../../components/shared/AdminListTable';
import AdminDeleteModal from '../../../../components/shared/AdminDeleteModal';

import withAuthAdmin from '../../../../components/withAuthAdmin';

import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import useSwr from 'swr';
import OwnersService from '../../../../services/admin/owner';
// import UrlService from '../../../../util/UrlService';

import { toast } from 'react-toastify';
import NoData from '../../../../components/shared/NoData';

import { setOwnerShipToEdit } from '../../../../store/modules/admin/owner_ship/reducer';

const defaultUrl = '/admin/v1/owner_ships';

const List = () => {
  const [show, setShow] = useState(false);
  const [url, setUrl] = useState(defaultUrl);
  const [ownerShipToRemove, setOwnerShipToRemove] = useState(0);

  const { data, error, mutate } = useSwr(url, OwnersService.index);


  // const search = useSelector(state => state.search);
  const router = useRouter();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   setUrl(
  //     defaultUrl +
  //     UrlService.execute({ page: router.query.page, search })
  //   );
  // }, [search, router.query.page]);

  const handleShow = (id) => {
    setShow(true);
    setOwnerShipToRemove(id);
  }

  const handleClose = async (success) => {
    setShow(false);

    if (!success) return;

    try {
      await OwnersService.delete(ownerShipToRemove);
      toast.info('Dono de embarcacao removido com sucesso!');
      mutate();
    } catch (err) {
      toast.error('Erro ao remover dono de embarcacao , tente novamente.');
      console.log(err);
    }
  }

  const handleEdit = (owner_ship) => {
    dispatch(setOwnerShipToEdit(owner_ship));
    router.push('/Admin/Owners/Edit');
  }

  if (error) {
    toast.error('Erro ao listar donos de embacacoes!');
    console.log(error);
  }




  return (
    <AdminComponent>
      <TitleAdminPanel 
        title="Donos de Embarcação" 
        path="Dashboard > Donos de Embarcação" 
        icon={faUserPlus} 
        newPath="/Admin/Owners/New"
      />

      <AdminDeleteModal handleClose={handleClose} show={show} target="Dono de embarcação" />

      {
        data && data.owner_ships && data.owner_ships.length > 0 ? (
          <AdminListTable 
            first_title="Nome" 
            second_title="Email" 
            third_title="ID" 
            fourth_title="Status"
            meta={data.meta}
          >
            {
              data.owner_ships.map(owner_ship => (
                <tr key={owner_ship.id}>
                  <td>{owner_ship.name}</td>
                  <td>{owner_ship.email}</td>
                  <td>{owner_ship.id}</td>
                  <td>{owner_ship.profile}</td>
                  <td>
                    <div>
                      <FontAwesomeIcon 
                        icon={faEdit} 
                        onClick={() => handleEdit(owner_ship)}
                      />
                    </div>
                  </td>
                  <td>
                    <div>
                      <FontAwesomeIcon 
                        icon={faTrash} 
                        onClick={() => handleShow(owner_ship.id)} 
                      />
                    </div>
                  </td>
                </tr>
              ))
            }
          </AdminListTable>
        ) : (
          <NoData />
        )
      }
      
    </AdminComponent>
  )
}

export default withAuthAdmin(List);