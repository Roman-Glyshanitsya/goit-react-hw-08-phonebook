import PropTypes from 'prop-types';
import { Item, Button, Span } from './ContactItem.styled';
import { useDeleteContactMutation } from 'redux/contactApi';

const ContactItem = ({ id, name, number }) => {
    const [deleteContact] = useDeleteContactMutation();

    return (
        <Item>
            <p  >{name} : <Span>{number}</Span></p>
            <Button type='button' onClick={() => deleteContact(id)}>Delete</Button>
        </Item>)
};

export default ContactItem;

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};