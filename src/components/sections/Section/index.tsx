import * as React from 'react';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';

type SectionProps = React.PropsWithChildren<{
    type?: string;
    elementId?: string;
    colors?: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e' | 'colors-f';
    backgroundSize?: 'full' | 'inset';
    styles?: any;
    'data-sb-field-path'?: string;
}>;

export default function Section(props: SectionProps) {
    const { backgroundSize = 'full', ...rest } = props;
    if (backgroundSize === 'inset') {
        return <SectionInset {...rest} />;
    } else {
        return <SectionFullWidth {...rest} />;
    }
}

function SectionInset(props: SectionProps) {
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
                    mapStyles({ width: styles.width ?? 'wide' }),
                    mapStyles({ height: styles.height ?? 'auto' }),
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

function SectionFullWidth(props: SectionProps) {
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
                mapStyles({ height: styles.height ?? 'auto' }),
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
                <div className={classNames('relative', 'w-full', mapStyles({ width: styles.width ?? 'wide' }))}>{children}</div>
            </div>
        </div>
    );
}