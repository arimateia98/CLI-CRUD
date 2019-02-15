import {ControllerSer} from '../ControllerSer'

export const command:string = ('read');
export const desc:string = ('read all ser');
export const builder = (yargs:any) => {
    return yargs;
};

export const handler = (argv:any) =>{
    console.log(ControllerSer.readAll);
};

