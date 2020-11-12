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
      <main className={styles.main}>
        <h1 className={styles.title}>Taras Kliushta</h1>
        <h3 className={styles.subtitle}>Front-End developer</h3>
        <div className={styles.icons}>{getLinksConfig().map(renderLink)}</div>
      </main>
    </div>
  );
}

function renderLink(props, index) {
  const { linksProps, ...imageProps } = props;
  return (
    <a key={index} {...linksProps}>
      <img {...imageProps} />
    </a>
  );
}

function getLinksConfig() {
  return [
    {
      linksProps: {
        target: "_blank",
        href: "https://www.linkedin.com/in/taras-kliushta-b985a675/",
      },
      height: 20,
      width: 20,
      className: styles.icon,
      src: "/assets/ln.svg",
      alt: "linkedin",
    },
    {
      linksProps: {
        target: "_blank",
        href: "mailto:tarasklyushta@gmail.com",
      },
      height: 20,
      width: 20,
      className: styles.icon,
      src: "/assets/m.svg",
      alt: "mail",
    },
  ];
}
