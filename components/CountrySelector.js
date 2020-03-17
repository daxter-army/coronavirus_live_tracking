import styled from 'styled-components';
import { useState } from 'react';
import useStats from '../utils/useStats';
import Stats from './Stats';

const ChooseBlock = styled.div`
  margin-top: 1.25rem;
  padding-left: 20px;
  padding-right: 20px;
`;

export default function CountrySelector() {
  const { stats: countries, loading, error } = useStats(
    'https://covid19.mathdro.id/api/countries'
  );
  const [selectedCountry, setSelectedCountry] = useState('IND');
  if (loading) return <p>Loading...</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <ChooseBlock>
    <div>
      <h2>Currently Showing : {selectedCountry}</h2>
      
      <select
        onChange={e => {
          setSelectedCountry(e.target.value);
        }}
      >
        {Object.entries(countries.countries).map(([country, code]) => (
          <option
            selected={selectedCountry === countries.iso3[code]}
            key={code}
            value={countries.iso3[code]}
          >
            {country}
          </option>
        ))}
      </select>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      ></Stats>
    </div>
    </ChooseBlock>
  );
}
