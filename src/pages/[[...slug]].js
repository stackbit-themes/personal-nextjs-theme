import React from 'react';
import { DynamicComponent } from '../components/components-registry';
import { resolveStaticProps } from '../utils/static-props-resolvers';
import { allContent } from '../utils/content';

function Page({ page, site }) {
    return <DynamicComponent page={page} site={site} forContent={page} />;
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
