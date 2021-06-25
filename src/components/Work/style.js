import styled from 'styled-components'

export const HeadLine = styled.h2`
    margin: 30px 0;
    font-size: 40px;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-areas: 'item item item';
    grid-gap: 50px;
    @media (max-width:800px) {
        grid-template-areas: 'item';
    }
`;

export const WorkPart = styled.div`
    border: 1px solid #909090;
    text-align: center;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Icon = styled.i`
    color: #5e5e5e;
    margin-bottom: 50px;
`;

export const WorkTitle = styled.h4`
    font-size: 25px;
    color: #eb5424;
`;

export const Line = styled.hr`
    border: 0;
    border-bottom: 1px solid #9a9898;
    width: 50%;
    margin: 20px auto;
`;