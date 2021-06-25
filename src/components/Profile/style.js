import styled from 'styled-components';

export const SkillsParent = styled.div`
  padding: 30px 0;
  text-align: center;
`;

export const Desc = styled.p`
  margin: 20px 0;
`;

export const SkillInfo = styled.div`
  margin: 30px 0;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
  margin-bottom: 7px;
`;

export const Percent = styled.div`
  background: #d8d7d7;
  height: 3px;
`;

export const PercentColor = styled.p`
  background: #eb5424;
  width: ${props => props.percent}%;
  height: 100%;
`;