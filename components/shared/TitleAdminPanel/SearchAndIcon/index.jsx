import React from 'react';
import StyledButton from '../../StyledButton';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'


// styles
import styles from './styles.module.css';
import { InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Redux
import { useDispatch } from 'react-redux'
// import {
//     setSearch as setSearchRedux,
//     clearSearch
// } from '../../../../store/modules/admin/shared/search/reducer'



const SearchAndIcon = ({ icon, newPath }) => {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const router = useRouter()

    useEffect(() => {
        // dispatch(clearSearch)
    })


    // método para realizar a tratativa da pesquisa. Ele irá atualizar o valor da pesquisa no redux
    // esse método será chamado quando o usuário der enter no input de pesquisa ou clicar no ícone da pesquisa
    const handleSearch = () => {
        // toda vez que o termo de pesquisa for alterado a página será alterada para 1.
        // utilizamos o método replace que tem a mesma função do metódo push, 
        // onde o mesmo não adiciona mais uma entrada no history do browser.
        router.replace(router.pathname, '?page=1');
        dispatch(setSearchRedux(search));
    }


    return (
        <Row>
            <Col lg={9} xs>
                <Row>
                    <Col lg={9} xs={10}>
                        {/* <InputGroup>
                            <FormControl
                                placeholder= 'pesquisar usuario'
                                className={styles.input}
                                value={search}
                                onChange={
                                    (evt) =>
                                        setSearch(evt.target.value)
                                }

                                onKeyPress={
                                    (evt) => {
                                        if (evt.key.toLocaleLowerCase() === 'enter') {
                                            handleSearch();
                                        }
                                    }
                                }
                            />
                        </InputGroup> */}
                    </Col>

                    {/* <Col lg={3} xs={2} className="mt-1" style={{ cursor: 'pointer' }}>
                        <FontAwesomeIcon
                            icon={faSearch}
                            size="lg"
                            color="var(--color-gray-light)"
                            className="float-left"
                            onClick={handleSearch}
                        />
                    </Col> */}
                </Row>
            </Col>

            <Col lg={2} xs={{ span: 3 }} className={styles.titleButton}>
                <Link href={newPath}>
                    <a>
                        <StyledButton icon={icon} type_button="blue" />
                    </a>
                </Link>
            </Col>
        </Row>
    )
}

export default SearchAndIcon;