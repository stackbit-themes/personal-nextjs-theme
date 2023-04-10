import React from 'react';
import { getComponent } from '../components/components-registry';
import { resolveStaticProps } from '../utils/static-props-resolvers';
import { allContent } from '../utils/local-content';

function Page(props) {
    const { page, site } = props;
    const { type } = page;

    if (!type) {
        throw new Error(`page has no layout, page '${props.path}'`);
    }
    const PageLayout = getComponent(type);
    if (!PageLayout) {
        throw new Error(`no page layout matching the layout: ${type}`);
    }
    return <PageLayout page={page} site={site} />;
}

export default Page;

export function getStaticPaths() {
    const data = allContent();
    const paths = data.pages.map((page) => page.__metadata?.urlPath);
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const data = allContent();
    const urlPath = '/' + (params.slug || []).join('/');
    const props = await resolveStaticProps(urlPath, data);
    return { props };
}
