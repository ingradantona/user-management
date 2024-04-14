import { SearchProps } from './types';
import { FiSearch as SearchIcon } from 'react-icons/fi';
import { Container, IconBox } from './styles';

export function Search({ inputWidth, currenteValue, message, onSearch }: SearchProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onSearch(e.target.value);
  }

  return (
    <Container size={inputWidth}>
      <IconBox>
        <SearchIcon />
      </IconBox>
      <input
        type="text"
        placeholder={message ? message : `${'Pesquisa'}`}
        value={currenteValue}
        onChange={handleChange}
      />
    </Container>
  );
}
