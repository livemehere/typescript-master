import { BaseComponent } from "../component.js";
export class InputDialog extends BaseComponent {
    constructor() {
        super(`
    <section class="dialog">
        <button class="close">&times;</button>
        <div class="dialog__body"></div>
        <button class="dialog__submit">ADD</button>
    </section>
        `);
    }
}
