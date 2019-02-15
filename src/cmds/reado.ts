import {ControllerSer} from '../ControllerSer'

export const command:string = ('read <id>');
export const desc:string = ('read one ser');
export const builder = (yargs:any) => {
    return yargs;
};
export const handler = (argv:any) => {
    console.log(ControllerSer.readOne(argv.id))
}