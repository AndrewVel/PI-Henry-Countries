import React from "react";
import { connect } from "react-redux";
import { getCountries } from "../../redux/actions";
import Card from "../Card/Card";
import "./CardsModule.css";

class Cards extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCountries();
  }

  render() {
    return (
      <div className="container">
        {this.props.countries.map((country) => {
          return (
            <Card
              name={country.name}
              flags={country.flags}
              continents={country.continents}
            />
          );
        })}{" "}
      </div>
    );
  }
}

//-----------------------------------------------------------------------------
const mapStateToProps = (state) => {
  return {
    countries: state.countries,
  };
};
//-----------------------------------------------------------------------------
const mapDispatchToProps = (dispatch) => {
  return {
    getCountries: () => dispatch(getCountries()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
