import type { Metadata } from 'next'

export const SITE_NAME = 'Winspire Consultancy'
export const SITE_DESCRIPTION =
  'Winspire Consultancy provides holistic support services for NDIS participants and providers. Building capacity through compliance, operational excellence, and person-centred care.'

export const baseMetadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
  },
}

export const pageMetadata = {
  home: {
    title: 'NDIS Consultancy Experts | Winspire Consultancy',
    description:
      'Empowering NDIS Providers Through Expert Guidance. Holistic support for compliance, operations, and person-centred care.',
  },
  privacy: {
    title: 'Privacy Policy',
    description: 'Privacy Policy for Winspire Consultancy',
  },
  terms: {
    title: 'Terms & Conditions',
    description: 'Terms & Conditions for Winspire Consultancy',
  },
}
