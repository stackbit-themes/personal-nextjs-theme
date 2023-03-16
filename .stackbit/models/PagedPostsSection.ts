import { Model } from '@stackbit/types';

export const PagedPostsSection: Model = {
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
}