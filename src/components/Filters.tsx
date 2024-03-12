import { FILTERS_BUTTONS } from '../const';
import { type FilterValue } from '../types';

interface Props {
  filterSelected: FilterValue;
  onFilterChange: (filter: FilterValue) => void;
}

const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  return (
    <ul className="filters">
      {Object.entries(FILTERS_BUTTONS).map(([key, { literal }]) => {
        return (
          <li key={key}>
            <a
              className={`${filterSelected === key ? 'selected' : ''}`}
              onClick={(event) => {
                event.preventDefault();
                onFilterChange(key as FilterValue);
              }}
            >
              {literal}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default Filters;
