import * as React from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import Section from '../Section';
import { Link, Action } from '../../atoms';
import ImageBlock from '../../molecules/ImageBlock';
import ArrowUpRightIcon from '../../svgs/arrow-up-right';
import getPageUrlPath from '../../../utils/get-page-url-path';

export default function ProjectFeedSection(props) {
    const {
        type,
        elementId,
        colors,
        variant,
        title,
        subtitle,
        actions = [],
        projects = [],
        showDate,
        showDescription,
        showFeaturedImage,
        showReadMoreLink,
        pageLinks,
        annotateProjects,
        styles = {},
        'data-sb-field-path': fieldPath
    } = props;
    return (
        <Section type={type} elementId={elementId} colors={colors} styles={styles.self} data-sb-field-path={fieldPath}>
            {title && (
                <h2 className={classNames(styles.title ? mapStyles(styles.title) : null)} data-sb-field-path=".title">
                    {title}
                </h2>
            )}
            {subtitle && (
                <p
                    className={classNames('text-lg', 'sm:text-xl', styles.subtitle ? mapStyles(styles.subtitle) : null, { 'mt-6': title })}
                    data-sb-field-path=".subtitle"
                >
                    {subtitle}
                </p>
            )}
            <ProjectFeedVariants
                variant={variant}
                projects={projects}
                showDate={showDate}
                showDescription={showDescription}
                showFeaturedImage={showFeaturedImage}
                showReadMoreLink={showReadMoreLink}
                hasTopMargin={!!(title || subtitle)}
                annotateProjects={annotateProjects}
            />
            <ProjectFeedActions actions={actions} styles={styles.actions} />
            {pageLinks}
        </Section>
    );
}

function ProjectFeedActions(props) {
    const { actions = [], styles = {} } = props;
    if (actions.length === 0) {
        return null;
    }
    return (
        <div className="mt-10 overflow-x-hidden">
            <div className={classNames('flex', 'flex-wrap', 'items-center', '-mx-2', mapStyles(styles))} data-sb-field-path=".actions">
                {actions.map((action, index) => (
                    <Action key={index} {...action} className="my-2 mx-2 lg:whitespace-nowrap" data-sb-field-path={`.${index}`} />
                ))}
            </div>
        </div>
    );
}

function ProjectFeedVariants(props) {
    const { variant = 'variant-a' } = props;
    switch (variant) {
        case 'variant-a':
        case 'variant-b':
        case 'variant-c':
            return <ProjectsVariantABC {...props} />;
        case 'variant-d':
            return <ProjectsVariantD {...props} />;
        default:
            return null;
    }
}

function ProjectsVariantABC(props) {
    const { variant = 'variant-a', projects = [], showDate, showDescription, showFeaturedImage, showReadMoreLink, hasTopMargin, annotateProjects } = props;
    if (projects.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('grid', 'gap-y-12', {
                'md:grid-cols-2': variant === 'variant-a',
                'md:grid-cols-3': variant === 'variant-b',
                'justify-center': variant === 'variant-c',
                'gap-x-6 lg:gap-x-8': variant === 'variant-a' || 'variant-b',
                'mt-12': hasTopMargin
            })}
            {...(annotateProjects ? { 'data-sb-field-path': '.projects' } : null)}
        >
            {projects.map((project, index) => (
                <Link key={index} data-sb-object-id={project.__metadata?.id} href={getPageUrlPath(project)} className="sb-project-feed-item block group">
                    <article className="border-b border-current pb-10 max-w-3xl">
                        {showFeaturedImage && project.featuredImage && (
                            <div className="h-0 w-full mb-6 pt-2/3 relative overflow-hidden">
                                <ImageBlock
                                    {...project.featuredImage}
                                    className="absolute left-0 top-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    data-sb-field-path="featuredImage"
                                />
                            </div>
                        )}
                        {showDate && project.date && (
                            <div className="mb-3">
                                <ProjectDate date={project.date} />
                            </div>
                        )}
                        <h3 data-sb-field-path="title">{project.title}</h3>
                        {showDescription && project.description && (
                            <p className="text-lg mt-5" data-sb-field-path="description">
                                {project.description}
                            </p>
                        )}
                        {showReadMoreLink && (
                            <div className="mt-8">
                                <span className="sb-component sb-component-block sb-component-button sb-component-button-secondary sb-component-button-icon">
                                    <span className="sr-only">Read more</span>
                                    <ArrowUpRightIcon className="fill-current h-5 w-5" />
                                </span>
                            </div>
                        )}
                    </article>
                </Link>
            ))}
        </div>
    );
}

function ProjectsVariantD(props) {
    const { projects = [], showDate, showDescription, showFeaturedImage, showReadMoreLink, hasTopMargin, annotateProjects } = props;
    if (projects.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('grid', 'gap-y-8', {
                'mt-12': hasTopMargin
            })}
            {...(annotateProjects ? { 'data-sb-field-path': '.projects' } : null)}
        >
            {projects.map((project, index) => (
                <Link key={index} data-sb-object-id={project.__metadata?.id} href={getPageUrlPath(project)} className="sb-project-feed-item block group">
                    <article className="border-b border-current pb-10 md:pb-12 md:px-4">
                        <div className="md:flex md:items-center">
                            {showFeaturedImage && project.featuredImage && (
                                <div className="mb-8 md:flex-shrink-0 md:self-stretch md:w-48 md:mb-0 md:mr-8">
                                    <div className="block h-0 w-full pt-2/3 relative overflow-hidden md:h-24 md:min-h-full md:pt-0">
                                        <ImageBlock
                                            {...project.featuredImage}
                                            className="absolute left-0 top-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            data-sb-field-path="featuredImage"
                                        />
                                    </div>
                                </div>
                            )}
                            <div className={classNames('md:flex-grow', showFeaturedImage && project.featuredImage ? null : 'md:ml-12')}>
                                {showDate && project.date && (
                                    <div className="mb-3">
                                        <ProjectDate date={project.date} />
                                    </div>
                                )}
                                <h3 data-sb-field-path="title">{project.title}</h3>
                                {showDescription && project.description && (
                                    <p className="text-lg mt-5" data-sb-field-path="description">
                                        {project.description}
                                    </p>
                                )}
                            </div>
                            {showReadMoreLink && (
                                <div className="mt-8 md:mt-0 md:mx-8">
                                    <span className="sb-component sb-component-block sb-component-button sb-component-button-secondary sb-component-button-icon">
                                        <span className="sr-only">Read more</span>
                                        <ArrowUpRightIcon className="fill-current h-5 w-5 md:h-8 md:w-8" />
                                    </span>
                                </div>
                            )}
                        </div>
                    </article>
                </Link>
            ))}
        </div>
    );
}

function ProjectDate({ date }) {
    const dateTimeAttr = dayjs(date).format('YYYY-MM-DD HH:mm:ss');
    const formattedDate = dayjs(date).format('MM-DD-YYYY');
    return (
        <time dateTime={dateTimeAttr} data-sb-field-path="date">
            {formattedDate}
        </time>
    );
}
