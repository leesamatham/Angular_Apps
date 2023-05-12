import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  courses:any=[
    {
      id:1,
      name:'Learn HTML',
      description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis doloribus ab assumenda eius numquam quasi incidunt iure accusantium quisquam molestiae! Voluptas, quia ab! Delectus possimus asperiores ab minima. Iure, explicabo.',
      imgurl:'../../assets/html.jpg'
    },
    {
      id:2,
      name:'Learn CSS',
      description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis doloribus ab assumenda eius numquam quasi incidunt iure accusantium quisquam molestiae! Voluptas, quia ab! Delectus possimus asperiores ab minima. Iure, explicabo.',
      imgurl:'../../assets/css.jpg'
    },
    {
      id:3,
      name:'Learn JS',
      description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis doloribus ab assumenda eius numquam quasi incidunt iure accusantium quisquam molestiae! Voluptas, quia ab! Delectus possimus asperiores ab minima. Iure, explicabo.',
      imgurl:'../../assets/js.png'
    },
    {
      id:4,
      name:'Learn NodeJS',
      description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis doloribus ab assumenda eius numquam quasi incidunt iure accusantium quisquam molestiae! Voluptas, quia ab! Delectus possimus asperiores ab minima. Iure, explicabo.',
      imgurl:'../../assets/node.png'
    },
    {
      id:5,
      name:'Learn TypeScrpit',
      description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis doloribus ab assumenda eius numquam quasi incidunt iure accusantium quisquam molestiae! Voluptas, quia ab! Delectus possimus asperiores ab minima. Iure, explicabo.',
      imgurl:'../../assets/ts.jpg'
    },
    {
      id:6,
      name:'Learn JS',
      description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis doloribus ab assumenda eius numquam quasi incidunt iure accusantium quisquam molestiae! Voluptas, quia ab! Delectus possimus asperiores ab minima. Iure, explicabo.',
      imgurl:'../../assets/js.png'
    },
    {
      id:7,
      name:'Learn NodeJS',
      description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis doloribus ab assumenda eius numquam quasi incidunt iure accusantium quisquam molestiae! Voluptas, quia ab! Delectus possimus asperiores ab minima. Iure, explicabo.',
      imgurl:'../../assets/node.png'
    },
    {
      id:8,
      name:'Learn TypeScrpit',
      description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis doloribus ab assumenda eius numquam quasi incidunt iure accusantium quisquam molestiae! Voluptas, quia ab! Delectus possimus asperiores ab minima. Iure, explicabo.',
      imgurl:'../../assets/ts.jpg'
    }
    
  ]
}
