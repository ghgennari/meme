import { Component, OnInit } from '@angular/core';
import { MemeService } from '../meme.service';

@Component({
  selector: 'app-memes',
  standalone: false,
  templateUrl: './memes.component.html',
  styleUrl: './memes.component.css'
})
export class MemesComponent implements OnInit{
  
  memes:any[] = [];

  constructor(private memeService: MemeService){}

  ngOnInit(): void {
    this.memeService.getMemes().subscribe(
      json => this.memes = json.data.memes
    )
  }


}
