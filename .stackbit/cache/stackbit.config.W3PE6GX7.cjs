function stackbit_process_cwd_shim() { return "/Users/astab/Desktop/Stackbit-themes/personal-nextjs-theme" }
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// stackbit.config.ts
var stackbit_config_exports = {};
__export(stackbit_config_exports, {
  config: () => config,
  default: () => stackbit_config_default
});
module.exports = __toCommonJS(stackbit_config_exports);
var import_types = require("../../node_modules/@stackbit/types/dist/index.js");

// .stackbit/models/BackgroundImage.ts
var BackgroundImage = {
  type: "object",
  name: "BackgroundImage",
  label: "Background image",
  labelField: "url",
  fieldGroups: [
    {
      name: "styles",
      label: "Styles",
      icon: "palette"
    }
  ],
  fields: [
    {
      type: "image",
      name: "url",
      label: "Background image",
      description: "The URL of the image",
      default: "/images/bg2.jpg"
    },
    {
      type: "enum",
      name: "backgroundSize",
      group: "styles",
      label: "Background image size",
      controlType: "button-group",
      options: [
        {
          label: "Auto",
          value: "auto"
        },
        {
          label: "Fill",
          value: "cover"
        },
        {
          label: "Fit",
          value: "contain"
        }
      ],
      default: "cover",
      required: true
    },
    {
      type: "enum",
      name: "backgroundPosition",
      group: "styles",
      label: "Background image position",
      options: [
        {
          label: "Bottom",
          value: "bottom"
        },
        {
          label: "Center",
          value: "center"
        },
        {
          label: "Left",
          value: "left"
        },
        {
          label: "Left bottom",
          value: "left-bottom"
        },
        {
          label: "Left top",
          value: "left-top"
        },
        {
          label: "Right",
          value: "right"
        },
        {
          label: "Right bottom",
          value: "right-bottom"
        },
        {
          label: "Right top",
          value: "right-top"
        },
        {
          label: "Top",
          value: "top"
        }
      ],
      default: "center",
      required: true
    },
    {
      type: "enum",
      name: "backgroundRepeat",
      group: "styles",
      label: "Background image repeat",
      controlType: "button-group",
      options: [
        {
          label: "Repeat",
          value: "repeat"
        },
        {
          label: "Repeat X",
          value: "repeat-x"
        },
        {
          label: "Repeat Y",
          value: "repeat-y"
        },
        {
          label: "No repeat",
          value: "no-repeat"
        }
      ],
      default: "no-repeat",
      required: true
    },
    {
      type: "number",
      name: "opacity",
      group: "styles",
      label: "Opacity",
      controlType: "slider",
      min: 0,
      max: 100,
      step: 1,
      unit: "%",
      default: 100
    }
  ]
};

// .stackbit/models/Button.ts
var Button = {
  type: "object",
  name: "Button",
  label: "Button",
  labelField: "label",
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
      name: "label",
      label: "Label",
      default: "Learn more"
    },
    {
      type: "string",
      name: "altText",
      label: "Alt text",
      default: "",
      description: "The alternative text for screen readers"
    },
    {
      type: "string",
      name: "url",
      label: "URL",
      default: "/",
      required: true
    },
    {
      type: "boolean",
      name: "showIcon",
      group: "styles",
      label: "Show icon",
      default: false
    },
    {
      type: "enum",
      name: "icon",
      group: "styles",
      label: "Icon",
      options: [
        {
          label: "Apple",
          value: "apple"
        },
        {
          label: "Arrow left",
          value: "arrowLeft"
        },
        {
          label: "Arrow left circle",
          value: "arrowLeftCircle"
        },
        {
          label: "Arrow right",
          value: "arrowRight"
        },
        {
          label: "Arrow right circle",
          value: "arrowRightCircle"
        },
        {
          label: "Arrow up left",
          value: "arrowUpLeft"
        },
        {
          label: "Arrow up right",
          value: "arrowUpRight"
        },
        {
          label: "Cart",
          value: "cart"
        },
        {
          label: "Chevron left",
          value: "chevronLeft"
        },
        {
          label: "Chevron right",
          value: "chevronRight"
        },
        {
          label: "Facebook",
          value: "facebook"
        },
        {
          label: "GitHub",
          value: "github"
        },
        {
          label: "Google Play",
          value: "googlePlay"
        },
        {
          label: "Instagram",
          value: "instagram"
        },
        {
          label: "LinkedIn",
          value: "linkedin"
        },
        {
          label: "Mail",
          value: "mail"
        },
        {
          label: "Play",
          value: "play"
        },
        {
          label: "Play circle",
          value: "playCircle"
        },
        {
          label: "Reddit",
          value: "reddit"
        },
        {
          label: "Send",
          value: "send"
        },
        {
          label: "Twitter",
          value: "twitter"
        },
        {
          label: "Vimeo",
          value: "vimeo"
        },
        {
          label: "YouTube",
          value: "youtube"
        }
      ],
      default: "arrowRight"
    },
    {
      type: "enum",
      name: "iconPosition",
      group: "styles",
      controlType: "button-group",
      label: "Icon position",
      options: [
        {
          label: "Left",
          value: "left"
        },
        {
          label: "Right",
          value: "right"
        }
      ],
      default: "right"
    },
    {
      type: "enum",
      name: "style",
      group: "styles",
      controlType: "button-group",
      label: "Style",
      options: [
        {
          label: "Primary",
          value: "primary"
        },
        {
          label: "Secondary",
          value: "secondary"
        }
      ],
      default: "primary",
      required: true
    },
    {
      type: "string",
      name: "elementId",
      group: "settings",
      label: "Element ID",
      description: "The unique ID for an HTML element, must not contain whitespace",
      default: ""
    }
  ]
};

// .stackbit/models/CheckboxFormControl.ts
var CheckboxFormControl = {
  type: "object",
  name: "CheckboxFormControl",
  label: "Checkbox",
  labelField: "label",
  fields: [
    {
      type: "string",
      name: "name",
      label: "Name",
      default: "updates",
      required: true
    },
    {
      type: "string",
      name: "label",
      label: "Label",
      default: "Sign me up to receive updates"
    },
    {
      type: "boolean",
      name: "isRequired",
      label: "Is the field required?",
      default: false
    },
    {
      type: "enum",
      name: "width",
      group: "styles",
      label: "Width",
      options: [
        {
          label: "Full",
          value: "full"
        },
        {
          label: "One half",
          value: "1/2"
        }
      ],
      default: "full",
      required: true
    }
  ],
  fieldGroups: [
    {
      name: "styles",
      label: "Styles",
      icon: "palette"
    }
  ]
};

// .stackbit/models/Config.ts
var Config = {
  type: "data",
  name: "Config",
  label: "Site configuration",
  singleInstance: true,
  readOnly: true,
  fieldGroups: [
    {
      name: "seo",
      label: "SEO",
      icon: "page"
    }
  ],
  fields: [
    {
      type: "image",
      name: "favicon",
      label: "Favicon",
      default: "https://assets.stackbit.com/components/images/default/favicon.svg"
    },
    {
      type: "model",
      name: "header",
      label: "Header configuration",
      models: ["Header"]
    },
    {
      type: "model",
      name: "footer",
      label: "Footer configuration",
      models: ["Footer"]
    },
    {
      type: "string",
      name: "titleSuffix",
      label: "Suffix for page titles",
      description: "Suffix to append to the title tag of all pages, except in pages where the this behavior is disabled (e.g. typically the home page should have the site name as a prefix)",
      default: null,
      group: "seo"
    },
    {
      type: "image",
      name: "defaultSocialImage",
      label: "Default image for social sharing",
      description: "Default image to use for the og:image meta tag in all pages, except in pages that define another image.",
      default: null,
      group: "seo"
    },
    {
      type: "list",
      name: "defaultMetaTags",
      label: "Default additional meta tags",
      description: "Additional meta tags to set as default in all pages. Tags defined here are low-priority: they may be overriden by page-level settings.",
      group: "seo",
      items: {
        type: "model",
        models: ["MetaTag"]
      }
    }
  ]
};

// .stackbit/models/ContactBlock.ts
var ContactBlock = {
  type: "object",
  name: "ContactBlock",
  label: "Contact",
  labelField: "title",
  fields: [
    {
      type: "string",
      name: "title",
      description: "The value of the field is used for presentation purposes in Stackbit",
      default: "Contact details"
    },
    {
      type: "string",
      name: "phoneNumber",
      label: "Phone number",
      default: "850-123-5021"
    },
    {
      type: "string",
      name: "phoneAltText",
      label: "Phone alt text",
      default: "Phone"
    },
    {
      type: "string",
      name: "email",
      label: "Email address",
      default: "john@doe.com"
    },
    {
      type: "string",
      name: "emailAltText",
      label: "Email address alt text",
      default: "Email"
    },
    {
      type: "string",
      name: "address",
      label: "Address",
      default: "312 Lovely Street, NY"
    },
    {
      type: "string",
      name: "addressAltText",
      label: "Address alt text",
      default: "Address"
    },
    {
      type: "string",
      name: "elementId",
      group: "settings",
      label: "Element ID",
      description: "The unique ID for an HTML element, must not contain whitespace",
      default: ""
    }
  ],
  fieldGroups: [
    {
      name: "settings",
      label: "Settings",
      icon: "gear"
    }
  ]
};

// .stackbit/models/ContactSection.ts
var ContactSection = {
  type: "object",
  name: "ContactSection",
  label: "Contact",
  labelField: "title",
  thumbnail: "https://assets.stackbit.com/components/models/thumbnails/default.png",
  extends: ["Section"],
  groups: ["sectionComponent"],
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
      label: "Title"
    },
    {
      type: "markdown",
      name: "text",
      label: "Text",
      default: "Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl.\nAenean vel aliquet elit, at blandit ipsum."
    },
    {
      type: "model",
      name: "form",
      label: "Form",
      models: ["FormBlock"],
      default: {
        type: "FormBlock",
        elementId: "contact-form",
        action: "/.netlify/functions/submission_created",
        destination: "",
        fields: [
          {
            type: "TextFormControl",
            name: "name",
            label: "Name",
            placeholder: "Your name",
            isRequired: true,
            width: "1/2"
          },
          {
            type: "EmailFormControl",
            name: "email",
            label: "Email",
            placeholder: "Your email",
            isRequired: true,
            width: "1/2"
          },
          {
            type: "TextFormControl",
            name: "home-address",
            label: "Home address",
            placeholder: "Your home address",
            isRequired: true,
            width: "full"
          },
          {
            type: "CheckboxFormControl",
            name: "updates",
            label: "Sign me up to receive updates",
            width: "full"
          }
        ],
        submitLabel: "Send Message"
      }
    },
    {
      type: "model",
      name: "media",
      label: "Media",
      models: ["ImageBlock", "VideoBlock"],
      default: {
        type: "ImageBlock",
        url: "https://assets.stackbit.com/components/images/default/contact.png",
        altText: "Contact form image"
      }
    },
    {
      type: "style",
      name: "styles",
      styles: {
        self: {
          height: ["auto", "screen"],
          width: ["narrow", "wide", "full"],
          margin: ["tw0:96"],
          padding: ["tw0:96"],
          alignItems: ["flex-start", "flex-end", "center"],
          justifyContent: ["flex-start", "flex-end", "center"],
          flexDirection: ["row", "row-reverse", "col", "col-reverse"],
          borderRadius: "*",
          borderWidth: ["0:8"],
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
          fontWeight: ["400", "500"],
          fontStyle: ["italic"],
          textAlign: ["left", "center", "right"],
          textDecoration: ["underline"]
        },
        text: {
          textAlign: ["left", "center", "right"]
        }
      },
      default: {
        self: {
          height: "auto",
          width: "wide",
          margin: ["mt-0", "mb-0", "ml-0", "mr-0"],
          padding: ["pt-12", "pb-12", "pl-4", "pr-4"],
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
        }
      }
    }
  ]
};

