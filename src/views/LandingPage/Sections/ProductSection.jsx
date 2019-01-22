import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Cloud from "@material-ui/icons/Cloud";
import Development from "@material-ui/icons/Laptop";
import FastGrow from "@material-ui/icons/Timeline";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";


class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>hablemos de la nube</h2>
            <h5 className={classes.description}>
              podemos ofrecer arquitectura sin servidor (recomendada!) y con servidor hacemos integracion con servicios externos
              y hacemos que escale dependiendo la demanda todo esto con un costo de infrastructura MUY bajo!(en caso de pequeñass exmpresas casi gratis)
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="AWS"
                description="el texto sobre amazon"
                icon={Cloud}
                iconColor="warning"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Development"
                description="texto sobre desarrollo"
                icon={Development}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Fast Grow"
                description="texto sobre infrastructura"
                icon={FastGrow}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
