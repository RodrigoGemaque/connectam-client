import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';

import withAuthAdmin from '../../../../components/withAuthAdmin';

import { useDispatch } from 'react-redux';
import { clearCityToEdit } from '../../../../store/modules/admin/city/reducer';

import CitiesService from '../../../../services/admin/cities';

import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import CityForm from '../../../../components/Admin/CityForm'

const Edit = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (city) => {
    try {
      console.log(city)
      await CitiesService.update(city);

      toast.info('Cidade  atualizada com sucesso!');

      dispatch(clearCityToEdit());
      router.back();
    } catch (err) {
      toast.error('Ocorreu um erro ao atualizar a cidade, tente novamente.');
      console.log(err);
    }
  }

  return (
    <AdminComponent>
      <TitleAdminPanel title="Editar Cidade" path="Dashboard > Cidades > Detalhes da cidade > Editar Cidade" />

      <CityForm handleSubmit={handleSubmit} action="Atualizar"/>
    </AdminComponent>
  )
}

export default withAuthAdmin(Edit);