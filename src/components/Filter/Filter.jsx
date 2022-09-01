import { Label, Input } from './Filter.styled'
import { filterContact } from 'redux/contacts/contactSlice';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
    const dispatch = useDispatch();
    const filterName = useSelector(state => state.contacts.filter);

    return (
        <Label>
            Find contacts by name
            <Input
                type="text"
                name="filter"
                value={filterName}
                onChange={e => dispatch(filterContact(e.target.value))}
            />
        </Label>
    );
};

export default Filter;