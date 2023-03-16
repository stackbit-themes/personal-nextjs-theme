import { Model } from '@stackbit/types';

export const CtaSection: Model = {
  type: "object",
  name: "CtaSection",
  label: "CTA",
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
      name: "backgroundSize",
      group: "styles",
      label: "Background size",
      options: [
        {
          label: "Full",
          value: "full"
        },
        {
          label: "Inset",
          value: "inset"
        }
      ],
      default: "full",
      required: true
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      default: "Let's do this"
    },
    {
      type: "markdown",
      name: "text",
      label: "Text",
      default: "The Stackbit theme is flexible and scalable to every need. It can manage any layout and any screen."
    },
    {
      type: "list",
      name: "actions",
      label: "Actions",
      items: {
        type: "model",
        models: [
          "Button",
          "Link"
        ]
      },
      default: [
        {
          type: "Button",
          label: "Try it now",
          url: "/about",
          style: "primary"
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
          alignItems: [
            "flex-start",
            "flex-end",
            "center"
          ],
          justifyContent: [
            "flex-start",
            "flex-end",
            "center"
          ],
          flexDirection: [
            "row",
            "col"
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
          ],
          boxShadow: "*"
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
        text: {
          textAlign: [
            "left",
            "center",
            "right"
          ]
        },
        actions: {
          justifyContent: [
            "flex-start",
            "flex-end",
            "center"
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
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          borderRadius: "none",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "border-dark"
        },
        title: {
          textAlign: "left"
        },
        text: {
          textAlign: "left"
        },
        actions: {
          justifyContent: "flex-start"
        }
      }
    }
  ]
}