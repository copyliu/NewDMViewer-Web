export class Serializable {
  fillFromObj(jsonObj: any) {
    // const jsonObj = JSON.parse(json);
    for (const propName in jsonObj) {
      if (jsonObj.hasOwnProperty(propName)) {
        this[propName] = jsonObj[propName];
      }

    }
  }
}