// .stackbit/models/CtaSection.ts
var CtaSection = {
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
};

// .stackbit/models/DividerSection.ts
var DividerSection = {
  type: "object",
  name: "DividerSection",
  label: "Divider",
  labelField: "title",
  thumbnail: "https://assets.stackbit.com/components/models/thumbnails/default.png",
  groups: [
    "sectionComponent"
  ],
  fieldGroups: [
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
      description: "The value of the field is used for presentation purposes in Stackbit",
      default: "Divider"
    },
    {
      type: "string",
      name: "elementId",
      group: "settings",
      label: "Element ID",
      description: "The unique ID for an HTML element, must not contain whitespace",
      default: ""
    },
    {
      type: "style",
      name: "styles",
      styles: {
        self: {
          width: [
            "narrow",
            "wide",
            "full"
          ],
          padding: [
            "tw0:96"
          ],
          justifyContent: [
            "flex-start",
            "flex-end",
            "center"
          ],
          borderWidth: [
            "1:8"
          ],
          borderStyle: "*"
        }
      },
      default: {
        self: {
          width: "wide",
          padding: [
            "pt-12",
            "pb-12",
            "pl-4",
            "pr-4"
          ],
          justifyContent: "center",
          borderWidth: 1,
          borderStyle: "solid"
        }
      }
    }
  ]
};

// .stackbit/models/EmailFormControl.ts
var EmailFormControl = {
  type: "object",
  name: "EmailFormControl",
  label: "Email",
  labelField: "label",
  fieldGroups: [
    {
      name: "styles",
      label: "Styles",
      icon: "palette"
    }
  ],
  fields: [
    {
      type: "string",
      name: "name",
      label: "Name"
    },
    {
      type: "string",
      name: "label",
      label: "Label",
      default: "Name"
    },
    {
      type: "boolean",
      name: "hideLabel",
      label: "Hide label",
      default: false
    },
    {
      type: "string",
      name: "placeholder",
      label: "Placeholder text",
      default: "Your name"
    },
    {
      type: "boolean",
      name: "isRequired",
      label: "Is the field required?",
      default: false
    },
    {
      type: "enum",
      name: "width",
      group: "styles",
      label: "Width",
      options: [
        {
          label: "Full",
          value: "full"
        },
        {
          label: "One half",
          value: "1/2"
        }
      ],
      default: "full",
      required: true
    }
  ]
};

// .stackbit/models/FeaturedItem.ts
var FeaturedItem = {
  type: "object",
  name: "FeaturedItem",
  label: "Item",
  labelField: "title",
  fields: [
    {
      type: "string",
      name: "elementId",
      group: "settings",
      label: "Element ID",
      description: "The unique ID for an HTML element, must not contain whitespace",
      default: ""
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      default: "Item Title"
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
      default: ""
    },
    {
      type: "markdown",
      name: "text",
      label: "Text",
      default: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo."
    },
    {
      type: "model",
      name: "featuredImage",
      label: "Image",
      models: [
        "ImageBlock"
      ],
      default: {
        type: "ImageBlock",
        url: "https://assets.stackbit.com/components/images/default/default-image.png",
        altText: "Item image"
      }
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
      }
    },
    {
      type: "style",
      name: "styles",
      styles: {
        self: {
          padding: [
            "tw0:36"
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
          textAlign: [
            "left",
            "center",
            "right"
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
          textDecoration: [
            "underline"
          ]
        }
      },
      default: {
        self: {
          textAlign: "left"
        }
      }
    }
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
  ]
};

// .stackbit/models/FeaturedItemsSection.ts
var FeaturedItemsSection = {
  type: "object",
  name: "FeaturedItemsSection",
  label: "Featured items",
  labelField: "title",
  thumbnail: "https://assets.stackbit.com/components/models/thumbnails/default.png",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      default: "Featured Items"
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
      default: "The section subtitle"
    },
    {
      type: "list",
      name: "items",
      label: "Items",
      items: {
        type: "model",
        models: [
          "FeaturedItem"
        ]
      },
      default: [
        {
          type: "FeaturedItem",
          title: "Item Title",
          text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.",
          featuredImage: {
            type: "ImageBlock",
            url: "https://assets.stackbit.com/components/images/default/default-image.png",
            altText: "Item image"
          },
          styles: {
            title: {
              textAlign: "left"
            },
            subtitle: {
              fontWeight: 400,
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
          label: "Apply Now",
          url: "#",
          style: "primary"
        },
        {
          type: "Button",
          label: "Learn More",
          url: "#",
          style: "secondary"
        }
      ]
    },
    {
      type: "number",
      name: "columns",
      label: "Items per row",
      group: "styles",
      controlType: "slider",
      min: 1,
      max: 4,
      step: 1,
      default: 3
    },
    {
      type: "number",
      name: "spacingX",
      label: "Horizontal spacing between items",
      group: "styles",
      controlType: "slider",
      min: 0,
      max: 160,
      step: 1,
      unit: "px",
      default: 16
    },
    {
      type: "number",
      name: "spacingY",
      label: "Vertical spacing between items",
      group: "styles",
      controlType: "slider",
      min: 0,
      max: 160,
      step: 1,
      unit: "px",
      default: 16
    },
    {
      type: "enum",
      name: "colors",
      label: "Colors",
      description: "The color theme of the section",
      default: "colors-f",
      options: [
        {
          label: "Colors A",
          value: "colors-a",
          textColor: "$onDark",
          backgroundColor: "$dark",
          borderColor: "#ececec"
        },
        {
          label: "Colors B",
          value: "colors-b",
          textColor: "$onLight",
          backgroundColor: "$light",
          borderColor: "#ececec"
        },
        {
          label: "Colors C",
          value: "colors-c",
          textColor: "$onPrimary",
          backgroundColor: "$primary",
          borderColor: "#ececec"
        },
        {
          label: "Colors D",
          value: "colors-d",
          textColor: "$onSecondary",
          backgroundColor: "$secondary",
          borderColor: "#ececec"
        },
        {
          label: "Colors E",
          value: "colors-e",
          textColor: "$onComplementary",
          backgroundColor: "$complementary",
          borderColor: "#ececec"
        },
        {
          label: "Colors F",
          value: "colors-f",
          textColor: "$onLight",
          backgroundColor: "transparent",
          borderColor: "#ececec"
        }
      ],
      group: "styles",
      controlType: "palette"
    },
    {
      type: "string",
      name: "elementId",
      group: "settings",
      label: "Element ID",
      description: "The unique ID for an HTML element, must not contain whitespace",
      default: ""
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
  ]
};

// .stackbit/models/FeaturedPostsSection.ts
var FeaturedPostsSection = {
  type: "object",
  name: "FeaturedPostsSection",
  label: "Featured posts",
  labelField: "title",
  thumbnail: "https://assets.stackbit.com/components/models/thumbnails/default.png",
  extends: [
    "PostFeedSection"
  ],
  groups: [
    "sectionComponent"
  ],
  fields: [
    {
      name: "title",
      default: "Featured"
    },
    {
      name: "subtitle",
      default: "Featured blog posts section example"
    },
    {
      type: "list",
      name: "posts",
      label: "Posts",
      items: {
        type: "reference",
        models: [
          "PostLayout"
        ]
      },
      default: [
        "content/pages/blog/post-three.md",
        "content/pages/blog/post-two.md",
        "content/pages/blog/post-one.md"
      ]
    }
  ]
};

// .stackbit/models/FeaturedProjectsSection.ts
var FeaturedProjectsSection = {
  type: "object",
  name: "FeaturedProjectsSection",
  label: "Featured projects",
  labelField: "title",
  thumbnail: "https://assets.stackbit.com/components/models/thumbnails/default.png",
  extends: [
    "ProjectFeedSection"
  ],
  groups: [
    "sectionComponent"
  ],
  fields: [
    {
      name: "title",
      default: "Featured"
    },
    {
      name: "subtitle",
      default: "Featured projects section example"
    },
    {
      type: "list",
      name: "projects",
      label: "Projects",
      items: {
        type: "reference",
        models: [
          "ProjectLayout"
        ]
      },
      default: [
        "content/pages/projects/project-three.md",
        "content/pages/projects/project-two.md",
        "content/pages/projects/project-one.md"
      ]
    }
  ]
};

// .stackbit/models/Footer.ts
var Footer = {
  type: "object",
  name: "Footer",
  label: "Footer",
  labelField: "copyrightText",
  readOnly: true,
  fields: [
    {
      type: "list",
      name: "primaryLinks",
      label: "Primary navigation links",
      items: {
        type: "model",
        models: [
          "Button",
          "Link"
        ]
      },
      default: [
        {
          type: "Link",
          label: "Projects",
          url: "/",
          altText: "Projects"
        },
        {
          type: "Link",
          label: "Info",
          url: "/",
          altText: "Info"
        }
      ]
    },
    {
      type: "model",
      name: "contacts",
      label: "Contacts",
      models: [
        "ContactBlock"
      ],
      default: {
        phoneNumber: "850-123-5021",
        phoneAltText: "Call us",
        email: "john@doe.com",
        emailAltText: "Email us"
      }
    },
    {
      type: "markdown",
      name: "copyrightText",
      label: "Copyright text",
      default: "Copyright text"
    },
    {
      type: "style",
      name: "styles",
      styles: {
        self: {
          width: [
            "narrow",
            "wide",
            "full"
          ],
          padding: [
            "tw0:36"
          ]
        }
      },
      default: {
        self: {
          width: "narrow",
          padding: [
            "pt-16",
            "pb-16",
            "pl-4",
            "pr-4"
          ]
        }
      }
    }
  ]
};

// .stackbit/models/FormBlock.ts
var FormBlock = {
  type: "object",
  name: "FormBlock",
  label: "Form",
  labelField: "elementId",
  fieldGroups: [
    {
      name: "settings",
      label: "Settings",
      icon: "gear"
    }
  ],
  fields: [
    {
      type: "list",
      name: "fields",
      label: "Fields",
      items: {
        type: "model",
        models: [
          "TextFormControl",
          "EmailFormControl",
          "TextareaFormControl",
          "CheckboxFormControl",
          "SelectFormControl"
        ]
      },
      default: [
        {
          type: "TextFormControl",
          label: "Name",
          name: "name",
          placeholder: "Your name",
          isRequired: true,
          width: "1/2"
        },
        {
          type: "EmailFormControl",
          label: "Email",
          name: "email",
          placeholder: "Your email",
          isRequired: true,
          width: "1/2"
        },
        {
          type: "TextFormControl",
          label: "Home Address",
          name: "home-address",
          placeholder: "Your home address",
          isRequired: false,
          width: "full"
        },
        {
          type: "CheckboxFormControl",
          name: "updates",
          label: "Sign me up to receive updates",
          width: "full"
        }
      ]
    },
    {
      type: "string",
      name: "submitLabel",
      label: "Button",
      default: "Send Message"
    },
    {
      type: "string",
      name: "elementId",
      group: "settings",
      label: "Element ID",
      description: "The unique ID used for id and name attributes, must not contain whitespace",
      default: "contact-form",
      required: true
    },
    {
      type: "string",
      name: "action",
      group: "settings",
      label: "Action (form submission URL)",
      default: "/.netlify/functions/submission_created"
    },
    {
      type: "string",
      name: "destination",
      label: "Destination (email to redirect responses)",
      default: "",
      group: "settings"
    },
    {
      type: "style",
      name: "styles",
      styles: {
        submitLabel: {
          textAlign: [
            "left",
            "center",
            "right"
          ]
        }
      },
      default: {
        submitLabel: {
          textAlign: "left"
        }
      }
    }
  ]
};

// .stackbit/models/Header.ts
var Header = {
  type: "object",
  name: "Header",
  label: "Header",
  labelField: "title",
  readOnly: true,
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
      name: "headerVariant",
      group: "styles",
      label: "Header arrangement",
      options: [
        {
          label: "Header with logo and primary links on the left",
          value: "variant-a"
        },
        {
          label: "Header with logo on the left and social links furthest to the right",
          value: "variant-b"
        },
        {
          label: "Header with logo on the left and primary links furthest to the right",
          value: "variant-c"
        }
      ],
      default: "variant-c",
      required: true
    },
    {
      type: "boolean",
      name: "isSticky",
      group: "styles",
      label: "Make header stick to the top of the page",
      default: false
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      default: "Your Brand"
    },
    {
      type: "boolean",
      name: "isTitleVisible",
      label: "Display title",
      default: true
    },
    {
      type: "model",
      name: "logo",
      label: "Logo",
      models: [
        "ImageBlock"
      ],
      default: {
        type: "ImageBlock",
        url: "https://assets.stackbit.com/components/images/default/default-image.png",
        altText: "Your logo image",
        caption: ""
      }
    },
    {
      type: "list",
      name: "primaryLinks",
      label: "Primary navigation links",
      items: {
        type: "model",
        models: [
          "Link"
        ]
      },
      default: [
        {
          type: "Link",
          label: "Home",
          url: "/",
          altText: "Home"
        },
        {
          type: "Link",
          label: "Blog",
          url: "/",
          altText: "Blog"
        }
      ]
    },
    {
      type: "list",
      name: "socialLinks",
      label: "Social links",
      items: {
        type: "model",
        models: [
          "Social"
        ]
      },
      default: [
        {
          type: "Social",
          icon: "twitter",
          label: "",
          altText: "Twitter",
          url: "/",
          elementId: false,
          showIcon: true
        },
        {
          type: "Social",
          icon: "github",
          label: "",
          altText: "GitHub",
          url: "/",
          elementId: false,
          showIcon: true
        }
      ]
    },
    {
      type: "style",
      name: "styles",
      styles: {
        self: {
          width: [
            "narrow",
            "wide",
            "full"
          ]
        }
      },
      default: {
        self: {
          width: "narrow"
        }
      }
    }
  ]
};

