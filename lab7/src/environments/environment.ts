// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url : 'https://fakestoreapi.com/',
  firebase: {
    projectId: 'lab2-7dd41',
    appId: '1:303352487098:web:8ff521495c57978b963683',
    databaseURL: 'https://lab2-7dd41-default-rtdb.firebaseio.com',
    storageBucket: 'lab2-7dd41.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyB5U1xjrAVzXOJKOOzvAOnkV9CU7fTNoM4',
    authDomain: 'lab2-7dd41.firebaseapp.com',
    messagingSenderId: '303352487098',
  },
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
