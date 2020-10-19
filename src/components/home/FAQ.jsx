import React, { Component } from "react";

import QuestionReveal from "../shared/QuestionReveal";

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
                <h1 className="title">Pertanyaan yang sering diajukan</h1>
                <br className="mobile-hidden" />
                <br className="mobile-hidden" />
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
