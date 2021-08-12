import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Link, useParams } from 'react-router-dom';
import { Container, Table, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {MdEdit, MdSearch, MdDeleteForever} from 'react-icons/md';

import './style.css';
import Header from '../../components/Header';

function Home(){
    const id = localStorage.getItem('id')
    const [count, setCount] = useState();
    const [busca, setSearch] = useState();
    const [atas, setAtas] = useState([]);
    const [total, setTotal] = useState();
    const { page = 1 } = useParams();
    const next = parseInt(page) + 1;

    useEffect(async ()=>{
       await api.get('/atas/'.concat(page)).then(response => {
           setAtas(response.data.ata)
           setTotal(Math.ceil(response.data.count / 10))
	   setCount(response.data.count)
       })
    }, []);

    async function handleDelete(id) {
        await api.post('/ata/delete/'.concat(id));

        setAtas(atas.filter(ata => ata.id !== id));
    }
    async function handleBusca(e){
        e.preventDefault();
        try{
            const response = await api.get('/search/'.concat(busca));
            setAtas(response.data);
        } catch(error){
            console.log(error)
        }
    }
    return(
        <>
            <Header/>
            <h1 className="text-center">Seja Bem Vindo</h1>
            <Form onSubmit={handleBusca} className="row g-3 align-content-center justify-content-center form-search">
                <FormGroup className="col-auto">
                    <Label for="busca">Busca</Label>
                    <Input
                        type="text"
                        name="busca"
                        id="busca"
                        onChange={e => setSearch(e.target.value)}
			required
                    />
                </FormGroup>
                <FormGroup className="col-auto pt-4">
                    <Button type="submit">Buscar</Button>
                </FormGroup>
            </Form>
            <Container fluid={true} className="row justifu-content-center">
                {id &&
                <div>
                    <Link to="/ata">
                        <Button color="success">Cadastrar Novo Registro</Button>
                    </Link>
                </div>
                }
		<div>
			<p><b>Total de Registros: {count}</b></p>	
		</div>
                <Table striped>
                    <thead className="">
                        <tr>
                        <th>#</th>
                        <th>Gestão</th>
                        <th>N_doc</th>
                        <th>Coleção</th>
			<th>Observação</th>
                        <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                    {atas?.map(ata => (
                        <tr key={ata.id}>
                        <th scope="row">{ata.id}</th>
                        <td>{ata.gestao}</td>
                        <td>{ata.n_doc}</td>
                        <td>{ata.colecao}</td>
			<td>{ata.observacao}</td>
                        <td>
                                {id && 
                                <Link to={`/ata/editar/${ata.id}`}> <MdEdit size={30} color="#2BA8EA"/></Link>
                                }
                                <Link to={`/ata/view/${ata.id}`}> 
                                    <MdSearch size={30} color="#16FF41"/>
                                </Link>
                                { id &&
                                <Link onClick={() => {if(window.confirm('Deseja excluir?')){handleDelete(ata.id)}}}> 
                                    <MdDeleteForever size={30} color="#F42E2E"/>
                                </Link>
                                }
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                <div className="row">
                    {page > 1 ?
                    <div className="col-6 float-start link">
                        <a href={`/`.concat(page - 1)}>
                            <Button color="danger">Previus</Button>
                        </a>
                    </div> : ''
                    }
                    { page < total  && 
                    <div className="col-6 float-end text-end link">
                        <a href={`/`.concat(next)}>
                            <Button color="success">Next</Button>
                        </a>
                    </div>
                    }
                </div>
            </Container>
        </>
    )
}
export default Home;
