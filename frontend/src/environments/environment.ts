/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://localhost:5000', // the running FLASK api server url
  auth0: {
    url: 'dev-wv4ktcpt3cic0qi8.us', // the auth0 domain prefix
    audience: 'my-api-auth0.com', // the audience set for the auth0 app
    clientId: 'PVvUGuAWZhZd8DK2TR5Fpty25yGGKK83', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8100', // the base url of the running ionic application. 
  }
};
