import FS from "fs"

export default (req, res) => {
  console.log("__dirname")
  console.log(__dirname)
  res.writeHead(200,{'Content-Type':'text/html'})
  FS.readFile("/ReportTool.html","utf-8",(err,data)=>{
    console.log(err)
    console.log(FS.Dir)
    res.end(data)
  });
}