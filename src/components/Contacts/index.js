import {useState,useEffect} from 'react'
import "./style.css"
import Form from './Form'
import List from './List'

function Contacts() {
    const [contacts, setContacts] = useState([
         {
            fullname:'furkan',
            phone_number:'12345'
         },
         {
            fullname:'emir',
            phone_number:'8765'
         },
         {
            fullname:'cansu',
            phone_number:'85214'
         }
    ])

    useEffect(()=>{
        console.log(contacts);
    },[contacts])
  return (
    <div id='container'>
         <h1>Contacts</h1>
        <List contacts={contacts}/>
        <Form addContact={setContacts} contacts={contacts}/>

    </div>
  )
}

export default Contacts