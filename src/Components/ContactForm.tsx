import styled from "styled-components";
import { Button } from "./Button";
import { FormInput } from "./FormInput";
import { Textarea } from "./Textarea";
import { useState } from "react";
import { ErrorMessage } from "../ErrorMessage";
import {
  isEmailValid,
  isMessageValid,
  isNameValid,
} from "../utils/validations";

const nameErrorMessage = "Sorry, name must be at least 2 characters long.";
const emailErrorMessage = "Sorry, email is invalid.";
const messageErrorMessage = "Sorry, cannot be empty.";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 27.8125rem;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    max-width: 90rem;
  }
`;

const ContactHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  text-align: center;
  margin-bottom: 3.12rem;

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
    max-width: 27.8125rem;
  }
`;

const ContactTitle = styled.div`
  color: #fff;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 2.5rem;
  letter-spacing: -0.071rem;

  @media (min-width: 768px) {
    font-size: 4.5rem;
    line-height: 4.5rem;
    letter-spacing: -0.12781rem;
  }

  @media (min-width: 1440px) {
    font-size: 5.5rem;
    line-height: 5.5rem;
    letter-spacing: -0.15625rem;
    text-align: left;
  }
`;

const ContactDescription = styled.div`
  color: #d9d9d9;
  font-weight: 500;
  line-height: 1.625rem;

  @media (min-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  @media (min-width: 1440px) {
    text-align: left;
  }
`;

const ContactBody = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
    max-width: 27.8125rem;
  }
`;

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const createMessage = ({
    name,
    email,
    message,
  }: {
    name: string;
    email: string;
    message: string;
  }) => {
    fetch("https://api.apispreadsheets.com/data/lQLLzows22wj3Aki/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            name,
            email,
            message,
          },
        ],
      }),
    }).then((res) => {
      if (res.status === 201) {
        alert(
          "Thank you for your message! I'll get back to you within 24 hours."
        );
      } else {
        alert("Error: Message was not sent.");
        throw new Error("Message was not sent.");
      }
    });
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setIsSubmitted(false);
  };

  const isFormCorrect = () => {
    return isEmailValid(email) && isNameValid(name) && isMessageValid(message);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isFormCorrect()) {
      createMessage({ name, email, message });
      resetForm();
    } else {
      setIsSubmitted(true);
    }
  };

  return (
    <ContactContainer>
      <ContactHeader>
        <ContactTitle>Contact</ContactTitle>
        <ContactDescription>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </ContactDescription>
      </ContactHeader>

      <ContactBody id="myForm" onSubmit={(e) => onSubmit(e)}>
        <FormInput
          inputProps={{
            type: "text",
            placeholder: "Name",
            value: name,
            onChange: (e) => {
              setName(e.target.value);
            },
          }}
          showError={!isNameValid(name) && isSubmitted}
        />
        <ErrorMessage
          message={nameErrorMessage}
          show={!isNameValid(name) && isSubmitted}
        />
        <FormInput
          inputProps={{
            type: "text",
            placeholder: "Email",
            value: email,
            onChange: (e) => {
              setEmail(e.target.value);
            },
          }}
          showError={!isEmailValid(email) && isSubmitted}
        />
        <ErrorMessage
          message={emailErrorMessage}
          show={!isEmailValid(email) && isSubmitted}
        />
        <Textarea
          textareaProps={{
            placeholder: "Message",
            value: message,
            onChange: (e) => {
              setMessage(e.target.value);
            },
          }}
          showError={!isMessageValid(message) && isSubmitted}
        />
        <ErrorMessage
          message={messageErrorMessage}
          show={!isMessageValid(message) && isSubmitted}
        />
        <Button text="Send Message" alignSelf="flex-end" />
      </ContactBody>
    </ContactContainer>
  );
}
