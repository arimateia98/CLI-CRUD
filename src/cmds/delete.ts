import {ControllerSer} from '../ControllerSer'

export const command:string = ('delete <id>');
export const desc:string = ('delete a ser');
export const builder = (yargs:any) =>{
    return yargs;
};
export const handler = (argv:any) =>{
    if( ControllerSer.deleteSer(argv.id)){
        console.log('the ser was deleted successfully')
    }else{
        console.log('not exist a ser with this id');
    }
}