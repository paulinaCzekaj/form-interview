import styled from 'styled-components';
import { Form } from './components/Form/Form';
import { DataList } from './components/DataList/DataList';
import DataContextProvider from './contexts/DataContextProvider';
import { Separator } from './components/Separator/Separator.styles';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 32px;
  border-radius: 16px;
  display: flex;
  align-items: stretch;
  min-width: 80%;
  gap: 56px;
`;

function App() {
  return (
    <main>
      <DataContextProvider>
        <Wrapper>
          <Form />
          <Separator />
          <DataList />
        </Wrapper>
      </DataContextProvider>
    </main>
  );
}

export default App;
