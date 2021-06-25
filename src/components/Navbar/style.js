import styled from 'styled-components';
export const NavbarSection = styled.nav`
    padding: 20px 0;
    border-bottom: 1px solid #717171;
`;

export const NavFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const List = styled.li`
    display: inline-block;
    margin: 0px 20px;
    & a {
        text-decoration: none;
        color: black;
        font-weight: bold;
        cursor:pointer;
        &:hover {
            color: #eb5424;
        }
    }
    & a.active { 
        color: #ff3131;
    }
`;