import { Model } from '@stackbit/types';

export const TestimonialsSection: Model = {
  type: "object",
  name: "TestimonialsSection",
  label: "Testimonials",
  labelField: "title",
  thumbnail: "https://assets.stackbit.com/components/models/thumbnails/default.png",
  extends: [
    "Section"
  ],
  groups: [
    "sectionComponent"
  ],
  fieldGroups: [
    {
      name: "styles",
      label: "Styles",
      icon: "palette"
    },
    {
      name: "settings",
      label: "Settings",
      icon: "gear"
    }
  ],
  fields: [
    {
      type: "enum",
      name: "variant",
      group: "styles",
      label: "Arrangement",
      options: [
        {
          label: "Two columns",
          value: "variant-a"
        },
        {
          label: "List, small images",
          value: "variant-b"
        },
        {
          label: "List, large images",
          value: "variant-c"
        }
      ],
      default: "variant-a",
      required: true
    },
    {
      type: "string",
      name: "title",
      label: "Title"
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle"
    },
    {
      type: "list",
      name: "testimonials",
      label: "Testimonials",
      items: {
        type: "model",
        models: [
          "Testimonial"
        ]
      },
      default: [
        {
          type: "Testimonial",
          quote: "“It’s great to see someone taking action while still maintaining a\nsustainable fish supply to home cooks.”,
          name: "Johnna Doe",
          title: "Product Marketing Manager at Acme",
          image: {
            type: "ImageBlock",
            url: "https://assets.stackbit.com/components/images/default/default-person.png",
            altText: "Person photo"
          }
        }
      ]
    },
    {
      type: "style",
      name: "styles",
      styles: {
        self: {
          height: [
            "auto",
            "screen"
          ],
          width: [
            "narrow",
            "wide",
            "full"
          ],
          margin: [
            "tw0:96"
          ],
          padding: [
            "tw0:96"
          ],
          justifyContent: [
            "flex-start",
            "flex-end",
            "center"
          ],
          borderRadius: "*",
          borderWidth: [
            "0:8"
          ],
          borderStyle: "*",
          borderColor: [
            {
              value: "border-primary",
              label: "Primary color",
              color: "$primary"
            },
            {
              value: "border-secondary",
              label: "Secondary color",
              color: "$secondary"
            },
            {
              value: "border-dark",
              label: "Dark color",
              color: "$dark"
            },
            {
              value: "border-complementary",
              label: "Complementary color",
              color: "$complementary"
            }
          ]
        },
        title: {
          fontWeight: [
            "400",
            "500"
          ],
          fontStyle: [
            "italic"
          ],
          textAlign: [
            "left",
            "center",
            "right"
          ],
          textDecoration: [
            "underline"
          ]
        },
        subtitle: {
          fontWeight: [
            "400",
            "500"
          ],
          fontStyle: [
            "italic"
          ],
          textAlign: [
            "left",
            "center",
            "right"
          ],
          textDecoration: [
            "underline"
          ]
        }
      },
      default: {
        self: {
          height: "auto",
          width: "wide",
          margin: [
            "mt-0",
            "mb-0",
            "ml-0",
            "mr-0"
          ],
          padding: [
            "pt-12",
            "pb-12",
            "pl-4",
            "pr-4"
          ],
          justifyContent: "center",
          borderRadius: "none",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "border-dark"
        },
        title: {
          textAlign: "center"
        },
        subtitle: {
          fontWeight: 400,
          textAlign: "center"
        }
      }
    }
  ]
}