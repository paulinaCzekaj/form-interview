import { Form } from './components/Form/Form';
import { DataList } from './components/DataList/DataList';
import DataContextProvider from './contexts/DataContextProvider';
import { Separator } from './components/Separator/Separator.styles';
import { StyledWrapper } from './components/Wrapper/Wrapper.styles';

function App() {
  return (
    <main>
      <DataContextProvider>
        <StyledWrapper>
          <Form />
          <Separator />
          <DataList />
        </StyledWrapper>
      </DataContextProvider>
    </main>
  );
}

export default App;
