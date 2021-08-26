import React from 'react';
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';

import withAuthAdmin from '../../../../components/withAuthAdmin';

import OwnerShipForm from '../../../../components/Admin/OwnerShipForm';

import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { clearOwnerShipToEdit } from '../../../../store/modules/admin/owner_ship/reducer';

import OwnersService from '../../../../services/admin/owner';

const Edit = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  
  const handleSubmit = async (owner_ship) => {
    console.log(owner_ship)
    try {
      await OwnersService.update(owner_ship);
      toast.info('Dono de Embarcacao atualizado com sucesso!');
      dispatch(clearOwnerShipToEdit());
      router.back();
    } catch (err) {
      toast.error('Erro ao atualizar dono de embarcacao, tente novamente.');
      console.log(err);
    }
  }

  return (
    <AdminComponent>
      <TitleAdminPanel title="Editar Dono de Embarcacao" path="Dashboard > Donos de Embarcacao > Detalhes do dono de embarcacao > Editar dono de embarcacao" />

      <OwnerShipForm handleSubmit={handleSubmit} action="Atualizar"/>
    </AdminComponent>
  )
}

export default withAuthAdmin(Edit);