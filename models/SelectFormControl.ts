import { Model } from '@stackbit/types';

export const SelectFormControl: Model = {
  type: 'object',
  name: 'SelectFormControl',
  label: 'Select',
  labelField: 'label',
  fieldGroups: [
    {
      name: 'styles',
      label: 'Styles',
      icon: 'palette'
    }
  ],
  fields: [
    {
      type: 'string',
      name: 'name',
      label: 'Name',
      required: true,
      default: 'city'
    },
    {
      type: 'string',
      name: 'label',
      label: 'Label',
      default: 'City'
    },
    {
      type: 'boolean',
      name: 'hideLabel',
      label: 'Hide label',
      default: false
    },
    {
      type: 'string',
      name: 'defaultValue',
      label: 'Default value',
      default: 'Please choose...'
    },
    {
      type: 'list',
      name: 'options',
      label: 'Options',
      default: [
        'New York',
        'San Francisco'
      ],
      items: {
        type: 'string'
      }
    },
    {
      type: 'boolean',
      name: 'isRequired',
      label: 'Is the field required?',
      default: false
    },
    {
      type: 'enum',
      name: 'width',
      group: 'styles',
      label: 'Width',
      options: [
        {
          label: 'Full',
          value: 'full'
        },
        {
          label: 'One half',
          value: '1/2'
        }
      ],
      default: 'full',
      required: true
    }
  ]
};