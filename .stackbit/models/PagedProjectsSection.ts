import { Model } from '@stackbit/types';

export const PagedProjectsSection: Model = {
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
}