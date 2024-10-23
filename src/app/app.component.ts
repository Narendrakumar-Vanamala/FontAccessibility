import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FontSizeService } from './font-size.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
   

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  changeFontSize(size: string) {
    this.fontSizeService.setFontSize(size);
  }


  constructor(private fontSizeService: FontSizeService,private router: Router){

  }

  nextPage(){
    this.router.navigateByUrl('test');
  }

  prevPage(){
    this.router.navigateByUrl('test1');
  }



 

}
