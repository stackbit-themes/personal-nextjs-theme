import { Model } from '@stackbit/types';

export const TextSection: Model = {
  type: "object",
  name: "TextSection",
  label: "Text block",
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
          label: "Title at the top",
          value: "variant-a"
        },
        {
          label: "Title on the left",
          value: "variant-b"
        }
      ],
      default: "variant-a",
      required: true
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      default: "The Section Title"
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
      default: "The section subtitle"
    },
    {
      type: "markdown",
      name: "text",
      label: "Text",
      default: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium\ndoloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo\ninventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\nSed ut perspiciatis undeomnis iste natus error sit voluptatem accusantium\ndoloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo\ninventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
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
        },
        text: {
          textAlign: [
            "left",
            "center",
            "right"
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
        },
        text: {
          textAlign: "center"
        }
      }
    }
  ]
}