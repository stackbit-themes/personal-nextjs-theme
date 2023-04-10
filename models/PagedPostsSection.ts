import { Model } from '@stackbit/types';

export const PagedPostsSection: Model = {
  type: 'object',
  name: 'PagedPostsSection',
  label: 'Post feed',
  labelField: 'title',
  fields: [
    {
      type: 'enum',
      name: 'colors',
      label: 'Colors',
      description: 'The color theme of the section',
      group: 'styles',
      controlType: 'palette',
      options: [
        {
          label: 'Colors A',
          value: 'colors-a',
          textColor: '$onDark',
          backgroundColor: '$dark',
          borderColor: '#ececec'
        },
        {
          label: 'Colors B',
          value: 'colors-b',
          textColor: '$onLight',
          backgroundColor: '$light',
          borderColor: '#ececec'
        },
        {
          label: 'Colors C',
          value: 'colors-c',
          textColor: '$onPrimary',
          backgroundColor: '$primary',
          borderColor: '#ececec'
        },
        {
          label: 'Colors D',
          value: 'colors-d',
          textColor: '$onSecondary',
          backgroundColor: '$secondary',
          borderColor: '#ececec'
        },
        {
          label: 'Colors E',
          value: 'colors-e',
          textColor: '$onComplementary',
          backgroundColor: '$complementary',
          borderColor: '#ececec'
        },
        {
          label: 'Colors F',
          value: 'colors-f',
          textColor: '$onLight',
          backgroundColor: 'transparent',
          borderColor: '#ececec'
        }
      ],
      default: 'colors-f'
    },
    {
      type: 'string',
      name: 'elementId',
      group: 'settings',
      label: 'Element ID',
      description: 'The unique ID for an HTML element, must not contain whitespace',
      default: ''
    },
    {
      type: 'boolean',
      name: 'showExcerpt',
      label: 'Show post excerpt',
      default: false
    },
    {
      type: 'boolean',
      name: 'showFeaturedImage',
      label: 'Show featured image',
      default: false
    },
    {
      type: 'boolean',
      name: 'showReadMoreLink',
      label: 'Show keep reading link',
      default: false
    },
    {
      type: 'style',
      name: 'styles',
      styles: {
        self: {
          height: [
            'auto',
            'screen'
          ],
          width: [
            'narrow',
            'wide',
            'full'
          ],
          margin: [
            'tw0:96'
          ],
          padding: [
            'tw0:96'
          ],
          justifyContent: [
            'flex-start',
            'flex-end',
            'center'
          ],
          borderRadius: '*',
          borderWidth: [
            '0:8'
          ],
          borderStyle: '*',
          borderColor: [
            {
              value: 'border-primary',
              label: 'Primary color',
              color: '$primary'
            },
            {
              value: 'border-secondary',
              label: 'Secondary color',
              color: '$secondary'
            },
            {
              value: 'border-dark',
              label: 'Dark color',
              color: '$dark'
            },
            {
              value: 'border-complementary',
              label: 'Complementary color',
              color: '$complementary'
            }
          ]
        },
        title: {
          fontWeight: [
            '400',
            '500'
          ],
          fontStyle: [
            'italic'
          ],
          textAlign: [
            'left',
            'center',
            'right'
          ],
          textDecoration: [
            'underline'
          ]
        },
        subtitle: {
          fontWeight: [
            '400',
            '500'
          ],
          fontStyle: [
            'italic'
          ],
          textAlign: [
            'left',
            'center',
            'right'
          ],
          textDecoration: [
            'underline'
          ]
        },
        actions: {
          justifyContent: [
            'flex-start',
            'flex-end',
            'center'
          ]
        }
      },
      default: {
        self: {
          height: 'auto',
          width: 'wide',
          margin: [
            'mt-0',
            'mb-0',
            'ml-0',
            'mr-0'
          ],
          padding: [
            'pt-12',
            'pb-12',
            'pl-4',
            'pr-4'
          ],
          justifyContent: 'center',
          borderRadius: 'none',
          borderWidth: 0,
          borderStyle: 'none',
          borderColor: 'border-dark'
        },
        title: {
          textAlign: 'center'
        },
        subtitle: {
          fontWeight: 400,
          textAlign: 'center'
        },
        actions: {
          justifyContent: 'center'
        }
      },
      label: 'Styles'
    },
    {
      name: 'title',
      hidden: true,
      default: null,
      type: 'string',
      label: 'Title'
    },
    {
      name: 'subtitle',
      hidden: true,
      default: null,
      type: 'string',
      label: 'Subtitle'
    },
    {
      name: 'showDate',
      default: true,
      type: 'boolean',
      label: 'Show post date'
    },
    {
      name: 'showAuthor',
      default: true,
      type: 'boolean',
      label: 'Show post author'
    },
    {
      name: 'variant',
      default: 'variant-a',
      type: 'enum',
      group: 'styles',
      label: 'Arrangement',
      options: [
        {
          label: 'Two columns grid',
          value: 'variant-a'
        },
        {
          label: 'Three columns grid',
          value: 'variant-b'
        },
        {
          label: 'List',
          value: 'variant-c'
        },
        {
          label: 'List alt',
          value: 'variant-d'
        }
      ],
      required: true
    },
    {
      name: 'actions',
      hidden: true,
      default: [],
      type: 'list',
      label: 'Actions',
      items: {
        type: 'model',
        models: [
          'Button',
          'Link'
        ]
      }
    }
  ],
  fieldGroups: [
    {
      name: 'styles',
      label: 'Styles',
      icon: 'palette'
    },
    {
      name: 'settings',
      label: 'Settings',
      icon: 'gear'
    }
  ]
};