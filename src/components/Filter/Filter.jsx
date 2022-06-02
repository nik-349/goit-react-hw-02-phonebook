import PropType from 'prop-types';
import style from './Filter.module.css';

const Filter = ({ filterChangeInput, value }) => {
  return (
    <label>
      {/* Search my contacts */}
      <input
        className={style.input__info}
        value={value}
        type="text"
        placeholder="Search"
        onChange={filterChangeInput}
      />
    </label>
  );
};

Filter.propType = {
  filter: PropType.string.isRequired,
  filterChangeInput: PropType.func.isRequired,
};

export default Filter;
