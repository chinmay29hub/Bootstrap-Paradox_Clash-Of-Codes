import React from 'react';
import { ConversationalForm } from 'conversational-form';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.formFields = [
      {
        tag: 'input',
        type: 'text',
        name: 'firstname',
        'cf-questions': 'What is your first name?',
      },
      {
        tag: 'input',
        type: 'text',
        name: 'lastname',
        'cf-questions': 'What is your last name?',
      },
      {
        tag: 'radio',
        name: 'mode_of_travel',
        'cf-questions': 'Do you have any of the following questions ',
        children: [
          {
            tag: 'input',
            type: 'radio',
            value: 'flight',
            name: 'mode_of_travel',
            text: 'By flight',
            'cf-label': 'Can you tell me more about your service ?',
          },
          {
            tag: 'input',
            type: 'radio',
            value: 'train',
            name: 'mode_of_travel',
            text: 'By train',
            'cf-label':
              'How can I contact customer support if I have a problem with my booking?',
          },
          {
            tag: 'input',
            type: 'radio',
            value: 'bus',
            name: 'mode_of_travel',
            text: 'By bus',
            'cf-label': 'What is cost of services that you offer?',
          },
        ],
      },
    ];

    this.submitCallback = this.submitCallback.bind(this);
  }

  componentDidMount() {
    this.cf = ConversationalForm.startTheConversation({
      options: {
        submitCallback: this.submitCallback,
        preventAutoFocus: true,
      },
      tags: this.formFields,
      context: [
        {
          text: 'Welcome to our travel booking service! Please answer a few questions to help us plan your trip.',
        },
      ],
    });
    this.elem.appendChild(this.cf.el);
    this.cf.addRobotChatResponse(
      'Hello! Welcome to our travel booking system. Please answer a few questions to help us plan your trip.'
    );
  }

  submitCallback() {
    const formDataSerialized = this.cf.getFormData(true);
    console.log('Form data:', formDataSerialized);

    const { firstname, lastname, mode_of_travel } = formDataSerialized;
    let response = `Thank you, ${firstname} ${lastname}.`;

    if (mode_of_travel == 'flight') {
      response += ` The app/website designed to facilitate connections between solo travelers and potential travel companions can provide the following services:

      1. Create user profiles: Users can create profiles on the app/website with information about themselves, their interests, and their travel preferences.
      
      2. Matchmaking: The app can use an algorithm to match users based on their profiles, travel destinations, and travel dates.
      
      3. Chatting: Once users have been matched, they can start chatting with each other through the app/website to get to know each other better before their trip.
      
      4. Meeting up: The app/website can also suggest activities or places to visit where users can meet up with their travel companions and explore the destination together.
      
      5. Reviews and ratings: After the trip, users can rate and review their travel companions to help improve the matching algorithm and provide feedback to other users.`;
    }
    if (mode_of_travel == 'train') {
      response += 'you can send us email at example.example.com';
    }
    if (mode_of_travel == 'bus') {
      response += 'we provide our services absolutly free of cost .';
    }
    // else {
    //   response += ' How do you want to travel?';
    // }

    this.cf.addRobotChatResponse(response);
  }

  render() {
    return (
      <div>
        <div ref={(ref) => (this.elem = ref)} />
      </div>
    );
  }
}