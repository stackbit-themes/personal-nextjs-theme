import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import { Link, Action, Social } from '../../atoms';
import ImageBlock from '../../molecules/ImageBlock';
import CloseIcon from '../../svgs/close';
import MenuIcon from '../../svgs/menu';

export default function Header(props) {
    const headerStyles = props.styles?.self || {};
    const headerWidth = headerStyles.width || 'narrow';
    return (
        <header
            className={classNames('sb-component', 'sb-component-header', props.isSticky ? 'sticky top-0 z-10' : 'relative', 'border-b', 'border-current')}
            data-sb-field-path={`${props.annotationPrefix}:header`}
        >
            <div
                className={classNames('mx-auto', mapMaxWidthStyles(headerWidth), {
                    'xl:border-l xl:border-r border-current': headerWidth === 'narrow',
                    '2xl:border-l 2xl:border-r border-current': headerWidth === 'wide'
                })}
            >
                <Link href="#main" className="sr-only">
                    Skip to main content
                </Link>
                {headerVariants(props)}
            </div>
        </header>
    );
}

function headerVariants(props) {
    const headerVariant = props.headerVariant || 'variant-a';
    switch (headerVariant) {
        case 'variant-a':
            return headerVariantA(props);
        case 'variant-b':
            return headerVariantB(props);
        case 'variant-c':
            return headerVariantC(props);
    }
    return null;
}

function headerVariantA(props) {
    const primaryLinks = props.primaryLinks || [];
    const socialLinks = props.socialLinks || [];
    return (
        <div className="flex items-stretch relative">
            {(props.logo || (props.title && props.isTitleVisible)) && <div className="border-r border-current p-4">{siteLogoLink(props)}</div>}
            {primaryLinks.length > 0 && (
                <ul className="hidden lg:flex divide-x divide-current border-r border-current" data-sb-field-path=".primaryLinks">
                    {listOfLinks(primaryLinks)}
                </ul>
            )}
            {socialLinks.length > 0 && (
                <ul className="hidden lg:flex border-l border-current ml-auto" data-sb-field-path=".socialLinks">
                    {listOfSocialLinks(socialLinks)}
                </ul>
            )}
            {(primaryLinks.length > 0 || socialLinks.length > 0) && <MobileMenu {...props} />}
        </div>
    );
}

function headerVariantB(props) {
    const primaryLinks = props.primaryLinks || [];
    const socialLinks = props.socialLinks || [];
    return (
        <div className="flex items-stretch relative">
            {(props.logo || (props.title && props.isTitleVisible)) && <div className="border-r border-current p-4">{siteLogoLink(props)}</div>}
            {primaryLinks.length > 0 && (
                <ul className="hidden lg:flex border-l border-current divide-x divide-current ml-auto" data-sb-field-path=".primaryLinks">
                    {listOfLinks(primaryLinks)}
                </ul>
            )}
            {socialLinks.length > 0 && (
                <ul
                    className={classNames('hidden', 'lg:flex', 'border-l', 'border-current', { 'ml-auto': primaryLinks.length === 0 })}
                    data-sb-field-path=".socialLinks"
                >
                    {listOfSocialLinks(socialLinks)}
                </ul>
            )}
            {(primaryLinks.length > 0 || socialLinks.length > 0) && <MobileMenu {...props} />}
        </div>
    );
}

function headerVariantC(props) {
    const primaryLinks = props.primaryLinks || [];
    const socialLinks = props.socialLinks || [];
    return (
        <div className="flex items-stretch relative">
            {(props.logo || (props.title && props.isTitleVisible)) && <div className="border-r border-current p-4">{siteLogoLink(props)}</div>}
            {socialLinks.length > 0 && (
                <ul className="hidden lg:flex border-l border-current ml-auto" data-sb-field-path=".socialLinks">
                    {listOfSocialLinks(socialLinks)}
                </ul>
            )}
            {primaryLinks.length > 0 && (
                <ul
                    className={classNames('hidden', 'lg:flex', 'border-l', 'border-current', 'divide-x', 'divide-current', {
                        'ml-auto': primaryLinks.length === 0
                    })}
                    data-sb-field-path=".primaryLinks"
                >
                    {listOfLinks(primaryLinks)}
                </ul>
            )}
            {(primaryLinks.length > 0 || socialLinks.length > 0) && <MobileMenu {...props} />}
        </div>
    );
}

function MobileMenu(props) {
    const primaryLinks = props.primaryLinks || [];
    const socialLinks = props.socialLinks || [];
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = () => {
            setIsMenuOpen(false);
        };
        router.events.on('routeChangeStart', handleRouteChange);

        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [router.events]);

    return (
        <div className="ml-auto lg:hidden">
            <button aria-label="Open Menu" title="Open Menu" className="p-2 -mr-1 focus:outline-none" onClick={() => setIsMenuOpen(true)}>
                <span className="sr-only">Open Menu</span>
                <MenuIcon className="fill-current h-6 w-6" />
            </button>
            <div className={classNames('fixed', 'inset-0', 'px-4', 'sm:px-8', 'py-5', 'overflow-y-auto', 'z-20', isMenuOpen ? 'block' : 'hidden')}>
                <div className="flex flex-col min-h-full">
                    <div className="flex items-center justify-between mb-10">
                        {(props.logo || (props.title && props.isTitleVisible)) && siteLogoLink(props)}
                        <button aria-label="Close Menu" title="Close Menu" className="p-2 -mr-1 focus:outline-none" onClick={() => setIsMenuOpen(false)}>
                            <CloseIcon className="fill-current h-6 w-6" />
                        </button>
                    </div>
                    {primaryLinks.length > 0 && (
                        <ul className="flex-grow mb-10 space-y-6" data-sb-field-path=".primaryLinks">
                            {listOfLinks(primaryLinks, true)}
                        </ul>
                    )}
                    {socialLinks.length > 0 && (
                        <ul className="mb-10 space-y-5" data-sb-field-path=".socialLinks">
                            {listOfSocialLinks(socialLinks, true)}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

function siteLogoLink(props) {
    return (
        <Link href="/" aria-label={props.title} className="sb-header-logo flex items-center">
            {props.logo && <ImageBlock {...props.logo} className={classNames('max-h-12', { 'mr-2': props.isTitleVisible })} data-sb-field-path=".logo" />}
            {props.title && props.isTitleVisible && (
                <span className="text-2xl uppercase font-medium" data-sb-field-path=".title">
                    {props.title}
                </span>
            )}
        </Link>
    );
}

function listOfLinks(links, inMobileMenu = false) {
    return links.map((link, index) => (
        <li key={index} className={classNames(inMobileMenu ? 'w-full' : 'inline-flex items-stretch')}>
            <Action {...link} className={classNames(inMobileMenu ? 'w-full' : 'p-4')} data-sb-field-path={`.${index}`} />
        </li>
    ));
}

function listOfSocialLinks(links, inMobileMenu = false) {
    return links.map((link, index) => (
        <li key={index} className={classNames(inMobileMenu ? '' : 'inline-flex items-stretch')}>
            <Social {...link} className={classNames(inMobileMenu ? 'w-full' : 'p-4')} data-sb-field-path={`.${index}`} />
        </li>
    ));
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
