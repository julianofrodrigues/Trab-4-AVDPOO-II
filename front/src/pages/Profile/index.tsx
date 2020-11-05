import React, { useState, useEffect  } from "react";
import { FiPower, FiArchive, FiEdit, FiTrash2 } from 'react-icons/fi';
import TestPerfil from '../../assets/pefil-example.png';
import { Container } from './styles';
import api from '../../services/api';
import { useCookies } from 'react-cookie';
import { Event } from "../../services/interfaces";
import { useHistory, useLocation } from 'react-router-dom';

const Profile: React.FC = () => {
    // const history = useHistory();
    // const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
    // const [data, setData] = useState<Event[]>([]);

    // const load = async () => {
    //     await api
    //       .get('events', {params: cookies.user})
    //       .then(({ data }) => {
    //         console.log(cookies.user)
    //         setData(data.docs)
    //       })
    // }
    // useEffect(() => {
    //   load()}, [])

    // const handleDelete = async (codigo: String) => {
    //     try {
    //         await api.delete(`events/${codigo}?user_id=${cookies.user._id}`)

    //         alert('Cadastro deletado com sucesso.')
    //         load()

    //     } catch (err) {
    //         alert('Erro ao deletar registro.')
    //     }
    // }

    // const handleLogout = async () => {
    //     removeCookie('user')
    //     history.push('/')
    // }

    // const handleFeedback = async (codigo: String, status: Number) => {
    //     try {
    //         let form = {
    //             user_id: cookies.user._id,
    //             event_id: codigo,
    //             status: status,
    //         }
    //         await api({
    //             method: 'post',
    //             url: `events/${codigo}/feedback`,
    //             data: form,
    //             })
    //         load()

    //     } catch (err) {
    //         alert('Erro ao alterar registro.')
    //     }
    // }

    return(
        <Container>
            <header>
                <img src={TestPerfil}  alt="name" />

                <span>Bem vindo, usuario </span>

                <a href="/new">Cadastrar Exame</a>
                <a href="/type" className="headerTypeExame">Tipos de Exame</a>


                <button className="headerBtn" onClick={() => { }}>
                <FiPower size={18} color="#FFF" />  
                </button>
            </header>

            <h1>Exames Cadastrados</h1>
            <div>
                <table>
                    <tr>
                        <th>Nome do Funcionario</th>
                        <th>Tipo do Exame</th>
                        <th>Ações</th>
                    </tr>
                    <tr>
                        <td>Lucas</td>
                        <td>Sangue</td>
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
                        <td>Sangue</td>
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

export default Profile;