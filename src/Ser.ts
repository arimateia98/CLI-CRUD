class Ser{
    private id:number;
    private nome: string;
    constructor(_id:number,_nome:string){
        this.id = _id;
        this.nome = _nome;
    }
    greet(): void{
        console.log("E ae moral");
    }

    getNome(): string{
        return this.nome;
    }
    getId(): number{
        return this.id;
    }
    setNome(_nome:string): void{
        this.nome = _nome;
    }
}

export {Ser};