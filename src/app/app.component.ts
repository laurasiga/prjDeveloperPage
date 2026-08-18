import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent} from './core/components/header/header.component';
import { FooterComponent} from './core/components/footer/footer.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
  <h1>Hello, prjDeveloperPage</h1>
    <app-header />
    <main class="main-content">
      <router-outlet />
    </main>
    <app-footer />
  `,
  styles: [`
    .main-content {
      min-height: calc(100vh - 120px);
      padding: 1.5rem;
    }
  `],})
export class AppComponent {
  title = 'prjDeveloperPage';
}
