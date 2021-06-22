// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCXjR64mSVeKuFAb0LJNpEXg4Wty8StvvQ",
    authDomain: "weedeliver-d0c4b.firebaseapp.com",
    projectId: "weedeliver-d0c4b",
    storageBucket: "weedeliver-d0c4b.appspot.com",
    messagingSenderId: "921052914141",
    appId: "1:921052914141:web:740de6b4dd2f4dcc021634",
    measurementId: "G-SPYV6NP87H"
  },
  onesignal: {
    appId: 'a0e30d90-5213-4b10-a2b9-48b35ba51696',
    googleProjectNumber: '921052914141',
    restKey: 'NzJhZDI3MDktMDk5Mi00ODExLThjMTEtOTdjYWRlNzBhN2Y4'
  },
  stripe: {
    sk: ''
  },
  general: {
    symbol: '₱',
    code: 'PHP'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
