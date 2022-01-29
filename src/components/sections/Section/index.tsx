import * as React from 'react';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';

export default function Section(props) {
    const { backgroundSize = 'full', ...rest } = props;
    if (backgroundSize === 'inset') {
        return <SectionInset {...rest} />;
    } else {
        return <SectionFullWidth {...rest} />;
    }
}

function SectionInset(props) {
    const { type, elementId, colors = 'colors-f', styles = {}, children, 'data-sb-field-path': fieldPath } = props;
    const classSuffix = type && type.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
    return (
        <div
            id={elementId || null}
            className={classNames(
                'sb-component',
                'sb-component-section',
                classSuffix && `sb-component-${classSuffix}`,
                'flex',
                mapStyles({ justifyContent: styles.justifyContent ?? 'center' }),
                styles.margin
            )}
            data-sb-field-path={fieldPath}
        >
            <div
                className={classNames(
                    colors,
                    'flex',
                    'flex-col',
                    'justify-center',
                    'relative',
                    'w-full',
                    mapMaxWidthStyles(styles.width ?? 'wide'),
                    mapMinHeightStyles(styles.height ?? 'auto'),
                    styles.padding ?? 'py-12 px-4',
                    styles.borderColor,
                    styles.borderStyle ? mapStyles({ borderStyle: styles.borderStyle }) : null,
                    styles.borderRadius ? mapStyles({ borderRadius: styles.borderRadius }) : null,
                    styles.boxShadow ? mapStyles({ boxShadow: styles.boxShadow }) : null
                )}
                style={{
                    borderWidth: styles.borderWidth ? `${styles.borderWidth}px` : null
                }}
            >
                <div className="relative w-full">{children}</div>
            </div>
        </div>
    );
}

function SectionFullWidth(props) {
    const { type, elementId, colors = 'colors-f', styles = {}, children, 'data-sb-field-path': fieldPath } = props;
    const classSuffix = type && type.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
    return (
        <div
            id={elementId || null}
            className={classNames(
                'sb-component',
                'sb-component-section',
                classSuffix && `sb-component-${classSuffix}`,
                colors,
                'flex',
                'flex-col',
                'justify-center',
                mapMinHeightStyles(styles.height ?? 'auto'),
                styles.margin,
                styles.padding ?? 'py-12 px-4',
                styles.borderColor,
                styles.borderStyle ? mapStyles({ borderStyle: styles.borderStyle }) : null,
                styles.borderRadius ? mapStyles({ borderRadius: styles.borderRadius }) : null,
                styles.boxShadow ? mapStyles({ boxShadow: styles.boxShadow }) : null
            )}
            style={{
                borderWidth: styles.borderWidth ? `${styles.borderWidth}px` : null
            }}
            data-sb-field-path={fieldPath}
        >
            <div className={classNames('flex', 'w-full', mapStyles({ justifyContent: styles.justifyContent ?? 'center' }))}>
                <div className={classNames('relative', 'w-full', mapMaxWidthStyles(styles.width ?? 'wide'))}>{children}</div>
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
