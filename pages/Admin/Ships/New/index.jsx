// Components
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';

import ShipForm from '../../../../components/Admin/ShipForm'
import withAuthAdmin from '../../../../components/withAuth';

// style
import { toast } from 'react-toastify';

// config
import { useRouter } from 'next/router';
import ShipService from '../../../../services/admin/ships';


const New = () => {
  const router = useRouter();

  const handleSubmit = async (ship) => {
    try {

      // if (!ship.get('ship[image]')) {
      //   toast.info('A imagem do produto é obrigatória!');
      //   return;
      // }
      // console.log(ship.get('ship[id]'))

      await ShipService.create(ship);
      toast.info('Navio cadastrado com sucesso!');

      router.back();
    } catch (err) {
      toast.error('Ocorreu algum erro, tente novamente!');
      console.log(err);
    }
  }

  return (
    <AdminComponent>
      <TitleAdminPanel title="Adicionar Navio" path="Dashboard > Navios > Adicionar Navio" />

      <ShipForm handleSubmit={handleSubmit} action="Adicionar" />
    </AdminComponent>
  )
}

export default withAuthAdmin(New);