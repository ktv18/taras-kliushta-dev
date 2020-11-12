import Head from "next/head";
import { useEffect, useState } from "react";
import cx from "classnames/bind";
import styles from "../styles/Home.module.css";

const getClassNames = cx.bind(styles);

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerClassNames = getClassNames(
    { animated: mounted },
    styles.container
  );

  return (
    <div className={containerClassNames}>
      <Head>
        <title>Dev proflle</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Kliushta Taras</h1>
        <h3 className={styles.subtitle}>Front-End developer</h3>
        <div className={styles.icons}>{getLinksConfig().map(renderLink)}</div>
      </main>
    </div>
  );
}

function renderLink(props) {
  const { linksProps, ...imageProps } = props;
  return (
    <a {...linksProps}>
      <img {...imageProps} />
    </a>
  );
}

function getLinksConfig() {
  return [
    {
      linksProps: {
        target: "_blank",
        href: "mailto:tarasklyushta@gmail.com",
      },
      className: styles.icon,
      src: "/assets/m.svg",
      alt: "mail",
    },
    {
      linksProps: {
        target: "_blank",
        href: "https://www.linkedin.com/in/taras-kliushta-b985a675/",
      },
      className: styles.icon,
      src: "/assets/ln.svg",
      alt: "linkedin",
    },
  ];
}
