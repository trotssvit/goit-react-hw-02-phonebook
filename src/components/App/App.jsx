import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactList } from '../ContactList/ContactList.js';
import { Filter } from '../Filter/Filter.js';
import { ContactForm } from '../Form/Form.js';
import { Container, Div, Title } from './App.styled.js';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  addContact = event => {
    event.preventDefault();
    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.number.value;
    const normalizedName = name.toLowerCase();
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === normalizedName
      )
    ) {
      return alert(`${name} is already in contacts!`);
    }
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));

    event.currentTarget.reset();
  };

  filterContacts = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { addContact, filterContacts, state, onDelete } = this;
    return (
      <Container>
        <Div>
          <Title>Phonebook</Title>

          <ContactForm addContact={addContact} />
        </Div>
        <Div>
          <Title>Contacts</Title>
          <Filter value={state.filter} onChange={filterContacts} />
          <ContactList
            onClick={onDelete}
            contacts={this.getFilteredContacts()}
          />
        </Div>
      </Container>
    );
  }
}
