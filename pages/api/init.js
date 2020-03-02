import FS from "fs"
import DataMgr from "./DataMgr"
import T_CONFIG from "./Config";
var htmlStr = '\
  <head>\
  <meta http-equiv="refresh" content="0;URL=http://xxx.cwpro.xyz">\
  </head>\
';

export default (req, res) => {
  if(!global.inited){
    global.inited=true;
    DataMgr.Instance.Init(T_CONFIG)
    DataMgr.Instance.Start();
    res.send(htmlStr)
  }else{
    res.send(htmlStr)
  }
}