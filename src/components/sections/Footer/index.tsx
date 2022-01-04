import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import { Social, Action, Link } from '../../atoms';
import ImageBlock from '../../molecules/ImageBlock';

export default function Footer(props) {
    const footerStyles = props.styles?.self || {};
    const footerWidth = footerStyles.width || 'narrow';
    return (
        <footer
            className={classNames('sb-component', 'sb-component-footer', footerStyles.padding || 'py-16 px-4')}
            data-sb-field-path={`${props.annotationPrefix}:footer`}
        >
            <div className={classNames('border-t', 'border-current', 'mx-auto', 'pt-16', mapMaxWidthStyles(footerWidth))}>{footerVariants(props)}</div>
        </footer>
    );
}

function footerVariants(props) {
    const variant = props.variant || 'variant-a';
    switch (variant) {
        case 'variant-a':
            return footerVariantA(props);
        case 'variant-b':
            return footerVariantB(props);
    }
    return null;
}

function footerVariantA(props) {
    const primaryLinks = props.primaryLinks || [];
    const socialLinks = props.socialLinks || [];
    const legalLinks = props.legalLinks || [];
    return (
        <>
            {(props.logo || props.title || props.text) && (
                <div className="mb-12">
                    <Link href="/" className="sb-footer-logo flex items-center">
                        {props.logo && <ImageBlock {...props.logo} className={classNames('max-h-12', { 'mr-2': props.title })} data-sb-field-path=".logo" />}
                        {props.title && (
                            <span className="text-3xl font-medium" data-sb-field-path=".title">
                                {props.title}
                            </span>
                        )}
                    </Link>
                    {props.text && (
                        <Markdown
                            options={{ forceBlock: true, forceWrapper: true }}
                            className={classNames('sb-markdown', 'max-w-xl', { 'mt-8': props.title || props.logo })}
                            data-sb-field-path=".text"
                        >
                            {props.text}
                        </Markdown>
                    )}
                </div>
            )}
            {(primaryLinks.length > 0 || socialLinks.length > 0 || props.contacts) && (
                <div className="sm:flex sm:justify-between sm:items-end">
                    {primaryLinks.length > 0 && (
                        <div className="mb-6">
                            <ul className="flex flex-col items-start mb-6 space-y-6 text-lg" data-sb-field-path=".primaryLinks">
                                {primaryLinks.map((link, index) => (
                                    <li key={index}>
                                        <Action {...link} data-sb-field-path={`.${index}`} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {(socialLinks.length > 0 || props.contacts) && (
                        <div className="mb-6">
                            {socialLinks.length > 0 && (
                                <ul className="flex items-center mb-6 space-x-10" data-sb-field-path=".socialLinks">
                                    {socialLinks.map((link, index) => (
                                        <li key={index}>
                                            <Social {...link} data-sb-field-path={`.${index}`} />
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {props.contacts && <Contacts {...props.contacts} className="mb-6 space-y-4 text-lg" />}
                        </div>
                    )}
                </div>
            )}
            <div className="border-t-2 border-current flex flex-col-reverse justify-between pt-6 lg:flex-row">
                <Markdown options={{ forceInline: true, forceWrapper: true, wrapper: 'p' }} className="sb-markdown" data-sb-field-path=".copyrightText">
                    {props.copyrightText}
                </Markdown>
                {legalLinks.length > 0 && (
                    <ul className="flex flex-col mb-6 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row" data-sb-field-path=".legalLinks">
                        {legalLinks.map((link, index) => (
                            <li key={index}>
                                <Action {...link} data-sb-field-path={`.${index}`} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}

function footerVariantB(props) {
    const primaryLinks = props.primaryLinks || [];
    const socialLinks = props.socialLinks || [];
    const legalLinks = props.legalLinks || [];
    return (
        <>
            <div className="flex flex-col items-center pb-20 text-center">
                {(props.logo || props.title || props.text) && (
                    <div className="mb-20">
                        <Link href="/" className="sb-footer-logo flex items-center justify-center">
                            {props.logo && (
                                <ImageBlock {...props.logo} className={classNames('max-h-12', { 'mr-2': props.title })} data-sb-field-path=".logo" />
                            )}
                            {props.title && (
                                <span className="text-3xl font-medium" data-sb-field-path=".title">
                                    {props.title}
                                </span>
                            )}
                        </Link>
                        {props.text && (
                            <Markdown
                                options={{ forceBlock: true, forceWrapper: true }}
                                className={classNames('sb-markdown', 'max-w-2xl', { 'mt-8': props.title || props.logo })}
                                data-sb-field-path=".text"
                            >
                                {props.text}
                            </Markdown>
                        )}
                    </div>
                )}
                {primaryLinks.length > 0 && (
                    <div className="w-full max-w-5xl">
                        <ul className="flex flex-wrap justify-evenly mb-6 text-lg" data-sb-field-path=".primaryLinks">
                            {primaryLinks.map((link, index) => (
                                <li key={index} className="mx-4 mb-2">
                                    <Action {...link} data-sb-field-path={`.${index}`} />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {(socialLinks.length > 0 || props.contacts) && (
                    <div className="flex flex-wrap justify-evenly">
                        {socialLinks.length > 0 && (
                            <ul className="flex items-center justify-center mx-4 mb-4" data-sb-field-path=".socialLinks">
                                {socialLinks.map((link, index) => (
                                    <li key={index} className="mx-4 mb-2">
                                        <Social {...link} data-sb-field-path={`.${index}`} />
                                    </li>
                                ))}
                            </ul>
                        )}
                        {props.contacts && <Contacts {...props.contacts} className="flex flex-wrap justify-center mx-4 mb-4" classNameItem="mx-4 mb-2" />}
                    </div>
                )}
            </div>
            <div
                className={classNames(
                    'border-t-2',
                    'border-current',
                    'flex',
                    'flex-col-reverse',
                    'items-center',
                    'pt-8',
                    'lg:flex-row',
                    'lg:items-start',
                    props.copyrightText && legalLinks.length > 0 ? 'lg:justify-between' : 'lg:justify-center'
                )}
            >
                {props.copyrightText && (
                    <Markdown
                        options={{ forceInline: true, forceWrapper: true, wrapper: 'p' }}
                        className={classNames('sb-markdown', { 'mt-6 lg:mt-0': legalLinks.length > 0 })}
                        data-sb-field-path=".copyrightText"
                    >
                        {props.copyrightText}
                    </Markdown>
                )}
                {legalLinks.length > 0 && (
                    <ul className="flex flex-wrap justify-center" data-sb-field-path=".legalLinks">
                        {legalLinks.map((link, index) => (
                            <li key={index} className={classNames('mx-4', 'mb-2', { 'lg:ml-8 lg:mr-0': props.copyrightText })}>
                                <Action {...link} data-sb-field-path={`.${index}`} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}

function Contacts(props) {
    const cssClasses = props.className || null;
    const cssClassesItem = props.classNameItem || null;
    return (
        <div className={cssClasses} data-sb-field-path=".contacts">
            {props.phoneNumber && (
                <p className={cssClassesItem}>
                    <a
                        href={`tel:${props.phoneNumber}`}
                        aria-label={props.phoneAltText}
                        data-sb-field-path=".phoneNumber .phoneNumber#@href .phoneAltText#@title"
                    >
                        {props.phoneNumber}
                    </a>
                </p>
            )}
            {props.email && (
                <p className={cssClassesItem}>
                    <a href={`mailto:${props.email}`} aria-label={props.emailAltText} data-sb-field-path=".email .email#@href .emailAltText#@title">
                        {props.email}
                    </a>
                </p>
            )}
            {props.address && (
                <p className={cssClassesItem}>
                    <a
                        href={`https://www.google.com/maps/search/${props.address}`}
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
