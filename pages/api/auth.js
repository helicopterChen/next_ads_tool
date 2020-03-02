const {google} = require('googleapis'); 
var OAuth2 = google.auth.OAuth2;
var ClientId = "496601356493-n97c6f4p3g21qvnf01la3i51o0a1dpn5.apps.googleusercontent.com";
var ClientSecret = "XeVYyb1um5dfP3xmAevMNqrl";
var RedirectUrl = "http://xxx.cwpro.xyz/api/oauthCallback";
var htmlStr = '\
  <head>\
  <meta http-equiv="refresh" content="0;URL=http://xxx.cwpro.xyz/ReportTool.html">\
  </head>\
';

/**
 * 创建OAuth客户端
 */
function getOAuthClient() {
  return new OAuth2(ClientId, ClientSecret, RedirectUrl);
}
/**
* 生成向认证服务器申请认证的Url
*/
function getAuthurl() {
  var oauth2Client = getOAuthClient();
  // 生成一个url用来申请Googe+和Google日历的访问权限
  var scopes = [
      'https://www.googleapis.com/auth/adsense.readonly'
      // 'https://www.googleapis.com/auth/calendar'
  ];
  var url = oauth2Client.generateAuthUrl({
      // 'online' (default) or 'offline' (gets refresh_token)
      access_type: 'offline',
      // If you only need one scope you can pass it as a string
      scope: scopes,
      // Optional property that passes state parameters to redirect URI
      state: { foo: 'bar' }
  });
  return url;
}

export default (req, res) => {
  if(!global["tokens"]){
      let url = getAuthurl();
      res.end(`<h1>Google Play auth</h1><a href=${url}>Click to authorize!</a>`);
      return
  }
  res.writeHead(200,{'Content-Type':'text/html'})
  res.end(htmlStr);
}