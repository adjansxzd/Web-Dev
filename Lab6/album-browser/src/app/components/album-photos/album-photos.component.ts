import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../../services/album';
import { Photo } from '../../models/photo';
@Component({
  selector: 'app-album-photos',
  imports: [],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css',
})
export class AlbumPhotosComponent implements OnInit{
  photos: Photo[] = [];
  albumId!: number;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbumPhotos(this.albumId).subscribe(data => {
      this.photos = data;
      this.loading = false;
    });
  }

  goBack(): void {
    this.router.navigate(['/albums', this.albumId]);
  }  
}
