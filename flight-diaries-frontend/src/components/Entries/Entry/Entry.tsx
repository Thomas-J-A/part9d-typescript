import { EntryProps } from '../../../types';

const Entry = ({ entry }: EntryProps): JSX.Element => {
  return (
    <li key={entry.id}>
      <b>{entry.date}</b>
      <p>{`Visibility: ${entry.visibility}`}</p>
      <p>{`Weather: ${entry.weather}`}</p>
    </li>
  );
};

export default Entry;
