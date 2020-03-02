import T_CONFIG from "./Config";

export default (req, res) => {
  let tBody = JSON.parse(req.body.request);
  if(!tBody){
      return;
  }
  if(tBody.Type=="app_list"){
      res.send({status:"success",data:T_CONFIG.Apps});
      return;
  }
  DataMgr.Instance.GetNetworkDateData(tBody.Type,tBody.Date,(tData)=>{
      res.send({status:"success",data:tData});
  });
}