// Sample Movies & Series Array (start with 10, extendable to 100)
const movies = [
  // Movies
  {
    title: "Inception",
    type: "movie",
    genre: "Action/Sci-Fi",
    year: 2010,
    rating: 8.8,
    img: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    story: "A skilled thief enters dreams to steal secrets and plant ideas.",
    review: "Mind-bending storytelling with stunning visuals and deep emotion.",
    watch: "https://www.youtube.com/results?search_query=inception+trailer",
    download: "#",
  },
  {
    title: "The Dark Knight",
    type: "movie",
    genre: "Action/Crime",
    year: 2008,
    rating: 9.0,
    img: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    story:
      "Batman faces the Joker, Gotham's most dangerous criminal mastermind.",
    review: "Legendary performance by Heath Ledger and gripping action.",
    watch:
      "https://www.youtube.com/results?search_query=the+dark+knight+trailer",
    download: "#",
  },
  {
    title: "Titanic",
    type: "movie",
    genre: "Romance/Drama",
    year: 1997,
    rating: 7.8,
    img: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    story: "A love story unfolds on the doomed Titanic ship.",
    review: "A timeless romance filled with emotion and drama.",
    watch: "https://www.youtube.com/results?search_query=titanic+trailer",
    download: "#",
  },
  {
    title: "Interstellar",
    type: "movie",
    genre: "Sci-Fi/Drama",
    year: 2014,
    rating: 8.6,
    img: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    story: "Explorers travel through a wormhole in space to save humanity.",
    review: "Emotional science fiction with breathtaking cinematography.",
    watch: "https://www.youtube.com/results?search_query=interstellar+trailer",
    download: "#",
  },
  {
    title: "Avengers: Endgame",
    type: "movie",
    genre: "Action/Sci-Fi",
    year: 2019,
    rating: 8.4,
    img: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    story: "The Avengers assemble to undo the devastation caused by Thanos.",
    review: "Epic conclusion to the Marvel saga with emotional depth.",
    watch:
      "https://www.youtube.com/results?search_query=avengers+endgame+trailer",
    download: "#",
  },
  // Series
  {
    title: "Stranger Things",
    type: "series",
    genre: "Mystery/Sci-Fi",
    year: 2016,
    rating: 8.7,
    img: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    story:
      "Kids uncover supernatural mysteries and secret experiments in their town.",
    review: "Nostalgic thriller with strong characters and suspense.",
    watch:
      "https://www.youtube.com/results?search_query=stranger+things+trailer",
    download: "#",
  },
  {
    title: "Breaking Bad",
    type: "series",
    genre: "Drama/Crime",
    year: 2008,
    rating: 9.5,
    img: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    story: "A chemistry teacher turns into a ruthless drug kingpin.",
    review:
      "Intense, character-driven storytelling with brilliant performances.",
    watch: "https://www.youtube.com/results?search_query=breaking+bad+trailer",
    download: "#",
  },
  {
    title: "Money Heist",
    type: "series",
    genre: "Action/Crime",
    year: 2017,
    rating: 8.3,
    img: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
    story: "A criminal mastermind plans the biggest heist in Spain.",
    review: "Thrilling and clever series with memorable characters.",
    watch: "https://www.youtube.com/results?search_query=money+heist+trailer",
    download: "#",
  },
  {
    title: "The Witcher",
    type: "series",
    genre: "Fantasy/Action",
    year: 2019,
    rating: 8.2,
    img: "https://image.tmdb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg",
    story: "Monster hunter Geralt navigates a world of magic and betrayal.",
    review: "Visually stunning fantasy series with complex characters.",
    watch: "https://www.youtube.com/results?search_query=the+witcher+trailer",
    download: "#",
  },
  {
    title: "Friends",
    type: "series",
    genre: "Comedy/Romance",
    year: 1994,
    rating: 8.9,
    img: "https://image.tmdb.org/t/p/w500/f496cm9enuEsZkSPzCwnTESEK5s.jpg",
    story: "Six friends navigate life, love, and laughter in NYC.",
    review: "Classic sitcom with timeless humor and heartwarming moments.",
    watch: "https://www.youtube.com/results?search_query=friends+trailer",
    download: "#",
  },
  // 50 real movies
  {
    title: "The Shawshank Redemption",
    type: "movie",
    genre: "Drama",
    year: 1994,
    rating: 9.3,
    img: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    story:
      "Two imprisoned men bond over years, finding hope and eventual redemption.",
    review: "One of the most powerful prison dramas ever made.",
    watch:
      "https://www.youtube.com/results?search_query=shawshank+redemption+trailer",
    download: "#",
  },
  {
    title: "The Godfather",
    type: "movie",
    genre: "Crime/Drama",
    year: 1972,
    rating: 9.2,
    img: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    story:
      "The aging patriarch of a crime dynasty transfers control of his empire to his reluctant son.",
    review: "A masterpiece of gangster cinema.",
    watch: "https://www.youtube.com/results?search_query=the+godfather+trailer",
    download: "#",
  },
  {
    title: "The Godfather Part II",
    type: "movie",
    genre: "Crime/Drama",
    year: 1974,
    rating: 9.0,
    img: "https://image.tmdb.org/t/p/w500/amvmeQWheahG3StLMKp0tJRRrz9.jpg",
    story:
      "The early life and career of Vito Corleone is portrayed while his son expands the family business.",
    review: "An epic sequel equal to the original.",
    watch:
      "https://www.youtube.com/results?search_query=godfather+part+2+trailer",
    download: "#",
  },
  {
    title: "12 Angry Men",
    type: "movie",
    genre: "Drama",
    year: 1957,
    rating: 9.0,
    img: "https://image.tmdb.org/t/p/w500/ppd84D2i9W8jXmsyInGyihiSyqz.jpg",
    story:
      "A jury deliberates the guilt of a defendant with only one dissenting vote at first.",
    review: "A riveting study of justice and moral responsibility.",
    watch: "https://www.youtube.com/results?search_query=12+angry+men+trailer",
    download: "#",
  },
  {
    title: "Schindler's List",
    type: "movie",
    genre: "Biography/Drama",
    year: 1993,
    rating: 9.0,
    img: "https://image.tmdb.org/t/p/w500/c8Ass7acuOe4za6DhSattE359gr.jpg",
    story: "The story of Oskar Schindler who saved lives during the Holocaust.",
    review: "A deeply moving historical drama.",
    watch:
      "https://www.youtube.com/results?search_query=schindlers+list+trailer",
    download: "#",
  },
  {
    title: "Pulp Fiction",
    type: "movie",
    genre: "Crime/Drama",
    year: 1994,
    rating: 8.8,
    img: "https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
    story: "Interwoven tales of crime and redemption in LA.",
    review: "Quentin Tarantino's most iconic film.",
    watch: "https://www.youtube.com/results?search_query=pulp+fiction+trailer",
    download: "#",
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    type: "movie",
    genre: "Adventure/Fantasy",
    year: 2003,
    rating: 8.9,
    img: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    story: "The final battle for Middle-earth begins.",
    review: "An epic conclusion to a legendary trilogy.",
    watch:
      "https://www.youtube.com/results?search_query=lotr+return+of+the+king+trailer",
    download: "#",
  },
  {
    title: "Forrest Gump",
    type: "movie",
    genre: "Drama/Romance",
    year: 1994,
    rating: 8.8,
    img: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    story: "Life through the eyes of a gentle soul who influences history.",
    review: "Heartwarming and unforgettable.",
    watch: "https://www.youtube.com/results?search_query=forrest+gump+trailer",
    download: "#",
  },
  {
    title: "Fight Club",
    type: "movie",
    genre: "Drama",
    year: 1999,
    rating: 8.8,
    img: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
    story:
      "A man forms an underground fight club that evolves into something more.",
    review: "A raw commentary on modern life.",
    watch: "https://www.youtube.com/results?search_query=fight+club+trailer",
    download: "#",
  },
  {
    title: "The Matrix",
    type: "movie",
    genre: "Action/Sci-Fi",
    year: 1999,
    rating: 8.7,
    img: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    story: "A hacker discovers reality is a simulation.",
    review: "Revolutionary action and philosophical sci‑fi.",
    watch: "https://www.youtube.com/results?search_query=the+matrix+trailer",
    download: "#",
  },
  {
    title: "Goodfellas",
    type: "movie",
    genre: "Crime/Drama",
    year: 1990,
    rating: 8.7,
    img: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    story: "The rise and fall of mob associate Henry Hill.",
    review: "Scorsese’s masterclass crime drama.",
    watch: "https://www.youtube.com/results?search_query=goodfellas+trailer",
    download: "#",
  },
  {
    title: "Se7en",
    type: "movie",
    genre: "Crime/Thriller",
    year: 1995,
    rating: 8.6,
    img: "https://image.tmdb.org/t/p/w500/69Sns8WoET6CfaYlIkHbla4l7nC.jpg",
    story:
      "Two detectives hunt a serial killer based on the seven deadly sins.",
    review: "Gripping and disturbing thriller.",
    watch: "https://www.youtube.com/results?search_query=se7en+trailer",
    download: "#",
  },
  {
    title: "The Silence of the Lambs",
    type: "movie",
    genre: "Thriller/Horror",
    year: 1991,
    rating: 8.6,
    img: "https://image.tmdb.org/t/p/w500/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg",
    story: "An FBI trainee seeks help from a cannibalistic killer.",
    review: "Iconic psychological horror.",
    watch:
      "https://www.youtube.com/results?search_query=silence+of+the+lambs+trailer",
    download: "#",
  },
  {
    title: "Saving Private Ryan",
    type: "movie",
    genre: "War/Drama",
    year: 1998,
    rating: 8.6,
    img: "https://image.tmdb.org/t/p/w500/zwhP5b4tD0ZUbwqJwlenkYI4GZn.jpg",
    story: "During WWII, soldiers search for a paratrooper behind enemy lines.",
    review: "Powerful portrayal of war’s human cost.",
    watch:
      "https://www.youtube.com/results?search_query=saving+private+ryan+trailer",
    download: "#",
  },
  {
    title: "Gladiator",
    type: "movie",
    genre: "Action/Drama",
    year: 2000,
    rating: 8.5,
    img: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    story: "A betrayed Roman general seeks vengeance.",
    review: "Epic historical action drama.",
    watch: "https://www.youtube.com/results?search_query=gladiator+trailer",
    download: "#",
  },
  // 50 TV Series
  {
    title: "The Last of Us",
    type: "series",
    genre: "Drama/Action",
    year: 2023,
    rating: 8.7,
    img: "https://image.tmdb.org/t/p/w500/uuTE7921AIeY1vKMWo66W1KOQFB.jpg",
    story:
      "Survivors in a post‑pandemic world struggle with infection and human threat.",
    review:
      "Highly acclaimed adaptation with emotional depth and intense drama.",
    watch:
      "https://www.youtube.com/results?search_query=the+last+of+us+trailer",
    download: "#",
  },
  {
    title: "Dark",
    type: "series",
    genre: "Sci‑Fi/Mystery",
    year: 2017,
    rating: 8.8,
    img: "https://image.tmdb.org/t/p/w500/z2yahl2uefxDCl0nogcRBstwruJ.jpg",
    story:
      "Time travel secrets unravel in a small German town with vanished children.",
    review: "Complex and critically acclaimed mind‑bending story.",
    watch: "https://www.youtube.com/results?search_query=dark+netflix+trailer",
    download: "#",
  },
  {
    title: "Arrow",
    type: "series",
    genre: "Action/Adventure",
    year: 2012,
    rating: 7.5,
    img: "https://image.tmdb.org/t/p/w500/qS8dn1ybY1HkP9eCXl0oy5QqdD9.jpg",
    story: "A billionaire playboy becomes a vigilante archer fighting crime.",
    review: "Engaging comic‑book action with serialized storytelling.",
    watch: "https://www.youtube.com/results?search_query=arrow+trailer",
    download: "#",
  },
  {
    title: "The Bear",
    type: "series",
    genre: "Drama/Comedy",
    year: 2022,
    rating: 8.3,
    img: "https://image.tmdb.org/t/p/w500/e7y6EsaE3dOS2mkP5t2fGFp3WeD.jpg",
    story:
      "An intense chef returns home to run his family restaurant under stress.",
    review: "Critically praised for raw storytelling and character work.",
    watch:
      "https://www.youtube.com/results?search_query=the+bear+series+trailer",
    download: "#",
  },
  {
    title: "Squid Game",
    type: "series",
    genre: "Drama/Thriller",
    year: 2021,
    rating: 8.0,
    img: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    story:
      "Contestants play deadly versions of children’s games for a huge cash prize.",
    review: "Global sensation with gripping tension.",
    watch: "https://www.youtube.com/results?search_query=squid+game+trailer",
    download: "#",
  },
  {
    title: "Game of Thrones",
    type: "series",
    genre: "Fantasy/Drama",
    year: 2011,
    rating: 9.2,
    img: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
    story:
      "Noble families vie for control of the Iron Throne in a brutal realm.",
    review: "Epic, character‑rich fantasy with political intrigue.",
    watch:
      "https://www.youtube.com/results?search_query=game+of+thrones+trailer",
    download: "#",
  },
  {
    title: "Breaking Bad",
    type: "series",
    genre: "Crime/Drama",
    year: 2008,
    rating: 9.5,
    img: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    story:
      "A chemistry teacher turns to making meth to secure his family’s future.",
    review: "One of TV’s most acclaimed dramas ever.",
    watch: "https://www.youtube.com/results?search_query=breaking+bad+trailer",
    download: "#",
  },
  {
    title: "The Wire",
    type: "series",
    genre: "Crime/Drama",
    year: 2002,
    rating: 9.3,
    img: "https://image.tmdb.org/t/p/w500/5ga6YTEYk9F8fR01nNGO4oSAwQk.jpg",
    story:
      "Baltimore’s crime, law enforcement, and city politics are examined deeply.",
    review: "Critically praised for systemic realism and character depth.",
    watch: "https://www.youtube.com/results?search_query=the+wire+trailer",
    download: "#",
  },
  {
    title: "Peaky Blinders",
    type: "series",
    genre: "Crime/Drama",
    year: 2013,
    rating: 8.8,
    img: "https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
    story: "A gangster family rises in Birmingham after World War I.",
    review: "Stylish period crime drama with standout performances.",
    watch:
      "https://www.youtube.com/results?search_query=peaky+blinders+trailer",
    download: "#",
  },
  {
    title: "The Crown",
    type: "series",
    genre: "Drama/History",
    year: 2016,
    rating: 8.7,
    img: "https://image.tmdb.org/t/p/w500/wO4pkOWpsCG7z7z54mFmWWHlBvC.jpg",
    story: "The life and reign of Queen Elizabeth II explored in detail.",
    review: "Elegant and immersive historical drama.",
    watch: "https://www.youtube.com/results?search_query=the+crown+trailer",
    download: "#",
  },
  {
    title: "Mindhunter",
    type: "series",
    genre: "Crime/Thriller",
    year: 2017,
    rating: 8.6,
    img: "https://image.tmdb.org/t/p/w500/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg",
    story: "FBI agents interview serial killers to solve ongoing cases.",
    review: "Psychological and riveting procedural series.",
    watch: "https://www.youtube.com/results?search_query=mindhunter+trailer",
    download: "#",
  },
  {
    title: "Stranger Things",
    type: "series",
    genre: "Mystery/Sci‑Fi",
    year: 2016,
    rating: 8.7,
    img: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    story: "Kids uncover supernatural forces and secret labs in their town.",
    review: "Nostalgic thriller blending 80s vibes with mystery.",
    watch:
      "https://www.youtube.com/results?search_query=stranger+things+trailer",
    download: "#",
  },
  {
    title: "Westworld",
    type: "series",
    genre: "Sci‑Fi/Drama",
    year: 2016,
    rating: 8.6,
    img: "https://image.tmdb.org/t/p/w500/mVDFKQKKDZQYt4syGygi8wjk6mG.jpg",
    story: "AI hosts in a Western theme park evolve beyond programming.",
    review: "Thought‑provoking philosophical sci‑fi.",
    watch: "https://www.youtube.com/results?search_query=westworld+trailer",
    download: "#",
  },
  {
    title: "The Mandalorian",
    type: "series",
    genre: "Action/Sci‑Fi",
    year: 2019,
    rating: 8.8,
    img: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
    story: "A lone bounty hunter protects a mysterious child in space.",
    review: "Star Wars western with cinematic production.",
    watch: "https://www.youtube.com/results?search_query=mandalorian+trailer",
    download: "#",
  },
  {
    title: "Black Mirror",
    type: "series",
    genre: "Sci‑Fi/Anthology",
    year: 2011,
    rating: 8.8,
    img: "https://image.tmdb.org/t/p/w500/5DFs0YEg3O53WEgWpubj4KMkx6E.jpg",
    story: "Standalone episodes explore dark sides of technology.",
    review: "Innovative and chilling anthology drama.",
    watch: "https://www.youtube.com/results?search_query=black+mirror+trailer",
    download: "#",
  },
  {
    title: "Parasite",
    type: "movie",
    genre: "Thriller/Drama",
    year: 2019,
    rating: 8.6,
    img: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    story:
      "A poor family schemes to infiltrate a wealthy household with unexpected consequences.",
    review: "Clever social satire with suspenseful twists.",
    watch: "https://www.youtube.com/results?search_query=parasite+2019+trailer",
    download: "#",
  },
  {
    title: "The Babadook",
    type: "movie",
    genre: "Horror/Psychological",
    year: 2014,
    rating: 8.0,
    img: "https://image.tmdb.org/t/p/w500/baOIWlLmpFNPJOVANQ43AHz3pvA.jpg",
    story: "A mother and son face a sinister presence from a mysterious book.",
    review: "Innovative horror relying on atmosphere and emotion.",
    watch: "https://www.youtube.com/results?search_query=the+babadook+trailer",
    download: "#",
  },
  {
    title: "Pan's Labyrinth",
    type: "movie",
    genre: "Fantasy/Drama",
    year: 2006,
    rating: 8.2,
    img: "https://image.tmdb.org/t/p/w500/jHW5lUacbjLWJFdIFexRDRBKdyz.jpg",
    story: "A young girl escapes into a mythical labyrinth during wartime.",
    review: "A haunting fairy tale with stunning visuals.",
    watch:
      "https://www.youtube.com/results?search_query=pans+labyrinth+trailer",
    download: "#",
  },
  {
    title: "Psycho",
    type: "movie",
    genre: "Horror/Thriller",
    year: 1960,
    rating: 8.5,
    img: "https://image.tmdb.org/t/p/w500/6X6dCw2Yr7nl3voM9xX3S0vptLf.jpg",
    story: "A secretary steals money and encounters a disturbed motel owner.",
    review: "Classic Hitchcock thriller that redefined horror.",
    watch: "https://www.youtube.com/results?search_query=psycho+1960+trailer",
    download: "#",
  },
  {
    title: "City of God",
    type: "movie",
    genre: "Crime/Drama",
    year: 2002,
    rating: 8.6,
    img: "https://image.tmdb.org/t/p/w500/4G6D1LAF7tKmMew5lXjqZM4F6jP.jpg",
    story:
      "Two boys grow up in violent slums of Rio with very different paths.",
    review: "Raw and powerful look at life in the favelas.",
    watch: "https://www.youtube.com/results?search_query=city+of+god+trailer",
    download: "#",
  },
  {
    title: "Moonlight",
    type: "movie",
    genre: "Drama",
    year: 2016,
    rating: 7.4,
    img: "https://image.tmdb.org/t/p/w500/ylLzytSWJzYzG2UuXERf2R8dQKf.jpg",
    story:
      "A young man’s journey to find himself through childhood, adolescence, and adulthood.",
    review: "Intimate and beautifully acted character study.",
    watch:
      "https://www.youtube.com/results?search_query=moonlight+2016+trailer",
    download: "#",
  },
  {
    title: "No Country for Old Men",
    type: "movie",
    genre: "Crime/Thriller",
    year: 2007,
    rating: 8.1,
    img: "https://image.tmdb.org/t/p/w500/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg",
    story:
      "A hunter stumbles on drug money and a relentless killer in the desert.",
    review: "Grim, stylish cat-and-mouse crime thriller.",
    watch:
      "https://www.youtube.com/results?search_query=no+country+for+old+men+trailer",
    download: "#",
  },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    type: "movie",
    genre: "Romance/Sci‑Fi",
    year: 2004,
    rating: 8.3,
    img: "https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg",
    story: "A couple erase memories of each other in a unique sci‑fi twist.",
    review: "Emotional and inventive love story.",
    watch:
      "https://www.youtube.com/results?search_query=eternal+sunshine+of+the+spotless+mind+trailer",
    download: "#",
  },
  {
    title: "Spirited Away",
    type: "movie",
    genre: "Animation/Fantasy",
    year: 2001,
    rating: 8.6,
    img: "https://image.tmdb.org/t/p/w500/dL11DBPcRhWWnJcFXl9A07MrqTI.jpg",
    story: "A young girl navigates a magical spirit world to save her parents.",
    review: "Beautiful, imaginative animated masterpiece.",
    watch: "https://www.youtube.com/results?search_query=spirited+away+trailer",
    download: "#",
  },
  {
    title: "Get Out",
    type: "movie",
    genre: "Horror/Mystery",
    year: 2017,
    rating: 7.7,
    img: "https://image.tmdb.org/t/p/w500/rHzoz5Hy3L9IAIEtRe1jcU3zoXE.jpg",
    story:
      "A Black man uncovers disturbing truths visiting his girlfriend’s family.",
    review: "Innovative horror with sharp social commentary.",
    watch: "https://www.youtube.com/results?search_query=get+out+2017+trailer",
    download: "#",
  },
  {
    title: "Mad Max: Fury Road",
    type: "movie",
    genre: "Action/Sci‑Fi",
    year: 2015,
    rating: 8.1,
    img: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
    story: "In a post‑apocalyptic wasteland, rebels flee a tyrant.",
    review: "High‑octane action spectacle.",
    watch:
      "https://www.youtube.com/results?search_query=mad+max+fury+road+trailer",
    download: "#",
  },
  {
    title: "Oldboy",
    type: "movie",
    genre: "Thriller/Action",
    year: 2003,
    rating: 8.4,
    img: "https://image.tmdb.org/t/p/w500/7X3fq7Yl2hB2aG4r2pwG4GIkZXa.jpg",
    story: "A man imprisoned for years seeks revenge in a shocking twist.",
    review: "Intense, unforgettable revenge thriller.",
    watch: "https://www.youtube.com/results?search_query=oldboy+2003+trailer",
    download: "#",
  },
  {
    title: "(500) Days of Summer",
    type: "movie",
    genre: "Romance/Comedy",
    year: 2009,
    rating: 7.7,
    img: "https://image.tmdb.org/t/p/w500/jQw81L0RYPFSeUhhZkhIuEN6i1Q.jpg",
    story: "A nonlinear look at a relationship’s ups and downs.",
    review: "Heartfelt and witty love story.",
    watch:
      "https://www.youtube.com/results?search_query=500+days+of+summer+trailer",
    download: "#",
  },
  {
    title: "Apocalypse Now",
    type: "movie",
    genre: "War/Drama",
    year: 1979,
    rating: 8.4,
    img: "https://image.tmdb.org/t/p/w500/jr7v25tk8gHpLZ6UwL9Yw5bdOyn.jpg",
    story: "A soldier travels upriver to assassinate an insane colonel.",
    review: "Visceral war epic.",
    watch:
      "https://www.youtube.com/results?search_query=apocalypse+now+trailer",
    download: "#",
  },
  {
    title: "Atonement",
    type: "movie",
    genre: "Drama/Romance",
    year: 2007,
    rating: 7.8,
    img: "https://image.tmdb.org/t/p/w500/qzA87WfS4cA4BCWo7EuW4nDUFkm.jpg",
    story: "A lie changes lives amid wartime tragedy.",
    review: "Poignant and beautifully crafted romance.",
    watch: "https://www.youtube.com/results?search_query=atonement+trailer",
    download: "#",
  },
  {
    title: "Hidden Figures",
    type: "movie",
    genre: "Biography/Drama",
    year: 2016,
    rating: 7.8,
    img: "https://image.tmdb.org/t/p/w500/3Gk7VceH8K3WcJ05CjZuxVW5aQ9.jpg",
    story: "Three women mathematicians break barriers at NASA.",
    review: "Inspirational true story with strong performances.",
    watch:
      "https://www.youtube.com/results?search_query=hidden+figures+trailer",
    download: "#",
  },
];

