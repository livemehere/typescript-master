export class ImageComponent {
  private element: HTMLDivElement;

  constructor() {
    this.element = document.createElement("div");
    this.element.setAttribute("class", "page");
    this.element.textContent = "이미지 컴포넌트";
  }
}
