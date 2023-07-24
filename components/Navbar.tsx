import { CategoryType } from '@/types/common';
import Link from 'next/link';
import styles from '@/styles/navbar.module.css';
import { Typography, Space, Button, Tooltip } from 'antd';
import { CrownFilled, SearchOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import useAuth from '@/hooks/useAuth';
import { useSession, signOut } from 'next-auth/react';

const { Text } = Typography;

const Navbar = () => {
  const [category, setCategory] = useState<CategoryType[]>([]);
  const isAuth = useAuth();
  const { data: session } = useSession();

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await fetch('https://ott.durbar.live/api/v1/web/category');
      const category = await res.json();
      setCategory(category.data);
    };

    fetchCategory();

    if (session?.user?.name) {
      localStorage.setItem('token', session.user.name);
    }
  }, [session]);

  return (
    <nav className={styles.nav}>
      <div className={styles.flex}>
        <Link href="/" className={styles['nav-logo']}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="35"
            viewBox="0 0 132.266 80.109"
            className="w-12 h-12 sm:w-14 sm:h-14"
          >
            <g
              id="Group_18032"
              data-name="Group 18032"
              transform="translate(-34.734 -25.445)"
            >
              <g id="Logo" transform="translate(34.734 25.445)">
                <path
                  id="Vector"
                  d="M11.5,33.309,30.211,23.3a6.865,6.865,0,0,0,0-12.321L11.5.963A8.1,8.1,0,0,0,3.823.97,6.965,6.965,0,0,0,0,7.124V27.148A6.965,6.965,0,0,0,3.823,33.3a8.1,8.1,0,0,0,7.675.007Z"
                  transform="translate(55.634 45.837)"
                  fill="#FF3333"
                />
                <path
                  id="Vector-2"
                  data-name="Vector"
                  d="M45.1,76.841H14.04C6.3,76.841,0,70.986,0,63.789V13.052C0,5.855,6.3,0,14.04,0H75.817c7.742,0,14.04,5.855,14.04,13.052V45.191a3.519,3.519,0,0,1-7.02,0V13.052a6.794,6.794,0,0,0-7.02-6.526H14.04a6.794,6.794,0,0,0-7.02,6.526V63.789a6.794,6.794,0,0,0,7.02,6.526H45.1a3.272,3.272,0,1,1,0,6.526ZM20.534,60.526a3.393,3.393,0,0,0-3.51-3.263,3.272,3.272,0,1,0,0,6.526A3.393,3.393,0,0,0,20.534,60.526Zm14.04,0a3.519,3.519,0,1,0-3.51,3.263A3.393,3.393,0,0,0,34.574,60.526Zm14.04,0a3.519,3.519,0,1,0-3.51,3.263A3.393,3.393,0,0,0,48.614,60.526ZM20.534,16.314a3.393,3.393,0,0,0-3.51-3.263,3.393,3.393,0,0,0-3.51,3.263,3.393,3.393,0,0,0,3.51,3.263A3.393,3.393,0,0,0,20.534,16.314Zm14.04,0a3.519,3.519,0,0,0-7.02,0,3.519,3.519,0,0,0,7.02,0Zm14.04,0a3.519,3.519,0,0,0-7.02,0,3.519,3.519,0,0,0,7.02,0Zm14.04,0a3.519,3.519,0,0,0-7.02,0,3.519,3.519,0,0,0,7.02,0Zm14.04,0a3.519,3.519,0,0,0-7.02,0,3.519,3.519,0,0,0,7.02,0Z"
                  transform="translate(0 0)"
                  fill="#ffffff"
                />
              </g>
            </g>
          </svg>
          <Text underline={false}>OTT</Text>
        </Link>
        <Space size={24}>
          {category.map((c) => (
            <Link
              key={c.id}
              href={c.slug}
              style={{ color: '#f0f0f0', fontSize: '16px' }}
            >
              {c.title}
            </Link>
          ))}

          {session && (
            <Link
              href="/my-list"
              style={{ color: '#f0f0f0', fontSize: '16px' }}
            >
              My List
            </Link>
          )}
        </Space>
      </div>
      <Space size={10}>
        <Tooltip title="Search">
          <Button
            type="text"
            size="large"
            icon={<SearchOutlined />}
            className={styles['search-icon']}
          ></Button>
        </Tooltip>
        <Link href="/subscription">
          <Button
            type="primary"
            danger
            icon={<CrownFilled />}
            className={styles.button}
          >
            Subscribe
          </Button>
        </Link>
        {!session ? (
          <Link href="/login">
            <Button
              style={{ background: '#936DE3', border: 'none', color: '#fff' }}
              className={styles.button}
            >
              Login
            </Button>
          </Link>
        ) : (
          <Button
            type="primary"
            danger
            className={styles.button}
            onClick={() => {
              signOut({ redirect: false });
              localStorage.clear()
            }}
          >
            Logout
          </Button>
        )}
      </Space>
    </nav>
  );
};

export default Navbar;
