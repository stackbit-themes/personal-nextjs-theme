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
    const colors = props.colors || 'colors-b';
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
                colors,
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
                    {postFeedVariants(props)}
                    {postFeedActions(props)}
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
        <div className="mt-12 overflow-x-hidden">
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
                'mt-12': props.title || props.subtitle
            })}
            {...(props.annotatePosts ? { 'data-sb-field-path': '.posts' } : null)}
        >
            {posts.map((post, index) => (
                <article key={index} className="border-b border-current pb-10" data-sb-object-id={post.__metadata?.id}>
                    {post.featuredImage && (
                        <Link href={getPageUrlPath(post)} className="block h-0 w-full mb-6 pt-2/3 relative overflow-hidden">
                            <ImageBlock
                                {...post.featuredImage}
                                className="absolute left-0 top-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                data-sb-field-path="featuredImage"
                            />
                        </Link>
                    )}

                    {props.showDate && <PostDate post={post} className="mb-3" />}
                    <h3 className="text-4xl uppercase">
                        <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                            {post.title}
                        </Link>
                    </h3>
                    <PostAttribution showAuthor={props.showAuthor} post={post} className="mt-3" />
                    {props.showExcerpt && post.excerpt && (
                        <p className="mt-5" data-sb-field-path="excerpt">
                            {post.excerpt}
                        </p>
                    )}
                    {props.showReadMoreLink && (
                        <div className="mt-10">
                            <Link
                                href={getPageUrlPath(post)}
                                className="sb-component sb-component-block sb-component-button sb-component-button-secondary sb-component-button-icon"
                            >
                                <span className="sr-only">Read more</span>
                                <ArrowUpRightIcon className="fill-current h-5 w-5" />
                            </Link>
                        </div>
                    )}
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
                'mt-12': props.title || props.subtitle
            })}
            {...(props.annotatePosts ? { 'data-sb-field-path': '.posts' } : null)}
        >
            {posts.map((post, index) => (
                <article key={index} className="border-b border-current pb-10" data-sb-object-id={post.__metadata?.id}>
                    {post.featuredImage && (
                        <Link href={getPageUrlPath(post)} className="block h-0 w-full mb-6 pt-2/3 relative overflow-hidden">
                            <ImageBlock
                                {...post.featuredImage}
                                className="absolute left-0 top-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                data-sb-field-path="featuredImage"
                            />
                        </Link>
                    )}

                    {props.showDate && <PostDate post={post} className="mb-3" />}
                    <h3 className="text-4xl uppercase">
                        <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                            {post.title}
                        </Link>
                    </h3>
                    <PostAttribution showAuthor={props.showAuthor} post={post} className="mt-3" />
                    {props.showExcerpt && post.excerpt && (
                        <p className="mt-5" data-sb-field-path="excerpt">
                            {post.excerpt}
                        </p>
                    )}
                    {props.showReadMoreLink && (
                        <div className="mt-10">
                            <Link
                                href={getPageUrlPath(post)}
                                className="sb-component sb-component-block sb-component-button sb-component-button-secondary sb-component-button-icon"
                            >
                                <span className="sr-only">Read more</span>
                                <ArrowUpRightIcon className="fill-current h-5 w-5" />
                            </Link>
                        </div>
                    )}
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
            className={classNames('grid', 'gap-y-12', 'justify-center', {
                'mt-12': props.title || props.subtitle
            })}
            {...(props.annotatePosts ? { 'data-sb-field-path': '.posts' } : null)}
        >
            {posts.map((post, index) => (
                <article key={index} className="border-b border-current pb-10 max-w-3xl" data-sb-object-id={post.__metadata?.id}>
                    {post.featuredImage && (
                        <Link href={getPageUrlPath(post)} className="block h-0 w-full mb-6 pt-2/3 relative overflow-hidden">
                            <ImageBlock
                                {...post.featuredImage}
                                className="absolute left-0 top-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                data-sb-field-path="featuredImage"
                            />
                        </Link>
                    )}

                    {props.showDate && <PostDate post={post} className="mb-3" />}
                    <h3 className="text-4xl uppercase">
                        <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                            {post.title}
                        </Link>
                    </h3>
                    <PostAttribution showAuthor={props.showAuthor} post={post} className="mt-3" />
                    {props.showExcerpt && post.excerpt && (
                        <p className="mt-5" data-sb-field-path="excerpt">
                            {post.excerpt}
                        </p>
                    )}
                    {props.showReadMoreLink && (
                        <div className="mt-10">
                            <Link
                                href={getPageUrlPath(post)}
                                className="sb-component sb-component-block sb-component-button sb-component-button-secondary sb-component-button-icon"
                            >
                                <span className="sr-only">Read more</span>
                                <ArrowUpRightIcon className="fill-current h-5 w-5" />
                            </Link>
                        </div>
                    )}
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
                'mt-12': props.title || props.subtitle
            })}
            {...(props.annotatePosts ? { 'data-sb-field-path': '.posts' } : null)}
        >
            {posts.map((post, index) => (
                <article key={index} data-sb-object-id={post.__metadata?.id} className="border-b border-current pb-12">
                    <div className="md:flex md:items-center">
                        {post.featuredImage && (
                            <div className="mb-8 md:flex-shrink-0 md:self-stretch md:w-1/5 md:mb-0 md:mr-8">
                                <Link href={getPageUrlPath(post)} className="block h-0 w-full pt-2/3 relative overflow-hidden md:h-24 md:min-h-full md:pt-0">
                                    <ImageBlock
                                        {...post.featuredImage}
                                        className="absolute left-0 top-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                        data-sb-field-path="featuredImage"
                                    />
                                </Link>
                            </div>
                        )}
                        <div className={classNames('md:flex-grow', {})}>
                            {props.showDate && <PostDate post={post} className="mb-3" />}
                            <h3 className="text-4xl uppercase">
                                <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                                    {post.title}
                                </Link>
                            </h3>
                            <PostAttribution showAuthor={props.showAuthor} post={post} className="mt-3" />
                            {props.showExcerpt && post.excerpt && (
                                <p className="mt-5" data-sb-field-path="excerpt">
                                    {post.excerpt}
                                </p>
                            )}
                        </div>
                        {props.showReadMoreLink && (
                            <div className="mt-8 md:mt-0 md:ml-12">
                                <Link
                                    href={getPageUrlPath(post)}
                                    className="sb-component sb-component-block sb-component-button sb-component-button-secondary sb-component-button-icon"
                                >
                                    <span className="sr-only">Read more</span>
                                    <ArrowUpRightIcon className="fill-current h-5 w-5 md:h-8 md:w-8" />
                                </Link>
                            </div>
                        )}
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
            {author && <>{author}</>}
            {category && (
                <>
                    {author && ' | '}
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
    /*if (!post.category) {
        return null;
    }
    const category = post.category;*/
    const category = { title: 'Category' };
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
