import * as React from 'react';
import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';

import { mapStylesToClassNames as mapStyles } from '../../../../utils/map-styles-to-class-names';
import Action from '../../../atoms/Action';
import ImageBlock from '../../../molecules/ImageBlock';

export default function FeaturedItem(props) {
    const cssId = props.elementId || null;
    const styles = props.styles || {};
    const itemBorderWidth = styles.self?.borderWidth ? styles.self?.borderWidth : 0;
    return (
        <article
            id={cssId}
            className={classNames(
                'sb-component',
                'sb-component-block',
                'sb-component-item',
                props.enableHover ? 'sb-component-item-hover' : null,
                mapStyles(styles.self)
            )}
            style={{
                borderWidth: itemBorderWidth ? `${itemBorderWidth}px` : undefined
            }}
            data-sb-field-path={props['data-sb-field-path']}
        >
            {props.featuredImage && (
                <div className="mb-6">
                    <ImageBlock {...props.featuredImage} className="inline-block" data-sb-field-path=".featuredImage" />
                </div>
            )}
            {props.title && (
                <h3 className={classNames(styles.title ? mapStyles(styles.title) : null)} data-sb-field-path=".title">
                    {props.title}
                </h3>
            )}
            {props.subtitle && (
                <p
                    className={classNames('text-lg', styles.subtitle ? mapStyles(styles.subtitle) : null, { 'mt-1': props.title })}
                    data-sb-field-path=".subtitle"
                >
                    {props.subtitle}
                </p>
            )}
            {props.text && (
                <Markdown
                    options={{ forceBlock: true, forceWrapper: true }}
                    className={classNames('sb-markdown', {
                        'mt-4': props.title || props.subtitle
                    })}
                    data-sb-field-path=".text"
                >
                    {props.text}
                </Markdown>
            )}
            {itemActions(props)}
        </article>
    );
}

function itemActions(props) {
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    const styles = props.styles || {};
    return (
        <div
            className={classNames('overflow-x-hidden', {
                'mt-6': props.title || props.subtitle || props.text
            })}
        >
            <div
                className={classNames('flex', 'flex-wrap', 'items-center', '-mx-2', {
                    'justify-center': styles.self?.textAlign === 'center',
                    'justify-end': styles.self?.textAlign === 'right'
                })}
                data-sb-field-path=".actions"
            >
                {actions.map((action, index) => (
                    <Action key={index} {...action} className="mb-3 mx-2 lg:whitespace-nowrap" data-sb-field-path={`.${index}`} />
                ))}
            </div>
        </div>
    );
}
