import * as React from 'react';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';

export default function DividerSection(props) {
    const cssId = props.elementId || null;
    const styles = props.styles || {};
    const sectionWidth = styles.self?.width || 'wide';
    const sectionJustifyContent = styles.self?.justifyContent || 'center';
    return (
        <div
            id={cssId}
            {...getDataAttrs(props)}
            className={classNames(
                'sb-component',
                'sb-component-section',
                'sb-component-divider-section',
                'w-full',
                'flex',
                mapStyles({ justifyContent: sectionJustifyContent }),
                styles.self?.padding || 'py-12 px-4'
            )}
        >
            <div
                className={classNames(
                    'h-0',
                    'w-full',
                    mapMaxWidthStyles(sectionWidth),
                    'border-t',
                    'border-current',
                    styles.self?.borderStyle ? mapStyles({ borderStyle: styles.self?.borderStyle }) : null
                )}
                style={{
                    borderTopWidth: styles.self?.borderWidth ? `${styles.self?.borderWidth}px` : '1px'
                }}
            ></div>
        </div>
    );
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
