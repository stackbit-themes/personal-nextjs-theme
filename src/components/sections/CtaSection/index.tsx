import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import { Action } from '../../atoms';

export default function CtaSection(props) {
    const cssId = props.elementId || null;
    const colors = props.colors || 'colors-a';
    const bgSize = props.backgroundSize || 'full';
    const styles = props.styles || {};
    const sectionWidth = styles.self?.width || 'wide';
    const sectionHeight = styles.self?.height || 'auto';
    const sectionJustifyContent = styles.self?.justifyContent || 'center';
    const sectionFlexDirection = styles.self?.flexDirection || 'row';
    const sectionAlignItems = styles.self?.alignItems || 'center';
    return (
        <div
            id={cssId}
            {...getDataAttrs(props)}
            className={classNames(
                'sb-component',
                'sb-component-section',
                'sb-component-cta-section',
                bgSize === 'inset' ? 'flex' : null,
                bgSize === 'inset' ? mapStyles({ justifyContent: sectionJustifyContent }) : null,
                styles.self?.margin
            )}
        >
            <div
                className={classNames(
                    colors,
                    'flex',
                    'flex-col',
                    'justify-center',
                    'relative',
                    bgSize === 'inset' ? 'w-full' : null,
                    bgSize === 'inset' ? mapMaxWidthStyles(sectionWidth) : null,
                    mapMinHeightStyles(sectionHeight),
                    styles.self?.padding || 'py-12 px-4',
                    styles.self?.borderColor,
                    styles.self?.borderStyle ? mapStyles({ borderStyle: styles.self?.borderStyle }) : 'border-none',
                    styles.self?.borderRadius ? mapStyles({ borderRadius: styles.self?.borderRadius }) : null,
                    styles.self?.boxShadow ? mapStyles({ boxShadow: styles.self?.boxShadow }) : null
                )}
                style={{
                    borderWidth: styles.self?.borderWidth ? `${styles.self?.borderWidth}px` : null
                }}
            >
                <div
                    className={classNames(
                        'relative',
                        'w-full',
                        bgSize === 'full' ? 'flex' : null,
                        bgSize === 'full' ? mapStyles({ justifyContent: sectionJustifyContent }) : null
                    )}
                >
                    <div className={classNames('w-full', bgSize === 'full' ? mapMaxWidthStyles(sectionWidth) : null)}>
                        <div
                            className={classNames(
                                'flex',
                                mapFlexDirectionStyles(sectionFlexDirection),
                                mapStyles({ alignItems: sectionAlignItems }),
                                'space-y-8',
                                {
                                    'lg:space-y-0 lg:space-x-8': sectionFlexDirection === 'row'
                                }
                            )}
                        >
                            <CtaBody title={props.title} text={props.text} styles={styles} />
                            <CtaActions actions={props.actions} styles={styles} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CtaBody(props) {
    if (!props.title && !props.text) {
        return null;
    }
    return (
        <div className="w-full lg:flex-grow">
            {props.title && (
                <h2 className={classNames(props.styles?.title ? mapStyles(props.styles?.title) : null)} data-sb-field-path=".title">
                    {props.title}
                </h2>
            )}
            {props.text && (
                <Markdown
                    options={{ forceBlock: true, forceWrapper: true }}
                    className={classNames('sb-markdown', 'sm:text-lg', props.styles?.text ? mapStyles(props.styles?.text) : null, { 'mt-4': props.title })}
                    data-sb-field-path=".text"
                >
                    {props.text}
                </Markdown>
            )}
        </div>
    );
}

function CtaActions(props) {
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    const sectionFlexDirection = props.styles?.self?.flexDirection || 'row';
    const actionsJustifyContent = props.styles?.actions?.justifyContent || 'center';
    return (
        <div className={classNames('w-full', { 'lg:w-auto': sectionFlexDirection === 'row' })}>
            <div className={classNames('flex', mapStyles({ justifyContent: actionsJustifyContent }))}>
                <div
                    className={classNames('flex', 'flex-col', 'space-y-5', actionsJustifyContent === 'center' ? 'items-center' : 'items-start', {
                        'lg:items-center': sectionFlexDirection === 'row' && actionsJustifyContent !== 'center'
                    })}
                    data-sb-field-path=".actions"
                >
                    {actions.map((action, index) => (
                        <Action key={index} {...action} className="lg:whitespace-nowrap" data-sb-field-path={`.${index}`} />
                    ))}
                </div>
            </div>
        </div>
    );
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

function mapFlexDirectionStyles(flexDirection) {
    switch (flexDirection) {
        case 'row':
            return ['flex-col', 'lg:flex-row', 'lg:justify-between'];
        case 'col':
            return ['flex-col'];
        default:
            return null;
    }
}
