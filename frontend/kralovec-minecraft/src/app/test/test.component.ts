import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'test-component',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass'],
  providers: [TestService]
})


export class TestComponent {
  title = 'test-component';

  constructor(private testService: TestService) {}

  testBackend() {
    this.testService.getConfig()
      .subscribe((data: any) => data);
  }
}