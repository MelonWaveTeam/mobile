import { Component } from '@angular/core';

interface Languages {
  languageIcon: string;
  languageName: string;
  languageAuthor: string;
  year: number
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}
  mayname: string = 'Даниил';
  mylist: string[] = ['Java', 'Python', 'C++', 'Assembler', 'php', 'C#', 'JavaScript', 'TypeScript', 'Go', 'Rust'];

  languages: Languages[] = [{languageIcon: '/assets/img//java.png', languageName: 'Java', languageAuthor: 'James Gosling', year: 1995},
    {languageIcon: '/assets/img/python.jpeg', languageName: 'Python', languageAuthor: 'Guido van Rossum', year: 1991},
    {languageIcon: '/assets/img//cPlusPlus.png', languageName: 'C++', languageAuthor: 'Bjarne Stroustrup', year: 1985},
    {languageIcon: '/assets/img//asm.png', languageName: 'Assembler', languageAuthor: 'Unknown', year: 1949}
  ];



  myinfo: Array<{name: string, surname: string}> = [
    {name: 'Даниил', surname: 'Авасев'}
  ];
  myfullname: string[] = ['Авасев', 'Даниил', 'Сергеевич'];
  myage: number = 20;
  ifMarried: boolean = false;

}
