import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  girlNames = [
            'Azula',
            'Djulinana',
            'Olivia',
            'Emma',
            'Simone',
            'Candaska',
            'Ava',
            'Sophia',
            'Isabella',
            'Scarlett',
            'Chloe',
            'Galadriel',
            'Suki',
            'Ty lee',
            'Toph',
            'Kyoshi',
            'Nyla'
          ];
  boyNames = [
            'Abuzer',
            'Sauron',
            'Zuko',
            'Azulon',
            'Witch-king',
            'Morgoth',
            'Thranduil',
            'Haradrim',
            'Elendil'

  ];

  constructor() { }

  ngOnInit(): void {
  }
  randomGirlName(): void{
    const nameShowCase = document.getElementById('nameShowCase') as HTMLElement;
    nameShowCase.className = 'girlClass';
    const randomGirlName = this.girlNames[Math.floor(Math.random() * this.girlNames.length)];
    nameShowCase.innerHTML = randomGirlName;
  }
  randomBoyName(): void{
    const nameShowCase = document.getElementById('nameShowCase') as HTMLElement;
    nameShowCase.className = 'boyClass';
    const randomBoyName = this.boyNames[Math.floor(Math.random() * this.boyNames.length)];
    nameShowCase.innerHTML = randomBoyName;
  }
}
