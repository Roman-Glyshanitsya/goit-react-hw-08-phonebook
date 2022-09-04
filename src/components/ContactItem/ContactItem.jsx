import { contactApi } from 'redux/contacts';
import { LoaderMini } from 'components/Loader/Loader';
import { Item, Button, Span } from './ContactItem.styled';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number }) => {
    const [deleteContact, {isLoading: isDeleting}] = contactApi.useDeleteContactMutation();

    return (
        <Item>
            <p  >{name} : <Span>{number}</Span></p>
            <Button type='button' disabled={isDeleting} onClick={() => deleteContact(id)}>
                {isDeleting ? <LoaderMini /> : <span>Delete</span>}
            </Button>
        </Item>
    );
};

export default ContactItem;

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};