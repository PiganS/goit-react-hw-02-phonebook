import { ButtonDel, Contact } from './ContactList.styled';

export const ContactList = ({ contacts, handleDeleteProduct }) => (
  <ul>
    {contacts.map(contact => (
      <Contact key={contact.id}>
        <p>
          {contact.name}: {contact.number}
        </p>
        <ButtonDel
          onClick={() => handleDeleteProduct(contact.id)}
          type="button"
        >
          Delete
        </ButtonDel>
      </Contact>
    ))}
  </ul>
);
