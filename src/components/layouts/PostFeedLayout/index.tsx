import * as React from 'react';
import classNames from 'classnames';

import Link from '../../atoms/Link';
import { getComponent } from '../../components-registry';
import { getBaseLayoutComponent } from '../../../utils/base-layout';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';

export default function PostFeedLayout(props) {
    const { page, site } = props;
    const BaseLayout = getBaseLayoutComponent(page.baseLayout, site.baseLayout);
    const { title, topSections = [], bottomSections = [], pageIndex, baseUrlPath, numOfPages, items, postFeed, styles = {} } = page;
    const PostFeedSection = getComponent('PostFeedSection');
    const pageLinks = PageLinks({ pageIndex, baseUrlPath, numOfPages });

    return (
        <BaseLayout page={page} site={site}>
            <main id="main" className="layout page-layout">
                {title && (
                    <div
                        className={classNames(
                            'flex',
                            'py-12',
                            'lg:py-16',
                            'px-4',
                            mapStyles({ justifyContent: postFeed?.styles?.self?.justifyContent ?? 'center' })
                        )}
                    >
                        <h1
                            className={classNames(
                                'w-full',
                                mapStyles({ width: postFeed?.styles?.self?.width ?? 'wide' }),
                                styles?.title ? mapStyles(styles?.title) : null
                            )}
                            data-sb-field-path="title"
                        >
                            {title}
                        </h1>
                    </div>
                )}
                {renderSections(topSections, 'topSections')}
                <PostFeedSection {...postFeed} posts={items} pageLinks={pageLinks} data-sb-field-path="postFeed" />
                {renderSections(bottomSections, 'bottomSections')}
            </main>
        </BaseLayout>
    );
}

function renderSections(sections: any[], fieldName: string) {
    if (sections.length === 0) {
        return null;
    }
    return (
        <div data-sb-field-path={fieldName}>
            {sections.map((section, index) => {
                const Component = getComponent(section.type);
                if (!Component) {
                    throw new Error(`no component matching the page section's type: ${section.type}`);
                }
                return <Component key={index} {...section} data-sb-field-path={`${fieldName}.${index}`} />;
            })}
        </div>
    );
}

function PageLinks({ pageIndex, baseUrlPath, numOfPages }) {
    if (numOfPages < 2) {
        return null;
    }
    const pageLinks = [];
    const padRange = 2;
    const startIndex = pageIndex - padRange > 2 ? pageIndex - padRange : 0;
    const endIndex = pageIndex + padRange < numOfPages - 3 ? pageIndex + padRange : numOfPages - 1;

    // following logic renders pagination controls:
    // for example, if the current page is 6 (pageIndex === 5)
    //              ↓
    // ← 1 ... 4 5 6 7 8 ... 20 →
    //         ↑       ↑
    // and padRange === 2, then it renders from 4 (6 - 2) to 8 (6 + 2)

    // renders prev "←" button, if the current page is the first page, the button is disabled
    if (pageIndex > 0) {
        pageLinks.push(<PageLink key="prev" pageIndex={pageIndex - 1} buttonLabel="Previous" baseUrlPath={baseUrlPath} />);
    } else {
        pageLinks.push(<PageLinkDisabled key="prev" buttonLabel="Previous" />);
    }

    // if startIndex is not 0, then render the first page followed by ellipsis, if needed.
    if (startIndex > 0) {
        pageLinks.push(<PageLink key="0" pageIndex={0} buttonLabel="1" baseUrlPath={baseUrlPath} />);
        if (startIndex > 1) {
            pageLinks.push(<Ellipsis key="beforeEllipsis" />);
        }
    }

    // render all pages between startIndex and endIndex, the current page should be disabled
    for (let i = startIndex; i <= endIndex; i++) {
        if (pageIndex === i) {
            pageLinks.push(<PageLinkDisabled key={i} buttonLabel={i + 1} />);
        } else {
            pageLinks.push(<PageLink key={i} pageIndex={i} buttonLabel={i + 1} baseUrlPath={baseUrlPath} />);
        }
    }

    // if endIndex is not the last page, then render the last page preceded by ellipsis, if needed.
    if (endIndex < numOfPages - 1) {
        if (endIndex < numOfPages - 2) {
            pageLinks.push(<Ellipsis key="afterEllipsis" />);
        }
        pageLinks.push(<PageLink key={numOfPages - 1} pageIndex={numOfPages - 1} buttonLabel={numOfPages} baseUrlPath={baseUrlPath} />);
    }

    // renders next "→" button, if the current page is the last page, the button is disabled
    if (pageIndex < numOfPages - 1) {
        pageLinks.push(<PageLink key="next" pageIndex={pageIndex + 1} buttonLabel="Next" baseUrlPath={baseUrlPath} />);
    } else {
        pageLinks.push(<PageLinkDisabled key="next" buttonLabel="Next" />);
    }

    return <div className={classNames('flex flex-row flex-wrap items-center justify-center mt-12 sm:mt-20')}>{pageLinks}</div>;
}

function PageLink({ pageIndex, buttonLabel, baseUrlPath }) {
    return (
        <Link href={urlPathForPageAtIndex(pageIndex, baseUrlPath)} className="sb-component-button sb-component-button-secondary px-4 py-2 m-2">
            {buttonLabel}
        </Link>
    );
}

function PageLinkDisabled({ buttonLabel }) {
    return (
        <span key="next" className="sb-component-button sb-component-button-secondary opacity-25 px-4 py-2 m-2">
            {buttonLabel}
        </span>
    );
}

function Ellipsis() {
    return <span className="px-4 py-2 mx-2">…</span>;
}

function urlPathForPageAtIndex(pageIndex, baseUrlPath) {
    return pageIndex === 0 ? baseUrlPath : `${baseUrlPath}/page/${pageIndex + 1}`;
}
