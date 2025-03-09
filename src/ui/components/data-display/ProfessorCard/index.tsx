import { Button, Typography } from '@mui/material';
import { BoxAvatarStyled, BoxContainsStyled, ImageStyled } from './styles';

export default function ProfessorCard() {
  return (
    <>
      <BoxAvatarStyled>
        <ImageStyled src='https://github.com/marcelofcamillo.png' alt='' />
      </BoxAvatarStyled>
      <BoxContainsStyled>
        <div className='text-container'>
          <Typography variant='h6' className='descricao' paragraph>
            Nome
          </Typography>
          <Typography
            sx={{ display: 'flex', alignItems: 'center' }}
            variant='body2'
            className='descricao'
            paragraph
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            culpa reiciendis vel at maxime alias ratione iste minus, nesciunt
            perferendis quam quia eos hic magnam. Rerum sed voluptate reiciendis
            quibusdam! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Vel debitis eius earum dolor illo odit, delectus, voluptatem animi
            quos rerum, natus laborum suscipit quas saepe blanditiis incidunt
            nulla totam quasi?
          </Typography>
        </div>
        <Button variant='outlined' color='inherit' onClick={() => {}}>
          Ver detalhes
        </Button>
      </BoxContainsStyled>
    </>
  );
}
