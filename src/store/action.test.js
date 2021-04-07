import {
  changeGenre,
  requireAuthorization,
  getMovieList,
  resetMovieList,
  loadMovies,
  loadPromoMovie,
  loadMovie,
  loadFavoriteMovies,
  loadReviews,
  redirectToRoute,
  onReviewFormError,
  setReviewFormDisabled,
  getUserInfo,
  ActionType
} from './action';
import {AuthorizationStatus} from "../const";

const user = {
  "email": `Oliver.conner@gmail.com`,
  "password": `12345678`
};

const movies = [
  {
    "name": `What We Do in the Shadows`,
    "poster_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/What-We-Do-in-the-Shadows.jpg`,
    "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/what-we-do-in-the-shadows.jpg`,
    "background_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/What-We-Do-in-the-Shadows.jpg`,
    "background_color": `#A39E81`,
    "description": `A look into the daily (or rather, nightly) lives of three vampires who've lived together for over 100 years, in Staten Island.`,
    "rating": 7.2,
    "scores_count": 6173,
    "director": `Jemaine Clement`,
    "starring": [
      `Kayvan Novak`,
      `Matt Berry`,
      `Natasia Demetriou`
    ],
    "run_time": 30,
    "genre": `Comedy`,
    "released": 2019,
    "id": 2,
    "is_favorite": true,
    "video_link": `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    "preview_video_link": `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    "name": `The Revenant`,
    "poster_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Revenant.jpg`,
    "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/revenant.jpg`,
    "background_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Revenant.jpg`,
    "background_color": `#92918B`,
    "description": `A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.`,
    "rating": 4,
    "scores_count": 618498,
    "director": `Alejandro G. Iñárritu`,
    "starring": [
      `Leonardo DiCaprio`,
      `Tom Hardy`,
      `Will Poulter`
    ],
    "run_time": 156,
    "genre": `Action`,
    "released": 2015,
    "id": 3,
    "is_favorite": false,
    "video_link": `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    "preview_video_link": `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    "name": `We need to talk about Kevin`,
    "poster_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/We_need_to_talk_about_Kevin.jpg`,
    "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/we-need-to-talk-about-kevin.jpg`,
    "background_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/We_need_to_talk_about_Kevin.jpg`,
    "background_color": `#E1DFDE`,
    "description": `Kevin's mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.`,
    "rating": 3.8,
    "scores_count": 123240,
    "director": `Lynne Ramsay`,
    "starring": [
      `Tilda Swinton`,
      `John C. Reilly`,
      `Ezra Miller`
    ],
    "run_time": 112,
    "genre": `Drama`,
    "released": 2011,
    "id": 4,
    "is_favorite": true,
    "video_link": `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  }
];

const movie = {
  name: `Macbeth`,
  backgroundColor: `#F1E9CE`,
  backgroundImg: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
  description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
  director: `Justin Kurzel`,
  genre: `Drama`,
  isavorite: false,
  posterImg: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
  previewImg: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
  previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  rating: 3.3,
  released: 2015,
  runTime: 113,
  scores: 48798,
  starring: [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`],
  videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
};

const reviews = [
  {
    "id": 1,
    "user": {
      "id": 19,
      "name": `Christina`
    },
    "rating": 9.5,
    "comment": `I love this movie. This film is a milestone in cinematography. Great Immersive camera-work. This film is an experience and i has already seen it 4 times and I only see more quality of the film.`,
    "date": `2021-03-11T08:04:28.658Z`
  },
  {
    "id": 2,
    "user": {
      "id": 17,
      "name": `Emely`
    },
    "rating": 1.8,
    "comment": `I personally found this movie to be boring. Definitely one of the most boring movies I've ever seen.`,
    "date": `2021-02-26T08:04:28.658Z`
  },
  {
    "id": 3,
    "user": {
      "id": 10,
      "name": `Max`
    },
    "rating": 2.3,
    "comment": `It was well acted, directed, and the music was good. But the story is yawn. Not trying to rip anybody but I checked my watch a dozen times during this movie.`,
    "date": `2021-03-06T08:04:28.658Z`
  }
];

describe(`Action creators work correctly`, () => {

  it(`Action creator for loading favorite movies returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_FAVORITE_MOVIES,
      payload: movies,
    };

    expect(loadFavoriteMovies(movies)).toEqual(expectedAction);
  });

  it(`Action creator for change genre returns correct action`, () => {
    const genre = `Comedy`;
    const expectedAction = {
      type: ActionType.CHANGE_GENRE,
      payload: genre,
    };

    expect(changeGenre(genre)).toEqual(expectedAction);
  });

  it(`Action creator for getting movie list returns correct action`, () => {
    const expectedAction = {
      type: ActionType.GET_MOVIE_LIST
    };

    expect(getMovieList()).toEqual(expectedAction);
  });

  it(`Action creator for resetting movie list returns correct action`, () => {
    const expectedAction = {
      type: ActionType.RESET_MOVIE_LIST
    };

    expect(resetMovieList()).toEqual(expectedAction);
  });

  it(`Action creator for change authorization status returns correct action`, () => {
    const status = AuthorizationStatus.AUTH;
    const expectedAction = {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: status,
    };

    expect(requireAuthorization(status)).toEqual(expectedAction);
  });

  it(`Action for getting movies returns correct movies`, () => {
    const expectedAction = {
      type: ActionType.LOAD_MOVIES,
      payload: movies,
    };

    expect(loadMovies(movies)).toEqual(expectedAction);
  });

  it(`Action for getting promo movie returns correct movie`, () => {
    const expectedAction = {
      type: ActionType.LOAD_PROMO_MOVIE,
      payload: movie,
    };

    expect(loadPromoMovie(movie)).toEqual(expectedAction);
  });

  it(`Action for getting movie by id returns correct movie`, () => {
    const expectedAction = {
      type: ActionType.LOAD_MOVIE,
      payload: movie,
    };

    expect(loadMovie(movie)).toEqual(expectedAction);
  });

  it(`Action for getting reviews by id returns correct review`, () => {
    const expectedAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };

    expect(loadReviews(reviews)).toEqual(expectedAction);
  });

  it(`Action creator for redirecting to route returns correct action`, () => {
    const url = `/login`;

    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: url
    };

    expect(redirectToRoute(url)).toEqual(expectedAction);
  });

  it(`Action creator for review form error returns correct action`, () => {
    const error = `404`;

    const expectedAction = {
      type: ActionType.REVIEW_FORM_ERROR,
      payload: error
    };

    expect(onReviewFormError(error)).toEqual(expectedAction);
  });

  it(`Action creator for review form status returns correct action`, () => {
    const disabled = false;

    const expectedAction = {
      type: ActionType.SET_REVIEW_FORM_DISABLED,
      payload: disabled
    };

    expect(setReviewFormDisabled(disabled)).toEqual(expectedAction);
  });

  it(`Action creator for loading user returns correct action`, () => {
    const expectedAction = {
      type: ActionType.GET_USER_INFO,
      payload: user
    };

    expect(getUserInfo(user)).toEqual(expectedAction);
  });
});
