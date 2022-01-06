import * as React from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import { Link, Action } from '../../atoms';
import ImageBlock from '../../molecules/ImageBlock';
import ArrowUpRightIcon from '../../svgs/arrow-up-right';
import getPageUrlPath from '../../../utils/get-page-url-path';

export default function PostFeedSection(props) {
    const cssId = props.elementId || null;
    const styles = props.styles || {};
    const sectionWidth = styles.self?.width || 'wide';
    const sectionHeight = styles.self?.height || 'auto';
    const sectionJustifyContent = styles.self?.justifyContent || 'center';
    return (
        <div
            id={cssId}
            {...getDataAttrs(props)}
            className={classNames(
                'sb-component',
                'sb-component-section',
                'sb-component-post-feed-section',
                'flex',
                'flex-col',
                'justify-center',
                'relative',
                mapMinHeightStyles(sectionHeight),
                styles.self?.margin,
                styles.self?.padding || 'py-12 px-4',
                styles.self?.borderColor,
                styles.self?.borderRadius ? mapStyles({ borderRadius: styles.self?.borderRadius }) : null,
                styles.self?.borderStyle ? mapStyles({ borderStyle: styles.self?.borderStyle }) : 'border-none'
            )}
            style={{
                borderWidth: styles.self?.borderWidth ? `${styles.self?.borderWidth}px` : null
            }}
        >
            <div className={classNames('flex', 'w-full', mapStyles({ justifyContent: sectionJustifyContent }))}>
                <div className={classNames('w-full', mapMaxWidthStyles(sectionWidth))}>
                    {props.title && (
                        <h2 className={classNames(styles.title ? mapStyles(styles.title) : null)} data-sb-field-path=".title">
                            {props.title}
                        </h2>
                    )}
                    {props.subtitle && (
                        <p
                            className={classNames('text-lg', 'sm:text-xl', styles.subtitle ? mapStyles(styles.subtitle) : null, { 'mt-6': props.title })}
                            data-sb-field-path=".subtitle"
                        >
                            {props.subtitle}
                        </p>
                    )}
                    {postFeedActions(props)}
                    {postFeedVariants(props)}
                    {props.pageLinks}
                </div>
            </div>
        </div>
    );
}

function postFeedActions(props) {
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    const styles = props.styles || {};
    return (
        <div className={classNames('overflow-x-hidden', { 'mt-8': props.title || props.subtitle })}>
            <div
                className={classNames('flex', 'flex-wrap', 'items-center', '-mx-2', styles.actions ? mapStyles(styles.actions) : null)}
                data-sb-field-path=".actions"
            >
                {props.actions.map((action, index) => (
                    <Action key={index} {...action} className="mb-3 mx-2 lg:whitespace-nowrap" data-sb-field-path={`.${index}`} />
                ))}
            </div>
        </div>
    );
}

function postFeedVariants(props) {
    const variant = props.variant || 'variant-a';
    switch (variant) {
        case 'variant-a':
            return postsVariantA(props);
        case 'variant-b':
            return postsVariantB(props);
        case 'variant-c':
            return postsVariantC(props);
        case 'variant-d':
            return postsVariantD(props);
    }
    return null;
}

