export const ContactList = ({ contacts , handleDeleteProduct}) => (
  <ul>
    {contacts.map(contact => (
      <li key={contact.id}>
        <p>
          {contact.name}: {contact.number}
        </p>
        <button
          onClick={() => handleDeleteProduct(contact.id)}
          type="button"
        >
          delete
        </button>
      </li>
    ))}
  </ul>
);
