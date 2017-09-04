import React from "react";
import "./card.css";

export default function({
  firstName,
  lastName,
  email,
  onClickEdit,
  onClickDelete
}) {
  return (
    <div className="contact-card">
      <dl>
        <dt className="contact-card--title">Name</dt>
        <dd className="contact-card--value">{`${firstName} ${lastName}`}</dd>
        <dt className="contact-card--title">Email</dt>
        <dd className="contact-card--value">{email}</dd>
      </dl>
      <button
        href={`/contact/edit/${email}`}
        className="button"
        onClick={() => onClickEdit(email)}
      >
        Edit Contact
      </button>
      <button className="button" onClick={onClickDelete}>
        Delete Contact
      </button>
    </div>
  );
}
