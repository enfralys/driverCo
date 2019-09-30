import { Component, OnInit } from "@angular/core";

@Component({
    selector: "float-btn",
    template: `

    <StackLayout  class="float-btn">
        <Label text="+" class="float-btn-text"></Label>
        
    </StackLayout>
    `,
    styles:[`
        .float-btn{
            background-color: white;
            width:56;
            border-radius:28;
            height: 56;
            text-align:center;
            vertical-align: middle;
        }

        .float-btn-text {
            color: black;
            font-size:36;
        }
    `]
})
export class floatBtnComponent {

    

  
}
