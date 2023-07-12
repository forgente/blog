import isInternalUrl from "@docusaurus/isInternalUrl";

export const ensureTrailingSlash = url => isInternalUrl(url) && !url.endsWith("/") ? `${url}/` : url;
