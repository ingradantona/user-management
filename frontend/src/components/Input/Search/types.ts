import { InputHTMLAttributes } from 'react';

export type SearchProps = {
  inputWidth?: string;
  onSearch: (value: string) => void;
  currenteValue?: string;
  message?: string;
} & InputHTMLAttributes<HTMLInputElement>;
