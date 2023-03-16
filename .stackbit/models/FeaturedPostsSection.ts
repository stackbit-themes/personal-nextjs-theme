import { Model } from '@stackbit/types';

export const FeaturedPostsSection: Model = {
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
}