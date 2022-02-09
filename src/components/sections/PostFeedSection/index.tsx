import * as React from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import Section from '../Section';
import { Link, Action } from '../../atoms';
import ImageBlock from '../../molecules/ImageBlock';
import ArrowUpRightIcon from '../../svgs/arrow-up-right';
import getPageUrlPath from '../../../utils/get-page-url-path';

export default function PostFeedSection(props) {
    const {
        type,
        elementId,
        colors,
        variant,
        title,
        subtitle,
        actions = [],
        posts = [],
        showDate,
        showAuthor,
        showExcerpt,
        showFeaturedImage,
        showReadMoreLink,
        pageLinks,
        annotatePosts,
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
            <PostFeedVariants
                variant={variant}
                posts={posts}
                showDate={showDate}
                showAuthor={showAuthor}
                showExcerpt={showExcerpt}
                showFeaturedImage={showFeaturedImage}
                showReadMoreLink={showReadMoreLink}
                hasTopMargin={!!(title || subtitle)}
                annotatePosts={annotatePosts}
            />
            <PostFeedActions actions={actions} styles={styles.actions} />
            {pageLinks}
        </Section>
    );
}

function PostFeedActions(props) {
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

function PostFeedVariants(props) {
    const { variant = 'variant-a' } = props;
    switch (variant) {
        case 'variant-a':
        case 'variant-b':
        case 'variant-c':
            return <PostsVariantABC {...props} />;
        case 'variant-d':
            return <PostsVariantD {...props} />;
        default:
            return null;
    }
}

function PostsVariantABC(props) {
    const { variant = 'variant-a', posts = [], showDate, showAuthor, showExcerpt, showFeaturedImage, showReadMoreLink, hasTopMargin, annotatePosts } = props;
    if (posts.length === 0) {
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
            {...(annotatePosts ? { 'data-sb-field-path': '.posts' } : null)}
        >
            {posts.map((post, index) => (
                <Link key={index} data-sb-object-id={post.__metadata?.id} href={getPageUrlPath(post)} className="sb-post-feed-item block group">
                    <article className="border-b border-current pb-10 max-w-3xl">
                        {showFeaturedImage && post.featuredImage && (
                            <div className="h-0 w-full mb-6 pt-2/3 relative overflow-hidden">
                                <ImageBlock
                                    {...post.featuredImage}
                                    className="absolute left-0 top-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    data-sb-field-path="featuredImage"
                                />
                            </div>
                        )}
                        <PostAttribution showDate={showDate} showAuthor={showAuthor} post={post} className="mb-3" />
                        <h3 data-sb-field-path="title">{post.title}</h3>
                        {showExcerpt && post.excerpt && (
                            <p className="text-lg mt-5" data-sb-field-path="excerpt">
                                {post.excerpt}
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

function PostsVariantD(props) {
    const { posts = [], showDate, showAuthor, showExcerpt, showFeaturedImage, showReadMoreLink, hasTopMargin, annotatePosts } = props;
    if (posts.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('grid', 'gap-y-12', {
                'mt-12': hasTopMargin
            })}
            {...(annotatePosts ? { 'data-sb-field-path': '.posts' } : null)}
        >
            {posts.map((post, index) => (
                <Link key={index} data-sb-object-id={post.__metadata?.id} href={getPageUrlPath(post)} className="sb-post-feed-item block group">
                    <article className="border-b border-current pb-10 md:pb-12 md:px-4">
                        <div className="md:flex md:items-center">
                            {showFeaturedImage && post.featuredImage && (
                                <div className="mb-8 md:flex-shrink-0 md:self-stretch md:w-48 md:mb-0 md:mr-8">
                                    <div className="h-0 w-full pt-2/3 relative overflow-hidden md:h-24 md:min-h-full md:pt-0">
                                        <ImageBlock
                                            {...post.featuredImage}
                                            className="absolute left-0 top-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            data-sb-field-path="featuredImage"
                                        />
                                    </div>
                                </div>
                            )}
                            <div className={classNames('md:flex-grow', showFeaturedImage && post.featuredImage ? null : 'md:ml-12')}>
                                <PostAttribution showDate={showDate} showAuthor={showAuthor} post={post} className="mb-3" />
                                <h3 data-sb-field-path="title">{post.title}</h3>
                                {showExcerpt && post.excerpt && (
                                    <p className="text-lg mt-5" data-sb-field-path="excerpt">
                                        {post.excerpt}
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

function PostAttribution({ showDate, showAuthor, post, className = '' }) {
    const date = showDate ? postDate(post) : null;
    const author = showAuthor ? postAuthor(post) : null;
    const category = postCategory(post);
    if (!date && !author && !category) {
        return null;
    }
    return (
        <div className={className ? className : null}>
            {date && <>{date}</>}
            {author && (
                <>
                    {date && ' | '}
                    {author}
                </>
            )}
            {category && (
                <>
                    {(date || author) && ' | '}
                    {category}
                </>
            )}
        </div>
    );
}

function postDate(post) {
    if (!post.date) {
        return null;
    }
    const date = post.date;
    const dateTimeAttr = dayjs(date).format('YYYY-MM-DD HH:mm:ss');
    const formattedDate = dayjs(date).format('MM-DD-YYYY');
    return (
        <time dateTime={dateTimeAttr} data-sb-field-path="date">
            {formattedDate}
        </time>
    );
}

function postAuthor(post) {
    if (!post.author) {
        return null;
    }
    const author = post.author;
    const children = (
        <>
            {author.firstName && <span data-sb-field-path=".firstName">{author.firstName}</span>}{' '}
            {author.lastName && <span data-sb-field-path=".lastName">{author.lastName}</span>}
        </>
    );
    if (author.slug) {
        return (
            <Link data-sb-field-path="author" href={`/blog/author/${author.slug}`}>
                {children}
            </Link>
        );
    } else {
        return <span data-sb-field-path="author">{children}</span>;
    }
}

function postCategory(post) {
    if (!post.category) {
        return null;
    }
    const category = post.category;
    return (
        <Link data-sb-field-path="category" href={getPageUrlPath(category)}>
            {category.title}
        </Link>
    );
}
