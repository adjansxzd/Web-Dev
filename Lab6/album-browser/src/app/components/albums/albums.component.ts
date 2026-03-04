import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album';
import { Album } from '../../models/album';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-albums',
  imports: [RouterModule],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class AlbumsComponent implements OnInit{
  albums: Album[] = [];
  loading = true;

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe(data => {
      this.albums = data;
      this.loading = false;
    });
  }

  deleteAlbum(id: number): void {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }
}
