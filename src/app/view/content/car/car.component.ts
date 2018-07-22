import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ModalDirective } from '../../../typescripts/free';
import { TripcarService } from '../../../api/tripcar.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  CARINNOVA = "https://i.ytimg.com/vi/GxhwzfUPSD0/maxresdefault.jpg";
  CARFORTUNER = "http://www.trendzcar.com/wp-content/uploads/2012/12/2012-Toyota-Fortuner-VN-Turbo-Front-Angle.jpg";
  CARCAMRY = "https://cdn.trangcongnghe.com/uploads/posts/2017-05/-toyota-camry-2018-phien-ban-toan-cau-se-duoc-ra-mat-nhat-ban-vao-cuoi-nam-nay_1.jpg";
  CARKIA = "https://static.danhgiaxe.com/data/images/Kia-k3-13.jpg";
  CARATIST = "http://thuexevugia.com/wp-content/uploads/2017/04/xe-4-cho-toyota-ali.jpg";
  CARMORNING = "https://cms-i.autodaily.vn/du-lieu/2017/08/26/kia-picanto-4.jpg";
  CARSANTAFE = "http://autoexpress.vn/upload/autoexpress_news/2017/09/thu-vien-anh/xe-hyundai-tucson-2017/xe-hyundai-tucson-2017-23.jpg";
  CARAUDI = "https://danhgiaxe.net/wp-content/uploads/2017/03/audi-q5-2017-1-2.jpg";
  CARCARETO = "https://cdnxehoi.vatgia.vn/full/2018/01/03/1514975805--giam-gia-cuc-soc-kia-cerato-2018-lh-0913214554-ho-tro-tra-gop-90-khuyen-mai-nhieu-qua-tang-uu-dai-lon-picture9647.jpg";

  @ViewChild('loginModal') public loginModal: ModalDirective;

  data: any[];

  //dat xe
  username: string;
  address: string;
  phone: number;
  numberChair: number;

  param = "https://smtpjs.com/smtp.aspx?From=trungmapdit14@gmail.com&to=helloitpdu@gmail.com&Subject=khách%20đặt%20xe%20anh%20phúc%20ơi&Body=";
  param1 = "&Host=smtp.elasticemail.com&Username=c4c10941-3672-467c-85e6-b1155d509797&Password=85854bab-116f-4b3b-870c-caea5bdda2c5&Action=Send&cachebuster=64533";
  content: string;


  constructor(private toastrService: ToastrService, private tripcarService: TripcarService) { }

  logIn() {
    this.loginModal.hide();
    this.toastrService.success('Thông tin gửi đến chúng tôi thành công!', "Thông báo");
    this.content = "Họ và tên: " + this.username + " ///// Số điện thoại: tel:0" + this.phone + " ///// Nơi đi :" + this.address + " ///// Số ghế: " + this.numberChair;
    this.content = encodeURIComponent(this.content);
    this.param = this.param + this.content + this.param1

    this.tripcarService.sentMail(this.param).subscribe(() => {

    });

  }

  ngOnInit() {
    this.data = [
      {
        image: 'https://i.ytimg.com/vi/GxhwzfUPSD0/maxresdefault.jpg',
        name: 'TOYOTA INNOVA',
        petro: '12',
        price: '1.000.000'
      },
      {
        image: 'https://i.ytimg.com/vi/GxhwzfUPSD0/maxresdefault.jpg',
        name: 'TOYOTA INNOVA',
        petro: '12',
        price: '1.000.000'
      },
      {
        image: 'https://i.ytimg.com/vi/GxhwzfUPSD0/maxresdefault.jpg',
        name: 'TOYOTA INNOVA',
        petro: '12',
        price: '1.000.000'
      },
      {
        image: 'https://i.ytimg.com/vi/GxhwzfUPSD0/maxresdefault.jpg',
        name: 'TOYOTA INNOVA',
        petro: '12',
        price: '1.000.000'
      },
      {
        image: 'https://i.ytimg.com/vi/GxhwzfUPSD0/maxresdefault.jpg',
        name: 'TOYOTA INNOVA',
        petro: '12',
        price: '1.000.000'
      },
    ];
  }

}
