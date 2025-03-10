import { ProfessorInterface } from '@data/@types/professor';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ApiService } from '@data/services/ApiService';
import { AxiosResponse } from 'axios';
import { Router } from '@routes/routes';

export default function usePesquisaProfessor() {
  const router = useRouter(),
    [search, setSearch] = useState<string>(router.query.search as string),
    [professores, setProfessores] = useState<ProfessorInterface[]>(),
    [timeoutRef, setTimeoutRef] = useState<NodeJS.Timeout>();

  useEffect(() => {
    ApiService.get('/api/professores', {
      params: { q: search as string },
    })
      .then(({ data }: AxiosResponse<ProfessorInterface[]>) => {
        setProfessores(data);
      })
      .catch(() => setProfessores([]));
  }, [search]);

  function onSearch(value: string) {
    clearTimeout(timeoutRef);

    const time = setTimeout(() => {
      console.log(value);
      setSearch(value);
    }, 1000);

    setTimeoutRef(time);

    Router.pesquisaProfessor.push(router, value);
  }

  return {
    professores,
    onSearch,
  };
}
