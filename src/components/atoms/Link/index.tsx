import * as React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { Annotated } from '@/components/Annotated';

type LinkProps = React.PropsWithChildren &
    NextLinkProps &
    React.AnchorHTMLAttributes<HTMLAnchorElement> & {
        content?: any; // TODO
    };

const Link: React.FC<LinkProps> = ({ children, content, href, ...other }) => {
    // Pass Any internal link to Next.js Link, for anything else, use <a> tag
    const internal = /^\/(?!\/)/.test(href);
    const linkTag = internal ? (
        <NextLink href={href} {...other}>
            {children}
        </NextLink>
    ) : (
        <a href={href} {...other}>
            {children}
        </a>
    );

    return content ? <Annotated content={content}>{linkTag}</Annotated> : linkTag;
};

export default Link;
