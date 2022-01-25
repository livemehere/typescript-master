import { BaseComponent, Component } from "../component.js";

export class InputDialog
  extends BaseComponent<HTMLElement>
  implements Component
{
  constructor() {
    super(`
    <section class="dialog">
        <button class="close">&times;</button>
        <div class="dialog__body"></div>
        <button class="dialog__submit">ADD</button>
    </section>
        `);

    const closeBtn = this.element.querySelector(".close")! as HTMLElement;
    const submitBtn = this.element.querySelector(
      ".dialog__submit"
    )! as HTMLElement;
  }
}
