// import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';

const Logo = () => {
    return (
        <Link href="/">
            <a className={styles.logo}>
                <Image src="/assets/logo4.png" alt="ConectAM" width={225} height={25} />
            </a>
        </Link>
      )
}

export default Logo;