import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import { getComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import Section from '../Section';
import FormBlock from '../../molecules/FormBlock';

export default function ContactSection(props) {
    const { type, elementId, colors, backgroundSize, title, text, form, media, styles = {}, 'data-sb-field-path': fieldPath } = props;
    const sectionFlexDirection = styles.self?.flexDirection ?? 'row';
    const sectionAlignItems = styles.self?.alignItems ?? 'center';
    return (
        <Section type={type} elementId={elementId} colors={colors} backgroundSize={backgroundSize} styles={styles.self} data-sb-field-path={fieldPath}>
            <div
                className={classNames('flex', mapFlexDirectionStyles(sectionFlexDirection), mapStyles({ alignItems: sectionAlignItems }), 'space-y-8', {
                    'lg:space-y-0 lg:space-x-8': sectionFlexDirection === 'row',
                    'space-y-reverse lg:space-y-0 lg:space-x-8 lg:space-x-reverse': sectionFlexDirection === 'row-reverse',
                    'space-y-reverse': sectionFlexDirection === 'col-reverse'
                })}
            >
                <div className="flex-1 w-full">
                    <ContactBody title={title} text={text} styles={styles} />
                    {form && (
                        <div className={classNames('sb-contact-section-form', { 'mt-12': title || text })}>
                            <FormBlock {...form} className="inline-block w-full" data-sb-field-path=".form" />
                        </div>
                    )}
                </div>
                {media && (
                    <div className="flex-1 w-full">
                        <ContactMedia media={media} />
                    </div>
                )}
            </div>
        </Section>
    );
}

function ContactMedia({ media }) {
    const mediaType = media.type;
    if (!mediaType) {
        throw new Error(`contact section media does not have the 'type' property`);
    }
    const Media = getComponent(mediaType);
    if (!Media) {
        throw new Error(`no component matching the contact section media type: ${mediaType}`);
    }
    return <Media {...media} data-sb-field-path=".media" />;
}

function ContactBody(props) {
    return (
        <>
            {props.title && (
                <h2 className={classNames(props.styles?.title ? mapStyles(props.styles?.title) : null)} data-sb-field-path=".title">
                    {props.title}
                </h2>
            )}
            {props.text && (
                <Markdown
                    options={{ forceBlock: true, forceWrapper: true }}
                    className={classNames('sb-markdown', props.styles?.text ? mapStyles(props.styles?.text) : null, { 'mt-4': props.title })}
                    data-sb-field-path=".text"
                >
                    {props.text}
                </Markdown>
            )}
        </>
    );
}

function mapFlexDirectionStyles(flexDirection?: 'row' | 'row-reverse' | 'col' | 'col-reverse') {
    switch (flexDirection) {
        case 'row':
            return ['flex-col', 'lg:flex-row'];
        case 'row-reverse':
            return ['flex-col-reverse', 'lg:flex-row-reverse'];
        case 'col':
            return ['flex-col'];
        case 'col-reverse':
            return ['flex-col-reverse'];
        default:
            return null;
    }
}
