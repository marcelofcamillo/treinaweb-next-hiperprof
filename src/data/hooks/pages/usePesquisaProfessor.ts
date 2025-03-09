import { ProfessorInterface } from '@data/@types/professor';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ApiService } from '@data/services/ApiService';
import { AxiosResponse } from 'axios';

export default function usePesquisaProfessor() {
  const router = useRouter(),
    [professores, setProfessores] = useState<ProfessorInterface[]>();

  useEffect(() => {
    ApiService.get('/api/professores')
      .then(({ data }: AxiosResponse<ProfessorInterface[]>) => {
        setProfessores(data);
      })
      .catch(() => setProfessores([]));
  }, []);

  return {
    professores,
  };
}
