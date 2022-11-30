import React from 'react';
import './Objective.css'
import {GoPrimitiveDot} from 'react-icons/go'

const Objective = () => {
    return (
        <div className='objective-container'>
            <div className="objective-header">
                <h2 className='text-center'>Our Objective</h2>
            </div>
            <div className="objective-content container">
                <div className="content-bullet">
                    <div className="bullet">
                    <GoPrimitiveDot ></GoPrimitiveDot>
                    </div>
                    <div className="text">
                        <p>Creating a safe, judgement free, queer affirmative space for mental health counsealing.</p>
                    </div>
                </div>
                
            </div>
            <div className="objective-content container">
                <div className="content-bullet">
                    <div className="bullet">
                    <GoPrimitiveDot ></GoPrimitiveDot>
                    </div>
                    <div className="text">
                        <p>Normalising mental health issues by educating people about their condition,help them about triggers, and conditions through credible sources.</p>
                    </div>
                </div>
                
            </div>
            <div className="objective-content container">
                <div className="content-bullet">
                    <div className="bullet">
                    <GoPrimitiveDot ></GoPrimitiveDot>
                    </div>
                    <div className="text">
                        <p>Helping people understand mental health conditions better by providing information about mental health conditions through credible sources.</p>
                    </div>
                </div>
                
            </div>
            <div className="objective-content container">
                <div className="content-bullet">
                    <div className="bullet">
                    <GoPrimitiveDot ></GoPrimitiveDot>
                    </div>
                    <div className="text">
                        <p>Charging the way people view mental health by encouraging people to seek help of a proffesional in case they are mentally or emotionally distressed.</p>
                    </div>
                </div>
                
            </div>

            <div className="objective-content container">
                <div className="content-bullet">
                    <div className="bullet">
                    <GoPrimitiveDot></GoPrimitiveDot>
                    </div>
                    <div className="text">
                        <p>Motivating people to question harmful taboos,myths and stereotypes and to open about lesser focused but important issues.</p>
                    </div>
                </div>
                
            </div>

        </div>
    );
};

export default Objective;