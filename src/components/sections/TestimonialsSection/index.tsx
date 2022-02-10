import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import Section from '../Section';
import ImageBlock from '../../molecules/ImageBlock';

export default function TestimonialsSection(props) {
    const { type, elementId, colors, variant, title, subtitle, testimonials, styles = {}, 'data-sb-field-path': fieldPath } = props;
    return (
        <Section type={type} elementId={elementId} colors={colors} styles={styles.self} data-sb-field-path={fieldPath}>
            {title && (
                <h2 className={classNames(styles.title ? mapStyles(styles.title) : null)} data-sb-field-path=".title">
                    {title}
                </h2>
            )}
            {subtitle && (
                <p
                    className={classNames('text-lg', 'sm:text-xl', styles.subtitle ? mapStyles(styles.subtitle) : null, { 'mt-6': title })}
                    data-sb-field-path=".subtitle"
                >
                    {subtitle}
                </p>
            )}
            <TestimonialVariants variant={variant} testimonials={testimonials} hasTopMargin={!!(title || subtitle)} />
        </Section>
    );
}

function TestimonialVariants(props) {
    const { variant = 'variant-a', ...rest } = props;
    switch (variant) {
        case 'variant-a':
            return <TestimonialsVariantA {...rest} />;
        case 'variant-b':
            return <TestimonialsVariantB {...rest} />;
        case 'variant-c':
            return <TestimonialsVariantC {...rest} />;
        default:
            return null;
    }
}

function TestimonialsVariantA(props) {
    const { testimonials = [], hasTopMargin } = props;
    if (testimonials.length === 0) {
        return null;
    }
    return (
        <div className={classNames('grid', 'md:grid-cols-2', 'gap-y-16', 'md:gap-y-20', { 'mt-16 sm:mt-20': hasTopMargin })} data-sb-field-path=".testimonials">
            {testimonials.map((testimonial, index) => (
                <blockquote key={index} className={classNames(index % 2 === 0 ? 'md:pr-12' : 'md:border-l md:pl-12')} data-sb-field-path={`.${index}`}>
                    {testimonial.image && (
                        <div className="mb-8">
                            <ImageBlock {...testimonial.image} className="w-24 h-24 object-cover rounded-full" data-sb-field-path=".image" />
                        </div>
                    )}
                    {testimonial.quote && (
                        <Markdown
                            options={{ forceBlock: true, forceWrapper: true }}
                            className="sb-markdown text-3xl sm:text-4xl sm:leading-tight"
                            data-sb-field-path=".quote"
                        >
                            {testimonial.quote}
                        </Markdown>
                    )}
                    {(testimonial.name || testimonial.title) && (
                        <footer className="mt-8 md:mt-12">
                            {testimonial.name && (
                                <div
                                    className={classNames('text-lg', testimonial.styles?.name ? mapStyles(testimonial.styles?.name) : null)}
                                    data-sb-field-path=".name"
                                >
                                    {testimonial.name}
                                </div>
                            )}
                            {testimonial.title && (
                                <div
                                    className={classNames('text-lg', testimonial.styles?.title ? mapStyles(testimonial.styles?.title) : null)}
                                    data-sb-field-path=".title"
                                >
                                    {testimonial.title}
                                </div>
                            )}
                        </footer>
                    )}
                </blockquote>
            ))}
        </div>
    );
}

function TestimonialsVariantB(props) {
    const { testimonials = [], hasTopMargin } = props;
    if (testimonials.length === 0) {
        return null;
    }
    return (
        <div className={classNames('space-y-16', 'sm:space-y-24', { 'mt-16 sm:mt-20': hasTopMargin })} data-sb-field-path=".testimonials">
            {testimonials.map((testimonial, index) => (
                <blockquote key={index} data-sb-field-path={`.${index}`}>
                    {testimonial.quote && (
                        <Markdown
                            options={{ forceBlock: true, forceWrapper: true }}
                            className="sb-markdown text-3xl sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-tight"
                            data-sb-field-path=".quote"
                        >
                            {testimonial.quote}
                        </Markdown>
                    )}
                    {(testimonial.name || testimonial.title || testimonial.image) && (
                        <footer className="flex flex-wrap items-center mt-6 md:mt-8">
                            {testimonial.image && (
                                <div className="flex-shrink-0 mt-4 mr-6">
                                    <ImageBlock
                                        {...testimonial.image}
                                        className="w-12 h-12 sm:w-20 sm:h-20 object-cover rounded-full"
                                        data-sb-field-path=".image"
                                    />
                                </div>
                            )}
                            {(testimonial.name || testimonial.title) && (
                                <div className="flex-grow mt-4">
                                    {testimonial.name && (
                                        <div
                                            className={classNames('text-lg', testimonial.styles?.name ? mapStyles(testimonial.styles?.name) : null)}
                                            data-sb-field-path=".name"
                                        >
                                            {testimonial.name}
                                        </div>
                                    )}
                                    {testimonial.title && (
                                        <div
                                            className={classNames('text-lg', testimonial.styles?.title ? mapStyles(testimonial.styles?.title) : null)}
                                            data-sb-field-path=".title"
                                        >
                                            {testimonial.title}
                                        </div>
                                    )}
                                </div>
                            )}
                        </footer>
                    )}
                </blockquote>
            ))}
        </div>
    );
}

function TestimonialsVariantC(props) {
    const { testimonials = [], hasTopMargin } = props;
    if (testimonials.length === 0) {
        return null;
    }
    return (
        <div className={classNames('space-y-16', 'sm:space-y-24', { 'mt-16 sm:mt-20': hasTopMargin })} data-sb-field-path=".testimonials">
            {testimonials.map((testimonial, index) => (
                <blockquote
                    key={index}
                    className={classNames('flex', 'flex-col', 'md:items-center', index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse')}
                    data-sb-field-path={`.${index}`}
                >
                    {testimonial.image && (
                        <div className={classNames('flex-shrink-0', 'max-w-lg', 'mb-8', 'md:mb-0', 'md:w-2/5', index % 2 === 0 ? 'md:mr-8' : 'md:ml-8')}>
                            <ImageBlock {...testimonial.image} className="w-full" data-sb-field-path=".image" />
                        </div>
                    )}
                    <div className="flex-grow">
                        {testimonial.quote && (
                            <Markdown
                                options={{ forceBlock: true, forceWrapper: true }}
                                className="sb-markdown text-3xl sm:text-4xl sm:leading-tight"
                                data-sb-field-path=".quote"
                            >
                                {testimonial.quote}
                            </Markdown>
                        )}
                        {(testimonial.name || testimonial.title) && (
                            <footer className="flex flex-wrap items-center mt-6 md:mt-8">
                                {(testimonial.name || testimonial.title) && (
                                    <div className="flex-grow mt-4">
                                        {testimonial.name && (
                                            <div
                                                className={classNames('text-lg', testimonial.styles?.name ? mapStyles(testimonial.styles?.name) : null)}
                                                data-sb-field-path=".name"
                                            >
                                                {testimonial.name}
                                            </div>
                                        )}
                                        {testimonial.title && (
                                            <div
                                                className={classNames('text-lg', testimonial.styles?.title ? mapStyles(testimonial.styles?.title) : null)}
                                                data-sb-field-path=".title"
                                            >
                                                {testimonial.title}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </footer>
                        )}
                    </div>
                </blockquote>
            ))}
        </div>
    );
}
