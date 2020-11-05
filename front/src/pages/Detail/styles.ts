import styled from 'styled-components';
import { shade } from 'polished';



export const Container = styled.div`
    width: 100%;
    max-width: 1180px;
    padding: 0 30px;
    margin: 32px auto;

    header{
        display: flex;
        align-items: center;
    }

    header img{
        max-width: 100px;
        height: 100px;
    }
    span{
        font-size: 20px;
        margin-left: 24px;
    }
    header a{
        text-decoration: none;
        text-align: center;
        font-weight: bold;
        font-family: Arial;

        display: block;
        height: 40px;
        line-height: 40px;
        padding: 10px 5px;
    
        width: 260px;
        margin-left: auto;
        margin-top: 0;
        height: 60px;
        background: #b38f00;
        border-radius: 10px;
        color: #FFF;

        &: hover {
            background: ${shade(0.2, '#b38f00')};  
        }
    }
    header button {
        height: 60px;
        width: 60px;
        border-radius: 4px;
        border: 1px solid #dcdce6;
        background: transparent;
        margin-left: 16px;
        transition: border-color 0.2s;
        background: #E02041;
    }
    header button:hover{
        border-color: #999 ;
    }

    .detail{
        margin: 80px auto;
        padding: 64px;
        max-width: 730px;
        background: #FFF;
        border-radius: 8px;
        color: black;
        display: flex;
        flex-direction: column;
    }

    .detail fieldset{
        margin-top: 10px;
        min-inline-size: auto;
        border: 0;
    }

    .detail legend{
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 40px;
    }

    .detail legend h2{
        font-size: 24px;
        
    }
    .detail div{
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-bottom: 20px;
    }
    .detail img{
        max-width: 100px;
        height: 100px;
    }
    .detail p{
        margin-bottom: 20px;
    }
    
    

`;
