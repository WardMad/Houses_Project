import React from "react";
import { observable, computed, action, runInAction } from "mobx";

class SomeStore extends React.Component {
  @observable jitems = [];

  @action addJitem = item => {
    this.jitems.push(item);
  };
  @computed get numberOfElements() {
    return this.jitems.length;
  }

  @action async normalize(data) {
    var validInfo = data.filter(el =>
        el.title !== "" &&
        el.location.address !== "" &&
        Number(el.coordinates.lat) !== "" &&
        Number(el.coordinates.lng) !== "" &&
        Number(el.size.parcel_m2) !== "" &&
        el.size.gross_m2 !== "" &&
        Number(el.size.rooms) !== "" &&
        el.price.Amount !== ""
    );

    return validInfo;
  }

  @action async showHouse() {
    try {
      let houseRows = await this.fetchInfo();
      let filteredData = await this.normalize(houseRows);

    //   console.log(filteredData);
      runInAction(() => {
        this.jitems = filteredData;
      });
    } catch (error) {
      runInAction(() => {
        console.log(error);
      });
    }
  }

  fetchInfo() {
    return fetch(
      "https://api.apify.com/v1/execs/4mTjBssuANkip9eHy/results?format=json&simplified=1"
    ).then(response => response.json());
  }
}

const store = new SomeStore();
export default store;
