import ContactItem from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { useGetContactByNameQuery } from 'redux/contacts/contactApi';

const ContactList = () => {
    const contactItems = useGetContactByNameQuery().data;
    const { filter } = useSelector(state => state.filter);

    const filterContact = () => {
        const visibleContacts = contactItems.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
            );
            return visibleContacts;
        };
        
    return (
        <List>
            {contactItems && filterContact().map(({ id, name, number }) => {
                return <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                />
            }
            )}
        </List>
    );
};

export default ContactList;