import { Model } from '@stackbit/types';

export const FormBlock: Model = {
  type: 'object',
  name: 'FormBlock',
  label: 'Form',
  labelField: 'elementId',
  fieldGroups: [
    {
      name: 'settings',
      label: 'Settings',
      icon: 'gear'
    }
  ],
  fields: [
    {
      type: 'list',
      name: 'fields',
      label: 'Fields',
      items: {
        type: 'model',
        models: [
          'TextFormControl',
          'EmailFormControl',
          'TextareaFormControl',
          'CheckboxFormControl',
          'SelectFormControl'
        ]
      },
      default: [
        {
          type: 'TextFormControl',
          label: 'Name',
          name: 'name',
          placeholder: 'Your name',
          isRequired: true,
          width: '1/2'
        },
        {
          type: 'EmailFormControl',
          label: 'Email',
          name: 'email',
          placeholder: 'Your email',
          isRequired: true,
          width: '1/2'
        },
        {
          type: 'TextFormControl',
          label: 'Home Address',
          name: 'home-address',
          placeholder: 'Your home address',
          isRequired: false,
          width: 'full'
        },
        {
          type: 'CheckboxFormControl',
          name: 'updates',
          label: 'Sign me up to receive updates',
          width: 'full'
        }
      ]
    },
    {
      type: 'string',
      name: 'submitLabel',
      label: 'Button',
      default: 'Send Message'
    },
    {
      type: 'string',
      name: 'elementId',
      group: 'settings',
      label: 'Element ID',
      description: 'The unique ID used for id and name attributes, must not contain whitespace',
      default: 'contact-form',
      required: true
    },
    {
      type: 'string',
      name: 'action',
      group: 'settings',
      label: 'Action (form submission URL)',
      default: '/.netlify/functions/submission_created'
    },
    {
      type: 'string',
      name: 'destination',
      label: 'Destination (email to redirect responses)',
      default: '',
      group: 'settings'
    },
    {
      type: 'style',
      name: 'styles',
      styles: {
        submitLabel: {
          textAlign: [
            'left',
            'center',
            'right'
          ]
        }
      },
      default: {
        submitLabel: {
          textAlign: 'left'
        }
      },
      label: 'Styles'
    }
  ]
};