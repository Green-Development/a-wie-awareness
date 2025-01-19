import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Startseite',
      href: getPermalink('/'),
    },
    {
      text: 'Kontakt',
      href: getPermalink('/kontakt'),
    },
  ],
};

export const footerData = {
  secondaryLinks: [
    {text: 'Datenschutzerklärung', href: getPermalink('/privacy')},
    {text: 'Impressum', href: getPermalink('/impressum')},
  ],
  socialLinks: [
    // {ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/groups/1381278205227038/'},
    // {ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml')},
  ],
};
