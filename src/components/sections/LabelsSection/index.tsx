import * as React from 'react';
import classNames from 'classnames';

import { Link } from '../../atoms';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import Section from '../Section';

export default function LabelsSection(props) {
    const { type, elementId, colors, title, subtitle, items = [], styles = {}, 'data-sb-field-path': fieldPath } = props;
    return (
        <Section type={type} elementId={elementId} colors={colors} styles={styles.self} data-sb-field-path={fieldPath}>
            {title && (
                <h2 className={classNames(styles.title ? mapStyles(styles.title) : null)} data-sb-field-path=".title">
                    {title}
                </h2>
            )}
            {subtitle && (
                <p
                    className={classNames('text-lg', 'sm:text-xl', styles.subtitle ? mapStyles(styles.subtitle) : null, {
                        'mt-6': title
                    })}
                    data-sb-field-path=".subtitle"
                >
                    {subtitle}
                </p>
            )}
            {items.length > 0 && (
                <div
                    className={classNames('flex', 'flex-wrap', {
                        'mt-12 lg:mt-16': title || subtitle
                    })}
                    data-sb-field-path=".items"
                >
                    {items.map((item, index) => (
                        <LabelItem key={index} {...item} data-sb-field-path={`.${index}`} />
                    ))}
                </div>
            )}
        </Section>
    );
}

function LabelItem(props) {
    const { label, url, 'data-sb-field-path': fieldPath } = props;
    if (!label) {
        return null;
    }
    return url ? (
        <Link
            href={url}
            className="sb-component sb-component-block sb-component-button sb-component-button-secondary mr-6 mb-6"
            data-sb-field-path={`${fieldPath} ${fieldPath}.url#@href ${fieldPath}.label#span[1]`}
        >
            <span>{label}</span>
        </Link>
    ) : (
        <div
            className="sb-component sb-component-block sb-component-button sb-component-button-secondary sb-component-button-no-hover mr-6 mb-6"
            data-sb-field-path={`${fieldPath} ${fieldPath}.label#span[1]`}
        >
            <span>{label}</span>
        </div>
    );
}
