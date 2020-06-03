import urlJoin from 'url-join';
import getNextConfig from 'next/config';

export const getConfig = () => {
  const publicConfig: { [k: string]: string } = getNextConfig().publicRuntimeConfig;
  return {
    GATEWAY_API_ROOT: publicConfig.GATEWAY_API_ROOT || 'http://localhost:9000',
    EGO_API_ROOT: publicConfig.EGO_API_ROOT || '',
    EGO_CLIENT_ID: publicConfig.EGO_CLIENT_ID || '',
    EGO_PUBLIC_KEY:
      publicConfig.EGO_PUBLIC_KEY ||
      `-----BEGIN PUBLIC KEY-----\r\MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0lOqMuPLCVusc6szklNXQL1FHhSkEgR7An+8BllBqTsRHM4bRYosseGFCbYPn8r8FsWuMDtxp0CwTyMQR2PCbJ740DdpbE1KC6jAfZxqcBete7gP0tooJtbvnA6X4vNpG4ukhtUoN9DzNOO0eqMU0Rgyy5HjERdYEWkwTNB30i9I+nHFOSj4MGLBSxNlnuo3keeomCRgtimCx+L/K3HNo0QHTG1J7RzLVAchfQT0lu3pUJ8kB+UM6/6NG+fVyysJyRZ9gadsr4gvHHckw8oUBp2tHvqBEkEdY+rt1Mf5jppt7JUV7HAPLB/qR5jhALY2FX/8MN+lPLmb/nLQQichVQIDAQAB\r\n-----END PUBLIC KEY-----`,
    AUTH_DISABLED: publicConfig.AUTH_DISABLED === 'true',
    GA_TRACKING_ID: publicConfig.GA_TRACKING_ID || '',
    EGO_URL: urlJoin(
      publicConfig.EGO_API_ROOT || '',
      `/api/oauth/login/google?client_id=${publicConfig.EGO_CLIENT_ID || ''}`,
    ),
    DACO_URL: publicConfig.DACO_URL || 'https://icgc.org/daco',
    DOCS_URL_ROOT: publicConfig.DOCS_URL_ROOT || 'https://docs.icgc-argo.org',
    RECAPTCHA_SITE_KEY:
      publicConfig.RECAPTCHA_SITE_KEY || '6Lebz-IUAAAAACY7eMyfK4H52Sxy9hv4FYjhFgSR',
    FEATURE_REPOSITORY_ENABLED: publicConfig.FEATURE_REPOSITORY_ENABLED === 'true',
    FEATURE_LANDING_PAGE_STATS_ENABLED: publicConfig.FEATURE_LANDING_PAGE_STATS_ENABLED === 'true',
    MAINTENANCE_MODE_ON: publicConfig.MAINTENANCE_MODE_ON === 'true',
  } as {
    GATEWAY_API_ROOT: string;
    EGO_API_ROOT: string;
    EGO_CLIENT_ID: string;
    EGO_PUBLIC_KEY: string;
    AUTH_DISABLED: boolean;
    GA_TRACKING_ID: string;
    EGO_URL: string;
    DOCS_URL_ROOT: string;
    DACO_URL: string;
    RECAPTCHA_SITE_KEY: string;
    FEATURE_REPOSITORY_ENABLED: boolean;
    FEATURE_LANDING_PAGE_STATS_ENABLED: boolean;
    MAINTENANCE_MODE_ON: boolean;
  };
};
