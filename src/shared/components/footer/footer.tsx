import HSpaceLogo from '@/shared/assets/icon/hspace_logo.svg?react';
import InstagramIcon from '@/shared/assets/icon/ic_instagram.svg?react';
import MediumIcon from '@/shared/assets/icon/ic_medium.svg?react';
import SlideShareIcon from '@/shared/assets/icon/ic_slideshare.svg?react';
import YouTubeIcon from '@/shared/assets/icon/ic_youtube.svg?react';

import * as styles from './footer.css';

const SNS_LINKS = [
  { Icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/boaz_bigdata' },
  { Icon: YouTubeIcon, label: 'YouTube', href: 'https://www.youtube.com/@bigdataboaz4452' },
  { Icon: MediumIcon, label: 'Medium', href: 'https://medium.com/@boaz.team.research' },
  { Icon: SlideShareIcon, label: 'SlideShare', href: 'https://www.slideshare.net/BOAZbigdata' },
];

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.footerInner}>
        <section className={styles.col.left}>
          <HSpaceLogo width={122} height={18} />
          <small className={styles.copyright}>© 2026 BOAZ. All rights reserved.</small>
        </section>
        <section className={styles.col.center}>
          <h4 className={styles.heading}>SNS</h4>
          <ul className={styles.snsLinks}>
            {SNS_LINKS.map(({ Icon, label, href }) => (
              <li key={label}>
                <a className={styles.snsLink} href={href} target="_blank" rel="noopener noreferrer">
                  <Icon width={16} height={16} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.col.right}>
          <h4 className={styles.heading}>Contact</h4>
          <small className={styles.email}>boaz.bigdata@gmail.com</small>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
