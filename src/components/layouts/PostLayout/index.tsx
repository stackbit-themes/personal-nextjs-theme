import * as React from 'react';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import HighlightedPreBlock from './../../../utils/highlighted-markdown';
import { getBaseLayoutComponent } from '../../../utils/base-layout';
import { getComponent } from '../../components-registry';
import getPageUrlPath from '../../../utils/get-page-url-path';
import Link from '../../atoms/Link';

export default function PostLayout(props) {
    const { page, site } = props;
    const BaseLayout = getBaseLayoutComponent(page.baseLayout, site.baseLayout);
    const sections = page.bottomSections || [];
    const dateTimeAttr = dayjs(page.date).format('YYYY-MM-DD HH:mm:ss');
    const formattedDate = dayjs(page.date).format('MM-DD-YYYY');

    return (
        <BaseLayout page={page} site={site}>
            <main id="main" className="sb-layout sb-post-layout">
                <article className="px-4 py-14 lg:py-20">
                    <div className="max-w-5xl mx-auto">
                        <header className="mb-10 sm:mb-14">
                            <div className="uppercase mb-4 sm:mb-6">
                                <span>
                                    <time dateTime={dateTimeAttr} data-sb-field-path="date">
                                        {formattedDate}
                                    </time>
                                </span>
                                <PostAttribution post={page} />
                            </div>
                            {page.title && <h1 data-sb-field-path="title">{page.title}</h1>}
                        </header>
                        {page.media && (
                            <div className="mb-10 sm:mb-14">
                                <PostMedia media={page.media} />
                            </div>
                        )}
                        {page.markdown_content && (
                            <Markdown
                                options={{ forceBlock: true, overrides: { pre: HighlightedPreBlock } }}
                                className="sb-markdown max-w-screen-md mx-auto"
                                data-sb-field-path="markdown_content"
                            >
                                {page.markdown_content}
                            </Markdown>
                        )}
                    </div>
                </article>
                {sections.length > 0 && (
                    <div data-sb-field-path="bottomSections">
                        {sections.map((section, index) => {
                            const Component = getComponent(section.type);
                            if (!Component) {
                                throw new Error(`no component matching the post section's type: ${section.type}`);
                            }
                            return <Component key={index} {...section} data-sb-field-path={`bottomSections.${index}`} />;
                        })}
                    </div>
                )}
            </main>
        </BaseLayout>
    );
}

function PostMedia({ media }) {
    const mediaType = media.type;
    if (!mediaType) {
        throw new Error(`post media does not have the 'type' property`);
    }
    const Media = getComponent(mediaType);
    if (!Media) {
        throw new Error(`no component matching the post media type: ${mediaType}`);
    }
    return <Media {...media} className={classNames({ 'w-full': mediaType === 'ImageBlock' })} data-sb-field-path="media" />;
}

function PostAttribution({ post }) {
    if (!post.author && !post.category) {
        return null;
    }
    const author = post.author ? postAuthor(post.author) : null;
    const category = post.category ? postCategory(post.category) : null;
    return (
        <span>
            {author && (
                <>
                    {' | '}
                    {author}
                </>
            )}
            {category && (
                <>
                    {' | '}
                    {category}
                </>
            )}
        </span>
    );
}

function postAuthor(author) {
    const children = (
        <>
            {author.firstName && <span data-sb-field-path=".firstName">{author.firstName}</span>}{' '}
            {author.lastName && <span data-sb-field-path=".lastName">{author.lastName}</span>}
        </>
    );
    return author.slug ? (
        <Link data-sb-field-path="author" href={`/blog/author/${author.slug}`}>
            {children}
        </Link>
    ) : (
        <span data-sb-field-path="author">{children}</span>
    );
}

function postCategory(category) {
    return (
        <Link data-sb-field-path="category" href={getPageUrlPath(category)}>
            {category.title}
        </Link>
    );
}
