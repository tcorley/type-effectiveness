import { h } from 'preact';
import { useState } from 'preact/hooks';

import TypeToggle from '../TypeToggle';
import types from '../../data/types';
import { Type } from '../../types/d';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  boundary: {
    display: 'flex',
    flexWrap: 'wrap',
    border: '1px solid white'
  }
});

interface Props {
  onSelect: (arg0: Type) => void;
  selected: Type[];
}

const TypeSelector = ({ onSelect, selected }: Props) => {
  const { boundary } = useStyles();

  function handleSelect(type: Type) {
    onSelect(type);
  }

  return (
    <div className={boundary}>
      {types.map((type: any) => (
        <TypeToggle
          type={type}
          onChange={handleSelect}
          selected={selected.filter(i => i.name === type.name).length === 1}
          disabled={selected.length === 2}
        />
      ))}
    </div>
  );
};

export default TypeSelector;
