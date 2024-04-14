import { useEffect, useState } from 'react';
import { SearchProps } from './types';
import { FiX as Close, FiSearch as SearchIcon } from 'react-icons/fi';
import { Container, IconBox } from './styles';

export function Search({ inputWidth, currenteValue, message, onSearch }: SearchProps) {
  const [value, setValue] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currenteValue && currenteValue.length > 0) {
        setValue(currenteValue);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [currenteValue]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <Container size={inputWidth}>
      <IconBox>
        <SearchIcon />
      </IconBox>
      <input
        type="text"
        placeholder={message ? message : `${'Pesquisa'}`}
        value={value}
        onChange={handleChange}
      />
      {value && (
        <button
          type="button"
          onClick={() => {
            setValue('');
            onSearch('');
          }}
        >
          <IconBox>
            <Close />
          </IconBox>
        </button>
      )}
    </Container>
  );
}
