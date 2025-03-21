import {
  PageSubtitleStyled,
  PageTitleContainer,
  PageTitleStyled,
} from './styles';
import { TypographyProps } from '@mui/material';

export interface PageTitleProps extends Omit<TypographyProps, 'title'> {
  title: string;
  subtitle?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({
  title,
  subtitle,
  color = 'primary',
}) => {
  return (
    <PageTitleContainer>
      <PageTitleStyled color={color}>{title}</PageTitleStyled>
      <PageSubtitleStyled>{subtitle}</PageSubtitleStyled>
    </PageTitleContainer>
  );
};

export default PageTitle;
