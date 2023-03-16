import { Model } from '@stackbit/types';

export const VideoBlock: Model = {
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
}