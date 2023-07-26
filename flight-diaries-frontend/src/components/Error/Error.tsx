import * as S from './Error.styled';

interface ErrorProps {
  msg: string;
}

const Error = ({ msg }: ErrorProps) => {
  return <S.Error>{msg}</S.Error>;
};

export default Error;
