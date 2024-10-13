import { IconSearch } from '@tabler/icons-react';
import { Autocomplete, Burger, Button, Group, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';

import './Nav.scss';

const links = [
  { link: '/', label: 'Home' },
  { link: '/employee/add', label: 'Add Employee' },
];

export function NavBar() {
  const [opened, { toggle }] = useDisclosure(false);
  const navigate = useNavigate();

  const items = links.map((link) => (
    <Button key={link.label}
      className="link"
      variant="subtle"
      onClick={() => navigate(link.link)}
    >
      {link.label}
    </Button>
  ));

  return (
    <header className="header">
      <div className="inner">
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          {/* <MantineLogo size={28} /> */}
          <button
            type="button"
            onClick={() => navigate('/')}
            className="logo"
          >
            Employee Manager
          </button>
        </Group>

        <Group>
          <Group ml={50} gap={5} className="links" visibleFrom="sm">
            {items}
          </Group>
          <Autocomplete
            className="search"
            placeholder="Search"
            leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
            // data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
            visibleFrom="xs"
          />
        </Group>
      </div>
    </header>
  );
}
