import styled from 'styled-components';

export const ContactSection = styled.section`
  background: #eb542461;
  height: calc(100vh - 140px);
  display: flex;
`;

export const Grid = styled.div`
  display: grid;
  grid-template: 'item item';
  grid-gap: 10px;
  @media (max-width:800px) {
    grid-template: 'item';
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  margin: 5px 0;
  padding: 10px;
  height: 200px;
`;

export const Input = styled.input`
  width: 100%;
  margin: 5px 0;
  padding: 10px;
`;

export const InputSubmit = styled(Input)`
  background: #eb5424;
  color: white;
  border: none;
  border-radius: 3px;
  width: 50%;
  margin: auto;
  display: block;
  cursor: pointer;
  transition: color 0.3s ease-in-out , 
  background 0.3s ease-in-out;
  &:hover {
    color: #eb5424;
    background: white;
  }
`;