function postsVariantA(props) {
    const posts = props.posts || [];
    if (posts.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('grid', 'gap-x-6', 'gap-y-12', 'md:grid-cols-2', 'lg:gap-x-8', {
                'mt-12': props.title || props.subtitle || (props.actions || []).length > 0
            })}
            {...(props.annotatePosts ? { 'data-sb-field-path': '.posts' } : null)}
        >
            {posts.map((post, index) => (
                <article key={index} className="sb-card overflow-hidden" data-sb-object-id={post.__metadata?.id}>
                    <div className="flex flex-col min-h-full">
                        {post.featuredImage && (
                            <Link href={getPageUrlPath(post)} className="block h-0 w-full pt-2/3 relative overflow-hidden">
                                <ImageBlock
                                    {...post.featuredImage}
                                    className="absolute left-0 top-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                    data-sb-field-path="featuredImage"
                                />
                            </Link>
                        )}
                        <div className="flex flex-col flex-grow px-4 pt-6 pb-10 sm:px-6">
                            <div className="flex-grow">
                                <h3 className="text-3xl">
                                    <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                                        {post.title}
                                    </Link>
                                </h3>
                                <PostAttribution showAuthor={props.showAuthor} post={post} className="mt-2" />
                                {props.showExcerpt && post.excerpt && (
                                    <p className="mt-4" data-sb-field-path="excerpt">
                                        {post.excerpt}
                                    </p>
                                )}
                            </div>
                            {(props.showDate || props.showReadMoreLink) && (
                                <div className="mt-12 space-y-6">
                                    {props.showDate && <PostDate post={post} className="mb-2" />}
                                    {props.showReadMoreLink && (
                                        <div>
                                            <Link
                                                href={getPageUrlPath(post)}
                                                className="sb-component sb-component-block sb-component-button sb-component-button-secondary sb-component-button-icon"
                                            >
                                                <span className="sr-only">Read more</span>
                                                <ArrowUpRightIcon className="fill-current h-5 w-5" />
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}

function postsVariantB(props) {
    const posts = props.posts || [];
    if (posts.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('grid', 'gap-x-6', 'gap-y-12', 'md:grid-cols-3', 'lg:gap-x-8', {
                'mt-12': props.title || props.subtitle || (props.actions || []).length > 0
            })}
            {...(props.annotatePosts ? { 'data-sb-field-path': '.posts' } : null)}
        >
            {posts.map((post, index) => (
                <article key={index} className="sb-card overflow-hidden" data-sb-object-id={post.__metadata?.id}>
                    <div className="flex flex-col min-h-full">
                        {post.featuredImage && (
                            <Link href={getPageUrlPath(post)} className="block h-0 w-full pt-2/3 relative overflow-hidden">
                                <ImageBlock
                                    {...post.featuredImage}
                                    className="absolute left-0 top-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                    data-sb-field-path="featuredImage"
                                />
                            </Link>
                        )}
                        <div className="flex flex-col flex-grow px-4 pt-6 pb-10 sm:px-6">
                            <div className="flex-grow">
                                <h3 className="text-2xl">
                                    <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                                        {post.title}
                                    </Link>
                                </h3>
                                <PostAttribution showAuthor={props.showAuthor} post={post} className="mt-2" />
                                {props.showExcerpt && post.excerpt && (
                                    <p className="mt-4" data-sb-field-path="excerpt">
                                        {post.excerpt}
                                    </p>
                                )}
                            </div>
                            {(props.showDate || props.showReadMoreLink) && (
                                <div className="mt-12 space-y-6">
                                    {props.showDate && <PostDate post={post} className="mb-2" />}
                                    {props.showReadMoreLink && (
                                        <div>
                                            <Link
                                                href={getPageUrlPath(post)}
                                                className="sb-component sb-component-block sb-component-button sb-component-button-secondary sb-component-button-icon"
                                            >
                                                <span className="sr-only">Read more</span>
                                                <ArrowUpRightIcon className="fill-current h-5 w-5" />
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}

function postsVariantC(props) {
    const posts = props.posts || [];
    if (posts.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('grid', 'gap-6', 'md:grid-cols-6', 'lg:gap-8', {
                'mt-12': props.title || props.subtitle || (props.actions || []).length > 0
            })}
            {...(props.annotatePosts ? { 'data-sb-field-path': '.posts' } : null)}
        >
            {posts.map((post, index) => (
                <article
                    key={index}
                    className={classNames('sb-card', 'overflow-hidden', index % 5 === 0 || index % 5 === 1 ? 'md:col-span-3' : 'md:col-span-2')}
                    data-sb-object-id={post.__metadata?.id}
                >
                    <div className="flex flex-col min-h-full">
                        {post.featuredImage && (
                            <Link href={getPageUrlPath(post)} className="block h-0 w-full pt-2/3 relative overflow-hidden">
                                <ImageBlock
                                    {...post.featuredImage}
                                    className="absolute left-0 top-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                    data-sb-field-path="featuredImage"
                                />
                            </Link>
                        )}
                        <div className="flex flex-col flex-grow px-4 pt-6 pb-10 sm:px-6">
                            <div className="flex-grow">
                                <h3 className="text-3xl">
                                    <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                                        {post.title}
                                    </Link>
                                </h3>
                                <PostAttribution showAuthor={props.showAuthor} post={post} className="mt-2" />
                                {props.showExcerpt && post.excerpt && (
                                    <p className="mt-4" data-sb-field-path="excerpt">
                                        {post.excerpt}
                                    </p>
                                )}
                            </div>
                            {(props.showDate || props.showReadMoreLink) && (
                                <div className="mt-12 space-y-6">
                                    {props.showDate && <PostDate post={post} className="mb-2" />}
                                    {props.showReadMoreLink && (
                                        <div>
                                            <Link
                                                href={getPageUrlPath(post)}
                                                className="sb-component sb-component-block sb-component-button sb-component-button-secondary sb-component-button-icon"
                                            >
                                                <span className="sr-only">Read more</span>
                                                <ArrowUpRightIcon className="fill-current h-5 w-5" />
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}

function postsVariantD(props) {
    const posts = props.posts || [];
    if (posts.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('grid', 'gap-y-12', {
                'mt-12': props.title || props.subtitle || (props.actions || []).length > 0
            })}
            {...(props.annotatePosts ? { 'data-sb-field-path': '.posts' } : null)}
        >
            {posts.map((post, index) => (
                <article key={index} data-sb-object-id={post.__metadata?.id} className="sb-card overflow-hidden">
                    <div className="md:flex md:items-center">
                        {post.featuredImage && (
                            <div className="md:w-2/5">
                                <Link
                                    href={getPageUrlPath(post)}
                                    className="block h-0 w-full pt-2/3 relative overflow-hidden md:h-60 md:min-h-full md:pt-0 lg:h-72"
                                >
                                    <ImageBlock
                                        {...post.featuredImage}
                                        className="absolute left-0 top-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                        data-sb-field-path="featuredImage"
                                    />
                                </Link>
                            </div>
                        )}
                        <div className="px-4 pt-6 pb-10 sm:px-6 md:w-3/5 md:self-center md:pt-8">
                            {props.showDate && <PostDate post={post} className="mb-2" />}
                            <h3 className="text-3xl">
                                <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                                    {post.title}
                                </Link>
                            </h3>
                            <PostAttribution showAuthor={props.showAuthor} post={post} className="mt-2" />
                            {props.showExcerpt && post.excerpt && (
                                <p className="mt-4" data-sb-field-path="excerpt">
                                    {post.excerpt}
                                </p>
                            )}
                        </div>
                        <div>
                            <Link
                                href={getPageUrlPath(post)}
                                className="sb-component sb-component-block sb-component-button sb-component-button-secondary sb-component-button-icon"
                            >
                                <span className="sr-only">Read more</span>
                                <ArrowUpRightIcon className="fill-current h-7 w-7" />
                            </Link>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}

function PostDate({ post, className = '' }) {
    if (!post.date) {
        return null;
    }
    const date = post.date;
    const dateTimeAttr = dayjs(date).format('YYYY-MM-DD HH:mm:ss');
    const formattedDate = dayjs(date).format('MM-DD-YYYY');
    return (
        <div className={className ? className : null}>
            <time dateTime={dateTimeAttr} data-sb-field-path="date">
                {formattedDate}
            </time>
        </div>
    );
}

function PostAttribution({ showAuthor, post, className = '' }) {
    const author = showAuthor ? postAuthor(post) : null;
    const category = postCategory(post);
    if (!author && !category) {
        return null;
    }
    return (
        <div className={className ? className : null}>
            {author && (
                <>
                    {'By '}
                    {author}
                </>
            )}
            {category && (
                <>
                    {author ? ' in ' : 'In '}
                    {category}
                </>
            )}
        </div>
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

function mapMinHeightStyles(height) {
    switch (height) {
        case 'auto':
            return 'min-h-0';
        case 'screen':
            return 'min-h-screen';
    }
    return null;
}

function mapMaxWidthStyles(width) {
    switch (width) {
        case 'narrow':
            return 'max-w-5xl';
        case 'wide':
            return 'max-w-7xl';
        case 'full':
            return 'max-w-full';
    }
    return null;
}
