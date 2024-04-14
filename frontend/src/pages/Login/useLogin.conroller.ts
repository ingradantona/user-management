import { useState } from 'react';

export default function UseLoginController() {
  const [email, setEmail] = useState('');

  return {
    email,
    setEmail,
  };
}