// .stackbit/models/HeroSection.ts
var HeroSection = {
  type: "object",
  name: "HeroSection",
  label: "Hero",
  labelField: "title",
  thumbnail: "https://assets.stackbit.com/components/models/thumbnails/default.png",
  extends: ["Section"],
  groups: ["sectionComponent"],
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
      default: "This Is A Big Hero Headline"
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
      default: "Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl.\nAenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet\nerat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat\nvitae interdum. Ut nec massa eget lorem blandit condimentum et at risus."
    },
    {
      type: "list",
      name: "actions",
      label: "Actions",
      items: {
        type: "model",
        models: ["Button", "Link"]
      },
      default: [
        {
          type: "Button",
          label: "Get Started",
          url: "/",
          style: "primary",
          elementId: "hero-main-button"
        },
        {
          type: "Button",
          label: "Learn More",
          url: "/",
          style: "secondary"
        }
      ]
    },
    {
      type: "model",
      name: "media",
      label: "Media",
      models: ["FormBlock", "ImageBlock", "VideoBlock"],
      default: {
        type: "ImageBlock",
        url: "/images/hero.webp",
        altText: "Hero section image"
      }
    },
    {
      type: "style",
      name: "styles",
      styles: {
        self: {
          height: ["auto", "screen"],
          width: ["narrow", "wide", "full"],
          margin: ["tw0:96"],
          padding: ["tw0:96"],
          alignItems: ["flex-start", "flex-end", "center"],
          justifyContent: ["flex-start", "flex-end", "center"],
          flexDirection: ["row", "row-reverse", "col", "col-reverse"],
          borderRadius: "*",
          borderWidth: ["0:8"],
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
          fontWeight: ["400", "500"],
          fontStyle: ["italic"],
          textAlign: ["left", "center", "right"],
          textDecoration: ["underline"]
        },
        subtitle: {
          fontWeight: ["400", "500"],
          fontStyle: ["italic"],
          textAlign: ["left", "center", "right"],
          textDecoration: ["underline"]
        },
        text: {
          textAlign: ["left", "center", "right"]
        },
        actions: {
          justifyContent: ["flex-start", "flex-end", "center"]
        }
      },
      default: {
        self: {
          height: "auto",
          width: "wide",
          margin: ["mt-0", "mb-0", "ml-0", "mr-0"],
          padding: ["pt-12", "pb-12", "pl-4", "pr-4"],
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
        subtitle: {
          fontWeight: 400,
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
};

// .stackbit/models/ImageBlock.ts
var ImageBlock = {
  type: "object",
  name: "ImageBlock",
  label: "Image",
  labelField: "altText",
  fieldGroups: [
    {
      name: "settings",
      label: "Settings",
      icon: "gear"
    }
  ],
  fields: [
    {
      type: "image",
      name: "url",
      label: "Image",
      description: "The URL of the image",
      default: "https://assets.stackbit.com/components/images/default/default-image.png"
    },
    {
      type: "string",
      name: "altText",
      label: "Alt text",
      description: "The alt text of the image",
      default: "altText of the image"
    },
    {
      type: "string",
      name: "caption",
      label: "Caption",
      description: "The caption of the image",
      default: "Caption of the image"
    },
    {
      type: "string",
      name: "elementId",
      group: "settings",
      label: "Element ID",
      description: "The unique ID for an HTML element, must not contain whitespace",
      default: ""
    }
  ]
};

// .stackbit/models/Label.ts
var Label = {
  type: "object",
  name: "Label",
  label: "Label",
  labelField: "label",
  thumbnail: "https://assets.stackbit.com/components/models/thumbnails/default.png",
  fields: [
    {
      type: "string",
      name: "label",
      label: "Label",
      default: "Label title",
      required: true
    },
    {
      type: "string",
      name: "url",
      label: "URL",
      default: ""
    }
  ]
};

// .stackbit/models/LabelsSection.ts
var LabelsSection = {
  type: "object",
  name: "LabelsSection",
  label: "Labels",
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
      type: "string",
      name: "title",
      label: "Title",
      default: "Skills"
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
      default: "The section subtitle"
    },
    {
      type: "list",
      name: "items",
      label: "Items",
      items: {
        type: "model",
        models: [
          "Label"
        ]
      },
      default: [
        {
          type: "Label",
          label: "Label title"
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
};

// .stackbit/models/Link.ts
var Link = {
  type: "object",
  name: "Link",
  label: "Link",
  labelField: "label",
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
      name: "label",
      label: "Label",
      default: "Learn more"
    },
    {
      type: "string",
      name: "altText",
      label: "Alt text",
      description: "The alternative text for screen readers",
      default: ""
    },
    {
      type: "string",
      name: "url",
      label: "URL",
      default: "/",
      required: true
    },
    {
      type: "boolean",
      name: "showIcon",
      group: "styles",
      label: "Show icon",
      default: false
    },
    {
      type: "enum",
      name: "icon",
      group: "styles",
      label: "Icon",
      options: [
        {
          label: "Apple",
          value: "apple"
        },
        {
          label: "Arrow left",
          value: "arrowLeft"
        },
        {
          label: "Arrow left circle",
          value: "arrowLeftCircle"
        },
        {
          label: "Arrow right",
          value: "arrowRight"
        },
        {
          label: "Arrow right circle",
          value: "arrowRightCircle"
        },
        {
          label: "Arrow up left",
          value: "arrowUpLeft"
        },
        {
          label: "Arrow up right",
          value: "arrowUpRight"
        },
        {
          label: "Cart",
          value: "cart"
        },
        {
          label: "Chevron left",
          value: "chevronLeft"
        },
        {
          label: "Chevron right",
          value: "chevronRight"
        },
        {
          label: "Facebook",
          value: "facebook"
        },
        {
          label: "GitHub",
          value: "github"
        },
        {
          label: "Google Play",
          value: "googlePlay"
        },
        {
          label: "Instagram",
          value: "instagram"
        },
        {
          label: "LinkedIn",
          value: "linkedin"
        },
        {
          label: "Mail",
          value: "mail"
        },
        {
          label: "Play",
          value: "play"
        },
        {
          label: "Play circle",
          value: "playCircle"
        },
        {
          label: "Reddit",
          value: "reddit"
        },
        {
          label: "Send",
          value: "send"
        },
        {
          label: "Twitter",
          value: "twitter"
        },
        {
          label: "Vimeo",
          value: "vimeo"
        },
        {
          label: "YouTube",
          value: "youtube"
        }
      ],
      default: "arrowRight"
    },
    {
      type: "enum",
      name: "iconPosition",
      group: "styles",
      controlType: "button-group",
      label: "Icon position",
      options: [
        {
          label: "Left",
          value: "left"
        },
        {
          label: "Right",
          value: "right"
        }
      ],
      default: "right"
    },
    {
      type: "string",
      name: "elementId",
      group: "settings",
      label: "Element ID",
      description: "The unique ID for an HTML element, must not contain whitespace",
      default: ""
    }
  ]
};

// .stackbit/models/MediaGallerySection.ts
var MediaGallerySection = {
  type: "object",
  name: "MediaGallerySection",
  label: "Media gallery",
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
      type: "string",
      name: "title",
      label: "Title",
      default: "Gallery"
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
      default: "This is the subtitle"
    },
    {
      type: "list",
      name: "images",
      label: "Images",
      items: {
        type: "model",
        models: [
          "ImageBlock"
        ]
      },
      default: [
        {
          type: "ImageBlock",
          url: "/images/gallery-1.jpg",
          altText: "Image one",
          caption: "Image one caption"
        },
        {
          type: "ImageBlock",
          url: "/images/gallery-2.jpg",
          altText: "Image two",
          caption: "Image two caption"
        },
        {
          type: "ImageBlock",
          url: "/images/gallery-3.jpg",
          altText: "Image three",
          caption: "Image three caption"
        },
        {
          type: "ImageBlock",
          url: "/images/gallery-4.jpg",
          altText: "Image four",
          caption: "Image four caption"
        }
      ]
    },
    {
      type: "number",
      name: "spacing",
      label: "Spacing between images",
      group: "styles",
      controlType: "slider",
      min: 0,
      max: 160,
      step: 1,
      unit: "px",
      default: 16
    },
    {
      type: "number",
      name: "columns",
      label: "Images per row",
      group: "styles",
      controlType: "slider",
      min: 1,
      max: 7,
      step: 1,
      default: 4
    },
    {
      type: "enum",
      name: "aspectRatio",
      label: "Image aspect ratio",
      group: "styles",
      options: [
        {
          label: "1:1",
          value: "1:1"
        },
        {
          label: "3:2",
          value: "3:2"
        },
        {
          label: "2:3",
          value: "2:3"
        },
        {
          label: "4:3",
          value: "4:3"
        },
        {
          label: "3:4",
          value: "3:4"
        },
        {
          label: "16:9",
          value: "16:9"
        },
        {
          label: "Auto",
          value: "auto"
        }
      ],
      default: "1:1"
    },
    {
      type: "boolean",
      name: "showCaption",
      label: "Show caption",
      default: true
    },
    {
      type: "boolean",
      name: "enableHover",
      label: "Enable hover",
      default: true
    },
    {
      type: "style",
      name: "styles",
      styles: {
        self: {
          width: [
            "narrow",
            "wide",
            "full"
          ],
          height: [
            "auto",
            "screen"
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
          width: "full",
          height: "auto",
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
};

// .stackbit/models/MetaTag.ts
var MetaTag = {
  type: "object",
  name: "MetaTag",
  label: "MetaTag",
  labelField: "property",
  fields: [
    {
      type: "enum",
      name: "property",
      label: "Property",
      default: "og:title",
      options: [
        {
          label: "og:title",
          value: "og:title"
        },
        {
          label: "og:type",
          value: "og:type"
        },
        {
          label: "og:image",
          value: "og:image"
        },
        {
          label: "og:image:alt",
          value: "og:image:alt"
        },
        {
          label: "og:url",
          value: "og:url"
        },
        {
          label: "og:description",
          value: "og:description"
        },
        {
          label: "og:locale",
          value: "og:locale"
        },
        {
          label: "og:site_name",
          value: "og:site_name"
        },
        {
          label: "og:video",
          value: "og:video"
        },
        {
          label: "twitter:card",
          value: "twitter:card"
        },
        {
          label: "twitter:site",
          value: "twitter:site"
        },
        {
          label: "twitter:creator",
          value: "twitter:creator"
        },
        {
          label: "twitter:description",
          value: "twitter:description"
        },
        {
          label: "twitter:title",
          value: "twitter:title"
        },
        {
          label: "twitter:image",
          value: "twitter:image"
        },
        {
          label: "twitter:image:alt",
          value: "twitter:image:alt"
        },
        {
          label: "twitter:player",
          value: "twitter:player"
        }
      ]
    },
    {
      type: "string",
      name: "content",
      label: "Content",
      default: ""
    }
  ]
};

// .stackbit/models/PagedPostsSection.ts
var PagedPostsSection = {
  type: "object",
  name: "PagedPostsSection",
  label: "Post feed",
  labelField: "title",
  extends: [
    "PostFeedSection"
  ],
  fields: [
    {
      name: "title",
      hidden: true,
      default: null
    },
    {
      name: "subtitle",
      hidden: true,
      default: null
    },
    {
      name: "showDate",
      default: true
    },
    {
      name: "showAuthor",
      default: true
    },
    {
      name: "variant",
      default: "variant-a"
    },
    {
      name: "actions",
      hidden: true,
      default: []
    }
  ]
};

// .stackbit/models/PagedProjectsSection.ts
var PagedProjectsSection = {
  type: "object",
  name: "PagedProjectsSection",
  label: "Project feed",
  labelField: "title",
  extends: [
    "ProjectFeedSection"
  ],
  fields: [
    {
      name: "variant",
      default: "variant-a"
    },
    {
      name: "title",
      hidden: true,
      default: null
    },
    {
      name: "subtitle",
      hidden: true,
      default: null
    },
    {
      name: "actions",
      hidden: true,
      default: []
    }
  ]
};

// .stackbit/models/seo-fields.ts
var seoFields = [
  {
    type: "string",
    name: "metaTitle",
    label: "Title meta tag (overrides title)",
    description: "By default, the <title> tag for this page is determined by the title field (in the Content group). You can override the tag value here.",
    default: null,
    group: "seo"
  },
  {
    type: "string",
    name: "metaDescription",
    label: "Description meta tag",
    description: "The description tag is used by search engines and for social sharing. By default, the tag is not set.",
    default: null,
    group: "seo"
  },
  {
    type: "boolean",
    name: "addTitleSuffix",
    label: "Add title suffix",
    description: "If enabled, the title suffix defined in the site configuration is appended to the title tag of this page.",
    default: true,
    group: "seo"
  },
  {
    type: "image",
    name: "socialImage",
    label: " Image for social sharing",
    description: "Set the image used when sharing this page on social networks (e.g. Facebook, Twitter). If not set, the default social image defined in the site configuration is used.",
    default: null,
    group: "seo"
  },
  {
    type: "list",
    name: "metaTags",
    label: "Additional meta tags",
    description: "To add or override any meta tag for this page, add entries to this list. Entries defined here take precedence over any other defaults.",
    items: {
      type: "model",
      models: ["MetaTag"]
    },
    group: "seo"
  }
];
var seoFieldGroups = [
  {
    name: "seo",
    label: "SEO",
    icon: "page"
  }
];

// .stackbit/models/PageLayout.ts
var PageLayout = {
  type: "page",
  name: "PageLayout",
  label: "Page",
  layout: "PageLayout",
  hideContent: true,
  urlPath: "/{slug}",
  filePath: "{slug}.md",
  thumbnail: "https://assets.stackbit.com/components/models/thumbnails/default.png",
  fieldGroups: [
    ...seoFieldGroups,
    {
      name: "styles",
      label: "Styles",
      icon: "palette"
    }
  ],
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      default: "This is a new page",
      required: true
    },
    {
      type: "list",
      name: "sections",
      label: "Sections",
      items: {
        type: "model",
        models: [],
        groups: ["sectionComponent"]
      },
      default: [
        {
          type: "HeroSection",
          elementId: "homepage-hero-1",
          title: "This Is A Big Hero Headline",
          text: "Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl. Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat itae interdum. Ut nec massa eget lorem blandit condimentum et at risus.",
          actions: [
            {
              type: "Button",
              label: "Get Started",
              url: "/",
              style: "primary",
              elementId: "hero-main-button"
            },
            {
              type: "Button",
              label: "Learn More",
              url: "/",
              style: "secondary"
            }
          ],
          media: {
            type: "ImageBlock",
            url: "/images/hero.webp",
            altText: "Image alt text"
          },
          styles: {
            self: {
              height: "auto",
              width: "wide",
              margin: ["mt-0", "mb-0", "ml-0", "mr-0"],
              padding: ["pt-12", "pb-12", "pl-4", "pr-4"],
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row"
            },
            title: {
              textAlign: "left"
            },
            subtitle: {
              fontWeight: 400,
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
    },
    ...seoFields,
    {
      type: "enum",
      name: "colors",
      label: "Colors",
      description: "The color theme of the page",
      group: "styles",
      controlType: "palette",
      options: [
        {
          label: "Colors A",
          value: "colors-a",
          textColor: "$onDark",
          backgroundColor: "$dark",
          borderColor: "#ececec"
        },
        {
          label: "Colors B",
          value: "colors-b",
          textColor: "$onLight",
          backgroundColor: "$light",
          borderColor: "#ececec"
        },
        {
          label: "Colors C",
          value: "colors-c",
          textColor: "$onPrimary",
          backgroundColor: "$primary",
          borderColor: "#ececec"
        },
        {
          label: "Colors D",
          value: "colors-d",
          textColor: "$onSecondary",
          backgroundColor: "$secondary",
          borderColor: "#ececec"
        },
        {
          label: "Colors E",
          value: "colors-e",
          textColor: "$onComplementary",
          backgroundColor: "$complementary",
          borderColor: "#ececec"
        }
      ],
      default: "colors-a"
    },
    {
      type: "model",
      name: "backgroundImage",
      group: "styles",
      label: "Page background image",
      models: ["BackgroundImage"],
      default: {
        type: "BackgroundImage",
        url: "/images/bg2.jpg"
      }
    }
  ]
};

// .stackbit/models/Person.ts
var Person = {
  type: "data",
  name: "Person",
  label: "Person",
  labelField: "firstName",
  filePath: "team/{slug}.json",
  fields: [
    {
      type: "string",
      name: "firstName",
      label: "First name",
      default: "Name",
      required: true
    },
    {
      type: "string",
      name: "lastName",
      label: "Last name",
      default: "Surname"
    },
    {
      type: "string",
      name: "role",
      label: "Role",
      default: "Role"
    },
    {
      type: "markdown",
      name: "bio",
      label: "Bio",
      default: "With over 10 years in both public and private sectors, Johnna has experience in management consultation, team building, professional development, strategic implementation, and company collaboration."
    },
    {
      type: "model",
      name: "image",
      label: "Image",
      models: ["ImageBlock"],
      default: {
        type: "ImageBlock",
        url: "https://assets.stackbit.com/components/images/default/default-person.png",
        altText: "Person photo"
      }
    }
  ]
};

// .stackbit/models/PostFeedLayout.ts
var PostFeedLayout = {
  name: "PostFeedLayout",
  label: "Blog",
  labelField: "title",
  layout: "PostFeedLayout",
  hideContent: true,
  fieldGroups: [
    {
      name: "styles",
      label: "Styles",
      icon: "palette"
    }
  ],
  extends: [
    "Seo"
  ],
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      default: "This is a page title"
    },
    {
      type: "enum",
      name: "colors",
      label: "Colors",
      description: "The color theme of the page",
      group: "styles",
      controlType: "palette",
      options: [
        {
          label: "Colors A",
          value: "colors-a",
          textColor: "$onDark",
          backgroundColor: "$dark",
          borderColor: "#ececec"
        },
        {
          label: "Colors B",
          value: "colors-b",
          textColor: "$onLight",
          backgroundColor: "$light",
          borderColor: "#ececec"
        },
        {
          label: "Colors C",
          value: "colors-c",
          textColor: "$onPrimary",
          backgroundColor: "$primary",
          borderColor: "#ececec"
        },
        {
          label: "Colors D",
          value: "colors-d",
          textColor: "$onSecondary",
          backgroundColor: "$secondary",
          borderColor: "#ececec"
        },
        {
          label: "Colors E",
          value: "colors-e",
          textColor: "$onComplementary",
          backgroundColor: "$complementary",
          borderColor: "#ececec"
        }
      ],
      default: "colors-a"
    },
    {
      type: "model",
      name: "backgroundImage",
      group: "styles",
      label: "Page background image",
      models: [
        "BackgroundImage"
      ]
    },
    {
      type: "number",
      name: "numOfPostsPerPage",
      label: "Number of Posts per page",
      description: "set to 0 to show all posts on a single page",
      default: 10
    },
    {
      type: "model",
      name: "postFeed",
      readOnly: true,
      label: "Post Feed",
      models: [
        "PagedPostsSection"
      ],
      default: {
        title: null,
        subtitle: null,
        showDate: true,
        showAuthor: true,
        variant: "variant-a"
      }
    },
    {
      type: "list",
      name: "topSections",
      label: "Top Sections",
      items: {
        type: "model",
        groups: [
          "sectionComponent"
        ]
      }
    },
    {
      type: "list",
      name: "bottomSections",
      label: "Bottom Sections",
      items: {
        type: "model",
        groups: [
          "sectionComponent"
        ]
      }
    },
    {
      type: "style",
      name: "styles",
      styles: {
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
        }
      },
      default: {
        title: {
          textAlign: "center"
        }
      }
    }
  ]
};

// .stackbit/models/PostFeedSection.ts
var PostFeedSection = {
  type: "object",
  name: "PostFeedSection",
  label: "Post feed",
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
      default: "Posts"
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
      default: "Blog posts"
    },
    {
      type: "boolean",
      name: "showDate",
      label: "Show post date",
      default: false
    },
    {
      type: "boolean",
      name: "showAuthor",
      label: "Show post author",
      default: false
    },
    {
      type: "boolean",
      name: "showExcerpt",
      label: "Show post excerpt",
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
};

// .stackbit/models/PostLayout.ts
var PostLayout = {
  type: "page",
  name: "PostLayout",
  label: "Post",
  layout: "PostLayout",
  urlPath: "/blog/{slug}",
  filePath: "blog/{slug}.md",
  thumbnail: "https://assets.stackbit.com/components/models/thumbnails/default.png",
  fieldGroups: [
    ...seoFieldGroups,
    {
      name: "styles",
      label: "Styles",
      icon: "palette"
    }
  ],
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      default: "This is a blog post title",
      required: true
    },
    {
      type: "date",
      name: "date",
      label: "Date",
      required: true
    },
    {
      type: "reference",
      name: "author",
      label: "Author",
      models: ["Person"]
    },
    {
      type: "string",
      name: "excerpt",
      label: "Excerpt",
      default: "Nunc rutrum felis dui, ut consequat sapien scelerisque vel. Integer condimentum dignissim justo vel faucibus."
    },
    {
      type: "model",
      name: "featuredImage",
      label: "Featured image",
      models: ["ImageBlock"],
      default: {
        type: "ImageBlock",
        url: "https://assets.stackbit.com/components/images/default/post-4.jpeg",
        altText: "Post thumbnail image"
      }
    },
    {
      type: "model",
      name: "media",
      label: "Media",
      models: ["ImageBlock", "VideoBlock"],
      default: {
        type: "ImageBlock",
        url: "https://assets.stackbit.com/components/images/default/post-4.jpeg",
        altText: "Post image"
      }
    },
    {
      type: "list",
      name: "bottomSections",
      label: "Sections",
      items: {
        type: "model",
        models: [],
        groups: ["sectionComponent"]
      }
    },
    ...seoFields,
    {
      type: "enum",
      name: "colors",
      label: "Colors",
      description: "The color theme of the page",
      group: "styles",
      controlType: "palette",
      options: [
        {
          label: "Colors A",
          value: "colors-a",
          textColor: "$onDark",
          backgroundColor: "$dark",
          borderColor: "#ececec"
        },
        {
          label: "Colors B",
          value: "colors-b",
          textColor: "$onLight",
          backgroundColor: "$light",
          borderColor: "#ececec"
        },
        {
          label: "Colors C",
          value: "colors-c",
          textColor: "$onPrimary",
          backgroundColor: "$primary",
          borderColor: "#ececec"
        },
        {
          label: "Colors D",
          value: "colors-d",
          textColor: "$onSecondary",
          backgroundColor: "$secondary",
          borderColor: "#ececec"
        },
        {
          label: "Colors E",
          value: "colors-e",
          textColor: "$onComplementary",
          backgroundColor: "$complementary",
          borderColor: "#ececec"
        }
      ],
      default: "colors-a"
    },
    {
      type: "model",
      name: "backgroundImage",
      group: "styles",
      label: "Post background image",
      models: ["BackgroundImage"],
      default: {
        type: "BackgroundImage",
        url: "/images/bg2.jpg"
      }
    }
  ]
};

// .stackbit/models/ProjectFeedLayout.ts
var ProjectFeedLayout = {
  name: "ProjectFeedLayout",
  label: "Projects",
  labelField: "title",
  layout: "ProjectFeedLayout",
  hideContent: true,
  extends: [
    "Seo"
  ],
  fieldGroups: [
    {
      name: "styles",
      label: "Styles",
      icon: "palette"
    }
  ],
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      default: "This is a page title"
    },
    {
      type: "enum",
      name: "colors",
      label: "Colors",
      description: "The color theme of the page",
      group: "styles",
      controlType: "palette",
      options: [
        {
          label: "Colors A",
          value: "colors-a",
          textColor: "$onDark",
          backgroundColor: "$dark",
          borderColor: "#ececec"
        },
        {
          label: "Colors B",
          value: "colors-b",
          textColor: "$onLight",
          backgroundColor: "$light",
          borderColor: "#ececec"
        },
        {
          label: "Colors C",
          value: "colors-c",
          textColor: "$onPrimary",
          backgroundColor: "$primary",
          borderColor: "#ececec"
        },
        {
          label: "Colors D",
          value: "colors-d",
          textColor: "$onSecondary",
          backgroundColor: "$secondary",
          borderColor: "#ececec"
        },
        {
          label: "Colors E",
          value: "colors-e",
          textColor: "$onComplementary",
          backgroundColor: "$complementary",
          borderColor: "#ececec"
        }
      ],
      default: "colors-a"
    },
    {
      type: "model",
      name: "backgroundImage",
      group: "styles",
      label: "Page background image",
      models: [
        "BackgroundImage"
      ]
    },
    {
      type: "number",
      name: "numOfProjectsPerPage",
      label: "Number of projects per page",
      description: "set to 0 to show all projects on a single page",
      default: 10
    },
    {
      type: "model",
      name: "projectFeed",
      readOnly: true,
      label: "Project feed",
      models: [
        "PagedProjectsSection"
      ],
      default: {
        title: null,
        subtitle: null,
        showDate: true,
        showDescription: true,
        variant: "variant-a"
      }
    },
    {
      type: "list",
      name: "topSections",
      label: "Top Sections",
      items: {
        type: "model",
        groups: [
          "sectionComponent"
        ]
      }
    },
    {
      type: "list",
      name: "bottomSections",
      label: "Bottom Sections",
      items: {
        type: "model",
        groups: [
          "sectionComponent"
        ]
      }
    },
    {
      type: "style",
      name: "styles",
      styles: {
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
        }
      },
      default: {
        title: {
          textAlign: "center"
        }
      }
    }
  ]
};

