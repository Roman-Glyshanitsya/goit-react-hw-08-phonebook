import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import { filterSlice, contactApi } from 'redux/contacts';
import { Loader } from 'components/Loader/Loader';
import { List } from './ContactList.styled';

const ContactList = () => {
    const { data: contacts, isLoading: loadingList } = contactApi.useGetContactByNameQuery();
    const filterValue = useSelector(filterSlice.getFilter);

    const filterContact = () => {
        const normalizedFilter = filterValue.toLocaleLowerCase();
        return (
            contacts &&
            contacts.filter(contact =>
                contact.name.toLocaleLowerCase().includes(normalizedFilter)
            )
        );
    };
        
    return (
        <List>
            {loadingList && <Loader />}
            {contacts && (
                filterContact().map(contact => (
                    <ContactItem
                        key={contact.id}
                        contact={contact}
                    />
                ))
            )}
        </List>
    );
};

export default ContactList;