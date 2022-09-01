import { Label, Input } from './Filter.styled'
import { filterContact } from 'redux/contactSlice';
import { useDispatch } from 'react-redux';

const Filter = () => {
    const dispatch = useDispatch();

    return (
        <Label>
            Find contacts by name
            <Input
                type="text"
                name="filter"
                onChange={e => dispatch(filterContact(e.target.value))}
            />
        </Label>
    );
};

export default Filter;