import React, { useState, useEffect  } from "react";
import { FiPower, FiArchive, FiEdit, FiTrash2, FiArrowLeft } from 'react-icons/fi';
import TestPerfil from '../../assets/pefil-example.png';


import { Container } from './styles';


const Type: React.FC = () => {

    return(
        <Container>
            <header>
                <img src={TestPerfil}  alt="name" />

                <span>Tipos de Exame</span>
                <a href="/profile">
                <FiArrowLeft />
                    Voltar
                </a>
                <a className="headerNewBtn" href="/newtype">Cadastrar Tipo do Exame</a>

                <button className="headerBtn" onClick={() => { }}>
                <FiPower size={18} color="#FFF" />  
                </button>
            </header>

            <h1>Tipos de Exames Cadastrados</h1>
            <div>
                <table>
                    <tr>
                        <th>Tipo do Exame</th>
                        <th>Ações</th>
                    </tr>
                    <tr>
                        <td>Sangue</td>
                        <td>
                            <button className="actionEditBtn" onClick={() => { }}>
                                <FiEdit size={18} color="#FFF" />  
                            </button>
                            <button className="actionDelBtn" onClick={() => { }}>
                                <FiTrash2 size={18} color="#FFF" />  
                            </button>
                        </td>
                     </tr>
                     <tr>
                        <td>Colesterol</td>
                        <td>
                            <button className="actionEditBtn" onClick={() => { }}>
                                <FiEdit size={18} color="#FFF" />  
                            </button>
                            <button className="actionDelBtn" onClick={() => { }}>
                                <FiTrash2 size={18} color="#FFF" />  
                            </button>
                        </td>
                     </tr>
                     
                </table>
            </div>
        </Container>
            
    );
}

export default Type;