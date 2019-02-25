
import {Ser} from './Ser';
import fs from 'fs';
import R from 'ramda';
const jsonPath = 'array.json'

class ControllerSer{
    public static serList:Ser[]; 
    public static readJson():void{
        let data;
        ControllerSer.serList = []
        if(fs.existsSync(jsonPath)){
            data = JSON.parse(fs.readFileSync(jsonPath,'utf-8'));
            ControllerSer.addAllSer(data);
        }else{
            data = JSON.stringify(ControllerSer.serList);
            fs.writeFileSync(jsonPath,data);
        }

    }

    public static createSer(id:number,nome:string):boolean{
        let result:boolean = false;
        ControllerSer.readJson()
        if(!ControllerSer.contains(id)){
                let aux = new Ser(id,nome);
                ControllerSer.serList.push(aux);
                ControllerSer.saveAll();
                result = true;
        }
        return result;
    }

    public static deleteSer = R.pipe(
        ControllerSer.search,
        ControllerSer.delete
    )

    public static addAllSer(data:any):void{
        data.forEach(e => {
            ControllerSer.serList.push(new Ser(e.id,e.nome));
        })
    }

    public static updateSer(id:number,nome:string):boolean{
        let result:boolean = false;
        ControllerSer.readJson();
        let auxSer:Ser = R.find(R.propEq('id', id))(ControllerSer.serList)
        if(auxSer != undefined){
            auxSer.setNome(nome);
            result = true;
        }
        ControllerSer.saveAll();
        return result;
    }

    public static readAll():Ser[]{
        ControllerSer.readJson();
        return ControllerSer.serList;
    }

    public static contains(id:number):Boolean{
        return ControllerSer.serList.some(e => e.getId() == id);
    }

    public static readOne = R.pipe(
        ControllerSer.search,
        ControllerSer.returnSer
    )
 
    public static delete(index:number):boolean{
        let result:boolean = false;
        if(index != - 1 && index < ControllerSer.serList.length){
            ControllerSer.serList.splice(index,1);
            result = true;
        }
        ControllerSer.saveAll();
        return result;
    }
    public static returnSer(index:number):Ser{
        if(index != -1 && index < ControllerSer.serList.length){
            return ControllerSer.serList[index];
        }
        return null;
    }

    public static saveAll():void{
        let data = JSON.stringify(ControllerSer.serList,null,2);
        fs.writeFileSync(jsonPath,data);
    }

    public static search(id:number):number{
        ControllerSer.readJson();
        return R.findIndex(R.propEq('id',id))(ControllerSer.serList);

    }
}

export{ControllerSer};