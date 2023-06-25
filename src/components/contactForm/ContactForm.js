import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (

    <>
    <form>
      <input type="text" placeholder="Contact Name"></input>
      <input type="text" placeholder="Contact Telephone"></input>
      <input type="text" placeholder="Contact Email"></input>
      <input type='submit' value="Add Contact"></input>
    </form>
 
    </>
  );
};

