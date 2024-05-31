import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopLeftComponent } from './components/top-left/top-left.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { RadioComponent } from './components/radio/radio.component';
import { ChartsComponent } from './components/charts/charts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    TopLeftComponent, 
    SidebarComponent, 
    HeaderComponent, 
    FooterComponent, 
    ArtistsComponent, AlbumsComponent, RadioComponent, ChartsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'spotify-clone';
}
