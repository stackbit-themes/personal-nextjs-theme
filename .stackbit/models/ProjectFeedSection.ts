import { Model } from '@stackbit/types';

export const ProjectFeedSection: Model = {
  type: "object",
  name: "ProjectFeedSection",
  label: "Project feed",
  labelField: "title",
  extends: [
    "Section"
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
      type: "string",
      name: "title",
      label: "Title",
      default: "Projects"
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
      default: "Projects"
    },
    {
      type: "boolean",
      name: "showDate",
      label: "Show project date",
      default: false
    },
    {
      type: "boolean",
      name: "showDescription",
      label: "Show project description",
      default: false
    },
    {
      type: "boolean",
      name: "showFeaturedImage",
      label: "Show featured image",
      default: false
    },
    {
      type: "boolean",
      name: "showReadMoreLink",
      label: "Show keep reading link",
      default: false
    },
    {
      type: "enum",
      name: "variant",
      group: "styles",
      label: "Arrangement",
      options: [
        {
          label: "Two columns grid",
          value: "variant-a"
        },
        {
          label: "Three columns grid",
          value: "variant-b"
        },
        {
          label: "List",
          value: "variant-c"
        },
        {
          label: "List alt",
          value: "variant-d"
        }
      ],
      default: "variant-a",
      required: true
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
          label: "View all",
          url: "/",
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
        actions: {
          justifyContent: "center"
        }
      }
    }
  ]
}