// .stackbit/models/ProjectFeedSection.ts
var ProjectFeedSection = {
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
};

// .stackbit/models/ProjectLayout.ts
var ProjectLayout = {
  type: "page",
  name: "ProjectLayout",
  label: "Project page",
  layout: "ProjectLayout",
  urlPath: "/projects/{slug}",
  filePath: "projects/{slug}.md",
  thumbnail: "https://assets.stackbit.com/components/models/thumbnails/default.png",
  fieldGroups: [
    ...seoFieldGroups,
    {
      name: "styles",
      label: "Styles",
      icon: "palette"
    }
  ],
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      default: "This is a project title",
      required: true
    },
    {
      type: "date",
      name: "date",
      label: "Date",
      required: true
    },
    {
      type: "string",
      name: "client",
      label: "Client",
      default: "Awesome client"
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      default: "Nunc rutrum felis dui, ut consequat sapien scelerisque vel. Integer condimentum dignissim justo vel faucibus."
    },
    {
      type: "model",
      name: "featuredImage",
      label: "Featured image",
      models: ["ImageBlock"],
      default: {
        type: "ImageBlock",
        url: "https://assets.stackbit.com/components/images/default/post-4.jpeg",
        altText: "Project thumbnail image",
        caption: ""
      }
    },
    {
      type: "model",
      name: "media",
      label: "Media",
      models: ["ImageBlock", "VideoBlock"],
      default: {
        type: "ImageBlock",
        url: "https://assets.stackbit.com/components/images/default/post-4.jpeg",
        altText: "Project image"
      }
    },
    {
      type: "list",
      name: "bottomSections",
      label: "Sections",
      items: {
        type: "model",
        models: [],
        groups: ["sectionComponent"]
      }
    },
    ...seoFields,
    {
      type: "enum",
      name: "colors",
      label: "Colors",
      description: "The color theme of the page",
      group: "styles",
      controlType: "palette",
      options: [
        {
          label: "Colors A",
          value: "colors-a",
          textColor: "$onDark",
          backgroundColor: "$dark",
          borderColor: "#ececec"
        },
        {
          label: "Colors B",
          value: "colors-b",
          textColor: "$onLight",
          backgroundColor: "$light",
          borderColor: "#ececec"
        },
        {
          label: "Colors C",
          value: "colors-c",
          textColor: "$onPrimary",
          backgroundColor: "$primary",
          borderColor: "#ececec"
        },
        {
          label: "Colors D",
          value: "colors-d",
          textColor: "$onSecondary",
          backgroundColor: "$secondary",
          borderColor: "#ececec"
        },
        {
          label: "Colors E",
          value: "colors-e",
          textColor: "$onComplementary",
          backgroundColor: "$complementary",
          borderColor: "#ececec"
        }
      ],
      default: "colors-a"
    },
    {
      type: "model",
      name: "backgroundImage",
      group: "styles",
      label: "Project background image",
      models: ["BackgroundImage"],
      default: {
        type: "BackgroundImage",
        url: "/images/bg2.jpg"
      }
    }
  ]
};

