// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'lknxy4nv5a'
const region = 'us-east-1'
export const apiEndpoint = `https://${apiId}.execute-api.${region}.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-jkb1lhik.us.auth0.com', // Auth0 domain
  clientId: 'sskVcp2oOHsJAvrpUMhlJMTGsj5hecwh', // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
