import React, {useEffect, useState} from 'react';
import {Container, Form, FormGroup, Label, Input, Button} from 'reactstrap';

import api from '../../../services/api';
import { useHistory, useParams } from 'react-router-dom';
import Header from '../../../components/Header';

function Update() {
    const [ata, setAta] = useState('');
    const {id} = useParams();
    const history = useHistory();

    useEffect(()=>{
        api.get('ata/'.concat(id))
        .then(response => {
            setAta(response.data);
        });
    }, [id]);

    function handleChange(e) {
        const { name, value } = e.target;
        setAta(ata => ({
            ...ata,
            [name]: value
        }))
    }

    async function handleCadastro(e){
        e.preventDefault();
        
        try {
            
          const response = await api.post('ata/'.concat(id), {
              ata
          });
          //history.push('/usuarios')
        } catch (error) {
          console.log(error)
        }
      }
  return (
      <>
        <Header/>
        <h1 className="text-center">Atualizar Ata</h1>
        <Container className="d-flex justify-content-center">
            <Form fluid className="w-50" onSubmit={handleCadastro}>
                <FormGroup>
                    <Label for="gestao">Gestão</Label>
                    <Input 
                        type="text" 
                        name="gestao" 
                        id="gestao"
                        defaultValue={ata?.gestao}
                        onChange={e => handleChange(e)}
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="fundo">Fundo</Label>
                    <Input 
                        type="text" 
                        name="fundo" 
                        id="fundo"
                        defaultValue={ata?.fundo}
                        onChange={e => handleChange(e)}
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="n_doc">N_Doc</Label>
                    <Input 
                        type="text" 
                        name="n_doc" 
                        id="n_doc"
                        defaultValue={ata?.n_doc}
                        onChange={e => handleChange(e)}
                        
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="colecao">Colecao</Label>
                    <Input 
                        type="text" 
                        name="colecao" 
                        id="colecao"
                        defaultValue={ata?.colecao}
                        onChange={e => handleChange(e)}
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="descricao">Descrição</Label>
                    <Input 
                        type="textarea" 
                        name="descricao" 
                        id="descricao"
                        defaultValue={ata?.descricao}
                        onChange={e => handleChange(e)}
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="observacao">Observação</Label>
                    <Input 
                        type="textarea" 
                        name="observacao" 
                        id="observacao"
                        defaultValue={ata?.observacao}
                        onChange={e => handleChange(e)}
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="folhas">Folhas</Label>
                    <Input 
                        type="number" 
                        name="folhas" 
                        id="folhas"
                        defaultValue={ata?.folhas}
                        onChange={e => handleChange(e)}
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="palavras_chave">Palavras_chave</Label>
                    <Input 
                        type="text" 
                        name="palavras_chave" 
                        id="palavras_chave"
                        defaultValue={ata?.palavras_chave}
                        onChange={e => handleChange(e)}
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="resumo">Resumo</Label>
                    <Input 
                        type="textarea" 
                        name="resumo" 
                        id="resumo"
                        defaultValue={ata?.resumo}
                        onChange={e => handleChange(e)}
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="condicao_de_preservação">Condição de Preservação</Label>
                    <Input 
                        type="textarea" 
                        name="condicao_de_preservação" 
                        id="condicao_de_preservação"
                        defaultValue={ata?.condicao_de_preservação}
                        onChange={e => handleChange(e)}
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="condicao_documento">Condição do Documento</Label>
                    <Input 
                        type="text" 
                        name="condicao_documento" 
                        id="condicao_documento"
                        defaultValue={ata?.condicao_documento}
                        onChange={e => handleChange(e)}
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="pesquisador">Pesquisador</Label>
                    <Input 
                        type="text" 
                        name="pesquisador" 
                        id="pesquisador"
                        defaultValue={ata?.pesquisador}
                        onChange={e => handleChange(e)}
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="ext_link">Link externo</Label>
                    <Input 
                        type="text" 
                        name="ext_link" 
                        id="ext_link"
                        defaultValue={ata?.ext_link}
                        onChange={e => handleChange(e)}
                        />
                </FormGroup>
                <Button type="submit" className="btn-user">Salvar</Button>
            </Form>
        </Container>
      </>
  )
};

export default Update;