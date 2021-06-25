import styled from 'styled-components';

export const SocialSection = styled.section`
  display: grid;
  grid-template: 'item item item';
  color: white;
  @media (max-width:800px) {
    grid-template: 'item';
  }
`;

export const SocialItem = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.backColor === 1 ? '#0a3e8c' : ''};
  background: ${props => props.backColor === 2 ? '#3b6bb3' : ''};
  background: ${props => props.backColor === 3 ? '#c74646' : ''};
`;

export const Scale = styled.div`
  display: flex;
  align-items: center;
  cursor:pointer;
  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: scale(1.4)
  }
`;

export const SocialIcon = styled.i`
  background: white;
  color: gray;
  padding: 15px;
  border-radius: 1px;
  margin: 0 10px;
`;

export const SocialDesc = styled.p`
  display: flex;
  flex-direction: column;
  line-height: 1.8;
  & span:first-child {
    font-weight: bold;
  }
`;