// .stackbit/models/QuoteSection.ts
var QuoteSection = {
  type: "object",
  name: "QuoteSection",
  label: "Quote",
  labelField: "name",
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
      type: "markdown",
      name: "quote",
      label: "Quote",
      default: "\u201CWe think coding should be required in every school because it's as important as any kind of second language.\u201D",
      required: true
    },
    {
      type: "string",
      name: "name",
      label: "Author name",
      default: "Johnna Doe"
    },
    {
      type: "string",
      name: "title",
      label: "Author title",
      default: "Product Marketing Manager at Acme"
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
        quote: {
          textAlign: [
            "left",
            "center",
            "right"
          ]
        },
        name: {
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
        quote: {
          textAlign: "center"
        },
        name: {
          fontWeight: 400,
          textAlign: "center"
        },
        title: {
          fontWeight: 400,
          textAlign: "center"
        }
      }
    }
  ]
};

// .stackbit/models/RecentPostsSection.ts
var RecentPostsSection = {
  type: "object",
  name: "RecentPostsSection",
  label: "Recent posts",
  labelField: "title",
  extends: [
    "PostFeedSection"
  ],
  groups: [
    "sectionComponent"
  ],
  fields: [
    {
      name: "title",
      default: "Recent Posts"
    },
    {
      name: "subtitle",
      default: "Latest blog posts section example"
    },
    {
      type: "number",
      name: "recentCount",
      label: "Number of recent posts to show",
      default: 6
    }
  ]
};

