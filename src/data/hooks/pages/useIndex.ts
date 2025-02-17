import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';

export default function useIndex() {
  const router = useRouter();
  const [search, setSearch] = useState<string>('');
  const [messageError, setMessageError] = useState<string>('');

  function onBuscarProfessor(event: FormEvent) {
    event.preventDefault();

    if (search.length >= 3) {
      router.push('/pesquisa-professor');
    } else {
      setMessageError('Mínimo de 3 caracteres.');
    }
  }

  return {
    setSearch,
    messageError,
    onBuscarProfessor,
  };
}
