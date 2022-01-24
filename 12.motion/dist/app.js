import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent } from "./components/page/page.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent("Image title", "https://picsum.photos/600/300");
        this.page.addChild(image);
        const note = new NoteComponent("노트제목", "노트내용");
        this.page.addChild(note);
        const todo = new TodoComponent("투두제목", "투두할일");
        this.page.addChild(todo);
        const video = new VideoComponent("비디오 테스트", `https://www.youtube.com/embed/yCCizj8_AFE`);
        this.page.addChild(video);
    }
}
new App(document.querySelector(".document"));
