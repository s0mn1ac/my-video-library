// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  tmdbAuthenticationUrl: 'https://api.themoviedb.org/3/authentication',
  tmdbAuthenticateUrl: 'https://www.themoviedb.org/authenticate',
  tmdbMovieUrl: 'https://api.themoviedb.org/3/movie',
  tmdbSerieUrl: 'https://api.themoviedb.org/3/serie',
  tmdbKey: '2891e2c2ab994cbd1bec6f4582e77b9e'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