// .stackbit/models/RecentProjectsSection.ts
var RecentProjectsSection = {
  type: "object",
  name: "RecentProjectsSection",
  label: "Recent projects",
  labelField: "title",
  extends: [
    "ProjectFeedSection"
  ],
  groups: [
    "sectionComponent"
  ],
  fields: [
    {
      name: "title",
      default: "Recent projects"
    },
    {
      name: "subtitle",
      default: "Latest projects section example"
    },
    {
      type: "number",
      name: "recentCount",
      label: "Number of recent projects to show",
      default: 6
    }
  ]
};

// .stackbit/models/SelectFormControl.ts
var SelectFormControl = {
  type: "object",
  name: "SelectFormControl",
  label: "Select",
  labelField: "label",
  fieldGroups: [
    {
      name: "styles",
      label: "Styles",
      icon: "palette"
    }
  ],
  fields: [
    {
      type: "string",
      name: "name",
      label: "Name",
      required: true,
      default: "city"
    },
    {
      type: "string",
      name: "label",
      label: "Label",
      default: "City"
    },
    {
      type: "boolean",
      name: "hideLabel",
      label: "Hide label",
      default: false
    },
    {
      type: "string",
      name: "defaultValue",
      label: "Default value",
      default: "Please choose..."
    },
    {
      type: "list",
      name: "options",
      label: "Options",
      default: [
        "New York",
        "San Francisco"
      ]
    },
    {
      type: "boolean",
      name: "isRequired",
      label: "Is the field required?",
      default: false
    },
    {
      type: "enum",
      name: "width",
      group: "styles",
      label: "Width",
      options: [
        {
          label: "Full",
          value: "full"
        },
        {
          label: "One half",
          value: "1/2"
        }
      ],
      default: "full",
      required: true
    }
  ]
};

// .stackbit/models/Social.ts
var Social = {
  type: "object",
  name: "Social",
  label: "Social",
  labelField: "label",
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
      name: "label",
      label: "Label",
      default: "Facebook"
    },
    {
      type: "string",
      name: "altText",
      label: "Alt text",
      default: "",
      description: "The alternative text for screen readers"
    },
    {
      type: "string",
      name: "url",
      label: "URL",
      default: "/",
      required: true
    },
    {
      type: "enum",
      name: "icon",
      group: "styles",
      label: "Icon",
      options: [
        {
          label: "Facebook",
          value: "facebook"
        },
        {
          label: "GitHub",
          value: "github"
        },
        {
          label: "Instagram",
          value: "instagram"
        },
        {
          label: "LinkedIn",
          value: "linkedin"
        },
        {
          label: "Reddit",
          value: "reddit"
        },
        {
          label: "Twitter",
          value: "twitter"
        },
        {
          label: "Vimeo",
          value: "vimeo"
        },
        {
          label: "YouTube",
          value: "youtube"
        }
      ],
      default: "facebook",
      required: true
    },
    {
      type: "string",
      name: "elementId",
      group: "settings",
      label: "Element ID",
      description: "The unique ID for an HTML element, must not contain whitespace",
      default: ""
    }
  ]
};

