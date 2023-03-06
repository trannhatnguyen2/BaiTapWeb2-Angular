import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-bai10-binding-two-way-ly',
  templateUrl: './bai10-binding-two-way-ly.component.html',
  styleUrls: ['./bai10-binding-two-way-ly.component.css'],
})
export class Bai10BindingTwoWayLYComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  days = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
  ];

  months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

  years = [
    '2000',
    '2001',
    '2002',
    '2003',
    '2004',
    '2005',
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',
    '2024',
    '2025',
  ];

  public solarYear = 0;
  public solarMonth = 0;
  public solarDay = 0;
  public longitude = 0;
}
