import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderElemComponent } from './components/header-elem/header-elem.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderElemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'garden_shop';

  constructor(@Inject(PLATFORM_ID) private _platformId: Object) { }

  public onActivate(event: any): void {
    if (isPlatformBrowser(this._platformId)) {
      window.scroll(0, 0);
    }
  }
}