import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import Button from "components/CustomButtons/Button.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class WorkSection extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.section}>
                <div className={classes.container}>
                    <div className={classes.center}>
                        <h2 className={classes.title}>Work with us</h2>
                        <h4 className={classes.description}>
                            Divide details about your product or agency work into parts. Write
                            a few lines about each one and contact us about any further
                            collaboration. We will responde get back to you in a couple of
                            hours.
                        </h4>
                        <div align="center">
                            <Button className={classes.center} color="success">Send Watsapp</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(workStyle)(WorkSection);
