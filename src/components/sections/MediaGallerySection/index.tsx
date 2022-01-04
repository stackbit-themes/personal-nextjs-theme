import * as React from 'react';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import ImageBlock from '../../molecules/ImageBlock';

type BaseSectionStyle = {
    self: {
        height?: string;
        width?: string;
        justifyContent?: string;
        margin?: string | string[];
        padding?: string | string[];
        borderRadius?: string;
        borderWidth?: number;
        borderStyle?: string;
        borderColor?: string;
    };
};

type MediaGalleryStyle = {
    title: {
        fontWeight?: number;
        fontStyle?: string;
        textAlign?: string;
    };
    subtitle: {
        fontWeight?: number;
        fontStyle?: string;
        textAlign?: string;
    };
};

type BaseSectionComponentProps = {
    type: string;
    elementId: string;
    styles?: BaseSectionStyle & MediaGalleryStyle;
};

type Image = {
    url: string;
    altText: string;
    caption: string;
};

export type MediaGallerySectionProps = BaseSectionComponentProps & {
    title?: string;
    subtitle?: string;
    images?: Image[];
    spacing?: number;
    columns?: number;
    aspectRatio?: string;
    showCaption: boolean;
    enableHover: boolean;
};

export default function MediaGallerySection(props: MediaGallerySectionProps) {
    const cssId = props.elementId || null;
    const sectionStyles = props.styles?.self;
    const sectionWidth = sectionStyles?.width || 'wide';
    const sectionHeight = sectionStyles?.height || 'auto';
    const sectionJustifyContent = sectionStyles?.justifyContent || 'center';
    return (
        <div
            id={cssId}
            {...getDataAttrs(props)}
            className={classNames(
                'sb-component',
                'sb-component-section',
                'sb-component-media-gallery-section',
                'flex',
                'flex-col',
                'justify-center',
                mapMinHeightStyles(sectionHeight),
                sectionStyles?.margin,
                sectionStyles?.padding || 'py-12 px-4',
                sectionStyles?.borderColor,
                sectionStyles?.borderRadius ? mapStyles({ borderRadius: sectionStyles?.borderRadius }) : null,
                sectionStyles?.borderStyle ? mapStyles({ borderStyle: sectionStyles?.borderStyle }) : 'border-none'
            )}
            style={{
                borderWidth: sectionStyles?.borderWidth ? `${sectionStyles?.borderWidth}px` : null
            }}
        >
            <div className={classNames('flex', 'w-full', mapStyles({ justifyContent: sectionJustifyContent }))}>
                <div className={classNames('w-full', mapMaxWidthStyles(sectionWidth))}>
                    <MediaGalleryHeader {...props} />
                    <MediaGalleryImageGrid {...props} />
                </div>
            </div>
        </div>
    );
}

function MediaGalleryHeader(props: MediaGallerySectionProps) {
    if (!props.title && !props.subtitle) {
        return null;
    }
    const styles = props.styles;

    return (
        <div>
            {props.title && (
                <h2 className={classNames(styles?.title ? mapStyles(styles.title) : null)} data-sb-field-path=".title">
                    {props.title}
                </h2>
            )}
            {props.subtitle && (
                <p
                    className={classNames('text-lg', 'sm:text-xl', styles?.subtitle ? mapStyles(styles.subtitle) : null, { 'mt-6': props.title })}
                    data-sb-field-path=".subtitle"
                >
                    {props.subtitle}
                </p>
            )}
        </div>
    );
}

function MediaGalleryImage({ image, enableHover, aspectRatio }: { image: Image; enableHover: boolean; aspectRatio: string }) {
    if (!image) {
        return null;
    }

    return (
        <ImageBlock
            {...image}
            className={classNames('sb-media-gallery-image', 'w-full', {
                'h-full absolute left-0 top-0 object-cover': aspectRatio !== 'auto',
                'transition-transform hover:scale-105': enableHover
            })}
        />
    );
}

function MediaGalleryImageGrid(props: MediaGallerySectionProps) {
    const images = props.images || [];
    if (images.length === 0) {
        return null;
    }
    const columns = props.columns || 4;
    const aspectRatio = props.aspectRatio || '1:1';
    const spacing = props.spacing || props.spacing === 0 ? props.spacing : 16;
    return (
        <div
            className={classNames('grid', 'place-items-center', {
                'mt-12': props.title || props.subtitle,
                'grid-cols-2': columns === 2,
                'grid-cols-2 sm:grid-cols-3': columns === 3,
                'grid-cols-2 sm:grid-cols-4': columns === 4,
                'grid-cols-2 sm:grid-cols-3 md:grid-cols-5': columns === 5,
                'grid-cols-2 sm:grid-cols-4 md:grid-cols-6': columns === 6,
                'grid-cols-2 sm:grid-cols-4 md:grid-cols-7': columns === 7
            })}
            data-sb-field-path=".images"
            style={{
                gap: spacing ? `${spacing}px` : undefined
            }}
        >
            {images.map((image, index) => (
                <figure
                    key={`image-${index}`}
                    data-sb-field-path={`.${index}`}
                    className={classNames('overflow-hidden', 'relative', 'w-full', {
                        'h-0 pt-1/1': aspectRatio === '1:1',
                        'h-0 pt-3/2': aspectRatio === '2:3',
                        'h-0 pt-2/3': aspectRatio === '3:2',
                        'h-0 pt-4/3': aspectRatio === '3:4',
                        'h-0 pt-3/4': aspectRatio === '4:3',
                        'h-0 pt-9/16': aspectRatio === '16:9'
                    })}
                >
                    <MediaGalleryImage image={image} enableHover={props.enableHover} aspectRatio={aspectRatio} />
                    {props.showCaption && image.caption && (
                        <figcaption className="absolute bg-white bg-opacity-70 left-0 mx-2 bottom-2 p-1.5 text-xs pointer-events-none">
                            {image.caption}
                        </figcaption>
                    )}
                </figure>
            ))}
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
        case 'narrow':
            return 'max-w-5xl';
        case 'wide':
            return 'max-w-7xl';
        case 'full':
            return 'max-w-full';
    }
    return null;
}
