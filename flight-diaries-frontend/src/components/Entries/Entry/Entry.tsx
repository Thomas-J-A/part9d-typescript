import { NonSensitiveDiaryEntry } from '../../../types';

interface EntryProps {
  entry: NonSensitiveDiaryEntry;
}

const Entry = ({ entry }: EntryProps) => {
  return (
    <li key={entry.id}>
      <b>{entry.date}</b>
      <p>{`Visibility: ${entry.visibility}`}</p>
      <p>{`Weather: ${entry.weather}`}</p>
    </li>
  );
};

export default Entry;
