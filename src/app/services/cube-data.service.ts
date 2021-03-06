import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { ICube } from '../components/cube/cube.component';
import { rows } from 'src/app/mock/rows-mock';

@Injectable({
  providedIn: 'root'
})
export class CubeDataService {
  rows = rows;
  previewActive$ = new BehaviorSubject<boolean>(false);
  expandedActive$ = new BehaviorSubject<boolean>(false);
  currentCubeData$ = new Subject<{
    position: ICubePosition,
    cube: ICube | undefined,
    cubeElement: any
  }>();
  constructor() { }
  setData(cubeElement: any, cube: ICube | undefined): void {
    let cubeRect = cubeElement.hostElement.nativeElement.getBoundingClientRect();
    let appRoot = document.getElementById("app-root");
    let left = cubeRect.left + appRoot?.scrollLeft;
    let right = cubeRect.right + appRoot?.scrollLeft;
    let width = right - left;
    let transformFactor = 1;
    let transformOrigin = "top";
    if (left < width) {
      transformFactor = 0;
      transformOrigin = "left top";
    } else if (right > window.innerWidth - width) {
      transformFactor = 2;
      transformOrigin = "right top";
    }
    let position = {
      previewTop: cubeElement.hostElement.nativeElement.getBoundingClientRect().top + appRoot?.scrollTop,
      expandedTop: cubeElement.hostElement.nativeElement.getBoundingClientRect().top,
      left: left,
      right: right,
      transformOrigin: transformOrigin,
      transformFactor: transformFactor,
      baseWidth: width
    }
    this.currentCubeData$.next({ position, cube, cubeElement });
  }
}

export interface ICubePosition {
  previewTop: number;
  expandedTop: number;
  left: number;
  right: number;
  transformOrigin: string;
  transformFactor: number;
  baseWidth: number;
}

