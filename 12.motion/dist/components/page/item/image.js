import { BaseComponent } from "../../component.js";
export class ImageComponent extends BaseComponent {
    constructor(title, url) {
        super(`
    <section class="image">
      <div class="iamge__holder">
          <img src="" alt="" class="image__thumbnail">
      </div>
      <h2 class="image__title"></h2>
    </section>
  `);
        const imageElement = this.element.querySelector(".image__thumbnail");
        imageElement.src = url;
        imageElement.alt = title;
    }
}
