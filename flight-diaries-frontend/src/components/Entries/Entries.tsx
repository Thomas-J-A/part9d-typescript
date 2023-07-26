import Entry from './Entry/Entry';
import { NonSensitiveDiaryEntry } from '../../types';

interface EntriesProps {
  entries: NonSensitiveDiaryEntry[];
}

const Entries = ({ entries }: EntriesProps): JSX.Element => {
  if (!entries) return <p>There are no entries.</p>;

  return (
    <div>
      <h2>Diary Entries</h2>
      <ul>
        {entries.map((entry) => (
          <Entry key={entry.id} entry={entry} />
        ))}
      </ul>
    </div>
  );
};

export default Entries;
