// Styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faGhost, faPlus } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import styles from '../../../../styles/AdminPanel.module.css'

// components
import withAuthAdmin from '../../../../components/withAuthAdmin';
import NoData from '../../../../components/shared/NoData';
import AdminDeleteModal from '../../../../components/shared/AdminDeleteModal';
import AdminListTable from '../../../../components/shared/AdminListTable';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';
import AdminComponent from '../../../../components/shared/AdminComponent';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setCityToEdit} from '../../../../store/modules/admin/city/reducer';



// configs
import { useState, useEffect } from 'react';
import useSWR from 'swr';
import CitiesService from '../../../../services/admin/cities'
import { useRouter } from 'next/router';

const defaultUrl = '/admin/v1/cities';
// import UrlService from '../../../../util/UrlServices';



const List = () => {
  // estado para controlar a exibição do modal de exclusão
  const [show, setShow] = useState(false);
  // estado para armazena o id da categoria para remoção, ao clicar no ícone para remover uma categoria, esse estado é atualizado
  const [cityToRemove, setCityToRemove] = useState(0);
  // estado utilizado para forçar a revalidaçãod e cache do SWR, toda vez que o mesmo mudar o SWR irá realizar uma revalidação de cache
  const [url, setUrl] = useState(defaultUrl);

  const { data, error, mutate } = useSWR(url, CitiesService.index);

  // obento o estado de pesquisa do redux para observá-lo e a cada mudanção mudar o estado local url
  // const search = useSelector(state => state.search);

  // console.log(data)
  const dispatch = useDispatch();
  const router = useRouter();

  // se o search mudar (usuário deve alterar o valor do campo e teclar enter)
  // a pesquisa será feita ao alterar o url do SWR
  // useEffect(() => {
  //   setUrl(
  //     defaultUrl +
  //     UrlService.execute({ page: router.query.page, search })
  //   )
  // }, [search, router.query.page]);

  // mostrando o motal de remoção e setando o id para remoção da categoria
  const handleShow = (id) => {
    setShow(true);
    setCityToRemove(id);
  }

  // fechando o modal e caso o usuário clique em ok (success true) a categoria será removida, case o usuário clique em cancelar (success false), a categoria não será removida
  const handleClose = async (success) => {
    setShow(false);

    if (!success) return;

    try {
      // realizando a request para remoção da categoria utilizando o id salvo anteriormente
      await CitiesService.delete(cityToRemove);
      toast.info('Cidade removida com sucesso!');
      // função do SWR para forçar a revalidação do cache
      mutate();
    } catch (err) {
      toast.error('Ocorreu um erro ao remover a cidade, tente novamente.');
      console.log(err);
    }
  }

  // ao clicar no item de edição a categoria selecionada para edição é armazenada no redux e o usuário é redirecionado para a edição
  const handleEdit = (city) => {
    console.log(city)
    dispatch(setCityToEdit(city));
    router.push('/Admin/Cities/Edit');
  }

  if (error) {
    toast.error('Erro ao listar Cidades');
    console.log(error);
  }

  return (
    <AdminComponent>
      <TitleAdminPanel
        title="Cidades"
        path="Dashboard > Cidades"
        icon={faPlus}
        newPath="/Admin/Cities/New" />

      <AdminDeleteModal handleClose={handleClose} show={show} target="Cidade" />

      {
        // caso não existam dados cadastrados ou a pesquisa não tenha resultado o componente NoData é renderizado.
        data && data.cities && data.cities.length > 0 ? (
          <AdminListTable first_title="Nome da Cidade" meta={data.meta}>
            {
              data.cities.map(city => (
                <tr className={styles.table_line} key={city.id}>
                  <td>{city.name}</td>
                  <td>
                    <div className={styles.hover}>
                      <FontAwesomeIcon
                        icon={faEdit}
                        onClick={() => handleEdit(city)}
                      />
                    </div>
                  </td>

                  <td>
                    <div className={styles.hover}>
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() => handleShow(city.id)}
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