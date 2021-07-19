const node_1 = {
  type: 'title',
  text: 'Menu',
  children: [
    { type: 'title', text: 'Works of George Macdonald' },
    { type: 'link', href: '/books', text: 'Books', children: [Array] },
    { type: 'link', href: '/poetry', text: 'Poems' },
    {
      type: 'link',
      href: '/essays',
      text: 'Essays',
      children: [Array]
    },
    { type: 'title', text: 'Our Community' },
    {
      type: 'link',
      href: '/about',
      text: 'About us',
      children: [Array]
    },
    { type: 'link', href: '/forum', text: 'Forum' },
    {
      type: 'link',
      href: 'https://www.facebook.com/groups/GeorgeMacDonaldCommunity/',
      text: 'Facebook Group'
    }
  ]
}

const node_1_1 = { type: 'title', text: 'Works of George Macdonald' }

const node_1_2 = {
  type: 'link',
  href: '/books',
  text: 'Books',
  children: [
    { type: 'link', href: '/books/sir-gibbie', text: 'Sir Gibbie' },
    {
      type: 'link',
      href: '/books/at-the-back-of-the-north-wind',
      text: 'At the Back of the North Wind'
    },
    {
      type: 'link',
      href: '/books/the-princess-and-the-goblin',
      text: 'The Princess and the Goblin'
    }
  ]
}
const node_1_2_1 = { type: 'link', href: '/books/sir-gibbie', text: 'Sir Gibbie' }
const node_1_2_2 = {
  type: 'link',
  href: '/books/at-the-back-of-the-north-wind',
  text: 'At the Back of the North Wind'
}
const node_1_2_3 = {
  type: 'link',
  href: '/books/the-princess-and-the-goblin',
  text: 'The Princess and the Goblin'
}
const node7 = { type: 'link', href: '/poetry', text: 'Poems' }
const node8 = {
  type: 'link',
  href: '/essays',
  text: 'Essays',
  children: [
    {
      type: 'link',
      href: '/essays/the-fantastic-imagination',
      text: 'The Fantastic Imagination'
    },
    {
      type: 'link',
      href: '/essays/the-new-name',
      text: 'The New Name'
    }
  ]
}
const node9 = {
  type: 'link',
  href: '/essays/the-fantastic-imagination',
  text: 'The Fantastic Imagination'
}
const node10 = { type: 'link', href: '/essays/the-new-name', text: 'The New Name' }
const node11 = { type: 'title', text: 'Our Community' }
const node12 = {
  type: 'link',
  href: '/about',
  text: 'About us',
  children: [
    {
      type: 'link',
      href: '/about/membership',
      text: 'Community membership'
    },
    {
      type: 'link',
      href: '/about/sponsorship',
      text: 'Community sponsorship',
      children: [Array]
    }
  ]
}
node {
  type: 'link',
  href: '/about/membership',
  text: 'Community membership'
}
node {
  type: 'link',
  href: '/about/sponsorship',
  text: 'Community sponsorship',
  children: [
    {
      type: 'link',
      href: '/about/sponsorship/patreon',
      text: 'Our Patreon'
    },
    {
      type: 'link',
      href: '/about/sponsorship/endowments',
      text: 'Endowments'
    }
  ]
}
node {
  type: 'link',
  href: '/about/sponsorship/patreon',
  text: 'Our Patreon'
}
node {
  type: 'link',
  href: '/about/sponsorship/endowments',
  text: 'Endowments'
}
node { type: 'link', href: '/forum', text: 'Forum' }
node {
  type: 'link',
  href: 'https://www.facebook.com/groups/GeorgeMacDonaldCommunity/',
  text: 'Facebook Group'
}
16
[nodemon] clean exit - waiting for changes before restart
[nodemon] restarting due to changes...
[nodemon] starting `babel-node src/index.js`
node {
  type: 'title',
  text: 'Menu',
  children: [
    { type: 'title', text: 'Works of George Macdonald' },
    { type: 'link', href: '/books', text: 'Books', children: [Array] },
    { type: 'link', href: '/poetry', text: 'Poems' },
    {
      type: 'link',
      href: '/essays',
      text: 'Essays',
      children: [Array]
    },
    { type: 'title', text: 'Our Community' },
    {
      type: 'link',
      href: '/about',
      text: 'About us',
      children: [Array]
    },
    { type: 'link', href: '/forum', text: 'Forum' },
    {
      type: 'link',
      href: 'https://www.facebook.com/groups/GeorgeMacDonaldCommunity/',
      text: 'Facebook Group'
    }
  ]
}
node { type: 'title', text: 'Works of George Macdonald' }
node {
  type: 'link',
  href: '/books',
  text: 'Books',
  children: [
    { type: 'link', href: '/books/sir-gibbie', text: 'Sir Gibbie' },
    {
      type: 'link',
      href: '/books/at-the-back-of-the-north-wind',
      text: 'At the Back of the North Wind'
    },
    {
      type: 'link',
      href: '/books/the-princess-and-the-goblin',
      text: 'The Princess and the Goblin'
    }
  ]
}
node { type: 'link', href: '/books/sir-gibbie', text: 'Sir Gibbie' }
node {
  type: 'link',
  href: '/books/at-the-back-of-the-north-wind',
  text: 'At the Back of the North Wind'
}
node {
  type: 'link',
  href: '/books/the-princess-and-the-goblin',
  text: 'The Princess and the Goblin'
}
node { type: 'link', href: '/poetry', text: 'Poems' }
node {
  type: 'link',
  href: '/essays',
  text: 'Essays',
  children: [
    {
      type: 'link',
      href: '/essays/the-fantastic-imagination',
      text: 'The Fantastic Imagination'
    },
    {
      type: 'link',
      href: '/essays/the-new-name',
      text: 'The New Name'
    }
  ]
}
node {
  type: 'link',
  href: '/essays/the-fantastic-imagination',
  text: 'The Fantastic Imagination'
}
node { type: 'link', href: '/essays/the-new-name', text: 'The New Name' }
node { type: 'title', text: 'Our Community' }
node {
  type: 'link',
  href: '/about',
  text: 'About us',
  children: [
    {
      type: 'link',
      href: '/about/membership',
      text: 'Community membership'
    },
    {
      type: 'link',
      href: '/about/sponsorship',
      text: 'Community sponsorship',
      children: [Array]
    }
  ]
}
node {
  type: 'link',
  href: '/about/membership',
  text: 'Community membership'
}
node {
  type: 'link',
  href: '/about/sponsorship',
  text: 'Community sponsorship',
  children: [
    {
      type: 'link',
      href: '/about/sponsorship/patreon',
      text: 'Our Patreon'
    },
    {
      type: 'link',
      href: '/about/sponsorship/endowments',
      text: 'Endowments'
    }
  ]
}
node {
  type: 'link',
  href: '/about/sponsorship/patreon',
  text: 'Our Patreon'
}
node {
  type: 'link',
  href: '/about/sponsorship/endowments',
  text: 'Endowments'
}
node { type: 'link', href: '/forum', text: 'Forum' }
node {
  type: 'link',
  href: 'https://www.facebook.com/groups/GeorgeMacDonaldCommunity/',
  text: 'Facebook Group'
}
16
[nodemon] clean exit - waiting for changes before restart


