import { CourseParts } from '../../types';

const Content = ({ courseParts }: CourseParts): JSX.Element => {
  const coursePartsList = (
    <>
      {courseParts.map((x, i) => (
        <p key={i}>{`${x.name} ${x.exerciseCount}`}</p>
      ))}
    </>
  );

  return coursePartsList;
};

export default Content;
