import { Component } from "@angular/core";

@Component({
    selector: 'post',
    templateUrl: './post.component.html'
})

export class PostComponent {
    title: String;

    constructor(){
        this.title = 'Post Component'
    }
}