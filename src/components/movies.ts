export type Movie = {
    poster: string;
    name: string;
  };
  
  export const movies = [
    { poster: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/10/Gerard-Butler-and-Mike-Colter-in-Plane.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5", name: "Plane" },
    {
      poster: "https://c7.alamy.com/comp/2WD2NB7/argylle-film-poster-dua-lipa-henry-cavill-2WD2NB7.jpg",
      name: "argyle",
    },
    {
      poster: "https://www.napoleon.movie/images/share.jpg",
      name: "Napoleon",
    },
    { poster: "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2024/04/14/dark-matter-movie-HD-Posters-.jpg?fit=2560%2C1440&quality=80&zoom=1&ssl=1?v=1713105716", name: "Dark matter" },
    {
      poster: "https://www.apple.com/tv-pr/shows-and-films/m/masters-of-the-air/images/season-01/thumbnail/key-art-02/Apple_TV_MotA_key_art_main_16_9.jpg.large.jpg",
      name: "Masters of the air",
    },
    {
      poster: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/02/ghosted-chris-evans-ana-de-armas.jpg",
      name: "Ghosted",
    },
    { poster: "https://www.apple.com/tv-pr/shows-and-films/m/monarch-legacy-of-monsters/images/season-01/show-home-graphic-header/key-art-01/4x1/Apple_TV_Monarch_Legacy_Monsters_key_art_graphic_header_4_1_show_home.jpg.large_2x.jpg", name: "Monarch" },
  ];
  
  export const randomMoviesSet1 = movies
    .sort(() => Math.random() - 0.5)
    .concat(movies.sort(() => Math.random() - 0.5))
    .concat(movies.sort(() => Math.random() - 0.5));
  
  export const randomMoviesSet2 = movies
    .sort(() => Math.random() - 0.5)
    .concat(movies.sort(() => Math.random() - 0.5))
    .concat(movies.sort(() => Math.random() - 0.5))
    .sort(() => Math.random() - 0.5);