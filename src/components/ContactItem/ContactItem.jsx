import PropTypes from 'prop-types';
import { Item, Button, Span } from './ContactItem.styled';
import { useDeleteContactMutation } from 'redux/contacts/contactApi';

const ContactItem = ({ id, name, number }) => {
    const [deleteContact, {isLoading}] = useDeleteContactMutation();

    return (
        <Item>
            <p  >{name} : <Span>{number}</Span></p>
            <Button type='button' disabled={isLoading} onClick={() => deleteContact(id)}>Delete</Button>
        </Item>)
};

export default ContactItem;

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};