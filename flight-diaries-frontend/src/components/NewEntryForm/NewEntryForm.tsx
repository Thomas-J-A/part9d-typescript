import { useState } from 'react';
import axios from 'axios';
import { NewDiaryEntry, NonSensitiveDiaryEntry } from '../../types';

export interface NewEntryFormProps {
  setEntries: React.Dispatch<React.SetStateAction<NonSensitiveDiaryEntry[]>>;
}

const NewEntryForm = ({ setEntries }: NewEntryFormProps) => {
  const [date, setDate] = useState('');
  const [visibility, setVisibility] = useState('');
  const [weather, setWeather] = useState('');
  const [comment, setComment] = useState('');

  const addNewEntry = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    const newEntry = {
      date,
      visibility,
      weather,
      comment,
    };

    // Send data to backend
    const res = await axios.post<NonSensitiveDiaryEntry>(
      'http://localhost:3000/api/diaries',
      newEntry,
    );

    // Update local state
    setEntries((prev) => [...prev, res.data]);

    // Reset input fields
    setDate('');
    setVisibility('');
    setWeather('');
    setComment('');
  };

  return (
    <div>
      <h2>Add New Entry</h2>
      <form onSubmit={addNewEntry}>
        <div>
          <label>
            Date:
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Visibility:
            <input
              type="text"
              value={visibility}
              onChange={(e) => setVisibility(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Weather:
            <input
              type="text"
              value={weather}
              onChange={(e) => setWeather(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Comment:
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NewEntryForm;
