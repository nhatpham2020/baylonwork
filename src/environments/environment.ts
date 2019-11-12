// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCU0iBsPJOf_HgItfr2i2q61tkLUagU51Y',
    authDomain: 'gunproject-64f84.firebaseapp.com',
    databaseURL: 'https://gunproject-64f84.firebaseio.com',
    projectId: 'gunproject-64f84',
    storageBucket: 'gunproject-64f84.appspot.com',
    messagingSenderId: '425845612067',
    appId: '1:425845612067:web:9427340181593647'
  },
  stripeKey : 'pk_test_TBPSf1mZaitt40UlkKxv7CR900LleNR0Fq',
  apiBaseURL: 'http://localhost:3000/'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
