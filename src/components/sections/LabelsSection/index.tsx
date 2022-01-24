import * as React from 'react';
import classNames from 'classnames';

import { Link } from '../../atoms';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';

export default function LabelsSection(props) {
    const { title, subtitle, styles } = props;
    const cssId = props.elementId || null;
    const colors = props.colors || 'colors-a';
    const sectionWidth = styles?.self?.width || 'wide';
    const sectionHeight = styles?.self?.height || 'auto';
    const sectionJustifyContent = styles?.self?.justifyContent || 'center';
    const items = props.items || [];
    return (
        <div
            id={cssId}
            {...getDataAttrs(props)}
            className={classNames(
                'sb-component',
                'sb-component-section',
                'sb-component-labels-section',
                colors,
                'flex',
                'flex-col',
                'justify-center',
                mapMinHeightStyles(sectionHeight),
                styles?.self?.margin,
                styles?.self?.padding || 'py-12 px-4',
                styles?.self?.borderColor,
                styles?.self?.borderStyle ? mapStyles({ borderStyle: styles?.self?.borderStyle }) : 'border-none',
                styles?.self?.borderRadius ? mapStyles({ borderRadius: styles?.self?.borderRadius }) : null
            )}
            style={{
                borderWidth: styles?.self?.borderWidth ? `${styles?.self?.borderWidth}px` : null
            }}
        >
            <div className={classNames('flex', 'w-full', mapStyles({ justifyContent: sectionJustifyContent }))}>
                <div className={classNames('w-full', mapMaxWidthStyles(sectionWidth))}>
                    {title && (
                        <h2 className={classNames(styles?.title ? mapStyles(styles?.title) : null)} data-sb-field-path=".title">
                            {title}
                        </h2>
                    )}
                    {subtitle && (
                        <p
                            className={classNames('text-lg', 'sm:text-xl', styles?.subtitle ? mapStyles(styles?.subtitle) : null, {
                                'mt-6': title
                            })}
                            data-sb-field-path=".subtitle"
                        >
                            {subtitle}
                        </p>
                    )}
                    {items.length > 0 && (
                        <div
                            className={classNames('flex', 'flex-wrap', mapColStyles(props?.columns || 3), {
                                'mt-12 lg:mt-16': title || subtitle
                            })}
                            data-sb-field-path=".items"
                        >
                            {items.map((item, index) => (
                                <LabelItem key={index} {...item} data-sb-field-path={`.${index}`} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function LabelItem(props) {
    const { label, url, 'data-sb-field-path': annotationPrefix } = props;
    if (!label) {
        return null;
    }
    if (url) {
        return (
            <Link
                href={url}
                className="sb-component sb-component-block sb-component-button sb-component-button-secondary mr-6 mb-6"
                data-sb-field-path={`${annotationPrefix} ${annotationPrefix}.url#@href ${annotationPrefix}.label#span[1]`}
            >
                <span>{label}</span>
            </Link>
        );
    } else {
        return (
            <div
                className="sb-component sb-component-block sb-component-button sb-component-button-secondary sb-component-button-no-hover mr-6 mb-6"
                data-sb-field-path={`${annotationPrefix} ${annotationPrefix}.label#span[1]`}
            >
                <span>{label}</span>
            </div>
        );
    }
}

function mapColStyles(columns) {
    switch (columns) {
        case 4:
            return 'md:grid-cols-4';
        case 3:
            return 'md:grid-cols-3';
        case 2:
            return 'md:grid-cols-2';
        default:
            return null;
    }
}

function mapMinHeightStyles(height) {
    switch (height) {
        case 'screen':
            return 'min-h-screen';
        default:
            return null;
    }
}

function mapMaxWidthStyles(width) {
    switch (width) {
        case 'narrow':
            return 'max-w-5xl';
        case 'wide':
            return 'max-w-7xl';
        case 'full':
            return 'max-w-full';
        default:
            return null;
    }
}
