declare var require: any;
var json = require('./mock-data.json');

/**
 * Angular 2 decorators and services
 */
import {
    Component,
    ViewEncapsulation
} from '@angular/core';


/**
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app-root',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        './app.component.css'
    ],
    template: `
        <tree-diagram [data]="tree"></tree-diagram>
    `
})
export class AppComponent {

    public treeConfig = {
        nodeWidth: 150,
        nodeHeight: 100
    };

    public tree: any;


    public ngOnInit() {
        this.tree = {
            json: json,
            config: this.treeConfig
        };
    }

}
