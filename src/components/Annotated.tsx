import type { PropsWithChildren } from 'react';
import { isDev, objectIdAttr, fieldPathAttr } from '@/utils/common';

export type HasAnnotation =
    | {
          [objectIdAttr]?: string;
      }
    | {
          [fieldPathAttr]?: string;
      };

export const Annotated: React.FC<PropsWithChildren<any> & { content: object }> = (props) => {
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

    const annotation = annotationFromProps(props.content as HasAnnotation);
    if (annotation) {
        return (
            <AnnotatedWrapperTag annotation={annotation} wrapperName="Annotated">
                {props.children}
            </AnnotatedWrapperTag>
        );
    } else {
        console.warn('Annotated: no annotation in content. Props:', props);
        return baseResult;
    }
};

export function annotationFromProps(props: HasAnnotation) {
    return props?.[objectIdAttr] ? { [objectIdAttr]: props[objectIdAttr] } : props?.[fieldPathAttr] ? { [fieldPathAttr]: props[fieldPathAttr] } : undefined;
}

const AnnotatedWrapperTag: React.FC<PropsWithChildren<any> & { annotation: HasAnnotation }> = ({ annotation, children }) => {
    if (annotation[fieldPathAttr]) annotation[fieldPathAttr] += '#*[1]';
    return <data {...annotation}>{children}</data>;
};
