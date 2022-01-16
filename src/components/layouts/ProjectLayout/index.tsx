import * as React from 'react';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import { getBaseLayoutComponent } from '../../../utils/base-layout';
import { getComponent } from '../../components-registry';
import getPageUrlPath from '../../../utils/get-page-url-path';
import ImageBlock from '../../molecules/ImageBlock';
import Link from '../../atoms/Link';

export default function ProjectLayout(props) {
    const { page, site } = props;
    const BaseLayout = getBaseLayoutComponent(page.baseLayout, site.baseLayout);
    const sections = page.bottomSections || [];
    const dateTimeAttr = dayjs(page.date).format('YYYY-MM-DD HH:mm:ss');
    const formattedDate = dayjs(page.date).format('MM-DD-YYYY');

    return (
        <BaseLayout page={page} site={site}>
            <main id="main" className="sb-layout sb-project-layout">
                <article className="px-4 sm:px-8 py-14 lg:py-20">
                    <div className="max-w-5xl mx-auto">
                        <header className="mb-12 md:mb-20">
                            {page.client && (
                                <div className="text-lg mb-2 md:mb-6" data-sb-field-path="client">
                                    {page.client}
                                </div>
                            )}
                            <div className="md:flex md:justify-between">
                                <div className="mb-6 md:mb-0 md:order-last">
                                    <time dateTime={dateTimeAttr} data-sb-field-path="date">
                                        {formattedDate}
                                    </time>
                                </div>
                                <h1 className="md:max-w-2xl md:flex-grow md:mr-16" data-sb-field-path="title">
                                    {page.title}
                                </h1>
                            </div>
                        </header>
                        {page.description && (
                            <div className="max-w-screen-md mx-auto mb-12 md:mb-20" data-sb-field-path="description">
                                {page.description}
                            </div>
                        )}
                        {page.media && <div className="w-full mb-12 md:mb-20">{projectMedia(page.media)}</div>}
                        {page.markdown_content && (
                            <Markdown options={{ forceBlock: true }} className="sb-markdown max-w-screen-md mx-auto" data-sb-field-path="markdown_content">
                                {page.markdown_content}
                            </Markdown>
                        )}
                    </div>
                </article>
                {(page.nextProject || page.prevProject) && (
                    <div className="max-w-5xl mx-auto grid gap-x-6 gap-y-12 md:grid-cols-2 lg:gap-x-8 mt-12 mb-20">
                        {page.prevProject && (
                            <article data-sb-object-id={page.prevProject?.__metadata?.id}>
                                {page.prevProject?.featuredImage && (
                                    <Link href={getPageUrlPath(page.prevProject)} className="block h-0 w-full mb-6 pt-2/3 relative overflow-hidden">
                                        <ImageBlock
                                            {...page.prevProject?.featuredImage}
                                            className="absolute left-0 top-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                            data-sb-field-path="featuredImage"
                                        />
                                    </Link>
                                )}
                                <h3 className="text-base">
                                    <Link className="sb-component sb-component-block sb-component-link" href={getPageUrlPath(page.prevProject)}>
                                        Previous project
                                    </Link>
                                </h3>
                            </article>
                        )}
                        {page.nextProject && (
                            <article className={classNames(page.prevProject ? 'md:text-right' : null)} data-sb-object-id={page.nextProject?.__metadata?.id}>
                                {page.nextProject?.featuredImage && (
                                    <Link href={getPageUrlPath(page.nextProject)} className="block h-0 w-full mb-6 pt-2/3 relative overflow-hidden">
                                        <ImageBlock
                                            {...page.nextProject?.featuredImage}
                                            className="absolute left-0 top-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                            data-sb-field-path="featuredImage"
                                        />
                                    </Link>
                                )}
                                <h3 className="text-base">
                                    <Link className="sb-component sb-component-block sb-component-link" href={getPageUrlPath(page.nextProject)}>
                                        Next project
                                    </Link>
                                </h3>
                            </article>
                        )}
                    </div>
                )}
                {sections.length > 0 && (
                    <div data-sb-field-path="bottomSections">
                        {sections.map((section, index) => {
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

function projectMedia(media) {
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
