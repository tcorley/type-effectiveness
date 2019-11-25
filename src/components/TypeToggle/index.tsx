import { h } from 'preact';
import { Type } from '../../types/d';
import { createUseStyles } from 'react-jss';
import cx from 'classnames';

interface Props {
  type: Type;
  selected?: boolean;
  disabled?: boolean;
  onChange: (arg0: Type) => void;
}

const useStyles = createUseStyles({
  toggle: {
    border: '1px solid white',
    padding: 4,
    margin: 4
  },
  selected: {
    background: 'blue'
  }
});

const TypeToggle = ({ type, selected, disabled, onChange }: Props) => {
  const classes = useStyles();

  function handleChange() {
    onChange(type);
  }

  return (
    <div
      onClick={handleChange}
      className={cx(classes.toggle, { [classes.selected]: selected })}
    >
      {type.name}
    </div>
  );
};

export default TypeToggle;
