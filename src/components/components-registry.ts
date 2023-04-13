import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

/**
 * Dynamic components can be selected at run-time based on the type of their content (props). This is because
 * components are mapped by models that describe their content, and content's type always matches the model name.
 * For example, a page component can call `getComponent(section.type)` function, passing it the type of section
 * data it needs to render, and get back the component that can render that type of data:
 *
 *     const Section = getComponent(section.type);
 *     return <Section {...section} />;
 *
 * The getComponent() function loads a component using dynamic import,
 * so the code for a component is only loaded when actually used in a page.
 */
export function getComponent(key: string): ComponentType {
    return components[key];
}

const components = {
    CheckboxFormControl: dynamic(() => import('./molecules/FormBlock/CheckboxFormControl')),
    ContactSection: dynamic(() => import('./sections/ContactSection')),
    CtaSection: dynamic(() => import('./sections/CtaSection')),
    DividerSection: dynamic(() => import('./sections/DividerSection')),
    EmailFormControl: dynamic(() => import('./molecules/FormBlock/EmailFormControl')),
    FeaturedItem: dynamic(() => import('./sections/FeaturedItemsSection/FeaturedItem')),
    FeaturedItemsSection: dynamic(() => import('./sections/FeaturedItemsSection')),
    FeaturedPostsSection: dynamic(() => import('./sections/FeaturedPostsSection')),
    FeaturedProjectsSection: dynamic(() => import('./sections/FeaturedProjectsSection')),
    FormBlock: dynamic(() => import('./molecules/FormBlock')),
    HeroSection: dynamic(() => import('./sections/HeroSection')),
    ImageBlock: dynamic(() => import('./molecules/ImageBlock')),
    MediaGallerySection: dynamic(() => import('./sections/MediaGallerySection')),
    PostFeedSection: dynamic(() => import('./sections/PostFeedSection')),
    ProjectFeedSection: dynamic(() => import('./sections/ProjectFeedSection')),
    RecentPostsSection: dynamic(() => import('./sections/RecentPostsSection')),
    RecentProjectsSection: dynamic(() => import('./sections/RecentProjectsSection')),
    QuoteSection: dynamic(() => import('./sections/QuoteSection')),
    SelectFormControl: dynamic(() => import('./molecules/FormBlock/SelectFormControl')),
    LabelsSection: dynamic(() => import('./sections/LabelsSection')),
    TestimonialsSection: dynamic(() => import('./sections/TestimonialsSection')),
    TextareaFormControl: dynamic(() => import('./molecules/FormBlock/TextareaFormControl')),
    TextFormControl: dynamic(() => import('./molecules/FormBlock/TextFormControl')),
    TextSection: dynamic(() => import('./sections/TextSection')),
    VideoBlock: dynamic(() => import('./molecules/VideoBlock')),
    PageLayout: dynamic(() => import('./layouts/PageLayout')),
    PostLayout: dynamic(() => import('./layouts/PostLayout')),
    PostFeedLayout: dynamic(() => import('./layouts/PostFeedLayout')),
    ProjectLayout: dynamic(() => import('./layouts/ProjectLayout')),
    ProjectFeedLayout: dynamic(() => import('./layouts/ProjectFeedLayout'))
};
