import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import { Link, Action } from '../../atoms';
import ImageBlock from '../../molecules/ImageBlock';
import CloseIcon from '../../svgs/close';
import MenuIcon from '../../svgs/menu';

export default function Header(props) {
    const headerStyles = props.styles?.self || {};
    const headerWidth = headerStyles.width || 'narrow';
    return (
        <header
            className={classNames('sb-component', 'sb-component-header', props.isSticky ? 'sticky top-0 z-10' : 'relative')}
            data-sb-field-path={`${props.annotationPrefix}:header`}
        >
            <div className={classNames(headerStyles.padding || 'py-5 px-4')}>
                <div className={classNames('mx-auto', mapMaxWidthStyles(headerWidth))}>
                    <Link href="#main" className="sr-only">
                        Skip to main content
                    </Link>
                    {headerVariants(props)}
                </div>
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
    const secondaryLinks = props.secondaryLinks || [];
    return (
        <div className="flex items-center relative">
            {(props.logo || (props.title && props.isTitleVisible)) && <div className="mr-8">{siteLogoLink(props)}</div>}
            {primaryLinks.length > 0 && (
                <ul className="hidden lg:flex lg:items-center mr-8 space-x-8" data-sb-field-path=".primaryLinks">
                    {listOfLinks(primaryLinks)}
                </ul>
            )}
            {secondaryLinks.length > 0 && (
                <ul className="hidden lg:flex lg:items-center ml-auto space-x-8" data-sb-field-path=".secondaryLinks">
                    {listOfLinks(secondaryLinks)}
                </ul>
            )}
            {(primaryLinks.length > 0 || secondaryLinks.length > 0) && <MobileMenu {...props} />}
        </div>
    );
}

function headerVariantB(props) {
    const primaryLinks = props.primaryLinks || [];
    const secondaryLinks = props.secondaryLinks || [];
    return (
        <div className="flex items-center relative">
            {(props.logo || (props.title && props.isTitleVisible)) && <div className="mr-8">{siteLogoLink(props)}</div>}
            {primaryLinks.length > 0 && (
                <ul
                    className="hidden lg:flex lg:items-center space-x-8 absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-auto"
                    data-sb-field-path=".primaryLinks"
                >
                    {listOfLinks(primaryLinks)}
                </ul>
            )}
            {secondaryLinks.length > 0 && (
                <ul className="hidden lg:flex lg:items-center ml-auto space-x-8" data-sb-field-path=".secondaryLinks">
                    {listOfLinks(secondaryLinks)}
                </ul>
            )}
            {(primaryLinks.length > 0 || secondaryLinks.length > 0) && <MobileMenu {...props} />}
        </div>
    );
}

function headerVariantC(props) {
    const primaryLinks = props.primaryLinks || [];
    const secondaryLinks = props.secondaryLinks || [];
    return (
        <div className="flex items-center relative">
            {(props.logo || (props.title && props.isTitleVisible)) && <div className="mr-8">{siteLogoLink(props)}</div>}
            {primaryLinks.length > 0 && (
                <ul className="hidden lg:flex lg:items-center ml-auto space-x-8" data-sb-field-path=".primaryLinks">
                    {listOfLinks(primaryLinks)}
                </ul>
            )}
            {secondaryLinks.length > 0 && (
                <ul
                    className={classNames('hidden', 'lg:flex', 'lg:items-center', 'space-x-8', primaryLinks.length > 0 ? 'ml-8' : 'ml-auto')}
                    data-sb-field-path=".secondaryLinks"
                >
                    {listOfLinks(secondaryLinks)}
                </ul>
            )}
            {(primaryLinks.length > 0 || secondaryLinks.length > 0) && <MobileMenu {...props} />}
        </div>
    );
}

function MobileMenu(props) {
    const primaryLinks = props.primaryLinks || [];
    const secondaryLinks = props.secondaryLinks || [];
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
                    {secondaryLinks.length > 0 && (
                        <ul className="mb-10 space-y-5" data-sb-field-path=".secondaryLinks">
                            {listOfLinks(secondaryLinks, true)}
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
        <li key={index}>
            <Action {...link} className={classNames(inMobileMenu && link.type === 'Button' ? 'w-full' : '')} data-sb-field-path={`.${index}`} />
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
