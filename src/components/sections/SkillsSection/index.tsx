import * as React from 'react';
import classNames from 'classnames';

import { Link } from '../../atoms';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';

export default function SkillsSection(props) {
    const cssId = props.elementId || null;
    const styles = props.styles || {};
    const sectionWidth = styles.self?.width || 'wide';
    const sectionHeight = styles.self?.height || 'auto';
    const sectionJustifyContent = styles.self?.justifyContent || 'center';
    const items = props.items || [];
    return (
        <div
            id={cssId}
            {...getDataAttrs(props)}
            className={classNames(
                'sb-component',
                'sb-component-section',
                'sb-component-skills-section',
                'flex',
                'flex-col',
                'justify-center',
                mapMinHeightStyles(sectionHeight),
                styles.self?.margin,
                styles.self?.padding || 'py-12 px-4',
                styles.self?.borderColor,
                styles.self?.borderStyle ? mapStyles({ borderStyle: styles.self?.borderStyle }) : 'border-none',
                styles.self?.borderRadius ? mapStyles({ borderRadius: styles.self?.borderRadius }) : null
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
                            className={classNames('text-lg', 'sm:text-xl', styles.subtitle ? mapStyles(styles.subtitle) : null, {
                                'mt-6': props.title
                            })}
                            data-sb-field-path=".subtitle"
                        >
                            {props.subtitle}
                        </p>
                    )}
                    {items.length > 0 && (
                        <div
                            className={classNames('flex', 'flex-wrap', mapColStyles(props?.columns || 3), {
                                'mt-12 lg:mt-16': props.title || props.subtitle
                            })}
                            data-sb-field-path=".items"
                        >
                            {props.items.map((item, index) => (
                                <SkillItem key={index} {...item} data-sb-field-path={`.${index}`} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function SkillItem(props) {
    if (!props.label) {
        return null;
    }
    if (props.url) {
        return (
            <Link href={props.url} className="sb-component sb-component-block sb-component-button sb-component-button-primary mr-6 mb-6">
                {props.label}
            </Link>
        );
    } else {
        return <div className="sb-component sb-component-block sb-component-button sb-component-button-primary mr-6 mb-6">{props.label}</div>;
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
    }
    return null;
}

function mapMinHeightStyles(height) {
    switch (height) {
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
