import { ContentProps } from '../../types';

import Part from '../Part/Part';

const Content = ({ courseParts }: ContentProps): JSX.Element => {
  const coursePartsList = (
    <div>
      {courseParts.map((x, i) => (
        <Part key={i} part={x} />
      ))}
    </div>
  );

  return coursePartsList;
};

export default Content;
