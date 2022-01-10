---
title: About
layout: PageLayout
colors: colors-c
sections:
  - elementId: ''
    backgroundSize: full
    text: >-
      ## Hey I’m a developer. I’ve been born and raised in the world, and that’s also where I’m based. I’m currently a free agent, ex-this, ex-that, ex-super big name. When I’m not coding, writing or creating, I eat cereals. I have a dog, check her out [@mygod](https://www.stackbit.com/).
    media:
      type: ImageBlock
      url: /images/about.jpg
      altText: Hero image
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-36
          - pb-48
          - pl-4
          - pr-4
        alignItems: flex-start
        justifyContent: center
        flexDirection: row-reverse
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: FeatureHighlightSection
  - type: MediaGallerySection
    title: 'I worked with these folks:'
    images:
      - type: ImageBlock
        url: /images/apple.svg
        altText: Apple
        caption: Apple
      - type: ImageBlock
        url: /images/google-play.svg
        altText: Google Play
        caption: Google Play
      - type: ImageBlock
        url: /images/playstation.svg
        altText: PlayStation
        caption: PlayStation
      - type: ImageBlock
        url: /images/gatsby.svg
        altText: Gatsby
        caption: Gatsby
      - type: ImageBlock
        url: /images/xbox.svg
        altText: Xbox
        caption: Xbox
    spacing: 3
    columns: 5
    aspectRatio: 'auto'
    showCaption: false
    enableHover: false
    styles:
      self:
        width: wide
        height: auto
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-12
          - pb-24
          - pl-4
          - pr-4
        justifyContent: center
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: left
      subtitle:
        textAlign: left
  - type: FeaturedItemsSection
    title: 'You can find me here:'
    items:
      - type: FeaturedItem
        actions:
          - type: Link
            label: GitHub
            url: https://github.com/
        styles:
          self:
            textAlign: left
            padding:
              - pt-0
              - pl-0
              - pb-0
              - pr-0
      - type: FeaturedItem
        actions:
          - type: Link
            label: Twitter
            url: https://twitter.com/
        styles:
          self:
            textAlign: left
            padding:
              - pt-0
              - pl-0
              - pb-0
              - pr-0
      - type: FeaturedItem
        actions:
          - type: Link
            label: LinkedIn
            url: https://www.linkedin.com/
        styles:
          self:
            textAlign: left
            padding:
              - pt-0
              - pl-0
              - pb-0
              - pr-0
      - type: FeaturedItem
        actions:
          - type: Link
            label: CodePen
            url: https://codepen.io/
        styles:
          self:
            textAlign: left
            padding:
              - pt-0
              - pl-0
              - pb-0
              - pr-0
      - type: FeaturedItem
        actions:
          - type: Link
            label: Discord
            url: https://discord.com/
        styles:
          self:
            textAlign: left
            padding:
              - pt-0
              - pl-0
              - pb-0
              - pr-0
      - type: FeaturedItem
        actions:
          - type: Link
            label: Instagram
            url: https://www.instagram.com/
        styles:
          self:
            textAlign: left
            padding:
              - pt-0
              - pl-0
              - pb-0
              - pr-0
    columns: 3
    spacingX: 120
    spacingY: 0
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-28
          - pb-28
          - pl-4
          - pr-4
        justifyContent: center
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: left
      subtitle:
        textAlign: left
  - type: SkillsSection
    title: 'Skills:'
    items:
      - type: Skill
        label: WEB 1, 2, 3
      - type: Skill
        label: React
      - type: Skill
        label: Microsoft Office
      - type: Skill
        label: Next.js
      - type: Skill
        label: Stackbit
      - type: Skill
        label: Pancakes
      - type: Skill
        label: C++
      - type: Skill
        label: Swift
  - type: TextSection
    title: 'Contact:'
    text: >
      [thisismyemail.@myemail.me](mailto:thisismyemail.@myemail.me)
  - type: FeaturedItemsSection
    items:
      - type: FeaturedItem
        title: 'Experience:'
        text: |-
          Current

          * freelance @freelance.me

          2018-2021

          * fullstack at this startup

          2015

          * senior front-end at this place

          2013

          * intern developer at a big company

          2011

          * flipping burgers
        styles:
          self:
            textAlign: left
            padding:
              - pt-0
              - pl-0
              - pb-0
              - pr-0
      - type: FeaturedItem
        title: 'Education:'
        text: |-
          2015-2018

          * ba computer sciense at a semi fancy school

          2014

          * react certificate somewhere

          2011

          * my highschool
        styles:
          self:
            textAlign: left
            padding:
              - pt-0
              - pl-0
              - pb-0
              - pr-0
    columns: 2
    spacingX: 60
    spacingY: 60
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-28
          - pb-28
          - pl-4
          - pr-4
        justifyContent: center
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: left
      subtitle:
        textAlign: left
  - type: ContactSection
    title: "Let’s talk \U0001F4AC"
    form:
      type: FormBlock
      elementId: sign-up-form
      destination: ''
      action: /.netlify/functions/submission_created
      fields:
        - name: firstName
          label: First Name
          hideLabel: true
          placeholder: First Name
          isRequired: true
          width: 1/2
          type: TextFormControl
        - name: lastName
          label: Last Name
          hideLabel: true
          placeholder: Last Name
          isRequired: false
          width: 1/2
          type: TextFormControl
        - name: email
          label: Email
          hideLabel: true
          placeholder: Email
          isRequired: true
          width: full
          type: EmailFormControl
        - name: address
          label: Address
          hideLabel: true
          placeholder: Address
          isRequired: true
          width: full
          type: TextFormControl
        - name: updatesConsent
          label: Sign me up to recieve updates
          isRequired: false
          width: full
          type: CheckboxFormControl
      submitLabel: Submit 🚀
      styles:
        submitLabel:
          textAlign: center
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-4
          - mr-4
        padding:
          - pt-24
          - pb-24
          - pr-4
          - pl-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      text:
        textAlign: left
---
