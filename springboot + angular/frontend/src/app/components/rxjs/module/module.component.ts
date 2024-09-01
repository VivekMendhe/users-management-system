import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { OfOperatorComponent } from "../of-operator/of-operator.component";

@Component({
  selector: "app-module",
  standalone: true,
  imports: [CommonModule, OfOperatorComponent],
  templateUrl: "./module.component.html",
  styleUrl: "./module.component.css",
})
export class ModuleComponent {
  agents!: Observable<string>;
  agentName!: string;

  constructor() {}

  ngOnInit(): void {
    this.agents = new Observable(function (observer) {
      try {
        observer.next("Mark 1");
        setTimeout(() => {
          observer.next("Mark 27");
        }, 2000);
        setTimeout(() => {
          observer.next("Mark 48");
        }, 4000);
      } catch (error) {
        observer.error(error);
      }
    });
    this.agents.subscribe((data) => {
      this.agentName = data;
      // console.log(data);
    });
  }
}
