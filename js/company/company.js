class Company{
    constructor(obj){
        this.name = obj.name;
    }

    getData(){
        return {
            name : this.name
        }
    }
}