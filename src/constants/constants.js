export const projects = [
  {
    type: 'noview',
    title: 'Task tracker',
    description: "A simple web app that lets you create and set a reminder to the task you want, it was my first web application built with vue.js",
    image: '/images/vueTracker.png',
    tags: ['vue.js', 'JavaScript', 'HTML', 'json-server'],
    source: 'https://github.com/dhichem/vue-task-tracker',
    visit: 'https://google.com',
    id: 0,
  },
  {
    type: 'view&code',
    title: 'Portfolio',
    description: `my first ever portfolio built using Next.js. Also I used styled-components to create simple and reusable CSS components throughout the application`,
    image: '/images/portfolioImage.png',
    tags: ['Next.js', 'JavaScript', 'HTML', 'CSS', 'styled-components'],
    source: 'https://github.com/dhichem/Portfolio',
    visit: 'https://eloquent-murdock-7bb37f.netlify.app',
    id: 1,
  },
  {
    type: 'nocode',
    title: 'Linkedin clone',
    description: `In this project I have tried to make a Linkedin lookalike website in React connected to a firebase database. In it I used React-redux to store the user's session, firebase to save the posts, styled-components and many other (Also the interface is mobile compatible). The hosting was done in Firebase`,
    image: '/images/linkedin-image.png',
    tags: ['React.js', 'styled-components', 'firebase', 'React-redux', 'Redux'],
    source: '',
    visit: 'https://linkedin-website-b7bd8.web.app',
    id: 2,
  },
  {
    type: 'code&video',
    title: 'Wallpaper Expo',
    description: `this project was made with the help of the Flutter SDK. The app let's you search through a variety of wallpapers and download the ones you like. All of this was done with the Pexels API which provides the photos`,
    image: '/images/wallpaperExpo.jpg',
    tags: ['Flutter', 'Dart', 'Pexels API', 'http'],
    source: 'https://github.com/dhichem/wallpaper-expo',
    visit: 'https://drive.google.com/file/d/1QeMieyOUx-LOEh4-C1EUS-j1VP4sxzPK/view?usp=sharing',
    id: 3,
  },
  {
    type: 'noview&code',
    title: 'More to come soon!',
    description: "",
    image: '/images/giphy.gif',
    tags: [],
    source: '',
    visit: '',
    id: 4,
  }

];

export const TimeLineData = [
  { year: 2017, text: 'Graduated highschool and got my Baccalaureate diploma', },
  { year: "2017-now", text: 'graduating with a five year engineering degree specialized in Software Engineering from ESPRIT at Tunis', },
  { year: 2019, text: 'joined the BT bank (Banque de tunisie) as an intern', },
  { year: 2021, text: 'joined Telcotec as an intern', }
];


export const Accoplishments = [
  { number: 20, text: 'Open Source Projects' },
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }
];
