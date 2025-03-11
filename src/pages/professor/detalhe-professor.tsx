import PageTitle from '@components/data-display/PageTitle';
import { Button, Container, Typography } from '@mui/material';
import {
  BoxCardProfessor,
  BoxDescription,
  BoxImage,
} from '@styles/pages/professor/detalhe-professor.styled';

export default function DetalheProfessorPage() {
  return (
    <Container>
      <PageTitle
        title='Detalhes do professor'
        subtitle='Veja os detalhes do professor e verifique se ele é o ideal para você se candidatar a uma aula'
      />
      <BoxCardProfessor>
        <BoxImage foto={'https://github.com/marcelofcamillo.png'} />
        <BoxDescription>
          <div className='box_esquerda'>
            <Typography variant='h6'>Nome</Typography>
            <Typography
              variant='body2'
              paragraph
              className='descricao'
              sx={{ my: 2 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              excepturi perferendis asperiores molestias unde, iste corrupti,
              aut expedita eaque dolorum iure enim quo doloremque ipsum labore
              tempora maxime quos ea! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Error corrupti est enim expedita adipisci?
              Vitae, beatae rerum enim consequuntur labore repellendus omnis
              quam dolore odit qui illo officiis, assumenda ut.
            </Typography>
          </div>
          <div className='box_direita'>
            <Typography variant='body2' sx={{ my: 2 }}>
              PREÇO HORA/AULA
            </Typography>
            <Typography variant='h4' paragraph>
              25/10/2022
            </Typography>
            <Button variant='outlined' color='inherit' onClick={() => {}}>
              Contratar
            </Button>
          </div>
        </BoxDescription>
      </BoxCardProfessor>
    </Container>
  );
}
