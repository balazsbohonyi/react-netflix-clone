import React from 'react';
import { OptForm, Accordion } from '../components';
import faqsData from '../fixtures/faqs.json';

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>

      {faqsData.map((item) => (
        <Accordion.Item>
          <Accordion.Header key={item.id}>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}

      <OptForm>
        <OptForm.Input placeholder="Email Address" />
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>Ready to wath? Enter your email to create or restart your membership</OptForm.Text>
      </OptForm>
    </Accordion>
  );
}
