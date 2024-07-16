import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MoviesService } from 'src/app/movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  constructor(private _MoviesService:MoviesService,private _ActivatedRoute:ActivatedRoute){}
  itemDetails:any;
  isLoading:boolean = true
  currentMedia:string = ''
  currentId:string = ''
  similars:any[] = []
ngOnInit(): void {
this._ActivatedRoute.paramMap.subscribe({
  next:(params)=>{
    this.currentMedia = params.get('media')!
    this.currentId = params.get('id')!
  }
})
this._MoviesService.getDetails(this.currentMedia,this.currentId).subscribe({
  next:(response)=>{
    this.isLoading = false
    this.itemDetails = response
    console.log(this.itemDetails);
    
  }
 })
 this._MoviesService.getSimilar(this.currentMedia,this.currentId).subscribe({
  next:(response)=>{
      this.similars = response.results.filter((item:any)=> item.poster_path !== null )
    console.log('similar',this.similars);
    
  }
 })
}
getDetails(media:string,id:string){
  this.isLoading = true
  this._MoviesService.getDetails(media,id).subscribe({
    next:(response)=>{
      this.isLoading = false
      this.itemDetails = response
      console.log(this.itemDetails);
      
    }
   })
   this._MoviesService.getSimilar(media,id).subscribe({
    next:(response)=>{
      this.similars = response.results.filter((item:any)=> item.poster_path !== null )
      console.log('similar',this.similars);
      
    }
   })
}
customOptions: OwlOptions = {
  loop: true,
  autoplay:true,
  autoplayHoverPause:true,
  margin:10,
  mergeFit:true,
  
  autoplaySpeed:1500,
  autoplayTimeout:2000,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    }
  },
  nav: false
}
}
