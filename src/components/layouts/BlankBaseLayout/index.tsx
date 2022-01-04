import * as React from 'react';
import Head from 'next/head';
import classNames from 'classnames';

import { BackgroundImage } from '../../atoms';

export default function BlankBaseLayout(props) {
    const { page, site } = props;
    const pageMeta = page?.__metadata || {};
    const colors = page?.colors || 'colors-a';
    return (
        <div className={classNames('sb-page', pageMeta.pageCssClasses, colors)} data-sb-object-id={pageMeta.id}>
            {page?.backgroundImage && <BackgroundImage {...page?.backgroundImage} />}
            <Head>
                <title>{page.title}</title>
                <meta name="description" content="Stackbit Theme" />
                {site.favicon && <link rel="icon" href={site.favicon} />}
            </Head>
            {props.children}
        </div>
    );
}
