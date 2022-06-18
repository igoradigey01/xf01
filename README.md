# Xf01
(корпусная мебель)  комплектующие - SMC (система управления контентом)<br>
Client for apiX01 <br/>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version  13.2.6.
sample (front):<br/>
https://xf-01.ru  <br/>


 # XF01 dependency 
 https://github.com/Mawi137/ngx-image-cropper <br/>
 https://github.com/parallax/jsPDF<br/>
 https://www.npmjs.com/package/ng-qrcode<br/>
 https://material.angular.io/components/categories <br/>


# image-cropper
 ui/img-render/img-render.component.ts <br/>
 image-cropper is Martijn <br/>
 https://github.com/Mawi137/ngx-image-cropper <br/>

# add opt categoria for client
generate opt client : go to link <br/>
http://localhost:4200/content/opt?user=opt1

# QR-code idNomenclature=12
http://localhost:4200/content/opt/optkatalog/optnomenclature/12
or (!opt) redering to
http://localhost:4200/content/categoria/katalog/nomenclature/12

# Angular Development Best Practices
https://code-maze.com/angular-best-practices/ <br/>
// project-structure <br/>
https://stackoverflow.com/questions/52933476/angular-project-structure-best-practice

# ng g 
  //loading data before load component (resolver)<br/>
  ng g resolver test   <br/>
# nginx conf
types { <br/>
               module ;<br/>
          }<br/>
    include       mime.types; <br/>

# Angular HOST on VPS
// deploy <br/>
ng build <br/>
scp -r C:\Users\Ks34\Documents\AngularProject\xf01\dist\xf01 root@46.---.---.---:~/myapp/nginx/data <br/>
// backup <br/>
scp -r root@--.--.--.---:~/myapp/images  E:\Backup_Host\Backup_images\12-05-22 <br/>
//---- docker-отчет об использовании дискового пространства <br/>
docker system df <br/>
docker volume ls <br/>
docker volume prune // delete volume <br/>
 docker ps <br/>
 # Angular Yarn
 http://prgssr.ru/development/yarn-ili-npm-vse-chto-vam-nuzhno-znat.html#heading-yarn--npm----- <br/>
 https://habr.com/ru/post/554944/<br/>
  npm install -g yarn<br/>

  # Angular PDF
  help : https://mrrio.github.io/jsPDF/examples/basic.html <br>
  npm install -g yarn<br/>
  yarn add jspdf <br/>
  //download fonts <br/>
  https://fonts.google.com/ <br/>
  //unzip <br/>
  //convert<br/>
  https://rawgit.com/MrRio/jsPDF/master/fontconverter/fontconverter.html <br/>
  add file to assets/font/my-font.js <br/>
  delete : import { jsPDF } from "jspdf"; and function <br/>
  add angular.json /first  prodject section / "scripts": ["src/assets/fonts/my-font.js"] <br/>
  add ( declare var font: any; ) header qr-code.component.ts <br/>
  restart ( ng s )<br/>
  or see js-pdf.service.ts<br/>
  
  

 
