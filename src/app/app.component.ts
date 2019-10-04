import { Component } from '@angular/core';

import { Post } from './post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {
      title: 'Mon premier post',
      content: 'Utque proeliorum periti rectores primo catervas densas opponunt et fortes',
      loveIts: 42,
      createdAt: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Utque proeliorum periti rectores primo catervas densas opponunt et fortes',
      loveIts: -1,
      createdAt: new Date()
    },
    {
      title: 'Encore un post',
      content: 'Ciliciam vero, quae Cydno amni exultat, Tarsus nobilitat, '
      + 'urbs perspicabilis hanc condidisse Perseus memoratur, Iovis filius et Danaes, '
      + 'vel certe ex Aethiopia profectus Sandan',
      loveIts: 0,
      createdAt: new Date()
    }
  ];
}
