import * as React from 'react';
import Head from 'next/head';
import classNames from 'classnames';

import Header from '../../sections/Header';
import Footer from '../../sections/Footer';

import { BackgroundImage } from '../../atoms';

export default function DefaultBaseLayout(props) {
    const { page, site } = props;
    const siteMeta = site?.__metadata || {};
    const pageMeta = page?.__metadata || {};
    const colors = page?.colors || 'colors-a';

    return (
        <div className={classNames('sb-page', pageMeta.pageCssClasses, colors)} data-sb-object-id={pageMeta.id}>
            {page?.backgroundImage && <BackgroundImage {...page?.backgroundImage} />}
            <div className="sb-base sb-default-base-layout relative">
                <Head>
                    <title>{page.title}</title>
                    <meta name="description" content="Stackbit Theme" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    {site.favicon && <link rel="icon" href={site.favicon} />}
                </Head>
                {site.header && <Header {...site.header} annotationPrefix={siteMeta.id} />}
                {props.children}
                {site.footer && <Footer {...site.footer} annotationPrefix={siteMeta.id} />}
            </div>
        </div>
    );
}
