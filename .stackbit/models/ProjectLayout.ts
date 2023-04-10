import { Model } from '@stackbit/types';

export const ProjectLayout: Model = {
    type: 'page',
    name: 'ProjectLayout',
    label: 'Project',
    labelField: 'title',
    filePath: 'content/pages/projects/{slug}.md',
    urlPath: '/projects/{slug}',
    fieldGroups: [
        {
            name: 'seo',
            label: 'SEO',
            icon: 'page'
        },
        {
            name: 'styles',
            label: 'Styles',
            icon: 'palette'
        }
    ],
    fields: [
        {
            type: 'string',
            name: 'metaTitle',
            label: 'Title meta tag (overrides title)',
            description:
                'By default, the <title> tag for this page is determined by the title field (in the Content group). You can override the tag value here.',
            default: null,
            group: 'seo'
        },
        {
            type: 'string',
            name: 'metaDescription',
            label: 'Description meta tag',
            description: 'The description tag is used by search engines and for social sharing. By default, the tag is not set.',
            default: null,
            group: 'seo'
        },
        {
            type: 'boolean',
            name: 'addTitleSuffix',
            label: 'Add title suffix',
            description: 'If enabled, the title suffix defined in the site configuration is appended to the title tag of this page.',
            default: true,
            group: 'seo'
        },
        {
            type: 'image',
            name: 'socialImage',
            label: 'Image for social sharing',
            description:
                'Set the image used when sharing this page on social networks (e.g. Facebook, Twitter). If not set, the default social image defined in the site configuration is used.',
            default: null,
            group: 'seo'
        },
        {
            type: 'list',
            name: 'metaTags',
            label: 'Additional meta tags',
            description:
                'To add or override any meta tag for this page, add entries to this list. Entries defined here take precedence over any other defaults.',
            group: 'seo',
            items: {
                type: 'model',
                models: ['MetaTag']
            }
        },
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            default: 'This is a project title',
            required: true
        },
        {
            type: 'enum',
            name: 'colors',
            label: 'Colors',
            description: 'The color theme of the page',
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
                }
            ],
            default: 'colors-a'
        },
        {
            type: 'model',
            name: 'backgroundImage',
            group: 'styles',
            label: 'Project background image',
            models: ['BackgroundImage'],
            default: {
                type: 'BackgroundImage',
                url: '/images/bg2.jpg'
            }
        },
        {
            type: 'date',
            name: 'date',
            label: 'Date',
            required: true
        },
        {
            type: 'string',
            name: 'client',
            label: 'Client',
            default: 'Awesome client'
        },
        {
            type: 'string',
            name: 'description',
            label: 'Description',
            default: 'Nunc rutrum felis dui, ut consequat sapien scelerisque vel. Integer condimentum dignissim justo vel faucibus.'
        },
        {
            type: 'model',
            name: 'featuredImage',
            label: 'Featured image',
            models: ['ImageBlock'],
            default: {
                type: 'ImageBlock',
                url: 'https://assets.stackbit.com/components/images/default/post-4.jpeg',
                altText: 'Project thumbnail image',
                caption: ''
            }
        },
        {
            type: 'model',
            name: 'media',
            label: 'Media',
            models: ['ImageBlock', 'VideoBlock'],
            default: {
                type: 'ImageBlock',
                url: 'https://assets.stackbit.com/components/images/default/post-4.jpeg',
                altText: 'Project image'
            }
        },
        {
            type: 'list',
            name: 'bottomSections',
            label: 'Sections',
            items: {
                type: 'model',
                models: [
                    'ContactSection',
                    'CtaSection',
                    'DividerSection',
                    'FeaturedItemsSection',
                    'FeaturedPostsSection',
                    'FeaturedProjectsSection',
                    'HeroSection',
                    'LabelsSection',
                    'MediaGallerySection',
                    'QuoteSection',
                    'RecentPostsSection',
                    'RecentProjectsSection',
                    'TestimonialsSection',
                    'TextSection'
                ]
            }
        }
    ]
};
