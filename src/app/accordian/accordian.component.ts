import {
  Input,
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";

@Component({
  selector: "app-accordian",
  templateUrl: "./accordian.component.html",
  styleUrls: ["./accordian.component.scss"]
})
export class AccordianComponent implements OnInit {
  @ViewChild("expandWrapper", { read: ElementRef, static: true })
  expandWrapper: ElementRef;

  @Input("expanded") expanded: boolean=false;
  @Input("expandHeight") expandHeight: string = "100%";

  icon: string = this.expanded?"chevron-forward-outline":"chevron-down-outline";
  accordionExapanded = this.expanded;
  @Input("title") title: string;

  constructor(public renderer: Renderer2) {}

  ngOnInit() {
    this.accordionExapanded = String(this.expanded)!=="false"?true:false;
    this.toggleAccordion();
  }

  toggleAccordion() {
    if (this.accordionExapanded) {
      this.renderer.setStyle(
        this.expandWrapper.nativeElement,
        "max-height",
        this.expandHeight
      );
      this.renderer.setStyle(
        this.expandWrapper.nativeElement,
        "padding",
        "13px 16px"
      );
    } else {
      this.renderer.setStyle(
        this.expandWrapper.nativeElement,
        "max-height",
        "0px"
      );
      this.renderer.setStyle(
        this.expandWrapper.nativeElement,
        "padding",
        "0px 16px"
      );
    }

    this.accordionExapanded = !this.accordionExapanded;
    this.icon = this.accordionExapanded?"chevron-forward-outline":"chevron-down-outline";
  }
}
