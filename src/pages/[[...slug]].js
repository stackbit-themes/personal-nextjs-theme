import React from 'react';
import { getComponent } from '../components/components-registry';
import { resolveStaticProps } from '../utils/static-props-resolvers';
import { allContent } from '../utils/local-content';

function Page(props) {
    const { page, site } = props;
    const { modelName, urlPath } = page.__metadata;
    if (!modelName) {
        throw new Error(`page has no type, page: ${urlPath}`);
    }
    const PageLayout = getComponent(modelName);
    if (!PageLayout) {
        throw new Error(`no page type matching the page model: ${modelName}`);
    }
    return <PageLayout page={page} site={site} />;
}

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

export default Page;
