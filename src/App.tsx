import './App.css';
import styled from 'styled-components';
import { Form } from './components/Form/Form';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 16px;
  border-radius: 16px;
`;
function App() {
  return (
    <Wrapper>
      <Form />
    </Wrapper>
  );
}

export default App;
