export class Quote {
    public upvotes:number
    public downvotes:number
    public mydate:Date
    constructor(public publisher:string){
        this.upvotes=0
        this.downvotes=0
        this.mydate= new Date()

    }
}