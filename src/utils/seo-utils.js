export function seoGenerateMetaTags(page, site) {
    let defaultMetaTags = {
        'og:title': seoGenerateTitle(page, site),
        'og:image': defaultOgImage(page, site)
    };

    let pageMetaTags = {};
    if (page.metaTags?.length) {
        page.metaTags.forEach((metaTag) => {
            pageMetaTags[metaTag.property] = metaTag.content;
        });
    }

    const mergedMetaTags = {
        ...defaultMetaTags,
        ...pageMetaTags
    };

    let metaTags = [];
    Object.keys(mergedMetaTags).forEach((key) => {
        if (mergedMetaTags[key] !== null) {
            metaTags.push({
                property: key,
                content: mergedMetaTags[key],
                format: key.startsWith('og') ? 'property' : 'name'
            });
        }
    });
    
    return metaTags;
}

export function seoGenerateTitle(page, site) {
    let title = page.metaTitle ? page.metaTitle : page.title;
    if (site.titleSuffix && page.addTitleSuffix !== false) {
        title = `${title} - ${site.titleSuffix}`;
    }
    return title;
}

export function seoGenerateMetaDescription(page, site) {
    let metaDescription = null;
    // Blog posts use the exceprt as the default meta description
    if (page.__metadata.modelName === 'PostLayout') {
        metaDescription = page.excerpt;
    }
    // page metaDescription field overrides all others
    if (page.metaDescription) {
        metaDescription = page.metaDescription;
    }
    return metaDescription;
}

export function defaultOgImage(page, site) {
    let ogImage = null;
    // Use the sites default og:image field
    if (site.defaultSocialImage) {
        ogImage = site.defaultSocialImage;
    }
    // Blog posts use the featuredImage as the default og:image
    if (page.__metadata.modelName === 'PostLayout') {
        if (page.featuredImage?.url) {
            ogImage = page.featuredImage.url;
        }
    }
    // page socialImage field overrides all others
    if (page.socialImage) {
        ogImage = page.socialImage;
    }

    // ogImage should use an absolute URL. Get the Netlify domain URL from the Netlify environment variable process.env.URL
    const domainUrl = site.env?.URL ? site.env.URL : null; 

    if (ogImage) {
      if (domainUrl) {
        return domainUrl + ogImage
      } else {
        return ogImage;
      }
    }
    
    return null;
}
