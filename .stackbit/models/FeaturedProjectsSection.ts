import { Model } from '@stackbit/types';

export const FeaturedProjectsSection: Model = {
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
}