import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
  
  datas = [
    {name:'Helan',age:20,workStatus:true,educated:true},
    {name:'Mark',age:40,workStatus:true,educated:false},
    {name:'cuban',age:19,workStatus:false,educated:true},
  ]

  colOrder = [
    {keys:"name", value:"Name" },
    {keys:"age", value:"Age" },
    {keys:"workStatus", value:"Work Status" },
    {keys:"educated", value:"Education" },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
