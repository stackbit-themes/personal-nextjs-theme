import * as React from 'react';
import classNames from 'classnames';

import { getComponent } from '../../components-registry';
import BaseLayout from '../BaseLayout';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';

export default function PostFeedLayout(props) {
    const { page, site } = props;
    const { title, topSections = [], bottomSections = [], items, postFeed, styles = {} } = page;
    const PostFeedSection = getComponent('PostFeedSection');

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
                <Sections sections={topSections} data-sb-field-path="topSections" />
                <PostFeedSection {...postFeed} posts={items} data-sb-field-path="postFeed" />
                <Sections sections={bottomSections} data-sb-field-path="bottomSections" />
            </main>
        </BaseLayout>
    );
}

function Sections({ sections, 'data-sb-field-path': annotation }) {
    if (sections.length === 0) {
        return null;
    }
    return (
        <div data-sb-field-path={annotation}>
            {sections.map((section, index) => {
                const Component = getComponent(section.type);
                if (!Component) {
                    throw new Error(`no component matching the page section's type: ${section.type}`);
                }
                return <Component key={index} {...section} data-sb-field-path={`${annotation}.${index}`} />;
            })}
        </div>
    );
}
