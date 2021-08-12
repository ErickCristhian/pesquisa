import React, {useEffect, useState} from 'react';
import { Container, Button } from 'reactstrap';

import { Link } from 'react-router-dom';
import api from '../../../services/api';
import { useHistory, useParams } from 'react-router-dom';
import Header from '../../../components/Header';

function View() {
    const [ata, setAta] = useState('');
    const {id} = useParams();
    const history = useHistory();

    useEffect(()=>{
        api.get('ata/'.concat(id))
        .then(response => {
            setAta(response.data);
            console.log(ata)
        });
    }, [id]);


  return (
      <>
        <Header/>
	<div className="back-button">
            <Link to="/1">
                <Button color="danger">Voltar para Tela Principal</Button>
            </Link>
        </div>

        <h1 className="text-center">Registro</h1>
        <Container className="d-flex justify-content-center row">
            <div>
                <p><b>Gestão:</b> {ata?.gestao}</p>
            </div>
            <br/>
            <div>
                <p><b>Fundo:</b> {ata?.fundo}</p>
            </div>
            <br/>
            <div>
                <p><b>N_Doc:</b> {ata?.n_doc}</p>
            </div>
            <br/>
            <div>
                <p><b>Coleção:</b> {ata?.colecao}</p>
            </div>
            <br/>
            <div>
                <p><b>Descrição:</b> {ata?.descricao}</p>
            </div>
            <br/>
            <div>
                <p><b>Observação:</b> {ata?.observacao}</p>
            </div>
            <br/>
            <div>
                <p><b>Data_Doc:</b> {ata?.data_doc}</p>
            </div>
            <br/>
            <div>
                <p><b>Folhas:</b> {ata?.folhas}</p>
            </div>
            <br/>
            <div>
                <p><b>Palavras Chave:</b> {ata?.palavras_chave}</p>
            </div>
            <br/>
            <div>
                <p><b>Resumo:</b> {ata?.resumo}</p>
            </div>
            <br/>
            <div>
                <p><b>Condição de Preservação:</b> {ata?.condicao_de_preservacao}</p>
            </div>
            <br/>
            <div>
                <p><b>Condição do Documento:</b> {ata?.condicao_documento}</p>
            </div>
            <br/>
            <div>
                <p><b>Pesquisador:</b> {ata?.pesquisador}</p>
            </div>
            <br/>
            <div>
                <p><b>Data Catalogação:</b> {ata?.data_catalogacao}</p>
            </div>
            <br/>
            <div>
               <p><b>PDF:</b> 
                   {ata?.pdf_link != 'N/A' ? 
                   <a href={process.env.REACT_APP_BASE_API + ata?.location + '/' + ata?.pdf_link}>
                    Visualizar
                   </a>
                   : <span>Sem Arquivo</span>
                   }
                   </p>
            </div>
            <br/>
            <div>
                <p>
                    <b>Link externo:</b> 
                    {ata?.ext_link != 'N/A' ? 
                    <a href={ata?.ext_link}>{ata?.ext_link}</a>
                    :    <span>Sem Link Externo</span>
                    }
                    </p>
            </div>
            <br/>
        </Container>
      </>
  )
};

export default View;
