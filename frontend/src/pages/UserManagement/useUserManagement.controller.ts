import { useState } from 'react';

export default function UseUserManagementController() {
  const [searchParam, setSearchParam] = useState<string>('');
  const [pageParam, setPageParam] = useState(1);

  function onSearch(e: string) {
    setSearchParam(e);
    setPageParam(1);
  }

  return { searchParam, onSearch };
}
