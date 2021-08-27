// styles
import { Form,Col, Row } from 'react-bootstrap';
import { faGhost, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';

//Components
import StyledButton from '../../../components/shared/StyledButton';
import ShipImage from './ShipImage'

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { clearShipToEdit } from '../../../store/modules/admin/ship/reducer';

// Config
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { NumberToString } from 'es-abstract/es2019';







const ShipForm = ({ handleSubmit, action = 'Adicionar' }) => {
  const [id, setId] = useState(0)
  const [name, setName] = useState('');
  const [owner_ship_id, setOwnerId] = useState('');
  const [image ,setImage] = useState();
  const [shipImage, setShipImage] = useState('')



  // aqui obetmos a categoria que estiver armazenada na store do redux para podermos pegar os dados para edição
  const ship = useSelector(state => state.ship);

  const dispatch = useDispatch();
  const router = useRouter();


  // checando se a categoria não é vazia e se o a url contem a palavra Edit para setar o valor do nome para a edição.
  useEffect(() => {
    if (ship && router.pathname.includes('Edit')) {
      setName(ship.name);
      setId(ship.id)
      setOwnerId(ship.owner_ship_id)
      setShipImage(ship?.image_url)
    }
  }, [ship]);



  // quando o form for submetido, prevenimos a operação normal do form que seria dar um refresh na página e chamamos o método que foi recebido por parâmetro enviando um objeto do tipo Category
  const handleFormSubmit =  (evt) => {
    evt.preventDefault();

    const formData = new FormData();

  


    formData.append('ship[id]', id.toString());
    formData.append('ship[name]', name);
    formData.append('ship[owner_ship_id]', owner_ship_id)

    if(image){
      formData.append('ship[image]', image)
    }

    handleSubmit(formData);

    // for(var  value of formData.values()){
    //   console.log(value)
    // }
    // como o id não é um campo visível, pegamos o mesmo da categoria que foi armazenada na store do redux, se a mesma for nula, nulo / undefined é retornado (?., evita termos que faze um if para realizar uma checagem)
    // await handleSubmit({ id: ship?.id, name, owner_ship_id  });
  }

  return (
    <div className={styles.admin_panel}>
    <Form className={styles.new_form} onSubmit={handleFormSubmit}>
      <Row>

        <ShipImage
          setImage={setImage}
          shipImage={shipImage}
        />

        <Col lg={8}>
          <Form.Row>
            <Form.Group as={Col} md={6} sm={12} className="p-2">
              <Form.Label>Nome do Navio</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o nome do produto"
                className={styles.secundary_input}
                value={name}
                onChange={
                  (evt) => setName(evt.target.value) }
                required
              />
            </Form.Group>

            <Form.Group as={Col} md={6} sm={12} className="p-2">
              <Form.Label>Id do proprietario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o id do proprietario"
                className={styles.secundary_input}
                value={owner_ship_id}
                onChange={
                  (evt) => setOwnerId(Number(evt.target.value)) }
                required
              />
            </Form.Group>

            {/* <Form.Group as={Col} md={6} sm={12} className="p-2">
              <Form.Label>Código</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o ID"
                className={styles.secundary_input}
                value={id}
                onChange={ (evt) => setId(Number(evt.target.value)) }
              />
            </Form.Group> */}
          </Form.Row>

        </Col>
      </Row>

      <div className={styles.details_button}>
        <StyledButton
          icon={faGhost}
          action={action}
          type_button="blue"
          type="submit"
        />

        <StyledButton
          icon={faTimes}
          action={"Cancelar"}
          type_button="red"
          onClick={() => {
            // limpando o product para edição quando a edição é cancelada para não enviar o id caso seja um cadastro para não dar erro de chave primária
            dispatch(clearShipToEdit());
            router.back();
          }}
        />
      </div>
    </Form>
  </div>
  )
}

export default ShipForm;