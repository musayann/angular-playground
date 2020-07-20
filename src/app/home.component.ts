import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  title = 'main-test';
  value = 'hello-tes';

  showBanner(){
      alert('alert buddy');
      this.value = 'value shown';
  }
}
