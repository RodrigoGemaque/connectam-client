// Components
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';

import CityForm from '../../../../components/Admin/CityForm'
import withAuthAdmin from '../../../../components/withAuth';

// style
import { toast } from 'react-toastify';

// config
import { useRouter } from 'next/router';
import CitiesService from '../../../../services/admin/cities';


const New = () => {
  const router = useRouter();

  const handleSubmit = async ({name}) => {
    try {

      // if (!ship.get('ship[image]')) {
      //   toast.info('A imagem do produto é obrigatória!');
      //   return;
      // }
      // console.log(ship.get('ship[id]'))

      await CitiesService.create(name);
      toast.info('Cidade cadastrada com sucesso!');

      router.back();
    } catch (err) {
      toast.error('Ocorreu algum erro, tente novamente!');
      console.log(err);
    }
  }

  return (
    <AdminComponent>
      <TitleAdminPanel title="Adicionar Cidade" path="Dashboard > Cidades > Adicionar Cidade" />

      <CityForm handleSubmit={handleSubmit} action="Adicionar" />
    </AdminComponent>
  )
}

export default withAuthAdmin(New);