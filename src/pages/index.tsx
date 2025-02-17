import PageTitle from '@components/data-display/PageTitle';
import useIndex from '@data/hooks/pages/useIndex';
import { TextField, Icon, Button } from '@mui/material';
import { BoxButtons, HomeContainer } from '@styles/pages/index.styles';

export default function Home() {
  const { setSearch, messageError, onBuscarProfessor } = useIndex();

  return (
    <HomeContainer onSubmit={onBuscarProfessor}>
      <PageTitle
        title='ENCONTRE O PROFESOR IDEAL PARA VOCÊ!'
        subtitle='Pesquise pelo professor ideal para você'
      />
      <TextField
        sx={{ mt: 3, mb: 1 }}
        label={'Encontre um professor'}
        error={messageError.length > 0}
        helperText={messageError}
        InputProps={{ startAdornment: <Icon sx={{ mr: 1 }}>search</Icon> }}
        onChange={({ target: { value } }) => setSearch(value)}
        fullWidth
        required
      />

      <BoxButtons>
        <Button variant='contained' type='submit'>
          Buscar o professor perfeito
        </Button>
      </BoxButtons>
    </HomeContainer>
  );
}

// 04:20
