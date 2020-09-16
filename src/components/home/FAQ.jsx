import React, { Component } from 'react';
import { Slide } from 'react-reveal';

class QuestionReveal extends Component {
    state = {
        reveal: false,
    }

    setReveal = () => {
        this.setState({
            reveal: !(this.state.reveal)
        });
    }

    render() {
        const { q, a } = this.props.question;
        return (
            <div className="question-reveal-wrapper" >
                <div className="question-container d-flex justify-content-between">
                    <p className="question font-weight-bold">{q}</p>
                    {
                        this.state.reveal ?
                            <i onClick={this.setReveal} className="fas fa-chevron-up ml-2"></i>
                            : <i onClick={this.setReveal} className="fas fa-chevron-down ml-2"></i>
                    }
                </div>
                {
                    this.state.reveal ?
                        <Slide down>
                            <p className="answer">&emsp;{a}</p>
                        </Slide>
                        : <div></div>
                }
                <hr />
            </div>
        );
    }
}

class FAQ extends Component {
    render() {
        const questions = [
            {
                q: 'Apa itu InvestX?',
                a: 'InvestX membantu anda menghimpun dana dengan mudah dengan aturan yang lebih mudah dibanding pinjaman bank dan mekanisme penawaran saham yang lebih sederhana dibanding IPO. Dengan sistem equity crowdfunding, anda hanya perlu membagi dividen kepada investor tanpa bunga atau denda.'
            },
            {
                q: 'lorem',
                a: 'ipsum'
            },
            {
                q: 'lorem',
                a: 'ipsum'
            },
            {
                q: 'lorem',
                a: 'ipsum'
            },
            {
                q: 'lorem',
                a: 'ipsum'
            },
            {
                q: 'lorem',
                a: 'ipsum'
            }
        ];

        const midIndex = Math.ceil(questions.length / 2);
        const leftQuestion = questions.slice(0, midIndex);
        const rightQuestion = questions.slice(midIndex, questions.length);

        return (
            <div className="faq">
                <h3 className="bold">Pertanyaan yang sering diajukan</h3>
                <br /><br />
                <div className="row justify-content-between">
                    <div className="col-md-6">
                        {
                            leftQuestion.map((data, index) => (
                                <QuestionReveal question={data} key={index} />
                            ))
                        }
                    </div>
                    <div className="col-md-6">
                        {
                            rightQuestion.map((data, index) => (
                                <QuestionReveal question={data} key={index} />
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default FAQ;
