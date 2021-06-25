import styled from 'styled-components';

export const AboutSection = styled.section`
  background: url(images/creative/about-bg.jpg);
  background-attachment: fixed;
  padding: 150px 0;
`;

export const AboutWrapper = styled.div`
  width: 50%;
  margin-left: auto;
  @media (max-width:800px){
    width: 100%;
  }
`;

export const AboutTitle = styled.h2`
  color: #eb5424;
  margin-bottom: 20px;
  font-size: 35px;
`;

export const AboutDesc = styled.p`
  margin: 15px 0;
  line-height: 2;
  letter-spacing: 1px;
`;
