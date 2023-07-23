import { PartProps } from '../../types';

import { assertNever } from '../../helpers/assertNever';

const Part = ({ part }: PartProps): JSX.Element | null => {
  switch (part.kind) {
    case 'basic':
      return (
        <div>
          <b>{`${part.name} | ${part.exerciseCount}`}</b>
          <p>
            <i>{part.description}</i>
          </p>
        </div>
      );
    case 'group':
      return (
        <div>
          <b>{`${part.name} | ${part.exerciseCount}`}</b>
          <p>{`Project Count: ${part.groupProjectCount}`}</p>
        </div>
      );
    case 'background':
      return (
        <div>
          <b>{`${part.name} | ${part.exerciseCount}`}</b>
          <p>
            <i>{part.description}</i>
          </p>
          <p>
            Background Material: <a href="#">{`${part.backgroundMaterial}`}</a>
          </p>
        </div>
      );
    case 'special':
      return (
        <div>
          <b>{`${part.name} | ${part.exerciseCount}`}</b>
          <p>
            <i>{part.description}</i>
          </p>
          <p>{`Required skills: ${part.requirements.join(', ')}`}</p>
        </div>
      );
    default:
      return assertNever(part);
  }
};

export default Part;
