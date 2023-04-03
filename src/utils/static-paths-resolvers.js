import { getAllPosts, getAllProjects, generatePagedPathsForPage } from './data-utils';

export function resolveStaticPaths({ pages, objects }) {
    return pages.reduce((paths, page) => {
        const objectType = page.__metadata?.modelName;
        const pageUrlPath = page.__metadata?.urlPath;
        if (objectType && StaticPathsResolvers[objectType]) {
            const resolver = StaticPathsResolvers[objectType];
            return paths.concat(resolver(page, objects));
        }
        return paths.concat(pageUrlPath);
    }, []);
}

const StaticPathsResolvers = {
    PostFeedLayout: (page, objects) => {
        const posts = getAllPosts(objects);
        const numOfPostsPerPage = page.numOfPostsPerPage ?? 10;
        return generatePagedPathsForPage(page, posts, numOfPostsPerPage);
    },
    ProjectFeedLayout: (page, objects) => {
        const projects = getAllProjects(objects);
        const numOfProjectsPerPage = page.numOfProjectsPerPage ?? 10;
        return generatePagedPathsForPage(page, projects, numOfProjectsPerPage);
    }
};
