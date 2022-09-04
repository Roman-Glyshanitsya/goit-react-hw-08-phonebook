import { filterSlice } from 'redux/contacts';
import { useDispatch, useSelector } from 'react-redux';
import { Label, Input } from './Filter.styled'

const Filter = () => {
    const dispatch = useDispatch();
    const filterName = useSelector(filterSlice.getFilter);

    const changeFilter = e => {
        dispatch(filterSlice.filterContact(e.currentTarget.filterName));
    };

    return (
        <Label>
            Find contacts by name
            <Input
                type="text"
                name="filter"
                value={filterName}
                onChange={changeFilter}
            />
        </Label>
    );
};

export default Filter;