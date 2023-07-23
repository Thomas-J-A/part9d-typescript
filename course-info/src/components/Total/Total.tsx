import { CourseParts } from '../../types';

const Total = ({ courseParts }: CourseParts): JSX.Element => {
  const countTotal = courseParts.reduce(
    (carry, part) => carry + part.exerciseCount,
    0,
  );

  return <p>{`Number of exercises: ${countTotal}`}</p>;
};

export default Total;
