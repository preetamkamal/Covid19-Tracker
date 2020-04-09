import React, { Component } from "react";
// import Cards from "./components/Cards/Cards";
// import Chart from "./components/Chart/Chart";
// import CountryPicker from "./components/CountryPicker/CountryPicker";
import { fetchData } from "./api";
//*They are being imported from index.js in Components folder
import { Cards, Chart, CountryPicker } from "./components";
import coronaImage from "./images/image.png";
import styles from "./App.module.css";
class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    // console.log(fetchedData);
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    //fetch the data

    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
    //set state
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <Cards data={data}></Cards>
        <CountryPicker
          handleCountryChange={this.handleCountryChange}
        ></CountryPicker>
        <Chart data={data} country={country}></Chart>
      </div>
    );
  }
}

export default App;
