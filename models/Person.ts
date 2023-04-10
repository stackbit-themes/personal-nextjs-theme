import { Model } from '@stackbit/types';

export const Person: Model = {
  type: 'data',
  filePath: 'content/data/team/{slug}.json',
  name: 'Person',
  label: 'Person',
  labelField: 'firstName',
  fields: [
    {
      type: 'string',
      name: 'type',
      label: 'Object Type',
      description: 'The type of the object',
      const: 'Person',
      hidden: true
    },
    {
      type: 'string',
      name: 'firstName',
      label: 'First name',
      default: 'Name',
      required: true
    },
    {
      type: 'string',
      name: 'lastName',
      label: 'Last name',
      default: 'Surname'
    },
    {
      type: 'string',
      name: 'role',
      label: 'Role',
      default: 'Role'
    },
    {
      type: 'markdown',
      name: 'bio',
      label: 'Bio',
      default: 'With over 10 years in both public and private sectors, Johnna has experience in management consultation, team building, professional development, strategic implementation, and company collaboration.'
    },
    {
      type: 'model',
      name: 'image',
      label: 'Image',
      models: [
        'ImageBlock'
      ],
      default: {
        url: 'https://assets.stackbit.com/components/images/default/default-person.png',
        altText: 'Person photo'
      }
    }
  ]
};