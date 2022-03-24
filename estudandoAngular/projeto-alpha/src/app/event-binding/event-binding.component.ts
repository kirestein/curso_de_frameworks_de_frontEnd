import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  //estamos implementando um método para ser vinculado na view
  exibirAlerta(): void{
    console.log('Evento disparado...')
    alert('Evento disparado...')
  }
}
