// Get Manifest

import * as d33 from 'd3-geo-projection'
import { resolve } from 'node:path/win32';
import files from '../../resources/manifests/index.json'



export const getManifests = () => {
  
       var data : any= {};
       files.files.forEach(file => {
           console.log(file)
           var data1 = require('../../resources/manifests/' + file)
           data[file] = data1
       })
       console.log("getManifest data done: ", data)
       return data
       
  
}
  