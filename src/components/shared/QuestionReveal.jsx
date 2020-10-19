import React, { Component } from "react";

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";

class QuestionReveal extends Component {
    state = {
        expanded: false,
    };

    render() {
        const { q, a } = this.props.data;
        return (
            <div className="question-reveal-wrapper">
                <Accordion
                    className="question-reveal"
                    expanded={this.state.expanded === true}
                    onChange={() => {
                        this.setState({
                            expanded: !this.state.expanded,
                        });
                    }}
                >
                    <AccordionSummary
                        className="px-0 item"
                        expandIcon={<i className="icon fas fa-chevron-up"></i>}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography className="question">{q}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="answer">{a}</Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        );
    }
}

export default QuestionReveal;
