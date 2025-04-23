import React from "react";
import TechStack from "./TechStack";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import codeImage from "../../assets/coder.svg";
import GitHubCalendar from "react-github-calendar";

const AboutInfo = () => {
    return (
        <div className="about">
            <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                style={{
                    marginTop: "3rem",
                    fontFamily: "Fira Code",
                    fontSize: "2rem",
                    fontWeight: "bold",
                }}
            >
                <span style={{ color: "#32CD30" }}>About</span> Me
            </div>
            <div className="about-parent">
                <div data-aos="zoom-in-left" className="about-text">
                    <p style={{ textAlign: "justify" }}>
                        Hi people, I am{" "}
                        <span style={{ color: "#32CD30", fontWeight: "bold" }}>
                            KiranKumar
                        </span>{" "}
                        from Chennai,India. I did my B.E in Mechanical Engineering
                        from{" "}
                        <span style={{ color: "#32CD30", fontWeight: "bold" }}>
                            Akshaya College of Engineering
                        </span>{" "}
                        and currently I'm working at{" "}
                        <span style={{ color: "#32CD30", fontWeight: "bold" }}>
                            Technomax Systems
                        </span>
                        .
                    </p>
                    <br></br>
                    <p style={{ textAlign: "justify" }}>
                        Apart from developement, some things I like are<br></br>
                        <br></br>
                        <ul>
                            <li>
                                <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                                Playing Badmition
                            </li>
                            <li>
                                <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                                Gardening
                            </li>
                            <li>
                                <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                                Travelling
                            </li>
                        </ul>
                    </p>
                </div>
                <img
                data-aos="zoom-in-left"
                    className="rounded about-image"
                    src={codeImage}
                    alt="Extra large avatar"
                ></img>
            </div>
            <div>

                <TechStack />

            </div>
            <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                style={{
                    marginTop: "3rem",
                    fontFamily: "Fira Code",
                    fontWeight: "bold",
                    fontSize: "2rem",
                }}
            >
                My <span style={{ color: "#32CD30" }}>Github</span> Contribution Graph
            </div>
            <br></br>
            <div className="github-graph">
                <GitHubCalendar
                    style={{ marginBottom: "50px" }}
                    username="tmax-kiran"
                    blockMargin={6}
                    blockSize={15}
                    fontSize={16}
                    color={"#32CD30"}
                />
            </div>
        </div>
    );
};

export default AboutInfo;
