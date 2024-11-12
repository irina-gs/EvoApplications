import { Component, OnInit } from '@angular/core';
import { Map, View } from 'ol';
import { Tile } from 'ol/layer';
import { OSM } from 'ol/source';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  ngOnInit(): void {
    const map = new Map({
      view: new View({
        center: [0, 0],
        zoom: 1
      }),
      layers: [
        new Tile({ source: new OSM })
      ],
      target: 'ol-map'
    })
  }
}
