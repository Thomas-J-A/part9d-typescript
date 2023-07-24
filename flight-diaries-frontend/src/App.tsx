import { useState, useEffect } from 'react';

import axios from 'axios';

import { NonSensitiveDiaryEntry } from './types';

import Entries from './components/Entries/Entries';

const App = (): JSX.Element => {
  // const [newEntry, setNewEntry] = useState('');
  const [entries, setEntries] = useState<NonSensitiveDiaryEntry[]>([]);

  useEffect(() => {
    const fetchEntries = async () => {
      const res = await axios.get<NonSensitiveDiaryEntry[]>(
        'http://localhost:3000/api/diaries',
      );

      setEntries(res.data);
    };

    void fetchEntries();
  }, []);

  return (
    <div>
      <h1>Diary Entries</h1>
      <Entries entries={entries} />
    </div>
  );
};

export default App;
