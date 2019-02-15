import {ControllerSer} from '../ControllerSer'

export const command:string = ('create <id> <name>');
export const desc:string = ('create a ser');
export const builder = (yargs:any) => {
    return yargs;
};
export const handler = (argv:any) => {
    if(ControllerSer.createSer(argv.id,argv.name)){
        console.log('the ser was created successfuly');
    }else{
        console.log('a ser with this id already exists');
    }
}