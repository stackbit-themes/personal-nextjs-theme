export function getAllPostsSorted(objects) {
    const allPosts = getAllPosts(objects);
    return sortPosts(allPosts);
}

export function getAllPosts(objects) {
    return objects.filter((object) => object.__metadata?.modelName === 'PostLayout');
}

export function sortPosts(posts) {
    return posts.sort((postA, postB) => new Date(postB.date).getTime() - new Date(postA.date).getTime());
}

export function getAllProjectsSorted(objects) {
    const allProjects = getAllProjects(objects);
    return sortProjects(allProjects);
}

export function getAllProjects(objects) {
    return objects.filter((object) => object.__metadata?.modelName === 'ProjectLayout');
}

export function sortProjects(projects) {
    return projects.sort((projectA, projectB) => new Date(projectB.date).getTime() - new Date(projectA.date).getTime());
}

export async function mapDeepAsync(value, iteratee, options = {}) {
    const postOrder = options?.postOrder ?? false;
    async function _mapDeep(value, keyPath, stack) {
        if (!postOrder) {
            value = await iteratee(value, keyPath, stack);
        }
        const childrenIterator = (val, key) => {
            return _mapDeep(val, keyPath.concat(key), stack.concat([value]));
        };
        if (value && typeof value == 'object' && value.constructor === Object) {
            const res = {};
            for (const [key, val] of Object.entries(value)) {
                res[key] = await childrenIterator(val, key);
            }
            value = res;
        } else if (Array.isArray(value)) {
            value = await Promise.all(value.map(childrenIterator));
        }
        if (postOrder) {
            value = await iteratee(value, keyPath, stack);
        }
        return value;
    }
    return _mapDeep(value, [], []);
}
