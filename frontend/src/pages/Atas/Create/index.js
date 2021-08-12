import React, {useEffect, useState} from 'react';
import {Container, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import api from '../../../services/api';
import Header from '../../../components/Header';
import './style.css';

function Create() {
    const formData = new FormData();
    const user_id = localStorage.getItem('id');
    const [fundo, setFundo] = useState();
    const [gestao, setGestao] = useState();
    const [n_doc, setNDoc] = useState();
    const [colecao, setColecao] = useState();
    const [descricao, setDescricao] = useState();
    const [resumo, setResumo] = useState();
    const [observacao, setObservacao] = useState();
    const [data_doc, setDataDoc] = useState();
    const [folhas, setFolhas] = useState();
    const [palavras_chave, setPalavrasChave] = useState();
    const [condicao_preservacao, setCPreservacao] = useState();
    const [condicao_documento,setCDocumento] = useState();
    const [pesquisador, setPesquisador] = useState();
    const [data_catalogacao, setDataCat] = useState();
    const [pdf_link, setPdfLink] = useState();
    const [ext_link, setExtLink] = useState();
    const [created, setCreated] = useState();    

    async function handleCadastro(e){
        e.preventDefault();
        formData.append('gestao', gestao)
        formData.append('fundo', fundo)
        formData.append('n_doc', n_doc)
        formData.append('colecao', colecao)
        formData.append('descricao', descricao)
        formData.append('resumo', resumo)
        formData.append('observacao', observacao)
        formData.append('data_doc', data_doc)
        formData.append('folhas', folhas)
        formData.append('palavras_chave', palavras_chave)
        formData.append('condicao_de_preservacao', condicao_preservacao)
        formData.append('condicao_documento', condicao_documento)
        formData.append('pesquisador', pesquisador)
        formData.append('data_catalogacao', data_catalogacao)
        formData.append('file', pdf_link)
        formData.append('ext_link', ext_link)
        formData.append('user_id', user_id)

        try {
          await api.post('ata', formData, {
            headers: {
                "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
            }
        }).then(response => {
	    setCreated(response.data.success);
	    document.getElementById('create-form').reset();
	    window.scrollTo(0, 0);
	});
          
        } catch (error) {
          console.log(error)
        }
      }
  return (
      <>
        <Header/>
        <div className="back-button">
	    <Link to="/1">
		<Button color="danger">Voltar para Tela Principal</Button>
	    </Link>
	</div>
	<h1 className="text-center">Novo Documento</h1>
	{created && 
	<div className="created">
	    <p>{created}</p>
	</div>
	}
	
        <Container className="d-flex justify-content-center">
            <Form id="create-form" fluid className="w-75" onSubmit={handleCadastro}>
               <FormGroup>
                    <Label for="gestao">Gestao</Label>
                    <Input 
                        type="text" 
                        name="gestao" 
                        id="gestao"
                        onChange={e => setGestao(e.target.value)}
                        required/>
                </FormGroup>
                <FormGroup>
                    <Label for="fundo">Fundo</Label>
                    <Input 
                        type="text" 
                        name="fundo" 
                        id="fundo"
                        onChange={e => setFundo(e.target.value)}
                        required/>
                </FormGroup>
                <FormGroup>
                    <Label for="n_doc">N_Doc</Label>
                    <Input 
                        type="text" 
                        name="n_doc" 
                        id="n_doc"                        
                        onChange={e => setNDoc(e.target.value)}
                        required
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="colecao">Coleção</Label>
                    <Input 
                        type="text" 
                        name="colecao" 
                        id="colecao"
                        onChange={e => setColecao(e.target.value)}
                        required/>
                </FormGroup>
                <FormGroup>
                    <Label for="descricao">Descrição</Label>
                    <Input 
                        type="textarea" 
                        name="descricao" 
                        id="descricao"
                        onChange={e => setDescricao(e.target.value)}
                        required/>
                </FormGroup>
                <FormGroup>
                    <Label for="observacao">Observação</Label>
                    <Input 
                        type="textarea" 
                        name="observacao" 
                        id="observacao"                    
                        onChange={e => setObservacao(e.target.value)}
                        required/>
                </FormGroup>
                <FormGroup>
                    <Label for="data_doc">Data Documento</Label>
                    <Input 
                        type="date" 
                        name="data_doc" 
                        id="data_doc"
                        onChange={e => setDataDoc(e.target.value)}
                        required/>
                </FormGroup>
                <FormGroup>
                    <Label for="folhas">Folhas</Label>
                    <Input 
                        type="number" 
                        name="folhas" 
                        id="folhas"
                        onChange={e => setFolhas(e.target.value)}
                        required/>
                </FormGroup>
                <FormGroup>
                    <Label for="palavras_chave">Palavras Chave</Label>
                    <Input 
                        type="text" 
                        name="palavras_chave" 
                        id="palavras_chave"
                        onChange={e => setPalavrasChave(e.target.value)}
                        required/>
                </FormGroup>
                <FormGroup>
                    <Label for="resumo">Resumo</Label>
                    <Input 
                        type="textarea" 
                        name="resumo" 
                        id="resumo"
                        onChange={e => setResumo(e.target.value)}
                        required/>
                </FormGroup>
                <FormGroup>
                    <Label for="condicao_de_preservacao">Condição de Preservação</Label>
                    <Input 
                        type="textarea" 
                        name="condicao_de_preservacao" 
                        id="condicao_de_preservacao"
                        onChange={e => setCPreservacao(e.target.value)}
                        required/>
                </FormGroup>
                <FormGroup>
                    <Label for="condicao_documento">Condição do Documento</Label>
                    <Input 
                        type="textarea" 
                        name="condicao_documento" 
                        id="condicao_documento"
                        onChange={e => setCDocumento(e.target.value)}
                        required/>
                </FormGroup>
                <FormGroup>
                    <Label for="pesquisador">Pesquisador</Label>
                    <Input 
                        type="text" 
                        name="pesquisador" 
                        id="pesquisador"
                        onChange={e => setPesquisador(e.target.value)}
                        required/>
                </FormGroup>
                <FormGroup>
                    <Label for="data_catalogacao">Data Catalogação</Label>
                    <Input
                        type="date" 
                        name="data_catalogacao" 
                        id="data_catalogacao"
                        onChange={e => setDataCat(e.target.value)}
                        required/>
                </FormGroup>
                <FormGroup>
                    <Label for="pdf_link">PDF</Label>
                    <br/>
                    <Input 
                        type="file" 
                        name="pdf_link" 
                        id="pdf_link"
                        onChange={e => setPdfLink(e.target.files[0])}
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="ext_link">Link Externo</Label>
                    <Input 
                        type="url" 
                        name="ext_link" 
                        id="ext_link"
                        onChange={e => setExtLink(e.target.value)}
                        />
                </FormGroup>
                
                <Button type="submit" color="success" className="mt-2">Salvar</Button>
            </Form>
        </Container>
      </>
  )
};

export default Create;
