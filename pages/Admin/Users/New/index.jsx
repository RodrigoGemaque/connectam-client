import React from 'react';
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';

import withAuthAdmin from '../../../../components/withAuthAdmin';

import UserForm from '../../../../components/Admin/UserForm';

import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import UsersService from '../../../../services/admin/users';

const New = () => {
  const router = useRouter();

  const handleSubmit = async (user) => {
    if (user.password !== user.password_confirmation) {
      toast.error('A senha e a confirmação de senha devem ser iguais!')
      return;
    }

    try {
      await UsersService.create(user);
      toast.info('Usuário salvo com sucesso!');
      router.back();
    } catch (err) {
      toast.error('Erro ao salvar o usuário, tente novamente.');
      console.log(err);
    }
  }

  return (
    <AdminComponent>
      <TitleAdminPanel title="Adicionar Usuário" path="Dashboard > Usuários > Adicionar usuário" />

      <UserForm handleSubmit={handleSubmit} />
    </AdminComponent>
  )
}

export default withAuthAdmin(New);