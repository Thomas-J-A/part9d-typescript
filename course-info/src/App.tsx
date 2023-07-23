import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Total from './components/Total/Total';

import { courseParts } from './data/course-parts';

const App = () => {
  const courseName = 'Half Stack application development';

  return (
    <div>
      <Header courseName={courseName} />
      <Content courseParts={courseParts} />
      <Total courseParts={courseParts} />
    </div>
  );
};

export default App;
