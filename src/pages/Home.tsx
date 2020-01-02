import { h } from 'preact';
import { useState } from 'preact/hooks';

import TypeSelector from '../components/TypeSelector';
import { Type } from '../types/d';

const Home = () => {
  const [selected, setSelected] = useState([]);
  function handleSelect(type: Type) {
    if (
      selected.filter(selectedType => selectedType.name === type.name)
        .length === 1
    ) {
      setSelected(
        selected.filter(selectedType => selectedType.name !== type.name)
      );
    } else {
      if (selected.length < 2) {
        setSelected([...selected, type]);
      }
    }
  }
  return (
    <div>
      <TypeSelector onSelect={handleSelect} selected={selected} />
      {!!selected.length && (
        <div>
          <div>
            {`Weak to ${selected.map(type => type.weakTo.join(',')).join(',')}`}
          </div>
          <div>
            {`Immune to ${selected
              .map(type => type.immuneTo.join(','))
              .join(',')}`}
          </div>
          <div>
            {`Strong to ${selected
              .map(type => type.resistantAgainst.join(','))
              .join(',')}`}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
