import { Component } from '@angular/core';
import { ServiceApiService } from './servicios/serviceApi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rest-countries-api';

  //backrounds
  backgroundElemts!: string
  backgroundMain!: string
  animationColor!: string
  animationColorMain!: string

  fontColor!: string
  darkmode: boolean
  //variables nav Header
  imgModeColor!: string
  txtModeColor!: string
  // main
  filterImg!: string
  txtSelect: string
  selectOpen: ConstrainBoolean
  imgSelect!: string
  nameAnimationDesple!: string
//datos del api
  dataPaises: any
//booleanos para mostrar los paises y para mostrar la descripcion
  descripcionPais: boolean
  listaPaises: boolean
  //variables para el contenido de la descripcion del pais

  constructor(private service: ServiceApiService) {
    this.darkmode = false
    this.clickModeColor()
    //main
    this.selectOpen = false
    this.txtSelect = 'Filter by Region'
    this.imgSelect = '../assets/chevron-up-outline.svg'

    this.descripcionPais = false
    this.listaPaises = true

    this.service.GetRegions().subscribe((response: any) => {
      this.dataPaises = response
    })
  }
  clickModeColor() {
    if (this.darkmode === false) {
      //bacgrounds
      this.backgroundMain = 'hsl(207, 26%, 17%)'
      this.animationColorMain = 'fromWhitetoBlackMain'
      this.backgroundElemts = 'hsl(209, 23%, 22%)'
      this.animationColor = 'fromWhitetoBlack'
      this.fontColor = 'hsl(0, 0%, 100%)'
      //header
      this.imgModeColor = '../assets/ligth-mode.png'
      this.txtModeColor = 'Dark Mode'
      //main      
      this.filterImg = 'invert(1)'

      this.darkmode = true
    } else {
      if (this.darkmode === true) {
        //background

        this.backgroundMain = 'hsl(0, 0%, 98%)'
        this.animationColorMain = 'fromBlacktoWhiteMain'
        this.backgroundElemts = 'hsl(0, 0%, 100%)'
        this.animationColor = 'fromBlacktoWhite'
        this.fontColor = 'hsl(200, 15%, 8%)'
        //header
        this.imgModeColor = '../assets/dark-mode.svg'
        this.txtModeColor = 'Ligth Mode'
        //main
        this.filterImg = 'invert(0)'

        this.darkmode = false
      }
    }
  }

  /*filter*/
  openSelect() {
    if (this.selectOpen === false) {
      this.selectOpen = true
      this.imgSelect = '../assets/chevron-down-outline.svg'
      this.nameAnimationDesple = 'animationDesple'
    } else {
      if (this.selectOpen === true) {
        this.imgSelect = '../assets/chevron-up-outline.svg'
        this.nameAnimationDesple = 'reverseanimationDesple'
        setTimeout(() => {
          this.selectOpen = false
        }, 500);

      }
    }
  }
  filterByRegion() {
    this.txtSelect = 'Filter by Region'
    this.nameAnimationDesple = 'reverseanimationDesple'
    this.imgSelect = '../assets/chevron-up-outline.svg'
    setTimeout(() => {
      this.selectOpen = false
    }, 500);
  }
  Africa() {
    this.nameAnimationDesple = 'reverseanimationDesple'
    this.imgSelect = '../assets/chevron-up-outline.svg'
    this.txtSelect = 'Africa'
    setTimeout(() => {
      this.selectOpen = false
    }, 500);
  }
  America() {
    this.nameAnimationDesple = 'reverseanimationDesple'
    this.imgSelect = '../assets/chevron-up-outline.svg'
    this.txtSelect = 'America'
    setTimeout(() => {
      this.selectOpen = false
    }, 500);
  }
  Asia() {
    this.nameAnimationDesple = 'reverseanimationDesple'
    this.imgSelect = '../assets/chevron-up-outline.svg'
    this.txtSelect = 'Asia'
    setTimeout(() => {
      this.selectOpen = false
    }, 500);
  }
  Europe() {
    this.nameAnimationDesple = 'reverseanimationDesple'
    this.imgSelect = '../assets/chevron-up-outline.svg'
    this.txtSelect = 'Europe'
    setTimeout(() => {
      this.selectOpen = false
    }, 500);
  }
  Oceania() {
    this.nameAnimationDesple = 'reverseanimationDesple'
    this.imgSelect = '../assets/chevron-up-outline.svg'

    this.txtSelect = 'Oceania'
    setTimeout(() => {
      this.selectOpen = false
    }, 500);
  }

  name!:string
  nameNative!:string
  population!:string
  region!:string
  subRegion!:string
  capital!:string
  TopLevel!:string
  currencies!:string
  lenguages!:string
  bandera!:string
  detallePais(namePais:string) {
    let i=0
    for (const data of this.dataPaises) {
      if (data.name===namePais){
        this.name=data.name
        this.nameNative=data.nativeName
        this.population=data.population
        this.region=data.region
        this.subRegion=data.subregion
        this.capital=data.capital
        this.TopLevel=data.topLevelDomain
        this.currencies=data.currencies[i].name
        this.lenguages=data.languages[i].name
        this.bandera=data.flags.svg
      }
    }
    this.descripcionPais = true
    this.listaPaises = false
  }
  RegresarAListas(){
    
    this.descripcionPais = false
    this.listaPaises = true
  }
}
