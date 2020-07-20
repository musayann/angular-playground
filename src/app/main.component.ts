import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html'
})
export class MainComponent {
  title = 'main-test';
  values = '';

  onKey(event: KeyboardEvent) { // with type info
    this.values = (event.target as HTMLInputElement).value;
  }

  showBanner() {
    alert(`Saving....  (${this.values})`);
  }
}
