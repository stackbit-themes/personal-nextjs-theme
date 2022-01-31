import * as React from 'react';
import classNames from 'classnames';
import Link from '../Link';
import { iconMap } from '../../svgs';

export default function Social(props) {
    const { elementId, className, label, altText, url, icon = 'facebook', 'data-sb-field-path': fieldPath } = props;
    const IconComponent = iconMap[icon];
    const annotations = fieldPath
        ? {
              'data-sb-field-path': [
                  fieldPath,
                  `${fieldPath}.url#@href`,
                  `${fieldPath}.altText#@aria-label`,
                  `${fieldPath}.elementId#@id`,
                  `${fieldPath}.label#span[1]`,
                  `${fieldPath}.icon#svg[1]`
              ]
                  .join(' ')
                  .trim()
          }
        : {};

    return (
        <Link
            href={url}
            aria-label={altText}
            id={elementId || null}
            className={classNames('sb-component', 'sb-component-block', 'sb-component-social', className)}
            {...annotations}
        >
            {label && <span className="sr-only">{label}</span>}
            {IconComponent && <IconComponent className="fill-current h-5 w-5" />}
        </Link>
    );
}
