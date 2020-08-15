interface Project {
  title: string,
  desc: string,
  link: string,
  img: string,
  year: number
}

const projects: Array<Project> = [
  {
    title: 'Bubble Visualizer',
    desc: 'A small audio visualizer written using matter.js',
    link: 'https://www.youtube.com/watch?v=7BeFY_sh0wM',
    img: 'bubblevis',
    year: 2019,
  },
  {
    title: 'BOMBCORP',
    desc: 'A browser-based minigame written using pixi.js',
    link: 'https://bombcorp.jrinkman.com',
    img: 'bombcorp',
    year: 2017,
  },
  {
    title: 'Pinger',
    desc: "A ping monitoring tool i've written using WPF and MahApps.metro",
    link: 'https://github.com/jrinkman/pinger',
    img: 'pinger',
    year: 2017,
  },
  {
    title: 'C# Audio Visualizer',
    desc: 'A Windows Forms audio visualizer written in C#',
    link: 'https://www.youtube.com/watch?v=aI8YBqIHlBU',
    img: 'audiovis',
    year: 2017,
  },
  {
    title: 'C# Audio Visualizer 2.0',
    desc: 'The second iteration!',
    link: 'https://www.youtube.com/watch?v=TDsxY8GJ3f4',
    img: 'audiovis2',
    year: 2017,
  },
  {
    title: 'Ragdoll Superman GTAV Mod',
    desc: 'A silly mod I made for GTAV which flings you around',
    link: 'https://www.youtube.com/watch?v=Wsy9oDG2hO8',
    img: 'gtav-ragdoll',
    year: 2015,
  },
  {
    title: 'UE4 UMG: Idlescreen System',
    desc: 'Based off the popular GMOD server, GMTower',
    link: 'https://www.youtube.com/watch?v=EIgtczjlQtQ',
    img: 'ue4-idlescreen',
    year: 2016,
  },
  {
    title: 'Chrome Emoji Tab',
    desc: 'The less known about this, the better :P',
    link: 'https://github.com/jackberingen/chrome-emoji-tab',
    img: 'chrome-emoji',
    year: 2017,
  },
  {
    title: 'Unreal Engine 4 Youtube API Integration',
    desc: 'Youtube API integration into UE4',
    link: 'https://www.youtube.com/watch?v=bJ2RemLw_sQ',
    img: 'ue4-ytapi',
    year: 2016,
  },
  {
    title: 'UE4 UMG: Money Popup',
    desc: 'A test UI dialoge in UE4',
    link: 'https://www.youtube.com/watch?v=ifbUd7vp02E',
    img: 'ue4-money',
    year: 2016,
  },
  {
    title: 'UE4 UMG: Notification System',
    desc: "A UI notification system made with UE4's UMG system",
    link: 'https://www.youtube.com/watch?v=pG1AxfCNcyE',
    img: 'ue4-notify',
    year: 2016,
  },
];

export default projects;
