import styled from 'styled-components';

export const PortfolioSection = styled.section`
  background: #f3f3f3;
  margin-top: 50px;
  text-align: center;
  padding: 50px 0;
`;

export const Title = styled.h2`
  font-size: 35px;
`;

export const List = styled.li`
  display: inline-block;
  margin: 30px 10px;
  font-weight: bold;
  cursor: pointer;
  padding: 10px 25px;
  border-radius: 2px;
  background: ${props => props.activeOsama ? '#eb5424' : '' };
  color: ${props => props.activeOsama ? 'white' : '' };
  ${props => props.activeOsama ? '&:hover{color: #eb5424;background: white;}' : '' }
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-areas:'item item item item';
  @media (max-width:800px) {
    grid-template-areas:'item item';
  }
`;

export const ImagePart = styled.div`
  position: relative;
  cursor: pointer;
  &:hover p{
    opacity: 1;
    visibility: visible;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const OverLay = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #017eff38;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out;
`;

export const OverLaySpan = styled.span`
  background: #eb5424;
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  transition: color 0.3s ease-in-out , 
  background 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #eb5424;
    background: white;
  }
`;
