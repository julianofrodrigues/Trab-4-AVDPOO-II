import React, { useState, useEffect  } from "react";
import { FiPower, FiArchive, FiEdit, FiTrash2 } from 'react-icons/fi';
import Logo from '../../assets/logo.png';
import { Container } from './styles';



const Index: React.FC = () => {
    

    return(
        <Container>
            <header>
                <img src={Logo}  alt="name" />
                <a href="/new">Cadastrar Exames</a>
            </header>

            <h1>Exames Cadastrados</h1>
            <div>
                <table>
                    <tr>
                        <th>Nome do Medico</th>
                        <th>Nome do Paciente</th>
                        <th>Ações</th>
                    </tr>
                    <tr>
                        <td>Lucas</td>
                        <td>Juliano</td>
                        <td>
                            <button className="actionDetailBtn" onClick={() => { }}>
                                <FiArchive size={18} color="#FFF" />  
                            </button>
                            <button className="actionEditBtn" onClick={() => { }}>
                                <FiEdit size={18} color="#FFF" />  
                            </button>
                            <button className="actionDelBtn" onClick={() => { }}>
                                <FiTrash2 size={18} color="#FFF" />  
                            </button>
                        </td>
                     </tr>
                     <tr>
                        <td>Juliano</td>
                        <td>Lucas</td>
                        <td>
                            <button className="actionDetailBtn" onClick={() => { }}>
                                <FiArchive size={18} color="#FFF" />  
                            </button>
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

export default Index;