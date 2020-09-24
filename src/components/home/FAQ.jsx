import React, { Component } from "react";
import { Slide } from "react-reveal";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";

class QuestionReveal extends Component {
  state = {
    expanded: false,
  }

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
            })
          }}
        >
          <AccordionSummary
            className="px-0"
            expandIcon={<i className="icon fas fa-chevron-up ml-2"></i>}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography>{q}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="answer">
              {a}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }
}

class FAQ extends Component {
  state = {
    expanded: "",
  };

  render() {
    const questions = [
      {
        q: "Apa itu InvestX?",
        a:
          "InvestX membantu anda menghimpun dana dengan mudah dengan aturan yang lebih mudah dibanding pinjaman bank dan mekanisme penawaran saham yang lebih sederhana dibanding IPO. Dengan sistem equity crowdfunding, anda hanya perlu membagi dividen kepada investor tanpa bunga atau denda.",
      },
      {
        q: "lorem",
        a: "ipsum",
      },
      {
        q: "lorem",
        a: "ipsum",
      },
      {
        q: "lorem",
        a: "ipsum",
      },
      {
        q: "lorem",
        a: "ipsum",
      },
      {
        q: "lorem",
        a: "ipsum",
      },
    ];

    const setExpanded = (status) => {
      this.setState({
        expanded: status,
      });
    };

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    const midIndex = Math.ceil(questions.length / 2);
    const leftQuestion = questions.slice(0, midIndex);
    const rightQuestion = questions.slice(midIndex, questions.length);

    return (
      <div className="faq">
        <h3 className="bold">Pertanyaan yang sering diajukan</h3>
        <br />
        <br />
        <div className="row justify-content-between">
          <div className="col-md-6">
            {leftQuestion.map((data, index) => (
              <QuestionReveal key={index} data={data} />
            ))}
          </div>
          <div className="col-md-6">
            {rightQuestion.map((data, index) => (
              <QuestionReveal key={index} data={data} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default FAQ;
