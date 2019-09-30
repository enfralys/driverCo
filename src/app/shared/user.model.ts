export class User {
    number: string;
    name: string;
  validate(){
    if (this.number.length < 10) {
      console.log("asdasa")
      return false;
      
    }else{
      console.log("asdasa2")
      return true;
    }
  }
  }