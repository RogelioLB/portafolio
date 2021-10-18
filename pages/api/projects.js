import fs from "fs";
import path from "path";

export default (req,res)=>{
    const dirname = path.resolve(process.cwd(),"./public/projects")
    const directories = fs.readdirSync(dirname);
    const data = directories.map((el)=>{
        try{
            const data = fs.readFileSync(path.resolve(dirname,el,"data.json")).toString();
            const json = JSON.parse(data);
            return json
        }catch(err){
            return {err}
        }
    }).sort((a,b)=>b.important-a.important);
    console.log(data)
    return res.json(data)
}