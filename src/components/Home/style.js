import styled from 'styled-components';

export const HomeSection = styled.section`
    background: url('images/Home/home-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    text-align: center;
    height: calc(100vh - 72px);
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h2`
    margin-bottom: 30px;
    font-size: 60px;
    color: #5e5e5e;
`;

export const Job = styled.h4`
    font-size:20px;
    color: #eb5424;
    font-weight:bold;
`;

export const Desc = styled.p`
    margin: 10px 0 15px;
    color: #5e5e5e;
    font-size:18px;
`;

export const Span = styled.span`
    color: #000;
`;

export const Btn = styled.button`
    background: #eb5424;
    border: none;
    padding: 10px 20px;
    color: white;
    font-weight: bold;
    border-radius: 2px;
    cursor: pointer;
    transition: color 0.3s ease-in-out,
    background 0.3s ease-in-out;

    &:hover {
        background: white;
        color: #eb5424;
    }
`;