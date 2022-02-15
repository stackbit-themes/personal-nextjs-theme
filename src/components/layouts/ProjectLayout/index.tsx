import * as React from 'react';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import HighlightedPreBlock from './../../../utils/highlighted-markdown';
import { getBaseLayoutComponent } from '../../../utils/base-layout';
import { getComponent } from '../../components-registry';
import getPageUrlPath from '../../../utils/get-page-url-path';
import ImageBlock from '../../molecules/ImageBlock';
import Link from '../../atoms/Link';

export default function ProjectLayout(props) {
    const { page, site } = props;
    const BaseLayout = getBaseLayoutComponent(page.baseLayout, site.baseLayout);
    const { title, date, client, description, markdown_content, media, prevProject, nextProject, bottomSections = [] } = page;
    const dateTimeAttr = dayjs(date).format('YYYY-MM-DD HH:mm:ss');
    const formattedDate = dayjs(date).format('MM-DD-YYYY');

    return (
        <BaseLayout page={page} site={site}>
            <main id="main" className="sb-layout sb-project-layout">
                <article className="px-4 py-14 lg:py-20">
                    <div className="max-w-5xl mx-auto">
                        <header className="mb-10 sm:mb-16">
                            {client && (
                                <div className="text-lg uppercase mb-2 md:mb-6" data-sb-field-path="client">
                                    {client}
                                </div>
                            )}
                            <div className="md:flex md:justify-between">
                                <div className="text-lg mb-6 md:mb-0 md:ml-12 md:order-last">
                                    <time dateTime={dateTimeAttr} data-sb-field-path="date">
                                        {formattedDate}
                                    </time>
                                </div>
                                <h1 className="md:max-w-2xl md:flex-grow" data-sb-field-path="title">
                                    {title}
                                </h1>
                            </div>
                        </header>
                        {description && (
                            <div className="text-xl leading-normal uppercase max-w-screen-md mx-auto mb-10 sm:mb-16" data-sb-field-path="description">
                                {description}
                            </div>
                        )}
                        {media && (
                            <div className="mb-10 sm:mb-16">
                                <ProjectMedia media={media} />
                            </div>
                        )}
                        {markdown_content && (
                            <Markdown
                                options={{ forceBlock: true, overrides: { pre: HighlightedPreBlock } }}
                                className="sb-markdown max-w-screen-md mx-auto"
                                data-sb-field-path="markdown_content"
                            >
                                {markdown_content}
                            </Markdown>
                        )}
                    </div>
                </article>
                {(prevProject || nextProject) && (
                    <nav className="sb-project-nav px-4 sm:px-8 mt-12 mb-20">
                        <div className="max-w-5xl mx-auto grid gap-x-6 gap-y-12 md:grid-cols-2 lg:gap-x-8">
                            {prevProject && <ProjectNavItem project={prevProject} label="Previous project" />}
                            {nextProject && <ProjectNavItem project={nextProject} label="Next project" />}
                        </div>
                    </nav>
                )}
                {bottomSections.length > 0 && (
                    <div data-sb-field-path="bottomSections">
                        {bottomSections.map((section, index) => {
                            const Component = getComponent(section.type);
                            if (!Component) {
                                throw new Error(`no component matching the page section's type: ${section.type}`);
                            }
                            return <Component key={index} {...section} data-sb-field-path={`bottomSections.${index}`} />;
                        })}
                    </div>
                )}
            </main>
        </BaseLayout>
    );
}

function ProjectMedia({ media }) {
    const mediaType = media.type;
    if (!mediaType) {
        throw new Error(`project media does not have the 'type' property`);
    }
    const Media = getComponent(mediaType);
    if (!Media) {
        throw new Error(`no component matching the project media type: ${mediaType}`);
    }
    return <Media {...media} className={classNames({ 'w-full': mediaType === 'ImageBlock' })} data-sb-field-path="media" />;
}

function ProjectNavItem({ project, label }) {
    return (
        <Link className="sb-project-nav-item group" href={getPageUrlPath(project)} data-sb-object-id={project.__metadata?.id}>
            {project.featuredImage && (
                <div className="h-0 w-full mb-6 pt-2/3 relative overflow-hidden">
                    <ImageBlock
                        {...project.featuredImage}
                        className="absolute left-0 top-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        data-sb-field-path="featuredImage"
                    />
                </div>
            )}
            <span className="sb-component sb-component-block sb-component-link">{label}</span>
        </Link>
    );
}
