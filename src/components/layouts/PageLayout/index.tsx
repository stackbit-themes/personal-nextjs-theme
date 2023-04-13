import * as React from 'react';

import BaseLayout from '../BaseLayout';
import { DynamicComponent } from '../../components-registry';

export default function PageLayout(props) {
    const { page, site } = props;
    const { title, sections = [] } = page;

    return (
        <BaseLayout page={page} site={site}>
            <main id="main" className="sb-layout sb-page-layout">
                {title && <h1 className="sr-only">{title}</h1>}
                {sections.length > 0 && (
                    <div>
                        {sections.map((section, index) => {
                            return <DynamicComponent key={index} {...section} />;
                        })}
                    </div>
                )}
            </main>
        </BaseLayout>
    );
}
