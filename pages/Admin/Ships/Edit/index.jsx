import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';

import withAuthAdmin from '../../../../components/withAuthAdmin';

import { useDispatch } from 'react-redux';
import { clearShipToEdit } from '../../../../store/modules/admin/ship/reducer';

import ShipsService from '../../../../services/admin/ships';

import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import ShipForm from '../../../../components/Admin/ShipForm'

const Edit = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (ship) => {
    try {
      // console.log(ship)
      await ShipsService.update(  ship  );

      toast.info('Navio  atualizado com sucesso!');

      dispatch(clearShipToEdit());
      router.back();
    } catch (err) {
      toast.error('Ocorreu um erro ao atualizar o navio, tente novamente.');
      console.log(err);
    }
  }

  return (
    <AdminComponent>
      <TitleAdminPanel title="Editar Navio" path="Dashboard > Navios > Detalhes do navio > Editar Navio" />

      <ShipForm handleSubmit={handleSubmit} action="Atualizar"/>
    </AdminComponent>
  )
}

export default withAuthAdmin(Edit);