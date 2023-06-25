import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
// import { Outlet } from "react-router-dom";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const[name, setName] = useState('');
 const [phone, setPhone] = useState('');
 const [email, setEmail] = useState('');
 const[duplicate, setDuplicate] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    if(!duplicate){
      props.addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(()=>{
    if(name === duplicate){
      setDuplicate(true)
    }
   }, [name] );

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm handleSubmit={handleSubmit} 
         name = {name} setName = {setName}
         email={email} setEmail = {setEmail} 
         phone={phone} setPhone = {setPhone} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <p>{name}</p>
        <TileList/>
      </section>
      {/* <Outlet/> */}
    </div>
  );
};
