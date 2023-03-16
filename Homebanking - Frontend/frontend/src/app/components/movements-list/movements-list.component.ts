import { Component, OnInit, Injectable } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

import { MatTableDataSource } from '@angular/material/table';
import { Movements } from '../../movements';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movements-list',
  templateUrl: './movements-list.component.html',
  styleUrls: ['./movements-list.component.css'],
})
export class MovementsListComponent implements OnInit {
  // Table Angular Material
  displayedColumns: string[] = ['name_fund', 'amount_fund'];
  authentication: any;
  constructor(private dataService: ApiserviceService, private router: Router) {}
  // listData: any;
  listData!: Movements[];
  dataSource: any;
  fetchMovements() {
    this.dataService.getAllData().subscribe((res) => {
      this.listData = res.data;
      this.dataSource = new MatTableDataSource(this.listData);
    });
  }

  ngOnInit(): void {
    this.authentication = localStorage.getItem('token');
    if (this.authentication) {
      this.router.navigate(['']);
    } else {
      this.router.navigate(['/login']);
    }

    this.fetchMovements();
  }
}
