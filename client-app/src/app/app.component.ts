import { Component } from '@angular/core';
import { TestServiceService } from './test-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client-app';
  JsonData:string;
  constructor(private test: TestServiceService){
    this.getData();
    }


  getData() {
   var JsonData;
    var t= this.test.getConfig('http://localhost:3000/api/student');
    t.subscribe(users => {this.JsonData= JSON.stringify(users)

      console.log(this.JsonData);
    });
    setTimeout(()=>{
      console.log(JsonData);
 }, 1000);

  }
  setData() {
    var JsonData;
     var t= this.test.getConfig('http://localhost:3000/api/student');
     t.subscribe(users => {this.JsonData= JSON.stringify(users)

       console.log(this.JsonData);
     });
     setTimeout(()=>{
       console.log(JsonData);
  }, 1000);

   }
  }

