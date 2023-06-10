import { useDispatch } from 'react-redux';
import { showContactsByName } from 'redux/filter/filterSlice';
import { CommonInput } from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();

  return (
    <CommonInput
      type="text"
      autoComplete="off"
      label="Find contact by name"
      name="filterName"
      onChange={e => {
        return dispatch(showContactsByName(e.target.value));
      }}
    />
  );
}
