import React from "react";
import "./contactForm.css";

function LabeledInput({
  name,
  label,
  type = "text",
  value = "",
  onInputChange
}) {
  return (
    <div>
      <label className="contact-form--label" for={name}>
        {label}
      </label>
      <input
        onChange={onChange}
        className="contact-form--input"
        type={type}
        name={name}
        value={value}
      />
    </div>
  );

  function onChange(evt) {
    onInputChange({
      field: name,
      value: evt.target.value
    });
  }
}

export default function({ onSubmit, form, onInputChange }) {
  return (
    <form onSubmit={submit}>
      <div className="contact-form--fields">
        <LabeledInput
          label="First Name"
          name="firstName"
          value={form.firstName}
          onInputChange={onInputChange}
        />
        <LabeledInput
          label="Last Name"
          name="lastName"
          value={form.lastName}
          onInputChange={onInputChange}
        />
        <LabeledInput
          label="Email"
          name="email"
          value={form.email}
          type="email"
          onInputChange={onInputChange}
        />
      </div>
      <div className="flex">
        <span className="spacer" />
        <input className="button" type="submit" value="Save" />
      </div>
    </form>
  );

  function submit(e) {
    e.preventDefault();
    onSubmit();
  }
}
