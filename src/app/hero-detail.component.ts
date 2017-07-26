import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector:"hero-detail",
    template:`<div *ngIf="heroChosed"> 
                    <h2>{{heroChosed.name}} Details:</h2>
                    <div><label>ID:</label>{{heroChosed.id}}</div>
                    <div>
                    <label>name:</label>                   
                    <input [(ngModel)] = "heroChosed.name" placeholder="name"/>
                    </div>   
                </div> `
})

export class HeroDetailComponent{
    @Input() heroChosed: Hero;
}