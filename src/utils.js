export const getBodyScrollTop = () => window.pageYOffset || (document.documentElement && document.documentElement.ScrollTop) || (document.body && document.body.scrollTop);
export const isVerticalScroll = () => document.body.offsetHeight > window.innerHeight;
