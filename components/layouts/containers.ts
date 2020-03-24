import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;
  background-color: ${({theme}) => theme.colors.white};
  overflow-x: hidden;
  padding: 0 20px;
`;

export const Children = styled.div`
  flex: 1;
  overflow: hidden;
`;

export const Page = styled.main``;
