import { Model } from '@stackbit/types';

export const RecentPostsSection: Model = {
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
}