import { Component, OnInit } from '@angular/core';
import {HomeService} from './home.service';
import {ApiData, HomeData} from '../interfaces/apidata.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public data: HomeData;
  public currentTime: Date;
  constructor(private homeService: HomeService) { 
    this.homeService.getStreamData().subscribe((data) => {
      this.currentTime = data;
    });
  }

  ngOnInit() {
    
  }

  loadData(i: number): void {
    this.homeService.getHomeData(i).subscribe((data) => {
      this.data = data;
    });
  }
}
