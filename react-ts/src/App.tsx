import './App.css';
import { Greet } from './components/Greet'
import { Person } from './components/Person'
import {PersonList} from './components/PersonList'
import { Status} from './components/Status'
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Container } from './components/Container';
import { LoggedIn } from './components/state/LoggedIn';


function App() {
  const peronName = {
    first: 'Bruce',
    last: 'Wayne'
  }
  
  const nameList = [
    {
     first: 'Bruce',
     last: 'Wayne' 
    },

    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'John',
      last: 'Doe'
    },

  ]

  return (
    <div className="App">
      <Greet 
      messageCount={20}
      name='Ezra'
      isLoggedIn={false}
      />

      <Person 
      name={peronName}
      />

      <PersonList names={nameList} />
    
    <Status status='error' />

    <Heading>Placeholder Text Here</Heading>

    <Oscar>
      <Heading>Oscar goes to Leonardo</Heading>
    </Oscar>

    <Greet name='Michael' isLoggedIn={false}/>

    <Container styles={{ border: '1px solid red', padding: '1rem'}}/>

    <LoggedIn />

    </div>
  );
}

export default App;
