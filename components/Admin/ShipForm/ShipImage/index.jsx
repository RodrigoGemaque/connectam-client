import { useRef, useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import StyledButton from '../../../shared/StyledButton';

import styles from './styles.module.css';

// estamos recebendo a função de setImage que virá do ProductForm, necessitamos dela pois vamos mandar o arquivo para a api e para exibir a imagem na tela utilizaremos o método Url.createObjectUrl que irá criar uma url fictícia para a imagem e assim a mesma será exibida na tela.
// já o productImage será utilizado para exibir a image que foi recebida da api na edição do produto


const ShipImage = ({ setImage, shipImage }) => {
  // esse estado é utilizado para armazenar a url da imagem que será exibida na tela
  const [imageToShow, setImageToShow] = useState('/assets/product_image.png');
  // utilizarames um ref hook do react para podermos ter acesso mais fácil ao input do tipo file que esta escondido na tela.
  const imageInputRef = useRef(null);

  // se for uma edição e imagem do produto existir, a imagem será alterada para a imagem do produto
  useEffect (() => {
    console.log(shipImage)
    if (shipImage) {
      setImageToShow(shipImage);
    }
  }, [shipImage])

  // utilizando um ref para simular o click do botão do input type="file" quando o botão atualizar é clicado
  const handleUpdateImage = () => {
    if (imageInputRef) {
      imageInputRef.current.click();
    }
  }

  // pegando a imagem que foi selecionada, setando ela no estado do componente pai e criando uma url para que a mesma seja exibida na tela
  const handleSetImage = (evt) => {
    const file = evt.target.files[0];

    setImage(file);
    setImageToShow(URL.createObjectURL(file))
  }

  return (
    <Col lg={4}>
      <label 
        htmlFor="image"
        className={styles.image_label}
      >

        <img 
          src={imageToShow} 
          alt="Product image" 
          className={styles.image}
        />

        <input 
          type="file"
          id="image"
          name="product_image"
          hidden
          ref={imageInputRef}
          onChange={ (evt) => handleSetImage(evt)}
        />
      </label>

      <div className={styles.details_button}>
        <StyledButton 
          icon={faArrowUp} 
          action={"Atualizar"} 
          type_button="blue" 
          onClick={handleUpdateImage}
        />
      </div>
    </Col>
  );
}

export default ShipImage;