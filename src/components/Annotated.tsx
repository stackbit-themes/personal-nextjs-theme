import type { PropsWithChildren } from 'react';
import { isDev } from '@/utils/common';
import { ContentObject, HasAnnotation, fieldPathAttr, objectIdAttr } from '@/types';

type AnnotatedProps = PropsWithChildren & {
    content: ContentObject;
};

export const Annotated: React.FC<AnnotatedProps> = (props) => {
    const { children } = props;
    const baseResult = <>{children}</>;
    if (!isDev) {
        return baseResult;
    } else if (!props.content) {
        console.warn('Annotated: no content property. Props:', props);
        return baseResult;
    } else if (!children || (Array.isArray(children) && children.length !== 1)) {
        console.log('Annotated: provide a single child. Given:', children);
        return baseResult;
    }

    const annotation = annotationFromProps(props.content);
    if (annotation) {
        return <AnnotatedWrapperTag annotation={annotation}>{props.children}</AnnotatedWrapperTag>;
    } else {
        console.warn('Annotated: no annotation in content. Props:', props);
        return baseResult;
    }
};

export function annotationFromProps(props: HasAnnotation) {
    return props?.[objectIdAttr] ? { [objectIdAttr]: props[objectIdAttr] } : props?.[fieldPathAttr] ? { [fieldPathAttr]: props[fieldPathAttr] } : undefined;
}

const AnnotatedWrapperTag: React.FC<PropsWithChildren & { annotation: HasAnnotation }> = ({ annotation, children }) => {
    const fieldPath = annotation[fieldPathAttr];
    if (fieldPath) annotation = { [fieldPathAttr]: fieldPath + '#*[1]' };
    return <data {...annotation}>{children}</data>;
};
