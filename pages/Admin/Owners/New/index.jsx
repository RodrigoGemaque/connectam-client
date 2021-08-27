import React from 'react';
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';

import withAuthAdmin from '../../../../components/withAuthAdmin';

import OwnerShipForm from '../../../../components/Admin/OwnerShipForm';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import OwnersService from '../../../../services/admin/owner'
const New = () => {
  const router = useRouter();

  const handleSubmit = async (owner_ship) => {
    if (owner_ship.password !== owner_ship.password_confirmation) {
      toast.error('A senha e a confirmação de senha devem ser iguais!')
      return;
    }

    try {
      await OwnersService.create(owner_ship);
      toast.info('Dono de embarcacao salvo com sucesso!');
      router.back();
    } catch (err) {
      toast.error('Erro ao salvar dono de embarcacao, tente novamente.');
      console.log(err);
    }
  }

  return (
    <AdminComponent>
      <TitleAdminPanel title="Adicionar Dono de Embarcacao" path="Dashboard > Donos de Embarcao > Adicionar Dono de Embarcacao" />

      <OwnerShipForm handleSubmit={handleSubmit} />
    </AdminComponent>
  )
}

export default withAuthAdmin(New);