import React, {useEffect, useState} from 'react';
import { Container } from 'reactstrap';

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
        <h1 className="text-center">Registro</h1>
        <Container className="d-flex justify-content-center row">
            <div>
                <p>Gestão: {ata?.gestao}</p>
            </div>
            <br/>
            <div>
                <p>Fundo: {ata?.fundo}</p>
            </div>
            <br/>
            <div>
                <p>N_Doc: {ata?.n_doc}</p>
            </div>
            <br/>
            <div>
                <p>Coleção: {ata?.colecao}</p>
            </div>
            <br/>
            <div>
                <p>Descrição: {ata?.descricao}</p>
            </div>
            <br/>
            <div>
                <p>Observação: {ata?.observacao}</p>
            </div>
            <br/>
            <div>
                <p>Data_Doc: {ata?.data_doc}</p>
            </div>
            <br/>
            <div>
                <p>Folhas: {ata?.folhas}</p>
            </div>
            <br/>
            <div>
                <p>Palavras Chave: {ata?.palavras_chave}</p>
            </div>
            <br/>
            <div>
                <p>Resumo: {ata?.resumo}</p>
            </div>
            <br/>
            <div>
                <p>Condição de Preservação: {ata?.condicao_de_preservacao}</p>
            </div>
            <br/>
            <div>
                <p>Condição do Documento: {ata?.condicao_documento}</p>
            </div>
            <br/>
            <div>
                <p>Pesquisador: {ata?.pesquisador}</p>
            </div>
            <br/>
            <div>
                <p>Data Catalogação: {ata?.data_catalogacao}</p>
            </div>
            <br/>
            <div>
               <p>PDF: 
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
                    Link externo: 
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