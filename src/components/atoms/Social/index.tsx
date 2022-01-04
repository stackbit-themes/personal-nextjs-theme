import * as React from 'react';
import classNames from 'classnames';
import Link from '../Link';
import Facebook from '../../svgs/facebook';
import GitHub from '../../svgs/github';
import Instagram from '../../svgs/instagram';
import LinkedIn from '../../svgs/linkedin';
import Reddit from '../../svgs/reddit';
import Twitter from '../../svgs/twitter';
import Vimeo from '../../svgs/vimeo';
import YouTube from '../../svgs/youtube';

const iconMap = {
    facebook: Facebook,
    github: GitHub,
    instagram: Instagram,
    linkedin: LinkedIn,
    reddit: Reddit,
    twitter: Twitter,
    vimeo: Vimeo,
    youtube: YouTube
};

export default function Social(props) {
    const { label, altText, url } = props;
    const icon = props.icon || 'facebook';
    const IconComponent = iconMap[icon];
    const annotationPrefix = props['data-sb-field-path'] || '';
    const annotations = [
        `${annotationPrefix}`,
        `${annotationPrefix}.url#@href`,
        `${annotationPrefix}.altText#@aria-label`,
        `${annotationPrefix}.elementId#@id`,
        `${annotationPrefix}.label#span[1]`,
        `${annotationPrefix}.icon#svg[1]`
    ];
    const style = props.style || 'link';
    const cssClasses = props.className || null;
    const cssId = props.elementId || null;

    return (
        <Link
            href={url}
            aria-label={altText}
            id={cssId}
            className={classNames('sb-component', 'sb-component-block', 'sb-component-social', cssClasses, {
                'sb-component-social-primary': style === 'primary',
                'sb-component-social-secondary': style === 'secondary'
            })}
            data-sb-field-path={annotations.join(' ').trim()}
        >
            {label && <span className="sr-only">{label}</span>}
            {IconComponent && <IconComponent className="fill-current h-5 w-5" />}
        </Link>
    );
}
