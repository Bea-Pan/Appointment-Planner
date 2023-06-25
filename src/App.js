import {React, useState} from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { ContactForm } from "./components/contactForm/ContactForm";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
 const[contacts, setContact] = useState([]);
 const[appointment, setAppointment] = useState([])
  /*
  Implement functions to add data to
  contacts and appointments
  */
const addContact = (newName, newPhone, newEmail) => {

 setContact((prevContact)=>{
  const contact = {
    name: newName,
    phone: newPhone,
    email: newEmail
  };
  return [...prevContact, contact]
});

};

 const addAppointment = (newName, newPhone, newEmail) => {
  setAppointment((prevAppointment)=>{
    const appointment = {
      name: newName,
      phone: newPhone,
      email: newEmail
    };
    return [...prevAppointment, appointment]
  })
 }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage/>}addContact={addContact} conacts={contacts}> 
        <Route index element={<ContactForm/>}/>
      </Route>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage addAppointment={addAppointment} appointment={appointment} /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
