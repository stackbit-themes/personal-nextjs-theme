import { Model } from '@stackbit/types';

export const PageLayout: Model = {
  type: 'page',
  filePath: 'content/pages/{slug}.md',
  urlPath: '/{slug}',
  name: 'PageLayout',
  label: 'Page',
  layout: 'PageLayout',
  hideContent: true,
  thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
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
      name: 'layout',
      label: 'Layout',
      const: 'PageLayout',
      hidden: true
    },
    {
      type: 'string',
      name: 'metaTitle',
      label: 'Title meta tag (overrides title)',
      description: 'By default, the <title> tag for this page is determined by the title field (in the Content group). You can override the tag value here.',
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
      description: 'Set the image used when sharing this page on social networks (e.g. Facebook, Twitter). If not set, the default social image defined in the site configuration is used.',
      default: null,
      group: 'seo'
    },
    {
      type: 'list',
      name: 'metaTags',
      label: 'Additional meta tags',
      description: 'To add or override any meta tag for this page, add entries to this list. Entries defined here take precedence over any other defaults.',
      group: 'seo',
      items: {
        type: 'model',
        models: [
          'MetaTag'
        ]
      }
    },
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      default: 'This is a new page',
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
      label: 'Page background image',
      models: [
        'BackgroundImage'
      ]
    },
    {
      type: 'list',
      name: 'sections',
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
      },
      default: [
        {
          type: 'HeroSection',
          elementId: 'homepage-hero-1',
          title: 'This Is A Big Hero Headline',
          text: 'Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl. Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat itae interdum. Ut nec massa eget lorem blandit condimentum et at risus.',
          actions: [
            {
              type: 'Button',
              label: 'Get Started',
              url: '/',
              style: 'primary',
              elementId: 'hero-main-button'
            },
            {
              type: 'Button',
              label: 'Learn More',
              url: '/',
              style: 'secondary'
            }
          ],
          media: {
            type: 'ImageBlock',
            url: '/images/hero.webp',
            altText: 'Image alt text'
          },
          styles: {
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
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row'
            },
            title: {
              textAlign: 'left'
            },
            subtitle: {
              fontWeight: 400,
              textAlign: 'left'
            },
            text: {
              textAlign: 'left'
            },
            actions: {
              justifyContent: 'flex-start'
            }
          }
        }
      ]
    }
  ],
  labelField: 'title'
};