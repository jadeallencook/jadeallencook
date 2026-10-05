export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  items: NavLink[];
}

export const primaryCtas = {
  contentShoot: {
    label: 'Book a Content Shoot',
    href: 'https://calendly.com/jadeallencook/educational-content-consultation',
  },
  recruiterCall: {
    label: 'Book a Recruiter Call',
    href: 'https://calendly.com/jadeallencook/recruit',
  },
};

export const resumeLink: NavLink = {
  label: 'Download My Resume',
  href: 'https://docs.google.com/document/d/1u_Nt4nNpvNyrSYuzycSSUmB2mbTVSvcCB64o1D4Vkxg',
};

export const navGroups: NavGroup[] = [
  {
    label: 'Services',
    items: [
      {
        label: 'Content Creation for Startups',
        href: '/content-creation-for-startups',
      },
      {
        label: 'Software Engineering',
        href: '/software-engineering',
      },
    ],
  },
  {
    label: 'Contact',
    items: [
      { label: '(510) 255-5233', href: 'tel:+1-510-255-5233' },
      {
        label: 'jadeallencook@protonmail.com',
        href: 'mailto:jadeallencook@icloud.com',
      },
    ],
  },
  {
    label: 'Connect',
    items: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jadeallencook/' },
      { label: 'GitHub', href: 'https://github.com/jadeallencook' },
      { label: 'YouTube', href: 'https://www.youtube.com/jadeallencook' },
      {
        label: 'Bluesky',
        href: 'https://bsky.app/profile/jadeallencook.bsky.social',
      },
      { label: 'Instagram', href: 'https://www.instagram.com/jadeallencook/' },
      { label: 'Twitter', href: 'https://x.com/jadeallencook' },
      { label: 'Tumblr', href: 'https://jadeallencook.tumblr.com' },
      { label: 'Facebook', href: 'https://www.facebook.com/jadeallencook' },
      { label: 'Threads', href: 'https://www.threads.com/@jadeallencook' },
    ],
  },
];

export function isExternalNavLink(href: string): boolean {
  return href.startsWith('http');
}
