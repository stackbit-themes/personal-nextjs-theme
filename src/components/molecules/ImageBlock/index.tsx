import * as React from 'react';
import classNames from 'classnames';

export default function ImageBlock(props) {
    const { elementId, className, url, altText = '', 'data-sb-field-path': fieldPath } = props;
    if (!url) {
        return null;
    }
    const annotations = fieldPath
        ? { 'data-sb-field-path': [fieldPath, `${fieldPath}.url#@src`, `${fieldPath}.altText#@alt`, `${fieldPath}.elementId#@id`].join(' ').trim() }
        : {};

    return (
        <img
            id={elementId || null}
            className={classNames('sb-component', 'sb-component-block', 'sb-component-image-block', className)}
            src={url}
            alt={altText}
            {...annotations}
        />
    );
}
