import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import { Action } from '../../atoms';

export default function Footer(props) {
    const footerStyles = props.styles?.self || {};
    const footerWidth = footerStyles.width || 'narrow';
    const primaryLinks = props.primaryLinks || [];
    return (
        <footer
            className={classNames('sb-component', 'sb-component-footer', footerStyles.padding || 'py-16 px-4')}
            data-sb-field-path={`${props.annotationPrefix}:footer`}
        >
            <div className={classNames('border-t-2', 'border-current', 'mx-auto', mapMaxWidthStyles(footerWidth))}>
                <div className="flex flex-col md:flex-row md:flex-wrap">
                    {primaryLinks.length > 0 && (
                        <div className={classNames('mt-6', props.contacts ? 'w-full' : 'md:mr-auto')}>
                            <ul className="flex flex-wrap max-w-5xl text-lg" data-sb-field-path=".primaryLinks">
                                {primaryLinks.map((link, index) => (
                                    <li key={index} className="mr-8 mt-2">
                                        <Action {...link} data-sb-field-path={`.${index}`} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {props.contacts && (
                        <Contacts
                            {...props.contacts}
                            className={classNames(
                                'text-lg',
                                'space-y-4',
                                'md:max-w-3xl',
                                'md:mr-auto',
                                'md:pr-12',
                                primaryLinks.length > 0 ? 'mt-12 md:mt-32' : 'mt-8'
                            )}
                        />
                    )}
                    {props.copyrightText && (
                        <div className={classNames('mt-8', primaryLinks.length > 0 || props.contacts ? 'md:self-end' : null)}>
                            <Markdown
                                options={{ forceInline: true, forceWrapper: true, wrapper: 'p' }}
                                className="sb-markdown text-sm tracking-widest uppercase"
                                data-sb-field-path=".copyrightText"
                            >
                                {props.copyrightText}
                            </Markdown>
                        </div>
                    )}
                </div>
            </div>
        </footer>
    );
}

function Contacts(props) {
    const cssClasses = props.className || null;
    return (
        <div className={cssClasses} data-sb-field-path=".contacts">
            {props.phoneNumber && (
                <p>
                    <a
                        className="underline hover:no-underline"
                        href={`tel:${props.phoneNumber}`}
                        aria-label={props.phoneAltText}
                        data-sb-field-path=".phoneNumber .phoneNumber#@href .phoneAltText#@title"
                    >
                        {props.phoneNumber}
                    </a>
                </p>
            )}
            {props.email && (
                <p>
                    <a
                        className="underline hover:no-underline"
                        href={`mailto:${props.email}`}
                        aria-label={props.emailAltText}
                        data-sb-field-path=".email .email#@href .emailAltText#@title"
                    >
                        {props.email}
                    </a>
                </p>
            )}
            {props.address && (
                <p>
                    <a
                        className="underline hover:no-underline"
                        href={`https://www.google.com/maps/search/${encodeURIComponent(props.address)}`}
                        aria-label={props.addressAltText}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-sb-field-path=".address .address#@href .addressAltText#@title"
                    >
                        {props.address}
                    </a>
                </p>
            )}
        </div>
    );
}

function mapMaxWidthStyles(width) {
    switch (width) {
        case 'narrow':
            return 'max-w-7xl';
        case 'wide':
            return 'max-w-screen-2xl';
        case 'full':
            return 'max-w-full';
    }
    return null;
}