let liked = [];
let selected = null;
const grid = document.getElementById("grid");
const modal = document.getElementById("modal");
const mi = document.getElementById("modal-img");
const mt = document.getElementById("modal-title");
const mm = document.getElementById("modal-meta");
const ms = document.getElementById("modal-story");
const mr = document.getElementById("modal-rating");
const mw = document.getElementById("modal-review");
const watch = document.getElementById("watch");
const download = document.getElementById("download");
const close = document.getElementById("close");
const likeBtn = document.getElementById("like");
const search = document.getElementById("search");

function render(list) {
  grid.innerHTML = "";
  list.forEach((m) => {
    const c = document.createElement("div");
    c.className = "card";
    c.innerHTML = `
      <img src="${m.img}">
      <div class="card-info">
        <strong>${m.title}</strong><br>
        ⭐ ${m.rating} • ${m.type}
      </div>`;
    c.onclick = () => openModal(m);
    grid.appendChild(c);
  });
}

function openModal(m) {
  selected = m;
  mi.src = m.img;
  mt.textContent = m.title;
  mm.textContent = `${m.genre} • ${m.year} • ${m.type}`;
  ms.textContent = m.story;
  mw.textContent = m.review;
  mr.textContent = m.rating;
  watch.href = m.watch;
  download.href = m.download;
  modal.classList.remove("hidden");
}

close.onclick = () => modal.classList.add("hidden");
modal.onclick = (e) => {
  if (e.target === modal) modal.classList.add("hidden");
};
likeBtn.onclick = () => {
  if (selected && !liked.includes(selected)) liked.push(selected);
};
search.oninput = (e) => {
  const q = e.target.value.toLowerCase();
  render(movies.filter((m) => m.title.toLowerCase().includes(q)));
};

render(movies);
