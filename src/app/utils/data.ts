export const navigationLinks = [
  { label: 'Info', path: '#home' },
  { label: 'About', path: '#about' },
  { label: 'Projects', path: '#projects' },
  { label: 'Skills', path: '#skills' },
  { label: 'Contact', path: '#contact' }
]

export type projectType = {
  name: string,
  repo: string,
  isDeploy:boolean,
  url: string,
  image: string,
  description: string,
  tags: string[],
}

export const projectsData: projectType[] = [
  {
    name: 'Travello',
    repo: 'https://github.com/Susreejjena/Travello--Tours-Travels-Management',
    isDeploy: false,
    url: '',
    image:
      '/travello-img.png',
    description:
      'A Tours Booking Website.',
    tags: ['React', 'NodeJS', 'MongoDB', 'ExpressJS', 'JWT', 'Razorpay-API','NodeMailer']
  }
  {
    name: 'Text-Teo',
    repo: 'https://github.com/Susreejjena/TEXT-SUMMARIZER',
    isDeploy: false,
    url: '',
    image:
      '/Text-Teo.png',
    description:
      'An Audio, Text, Video Summarizer.',
    tags: ['Django', 'Python', 'ML']
  },
  
  // {
  //   name: 'Currency Convertor',
  //   repo: 'https://github.com/Vyomrana02/Currency-convertor-app',
  //   isDeploy: false,
  //   url: 'https://grazziotti.github.io/rock-paper-scissors-game/',
  //   image:
  //     '/Currency-Convertor.png',
  //   description: 'Um jogo clássico de pedra-papel-tesoura disponível online.',
  //   tags: ['html', 'css', 'javascript', 'bem']
  // },
  // {
  //   name: 'Food Recipe',
  //   repo: 'https://github.com/Vyomrana02/Food-Recipe-App',
  //   isDeploy: false,
  //   url: 'https://grazziotti.github.io/rock-paper-scissors-game/',
  //   image:
  //     '/Food-Recipe.png',
  //   description: 'Um jogo clássico de pedra-papel-tesoura disponível online.',
  //   tags: ['html', 'css', 'javascript', 'bem']
  // },
  // {
  //   name: 'Weather Prediction',
  //   repo: 'https://github.com/Vyomrana02/-Weather-API-prediction',
  //   isDeploy: false,
  //   url: 'https://grazziotti.github.io/rock-paper-scissors-game/',
  //   image:
  //     '/Weather-Prediction.png',
  //   description: 'Um jogo clássico de pedra-papel-tesoura disponível online.',
  //   tags: ['html', 'css', 'javascript', 'bem']
  // },
  // {
  //   name: 'Quote Generator',
  //   repo: 'https://github.com/Vyomrana02/Quote-API',
  //   isDeploy: false,
  //   url: 'https://grazziotti.github.io/rock-paper-scissors-game/',
  //   image:
  //     '/Quote-Api.png',
  //   description: 'Um jogo clássico de pedra-papel-tesoura disponível online.',
  //   tags: ['html', 'css', 'javascript', 'bem']
  // },
  // {
  //   name: 'OLX Clone',
  //   repo: 'https://github.com/Vyomrana02/Quote-API',
  //   isDeploy: false,
  //   url: 'https://grazziotti.github.io/rock-paper-scissors-game/',
  //   image:
  //     '/OLX-Clone.png',
  //   description: 'Um jogo clássico de pedra-papel-tesoura disponível online.',
  //   tags: ['html', 'css', 'javascript', 'bem']
  // },
  
]

export const skillsData = [
  {
    img: 'html5/html5-original.svg',
    name: 'HTML'
  },
  {
    img: 'css3/css3-original.svg',
    name: 'CSS'
  },
  {
    img: 'javascript/javascript-original.svg',
    name: 'JavaScript'
  },
  //{
    //img: 'sass/sass-original.svg',
    //name: 'Sass'
  //},
  {
    img: 'typescript/typescript-original.svg',
    name: 'TypeScript'
  },
  {
    img: 'react/react-original.svg',
    name: 'React'
  },
  {
    img: 'java/java-original.svg',
    name: 'JAVA'
  },
  {
    img: 'tailwindcss/tailwindcss-original.svg',
    name: 'Tailwindcss'
  },
  {
    img: 'bootstrap/bootstrap-original.svg',
    name: 'Bootstrap'
  },
  {
    img: 'nextjs/nextjs-original.svg',
    name: 'Nextjs'
  },
  {
    img: 'php/php-original.svg',
    name: 'PHP'
  },
  {
    img: 'cplusplus/cplusplus-original.svg',
    name: 'C++'
  },
  //{
    //img: 'spring/spring-original.svg',
    //name: 'Spring'
  //},
  //{
    //img: 'dot-net/dot-net-original.svg',
    //name: '.Net'
  //},
  //{
    //img: 'dotnetcore/dotnetcore-original.svg',
    //name: '.Net Core'
  //},
  {
    img: 'nodejs/nodejs-original.svg',
    name: 'NodeJS'
  },
  //{
   // img: 'express/express-original.svg',
    //name: 'ExpressJS'
  //},
  {
    img: 'django/django-plain.svg',
    name: 'Django'
  },
  //{
    //img: 'hibernate/hibernate-original.svg',
    //name: 'Hibernate'
  //},  
  {
    img: 'mysql/mysql-original.svg',
    name: 'MySQL'
  },
  //{
    //img: 'postgresql/postgresql-original.svg',
    //name: 'PostgreSQL'
  //},
  {
    img: 'mongodb/mongodb-original.svg',
    name: 'MongoDB'
  },
  {
    img: 'git/git-original.svg',
    name: 'GIT'
  },
  {
    img: 'github/github-original.svg',
    name: 'Github'
  },
  {
    img: 'postman/postman-original.svg',
    name: 'Postman'
  },
  //{
   // img: 'cassandra/cassandra-original.svg',
    //name: 'Cassandra'
  //},

]
