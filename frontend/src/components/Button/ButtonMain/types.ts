import { ButtonHTMLAttributes } from 'react';

export type ButtonMainProps = {
  label?: string;
  width?: string;
  height?: string;
  $secondaryStyle?: boolean;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
