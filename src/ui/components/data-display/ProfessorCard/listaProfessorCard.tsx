import ProfessorCard from '.';
import { BoxCardItemStyled, ListStyled } from './styles';

export interface ListaProfessorCardProps {
  professores: { id: number }[];
}

export default function ListaProfessorCard({
  professores,
}: ListaProfessorCardProps) {
  return (
    <ListStyled>
      {professores.map((professor) => {
        return (
          <BoxCardItemStyled key={professor.id}>
            <ProfessorCard />
          </BoxCardItemStyled>
        );
      })}
    </ListStyled>
  );
}
