import styled from 'styled-components';
import { shade } from 'polished';


export const Container = styled.button`
        background: #129C22;
        height: 56px;
        border-radius: 10px;
        border: 0;
        padding: 0 16px;
        color: #FFF;
        width: 100%;
        font-weight: 500;
        margin-top: 16px;

        &: hover {
            background: ${shade(0.2, '#129C22')};  
        }
`;