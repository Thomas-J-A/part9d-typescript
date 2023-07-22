import { HeaderProps } from '../../types';

const Header = ({ courseName }: HeaderProps): JSX.Element => {
  return <p>{courseName}</p>;
};

export default Header;
