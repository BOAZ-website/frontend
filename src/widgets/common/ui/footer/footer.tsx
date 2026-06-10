import { useEffect, useState } from 'react';
import { Link } from 'react-router';

import HSpaceLogo from '@/shared/assets/icons/hspace_logo.svg?react';
import InstagramIcon from '@/shared/assets/icons/ic_instagram.svg?react';
import MediumIcon from '@/shared/assets/icons/ic_medium.svg?react';
import SlideShareIcon from '@/shared/assets/icons/ic_slideshare.svg?react';
import YouTubeIcon from '@/shared/assets/icons/ic_youtube.svg?react';
import { ROUTE_PATH } from '@/shared/router/paths';

import * as styles from './footer.css';

const SNS_LINKS = [
  { Icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/boaz_bigdata' },
  { Icon: YouTubeIcon, label: 'YouTube', href: 'https://www.youtube.com/@bigdataboaz4452' },
  { Icon: MediumIcon, label: 'Medium', href: 'https://medium.com/@boaz.team.research' },
  { Icon: SlideShareIcon, label: 'SlideShare', href: 'https://www.slideshare.net/BOAZbigdata' },
];

const Footer = () => {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 768px)').matches);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  if (isMobile) {
    return (
      <footer className={styles.container}>
        <div className={styles.mobileInner}>
          <HSpaceLogo width={122} height={18} />
          <div className={styles.mobileContact}>
            <span className={styles.mobileContactLabel}>Contact</span>
            <small className={styles.email}>boaz.bigdata@naver.com</small>
          </div>
          <ul className={styles.mobileSnsGrid}>
            {SNS_LINKS.map(({ Icon, label, href }) => (
              <li key={label}>
                <a className={styles.snsLink} href={href} target="_blank" rel="noopener noreferrer">
                  <Icon width={16} height={16} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <Link className={styles.privacyLink} to={ROUTE_PATH.PRIVACY}>
            개인정보처리방침
          </Link>
          <small className={styles.copyright}>© 2026 BOAZ. All rights reserved.</small>
        </div>
      </footer>
    );
  }

  return (
    <footer className={styles.container}>
      <div className={styles.desktopInner}>
        <section className={styles.col.left}>
          <HSpaceLogo width={122} height={18} />
          <Link className={styles.privacyLink} to={ROUTE_PATH.PRIVACY}>
            개인정보처리방침
          </Link>
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
          <small className={styles.email}>boaz.bigdata@naver.com</small>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
