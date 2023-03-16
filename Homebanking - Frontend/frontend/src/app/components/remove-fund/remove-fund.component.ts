import { Component } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { Movements } from 'src/app/movements';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remove-fund',
  templateUrl: './remove-fund.component.html',
  styleUrls: ['./remove-fund.component.css'],
})
export class RemoveFundComponent {
  // Table Angular Material
  displayedColumns: string[] = ['name_fund', 'amount_fund', 'actions'];

  constructor(private dataService: ApiserviceService, private router: Router) {}

  listData!: Movements[];
  dataSource: any;
  authentication: any;

  removeDeposit() {
    this.dataService.getAllData().subscribe((res) => {
      this.listData = res.data;
      this.dataSource = new MatTableDataSource(this.listData);
    });
  }

  removefund(id: any) {
    this.dataService.removeDeposit(id).subscribe((res) => {
      this.removeDeposit();
    });
  }

  ngOnInit(): void {
    this.removeDeposit();

    this.authentication = localStorage.getItem('token');
    if (this.authentication) {
      this.router.navigate(['remove_fund']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
