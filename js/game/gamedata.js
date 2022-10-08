class GameData{
    constructor(){
        this.company = new Company({})
    }
   
    load(obj){
        this.company = new Company(obj.company)
    }
    get(){
        return {
            company : this.company.getData(),
        }
    }
}