import * as React from 'react';
import classNames from 'classnames';
import Link from '../Link';
import { iconMap } from '../../svgs';

export default function Social(props) {
    const { label, altText, url } = props;
    const icon = props.icon || 'facebook';
    const IconComponent = iconMap[icon];
    const annotationPrefix = props['data-sb-field-path'] || '';
    const annotations = [
        `${annotationPrefix}`,
        `${annotationPrefix}.url#@href`,
        `${annotationPrefix}.altText#@aria-label`,
        `${annotationPrefix}.elementId#@id`,
        `${annotationPrefix}.label#span[1]`,
        `${annotationPrefix}.icon#svg[1]`
    ];
    const cssClasses = props.className || null;
    const cssId = props.elementId || null;

    return (
        <Link
            href={url}
            aria-label={altText}
            id={cssId}
            className={classNames('sb-component', 'sb-component-block', 'sb-component-social', cssClasses)}
            data-sb-field-path={annotations.join(' ').trim()}
        >
            {label && <span className="sr-only">{label}</span>}
            {IconComponent && <IconComponent className="fill-current h-5 w-5" />}
        </Link>
    );
}
