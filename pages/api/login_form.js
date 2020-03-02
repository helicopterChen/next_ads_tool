export default (req, res) => {
  console.log('-----login form----')
  console.log(req)
  console.log(res)
  res.send({status:"success"});  
}