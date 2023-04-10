import { getAllPostsSorted, getAllProjectsSorted, mapDeepAsync } from './data-utils';

export function resolveStaticProps(urlPath, data) {
    const props = {
        page: data.pages.find((page) => page.__metadata.urlPath === urlPath),
        ...data.props
    };

    return mapDeepAsync(
        props,
        async (value, keyPath, stack) => {
            const objectType = value?.type || value?.layout;
            if (objectType && StaticPropsResolvers[objectType]) {
                const resolver = StaticPropsResolvers[objectType];
                return resolver(value, data, { keyPath, stack });
            }
            return value;
        },
        { postOrder: true }
    );
}

const StaticPropsResolvers = {
    PostFeedLayout: (props, data) => {
        const allPosts = getAllPostsSorted(data.objects);
        return {
            ...props,
            items: allPosts
        };
    },
    RecentPostsSection: (props, data) => {
        const recentPosts = getAllPostsSorted(data.objects).slice(0, props.recentCount || 3);
        return {
            ...props,
            posts: recentPosts
        };
    },
    ProjectLayout: (props, data) => {
        const allProjects = getAllProjectsSorted(data.objects);
        const currentProjectId = props.__metadata?.id;
        const currentProjectIndex = allProjects.findIndex((project) => project.__metadata?.id === currentProjectId);
        const nextProject = currentProjectIndex > 0 ? allProjects[currentProjectIndex - 1] : null;
        const prevProject = currentProjectIndex < allProjects.length - 1 ? allProjects[currentProjectIndex + 1] : null;
        return {
            ...props,
            prevProject,
            nextProject
        };
    },
    ProjectFeedLayout: (props, data) => {
        const allProjects = getAllProjectsSorted(data.objects);
        return {
            ...props,
            items: allProjects
        };
    },
    RecentProjectsSection: (props, data) => {
        const recentProjects = getAllProjectsSorted(data.objects).slice(0, props.recentCount || 3);
        return {
            ...props,
            projects: recentProjects
        };
    }
};
