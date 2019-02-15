import {ControllerSer} from '../ControllerSer';

export const command:string = ('update <id> <newname>');
export const desc:string = ('change the name of a ser');
export const builder = (yargs:any) => {
    return yargs;
}

export const handler = (argv:any) =>{
    if(ControllerSer.updateSer(argv.id,argv.newname)){
        console.log('the ser was updated succesfully');
    }else{
        console.log('not exist a ser with this id');
    }
};