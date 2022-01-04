import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import { Action } from '../../atoms';

export default function FeatureHighlightSection(props) {
    const cssId = props.elementId || null;
    const bgSize = props.backgroundSize || 'full';
    const sectionStyles = props.styles?.self || {};
    const sectionWidth = sectionStyles.width || 'wide';
    const sectionHeight = sectionStyles.height || 'auto';
    const sectionJustifyContent = sectionStyles.justifyContent || 'center';
    return (
        <div
            id={cssId}
            {...getDataAttrs(props)}
            className={classNames(
                'sb-component',
                'sb-component-section',
                'sb-component-feature-highlight-section',
                bgSize === 'inset' ? 'flex justify-center' : null,
                sectionStyles.margin
            )}
        >
            <div
                className={classNames(
                    'flex',
                    'flex-col',
                    'items-center',
                    'justify-center',
                    'relative',
                    bgSize === 'inset' ? 'w-full' : null,
                    bgSize === 'inset' ? mapMaxWidthStyles(sectionWidth) : null,
                    mapMinHeightStyles(sectionHeight),
                    sectionStyles.padding || 'py-12 px-4',
                    sectionStyles.borderColor,
                    sectionStyles.borderStyle ? mapStyles({ borderStyle: sectionStyles.borderStyle }) : 'border-none',
                    sectionStyles.borderRadius ? mapStyles({ borderRadius: sectionStyles.borderRadius }) : null,
                    sectionStyles.boxShadow ? mapStyles({ boxShadow: sectionStyles.boxShadow }) : null
                )}
                style={{
                    borderWidth: sectionStyles.borderWidth ? `${sectionStyles.borderWidth}px` : null
                }}
            >
                <div className={classNames('relative', 'w-full', bgSize === 'full' ? mapMaxWidthStyles(sectionWidth) : null)}>
                    <div className={classNames('w-full', 'flex', mapStyles({ justifyContent: sectionJustifyContent }))}>
                        <div className={classNames('sb-card', 'max-w-2xl', 'px-6', 'py-10', 'sm:px-12', 'sm:py-14')}>
                            {featureHighlightBody(props)}
                            {featureHighlightActions(props)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function featureHighlightBody(props) {
    const styles = props.styles || {};
    return (
        <>
            {props.title && (
                <h2 className={classNames(styles.title ? mapStyles(styles.title) : null)} data-sb-field-path=".title">
                    {props.title}
                </h2>
            )}
            {props.subtitle && (
                <p
                    className={classNames('text-xl', 'sm:text-2xl', styles.subtitle ? mapStyles(styles.subtitle) : null, { 'mt-4': props.title })}
                    data-sb-field-path=".subtitle"
                >
                    {props.subtitle}
                </p>
            )}
            {props.text && (
                <Markdown
                    options={{ forceBlock: true, forceWrapper: true }}
                    className={classNames('sb-markdown', 'sm:text-lg', styles.text ? mapStyles(styles.text) : null, { 'mt-6': props.title || props.subtitle })}
                    data-sb-field-path=".text"
                >
                    {props.text}
                </Markdown>
            )}
        </>
    );
}

function featureHighlightActions(props) {
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    const styles = props.styles || {};
    return (
        <div
            className={classNames('overflow-x-hidden', {
                'mt-8': props.title || props.subtitle || props.text
            })}
        >
            <div
                className={classNames('flex', 'flex-wrap', 'items-center', '-mx-2', styles.actions ? mapStyles(styles.actions) : null)}
                data-sb-field-path=".actions"
            >
                {actions.map((action, index) => (
                    <Action key={index} {...action} className="mb-3 mx-2 lg:whitespace-nowrap" data-sb-field-path={`.${index}`} />
                ))}
            </div>
        </div>
    );
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
        case 'wide':
            return 'max-w-7xl';
        case 'full':
            return 'max-w-full';
    }
    return null;
}