// .stackbit/models/Testimonial.ts
var Testimonial = {
  type: "object",
  name: "Testimonial",
  label: "Testimonial",
  labelField: "name",
  fieldGroups: [
    {
      name: "settings",
      label: "Settings",
      icon: "gear"
    }
  ],
  fields: [
    {
      type: "markdown",
      name: "quote",
      label: "Quote",
      default: "\u201CIt\u2019s great to see someone taking action while still maintaining a sustainable fish supply to home cooks.\u201D",
      required: true
    },
    {
      type: "string",
      name: "name",
      label: "Author name",
      default: "Johnna Doe"
    },
    {
      type: "string",
      name: "title",
      label: "Author title",
      default: "Product Marketing Manager at Acme"
    },
    {
      type: "model",
      name: "image",
      label: "Author image",
      models: [
        "ImageBlock"
      ],
      default: {
        url: "https://assets.stackbit.com/components/images/default/default-person.png",
        altText: "Person photo"
      }
    },
    {
      type: "string",
      name: "elementId",
      group: "settings",
      label: "Element ID",
      description: "The unique ID for an HTML element, must not contain whitespace",
      default: ""
    },
    {
      type: "style",
      name: "styles",
      styles: {
        name: {
          fontWeight: [
            "400",
            "500"
          ],
          fontStyle: [
            "italic"
          ],
          textDecoration: [
            "underline"
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
          textDecoration: [
            "underline"
          ]
        }
      },
      default: {
        name: {
          fontWeight: 400
        },
        title: {
          fontWeight: 400
        }
      }
    }
  ]
};

// .stackbit/models/TestimonialsSection.ts
var TestimonialsSection = {
  type: "object",
  name: "TestimonialsSection",
  label: "Testimonials",
  labelField: "title",
  thumbnail: "https://assets.stackbit.com/components/models/thumbnails/default.png",
  extends: ["Section"],
  groups: ["sectionComponent"],
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
        models: ["Testimonial"]
      },
      default: [
        {
          type: "Testimonial",
          quote: "It\u2019s great to see someone taking action while still maintaining a\nsustainable fish supply to home cooks.",
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
          height: ["auto", "screen"],
          width: ["narrow", "wide", "full"],
          margin: ["tw0:96"],
          padding: ["tw0:96"],
          justifyContent: ["flex-start", "flex-end", "center"],
          borderRadius: "*",
          borderWidth: ["0:8"],
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
          fontWeight: ["400", "500"],
          fontStyle: ["italic"],
          textAlign: ["left", "center", "right"],
          textDecoration: ["underline"]
        },
        subtitle: {
          fontWeight: ["400", "500"],
          fontStyle: ["italic"],
          textAlign: ["left", "center", "right"],
          textDecoration: ["underline"]
        }
      },
      default: {
        self: {
          height: "auto",
          width: "wide",
          margin: ["mt-0", "mb-0", "ml-0", "mr-0"],
          padding: ["pt-12", "pb-12", "pl-4", "pr-4"],
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
};

// .stackbit/models/TextareaFormControl.ts
var TextareaFormControl = {
  type: "object",
  name: "TextareaFormControl",
  label: "Textarea",
  labelField: "label",
  fieldGroups: [
    {
      name: "styles",
      label: "Styles",
      icon: "palette"
    }
  ],
  fields: [
    {
      type: "string",
      name: "name",
      label: "Name",
      required: true,
      default: "description"
    },
    {
      type: "string",
      name: "label",
      label: "Label",
      default: "Description"
    },
    {
      type: "boolean",
      name: "hideLabel",
      label: "Hide label",
      default: false
    },
    {
      type: "string",
      name: "placeholder",
      label: "Placeholder text",
      default: "Please describe"
    },
    {
      type: "boolean",
      name: "isRequired",
      label: "Is the field required?",
      default: false
    },
    {
      type: "enum",
      name: "width",
      group: "styles",
      label: "Width",
      options: [
        {
          label: "Full",
          value: "full"
        },
        {
          label: "One half",
          value: "1/2"
        }
      ],
      default: "full",
      required: true
    }
  ]
};

// .stackbit/models/TextFormControl.ts
var TextFormControl = {
  type: "object",
  name: "TextFormControl",
  label: "Text",
  labelField: "label",
  fieldGroups: [
    {
      name: "styles",
      label: "Styles",
      icon: "palette"
    }
  ],
  fields: [
    {
      type: "string",
      name: "name",
      label: "Name",
      required: true,
      default: "home-address"
    },
    {
      type: "string",
      name: "label",
      label: "Label",
      default: "Home address"
    },
    {
      type: "boolean",
      name: "hideLabel",
      label: "Hide label",
      default: false
    },
    {
      type: "string",
      name: "placeholder",
      label: "Placeholder text",
      default: "Your home address"
    },
    {
      type: "boolean",
      name: "isRequired",
      label: "Is the field required?",
      default: false
    },
    {
      type: "enum",
      name: "width",
      group: "styles",
      label: "Width",
      options: [
        {
          label: "Full",
          value: "full"
        },
        {
          label: "One half",
          value: "1/2"
        }
      ],
      default: "full",
      required: true
    }
  ]
};

// .stackbit/models/TextSection.ts
var TextSection = {
  type: "object",
  name: "TextSection",
  label: "Text block",
  labelField: "title",
  thumbnail: "https://assets.stackbit.com/components/models/thumbnails/default.png",
  extends: ["Section"],
  groups: ["sectionComponent"],
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
      default: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis undeomnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    {
      type: "style",
      name: "styles",
      styles: {
        self: {
          height: ["auto", "screen"],
          width: ["narrow", "wide", "full"],
          margin: ["tw0:96"],
          padding: ["tw0:96"],
          justifyContent: ["flex-start", "flex-end", "center"],
          borderRadius: "*",
          borderWidth: ["0:8"],
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
          fontWeight: ["400", "500"],
          fontStyle: ["italic"],
          textAlign: ["left", "center", "right"],
          textDecoration: ["underline"]
        },
        subtitle: {
          fontWeight: ["400", "500"],
          fontStyle: ["italic"],
          textAlign: ["left", "center", "right"],
          textDecoration: ["underline"]
        },
        text: {
          textAlign: ["left", "center", "right"]
        }
      },
      default: {
        self: {
          height: "auto",
          width: "wide",
          margin: ["mt-0", "mb-0", "ml-0", "mr-0"],
          padding: ["pt-12", "pb-12", "pl-4", "pr-4"],
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
};

// .stackbit/models/ThemeStyle.ts
var ThemeStyle = {
  type: "data",
  name: "ThemeStyle",
  label: "Theme Style",
  file: "style.json",
  fieldGroups: [
    {
      name: "text-styles",
      label: "Text styles",
      icon: "text"
    },
    {
      name: "color-palettes",
      label: "Color palettes",
      icon: "fill-drip"
    },
    {
      name: "button-styles",
      label: "Button styles",
      icon: "palette"
    }
  ],
  fields: [
    {
      type: "enum",
      name: "fontBody",
      label: "Font",
      group: "text-styles",
      options: [
        {
          label: "Font primary",
          value: "fontPrimary"
        },
        {
          label: "Font secondary",
          value: "fontSecondary"
        }
      ],
      default: "fontPrimary",
      required: true
    },
    {
      type: "object",
      name: "h1",
      label: "H1",
      labelField: "size",
      group: "text-styles",
      readOnly: true,
      fields: [
        {
          type: "enum",
          name: "size",
          label: "Font size",
          options: [
            {
              label: "XS",
              value: "xs"
            },
            {
              label: "SM",
              value: "sm"
            },
            {
              label: "Base",
              value: "base"
            },
            {
              label: "LG",
              value: "lg"
            },
            {
              label: "XL",
              value: "xl"
            },
            {
              label: "2XL",
              value: "2xl"
            },
            {
              label: "3XL",
              value: "3xl"
            },
            {
              label: "4XL",
              value: "4xl"
            },
            {
              label: "5XL",
              value: "5xl"
            },
            {
              label: "6XL",
              value: "6xl"
            },
            {
              label: "7XL",
              value: "7xl"
            },
            {
              label: "8XL",
              value: "8xl"
            },
            {
              label: "9XL",
              value: "9xl"
            }
          ],
          default: "5xl",
          required: true
        },
        {
          type: "enum",
          name: "weight",
          label: "Font weight",
          controlType: "button-group",
          options: [
            {
              label: "Normal",
              value: "normal"
            },
            {
              label: "Medium",
              value: "medium"
            }
          ],
          default: "medium",
          required: true
        },
        {
          type: "enum",
          name: "decoration",
          label: "Decoration",
          controlType: "button-group",
          options: [
            {
              label: "None",
              value: "none"
            },
            {
              label: "Underline",
              value: "underline"
            },
            {
              label: "Line through",
              value: "line-through"
            }
          ],
          default: "none",
          required: true
        },
        {
          type: "enum",
          name: "case",
          label: "Case",
          controlType: "button-group",
          options: [
            {
              label: "Default",
              value: "none"
            },
            {
              label: "ag",
              value: "lowercase"
            },
            {
              label: "Ag",
              value: "capitalize"
            },
            {
              label: "AG",
              value: "uppercase"
            }
          ],
          default: "none",
          required: true
        },
        {
          type: "enum",
          name: "letterSpacing",
          label: "Letter spacing",
          controlType: "button-group",
          options: [
            {
              label: "Tighter",
              value: "tighter"
            },
            {
              label: "Tight",
              value: "tight"
            },
            {
              label: "Normal",
              value: "normal"
            },
            {
              label: "Wide",
              value: "wide"
            },
            {
              label: "Wider",
              value: "wider"
            }
          ],
          default: "normal",
          required: true
        }
      ]
    },
    {
      type: "object",
      name: "h2",
      label: "H2",
      labelField: "size",
      group: "text-styles",
      readOnly: true,
      fields: [
        {
          type: "enum",
          name: "size",
          label: "Font size",
          options: [
            {
              label: "XS",
              value: "xs"
            },
            {
              label: "SM",
              value: "sm"
            },
            {
              label: "Base",
              value: "base"
            },
            {
              label: "LG",
              value: "lg"
            },
            {
              label: "XL",
              value: "xl"
            },
            {
              label: "2XL",
              value: "2xl"
            },
            {
              label: "3XL",
              value: "3xl"
            },
            {
              label: "4XL",
              value: "4xl"
            },
            {
              label: "5XL",
              value: "5xl"
            },
            {
              label: "6XL",
              value: "6xl"
            },
            {
              label: "7XL",
              value: "7xl"
            },
            {
              label: "8XL",
              value: "8xl"
            },
            {
              label: "9XL",
              value: "9xl"
            }
          ],
          default: "4xl",
          required: true
        },
        {
          type: "enum",
          name: "weight",
          label: "Font weight",
          controlType: "button-group",
          options: [
            {
              label: "Normal",
              value: "normal"
            },
            {
              label: "Medium",
              value: "medium"
            }
          ],
          default: "medium",
          required: true
        },
        {
          type: "enum",
          name: "decoration",
          label: "Decoration",
          controlType: "button-group",
          options: [
            {
              label: "None",
              value: "none"
            },
            {
              label: "Underline",
              value: "underline"
            },
            {
              label: "Line through",
              value: "line-through"
            }
          ],
          default: "none",
          required: true
        },
        {
          type: "enum",
          name: "case",
          label: "Case",
          controlType: "button-group",
          options: [
            {
              label: "Default",
              value: "none"
            },
            {
              label: "ag",
              value: "lowercase"
            },
            {
              label: "Ag",
              value: "capitalize"
            },
            {
              label: "AG",
              value: "uppercase"
            }
          ],
          default: "none",
          required: true
        },
        {
          type: "enum",
          name: "letterSpacing",
          label: "Letter spacing",
          controlType: "button-group",
          options: [
            {
              label: "Tighter",
              value: "tighter"
            },
            {
              label: "Tight",
              value: "tight"
            },
            {
              label: "Normal",
              value: "normal"
            },
            {
              label: "Wide",
              value: "wide"
            },
            {
              label: "Wider",
              value: "wider"
            }
          ],
          default: "normal",
          required: true
        }
      ]
    },
    {
      type: "object",
      name: "h3",
      label: "H3",
      labelField: "size",
      group: "text-styles",
      readOnly: true,
      fields: [
        {
          type: "enum",
          name: "size",
          label: "Font size",
          options: [
            {
              label: "XS",
              value: "xs"
            },
            {
              label: "SM",
              value: "sm"
            },
            {
              label: "Base",
              value: "base"
            },
            {
              label: "LG",
              value: "lg"
            },
            {
              label: "XL",
              value: "xl"
            },
            {
              label: "2XL",
              value: "2xl"
            },
            {
              label: "3XL",
              value: "3xl"
            },
            {
              label: "4XL",
              value: "4xl"
            },
            {
              label: "5XL",
              value: "5xl"
            },
            {
              label: "6XL",
              value: "6xl"
            },
            {
              label: "7XL",
              value: "7xl"
            },
            {
              label: "8XL",
              value: "8xl"
            },
            {
              label: "9XL",
              value: "9xl"
            }
          ],
          default: "3xl",
          required: true
        },
        {
          type: "enum",
          name: "weight",
          label: "Font weight",
          controlType: "button-group",
          options: [
            {
              label: "Normal",
              value: "normal"
            },
            {
              label: "Medium",
              value: "medium"
            }
          ],
          default: "medium",
          required: true
        },
        {
          type: "enum",
          name: "decoration",
          label: "Decoration",
          controlType: "button-group",
          options: [
            {
              label: "None",
              value: "none"
            },
            {
              label: "Underline",
              value: "underline"
            },
            {
              label: "Line through",
              value: "line-through"
            }
          ],
          default: "none",
          required: true
        },
        {
          type: "enum",
          name: "case",
          label: "Case",
          controlType: "button-group",
          options: [
            {
              label: "Default",
              value: "none"
            },
            {
              label: "ag",
              value: "lowercase"
            },
            {
              label: "Ag",
              value: "capitalize"
            },
            {
              label: "AG",
              value: "uppercase"
            }
          ],
          default: "none",
          required: true
        },
        {
          type: "enum",
          name: "letterSpacing",
          label: "Letter spacing",
          controlType: "button-group",
          options: [
            {
              label: "Tighter",
              value: "tighter"
            },
            {
              label: "Tight",
              value: "tight"
            },
            {
              label: "Normal",
              value: "normal"
            },
            {
              label: "Wide",
              value: "wide"
            },
            {
              label: "Wider",
              value: "wider"
            }
          ],
          default: "normal",
          required: true
        }
      ]
    },
    {
      type: "object",
      name: "h4",
      label: "H4",
      labelField: "size",
      group: "text-styles",
      readOnly: true,
      fields: [
        {
          type: "enum",
          name: "size",
          label: "Font size",
          options: [
            {
              label: "XS",
              value: "xs"
            },
            {
              label: "SM",
              value: "sm"
            },
            {
              label: "Base",
              value: "base"
            },
            {
              label: "LG",
              value: "lg"
            },
            {
              label: "XL",
              value: "xl"
            },
            {
              label: "2XL",
              value: "2xl"
            },
            {
              label: "3XL",
              value: "3xl"
            },
            {
              label: "4XL",
              value: "4xl"
            },
            {
              label: "5XL",
              value: "5xl"
            },
            {
              label: "6XL",
              value: "6xl"
            },
            {
              label: "7XL",
              value: "7xl"
            },
            {
              label: "8XL",
              value: "8xl"
            },
            {
              label: "9XL",
              value: "9xl"
            }
          ],
          default: "2xl",
          required: true
        },
        {
          type: "enum",
          name: "weight",
          label: "Font weight",
          controlType: "button-group",
          options: [
            {
              label: "Normal",
              value: "normal"
            },
            {
              label: "Medium",
              value: "medium"
            }
          ],
          default: "medium",
          required: true
        },
        {
          type: "enum",
          name: "decoration",
          label: "Decoration",
          controlType: "button-group",
          options: [
            {
              label: "None",
              value: "none"
            },
            {
              label: "Underline",
              value: "underline"
            },
            {
              label: "Line through",
              value: "line-through"
            }
          ],
          default: "none",
          required: true
        },
        {
          type: "enum",
          name: "case",
          label: "Case",
          controlType: "button-group",
          options: [
            {
              label: "Default",
              value: "none"
            },
            {
              label: "ag",
              value: "lowercase"
            },
            {
              label: "Ag",
              value: "capitalize"
            },
            {
              label: "AG",
              value: "uppercase"
            }
          ],
          default: "none",
          required: true
        },
        {
          type: "enum",
          name: "letterSpacing",
          label: "Letter spacing",
          controlType: "button-group",
          options: [
            {
              label: "Tighter",
              value: "tighter"
            },
            {
              label: "Tight",
              value: "tight"
            },
            {
              label: "Normal",
              value: "normal"
            },
            {
              label: "Wide",
              value: "wide"
            },
            {
              label: "Wider",
              value: "wider"
            }
          ],
          default: "normal",
          required: true
        }
      ]
    },
    {
      type: "object",
      name: "h5",
      label: "H5",
      labelField: "size",
      group: "text-styles",
      readOnly: true,
      fields: [
        {
          type: "enum",
          name: "size",
          label: "Font size",
          options: [
            {
              label: "XS",
              value: "xs"
            },
            {
              label: "SM",
              value: "sm"
            },
            {
              label: "Base",
              value: "base"
            },
            {
              label: "LG",
              value: "lg"
            },
            {
              label: "XL",
              value: "xl"
            },
            {
              label: "2XL",
              value: "2xl"
            },
            {
              label: "3XL",
              value: "3xl"
            },
            {
              label: "4XL",
              value: "4xl"
            },
            {
              label: "5XL",
              value: "5xl"
            },
            {
              label: "6XL",
              value: "6xl"
            },
            {
              label: "7XL",
              value: "7xl"
            },
            {
              label: "8XL",
              value: "8xl"
            },
            {
              label: "9XL",
              value: "9xl"
            }
          ],
          default: "xl",
          required: true
        },
        {
          type: "enum",
          name: "weight",
          label: "Font weight",
          controlType: "button-group",
          options: [
            {
              label: "Normal",
              value: "normal"
            },
            {
              label: "Medium",
              value: "medium"
            }
          ],
          default: "medium",
          required: true
        },
        {
          type: "enum",
          name: "decoration",
          label: "Decoration",
          controlType: "button-group",
          options: [
            {
              label: "None",
              value: "none"
            },
            {
              label: "Underline",
              value: "underline"
            },
            {
              label: "Line through",
              value: "line-through"
            }
          ],
          default: "none",
          required: true
        },
        {
          type: "enum",
          name: "case",
          label: "Case",
          controlType: "button-group",
          options: [
            {
              label: "Default",
              value: "none"
            },
            {
              label: "ag",
              value: "lowercase"
            },
            {
              label: "Ag",
              value: "capitalize"
            },
            {
              label: "AG",
              value: "uppercase"
            }
          ],
          default: "none",
          required: true
        },
        {
          type: "enum",
          name: "letterSpacing",
          label: "Letter spacing",
          controlType: "button-group",
          options: [
            {
              label: "Tighter",
              value: "tighter"
            },
            {
              label: "Tight",
              value: "tight"
            },
            {
              label: "Normal",
              value: "normal"
            },
            {
              label: "Wide",
              value: "wide"
            },
            {
              label: "Wider",
              value: "wider"
            }
          ],
          default: "normal",
          required: true
        }
      ]
    },
    {
      type: "object",
      name: "h6",
      label: "H6",
      labelField: "size",
      group: "text-styles",
      readOnly: true,
      fields: [
        {
          type: "enum",
          name: "size",
          label: "Font size",
          options: [
            {
              label: "XS",
              value: "xs"
            },
            {
              label: "SM",
              value: "sm"
            },
            {
              label: "Base",
              value: "base"
            },
            {
              label: "LG",
              value: "lg"
            },
            {
              label: "XL",
              value: "xl"
            },
            {
              label: "2XL",
              value: "2xl"
            },
            {
              label: "3XL",
              value: "3xl"
            },
            {
              label: "4XL",
              value: "4xl"
            },
            {
              label: "5XL",
              value: "5xl"
            },
            {
              label: "6XL",
              value: "6xl"
            },
            {
              label: "7XL",
              value: "7xl"
            },
            {
              label: "8XL",
              value: "8xl"
            },
            {
              label: "9XL",
              value: "9xl"
            }
          ],
          default: "lg",
          required: true
        },
        {
          type: "enum",
          name: "weight",
          label: "Font weight",
          controlType: "button-group",
          options: [
            {
              label: "Normal",
              value: "normal"
            },
            {
              label: "Medium",
              value: "medium"
            }
          ],
          default: "medium",
          required: true
        },
        {
          type: "enum",
          name: "decoration",
          label: "Decoration",
          controlType: "button-group",
          options: [
            {
              label: "None",
              value: "none"
            },
            {
              label: "Underline",
              value: "underline"
            },
            {
              label: "Line through",
              value: "line-through"
            }
          ],
          default: "none",
          required: true
        },
        {
          type: "enum",
          name: "case",
          label: "Case",
          controlType: "button-group",
          options: [
            {
              label: "Default",
              value: "none"
            },
            {
              label: "ag",
              value: "lowercase"
            },
            {
              label: "Ag",
              value: "capitalize"
            },
            {
              label: "AG",
              value: "uppercase"
            }
          ],
          default: "none",
          required: true
        },
        {
          type: "enum",
          name: "letterSpacing",
          label: "Letter spacing",
          controlType: "button-group",
          options: [
            {
              label: "Tighter",
              value: "tighter"
            },
            {
              label: "Tight",
              value: "tight"
            },
            {
              label: "Normal",
              value: "normal"
            },
            {
              label: "Wide",
              value: "wide"
            },
            {
              label: "Wider",
              value: "wider"
            }
          ],
          default: "normal",
          required: true
        }
      ]
    },
    {
      type: "color",
      name: "light",
      label: "Light",
      group: "color-palettes"
    },
    {
      type: "color",
      name: "onLight",
      label: "Foreground over light",
      group: "color-palettes"
    },
    {
      type: "color",
      name: "dark",
      label: "Dark",
      group: "color-palettes"
    },
    {
      type: "color",
      name: "onDark",
      label: "Foreground over dark",
      group: "color-palettes"
    },
    {
      type: "color",
      name: "primary",
      label: "Primary",
      group: "color-palettes"
    },
    {
      type: "color",
      name: "onPrimary",
      label: "Foreground over primary",
      group: "color-palettes"
    },
    {
      type: "color",
      name: "secondary",
      label: "Secondary",
      group: "color-palettes"
    },
    {
      type: "color",
      name: "onSecondary",
      label: "Foreground over secondary",
      group: "color-palettes"
    },
    {
      type: "color",
      name: "complementary",
      label: "Complementary",
      group: "color-palettes"
    },
    {
      type: "color",
      name: "onComplementary",
      label: "Foreground over complementary",
      group: "color-palettes"
    },
    {
      type: "object",
      name: "buttonPrimary",
      label: "Primary button",
      group: "button-styles",
      readOnly: true,
      fields: [
        {
          type: "enum",
          name: "weight",
          label: "Font weight",
          controlType: "button-group",
          options: [
            {
              label: "Normal",
              value: "normal"
            },
            {
              label: "Medium",
              value: "medium"
            }
          ],
          default: "normal",
          required: true
        },
        {
          type: "enum",
          name: "case",
          label: "Case",
          controlType: "button-group",
          options: [
            {
              label: "Default",
              value: "none"
            },
            {
              label: "ag",
              value: "lowercase"
            },
            {
              label: "Ag",
              value: "capitalize"
            },
            {
              label: "AG",
              value: "uppercase"
            }
          ],
          default: "none",
          required: true
        },
        {
          type: "enum",
          name: "letterSpacing",
          label: "Letter spacing",
          controlType: "button-group",
          options: [
            {
              label: "Tighter",
              value: "tighter"
            },
            {
              label: "Tight",
              value: "tight"
            },
            {
              label: "Normal",
              value: "normal"
            },
            {
              label: "Wide",
              value: "wide"
            },
            {
              label: "Wider",
              value: "wider"
            }
          ],
          default: "normal",
          required: true
        },
        {
          type: "number",
          name: "horizontalPadding",
          label: "Horizontal padding",
          controlType: "slider",
          min: 0,
          max: 30,
          step: 1,
          unit: "px",
          default: 24
        },
        {
          type: "number",
          name: "verticalPadding",
          label: "Vertical padding",
          controlType: "slider",
          min: 0,
          max: 30,
          step: 1,
          unit: "px",
          default: 12
        }
      ]
    },
    {
      type: "object",
      name: "buttonSecondary",
      label: "Secondary button",
      group: "button-styles",
      readOnly: true,
      fields: [
        {
          type: "enum",
          name: "weight",
          label: "Font weight",
          controlType: "button-group",
          options: [
            {
              label: "Normal",
              value: "normal"
            },
            {
              label: "Medium",
              value: "medium"
            }
          ],
          default: "medium",
          required: true
        },
        {
          type: "enum",
          name: "case",
          label: "Case",
          controlType: "button-group",
          options: [
            {
              label: "Default",
              value: "none"
            },
            {
              label: "ag",
              value: "lowercase"
            },
            {
              label: "Ag",
              value: "capitalize"
            },
            {
              label: "AG",
              value: "uppercase"
            }
          ],
          default: "none",
          required: true
        },
        {
          type: "enum",
          name: "letterSpacing",
          label: "Letter spacing",
          controlType: "button-group",
          options: [
            {
              label: "Tighter",
              value: "tighter"
            },
            {
              label: "Tight",
              value: "tight"
            },
            {
              label: "Normal",
              value: "normal"
            },
            {
              label: "Wide",
              value: "wide"
            },
            {
              label: "Wider",
              value: "wider"
            }
          ],
          default: "normal",
          required: true
        },
        {
          type: "number",
          name: "horizontalPadding",
          label: "Horizontal padding",
          controlType: "slider",
          min: 0,
          max: 30,
          step: 1,
          unit: "px",
          default: 24
        },
        {
          type: "number",
          name: "verticalPadding",
          label: "Vertical padding",
          controlType: "slider",
          min: 0,
          max: 30,
          step: 1,
          unit: "px",
          default: 12
        }
      ]
    },
    {
      type: "object",
      name: "link",
      label: "Link",
      group: "button-styles",
      readOnly: true,
      fields: [
        {
          type: "enum",
          name: "weight",
          label: "Font weight",
          controlType: "button-group",
          options: [
            {
              label: "Normal",
              value: "normal"
            },
            {
              label: "Medium",
              value: "medium"
            }
          ],
          default: "medium",
          required: true
        },
        {
          type: "enum",
          name: "case",
          label: "Case",
          controlType: "button-group",
          options: [
            {
              label: "Default",
              value: "none"
            },
            {
              label: "ag",
              value: "lowercase"
            },
            {
              label: "Ag",
              value: "capitalize"
            },
            {
              label: "AG",
              value: "uppercase"
            }
          ],
          default: "none",
          required: true
        },
        {
          type: "enum",
          name: "letterSpacing",
          label: "Letter spacing",
          controlType: "button-group",
          options: [
            {
              label: "Tighter",
              value: "tighter"
            },
            {
              label: "Tight",
              value: "tight"
            },
            {
              label: "Normal",
              value: "normal"
            },
            {
              label: "Wide",
              value: "wide"
            },
            {
              label: "Wider",
              value: "wider"
            }
          ],
          default: "normal",
          required: true
        }
      ]
    }
  ]
};

// .stackbit/models/VideoBlock.ts
var VideoBlock = {
  type: "object",
  name: "VideoBlock",
  label: "Video",
  labelField: "title",
  fieldGroups: [
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
      description: "The value of the field is used for presentation purposes in Stackbit",
      default: "Title of the video"
    },
    {
      type: "string",
      name: "url",
      label: "Video URL (YouTube, Vimeo, .mp4)",
      default: "https://youtu.be/CXnUX2EkicE"
    },
    {
      type: "boolean",
      name: "autoplay",
      label: "Autoplay",
      default: false
    },
    {
      type: "boolean",
      name: "loop",
      label: "Loop",
      default: false
    },
    {
      type: "boolean",
      name: "muted",
      label: "Muted",
      default: false
    },
    {
      type: "boolean",
      name: "controls",
      label: "Controls",
      default: true
    },
    {
      type: "enum",
      name: "aspectRatio",
      label: "Aspect ratio",
      controlType: "button-group",
      options: [
        {
          label: "4:3",
          value: "4:3"
        },
        {
          label: "16:9",
          value: "16:9"
        }
      ],
      default: "16:9"
    },
    {
      type: "string",
      name: "elementId",
      group: "settings",
      label: "Element ID",
      description: "The unique ID for an HTML element, must not contain whitespace",
      default: ""
    }
  ]
};

// .stackbit/models/index.ts
var allModels = {
  BackgroundImage,
  Button,
  CheckboxFormControl,
  Config,
  ContactBlock,
  ContactSection,
  CtaSection,
  DividerSection,
  EmailFormControl,
  FeaturedItem,
  FeaturedItemsSection,
  FeaturedPostsSection,
  FeaturedProjectsSection,
  Footer,
  FormBlock,
  Header,
  HeroSection,
  ImageBlock,
  Label,
  LabelsSection,
  Link,
  MediaGallerySection,
  MetaTag,
  PageLayout,
  PagedPostsSection,
  PagedProjectsSection,
  Person,
  PostFeedLayout,
  PostFeedSection,
  PostLayout,
  ProjectFeedLayout,
  ProjectFeedSection,
  ProjectLayout,
  QuoteSection,
  RecentPostsSection,
  RecentProjectsSection,
  SelectFormControl,
  Social,
  Testimonial,
  TestimonialsSection,
  TextareaFormControl,
  TextFormControl,
  TextSection,
  ThemeStyle,
  VideoBlock
};

// stackbit.config.ts
var config = (0, import_types.defineStackbitConfig)({
  stackbitVersion: "~0.5.0",
  ssgName: "nextjs",
  cmsName: "git",
  nodeVersion: "16",
  models: allModels,
  pagesDir: "content/pages",
  dataDir: "content/data",
  presetSource: {
    type: "files",
    presetDirs: ["sources/local/presets"]
  },
  assets: {
    referenceType: "static",
    staticDir: "public",
    uploadDir: "images",
    publicPath: "/"
  },
  pageLayoutKey: "layout",
  objectTypeKey: "type",
  styleObjectModelName: "ThemeStyle"
});
var stackbit_config_default = config;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  config
});
//# sourceMappingURL=stackbit.config.W3PE6GX7.cjs.map
