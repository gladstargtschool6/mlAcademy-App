import LabView from "./LabView";
import {Box, Button} from "grommet/es6";
import loading from "../img/loading.svg";
import React from "react";
import * as Icons from "grommet-icons";
import axios from "axios";
import {Config} from "../Config";
import {Route, withRouter} from "react-router-dom";

import Loading from '../Loading.js'

class LabWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIsLoading: true,
      isLoading: true,
      lessons: [],
      numOfLessons: 0,
      lessonID: 0,
    };
    //this.onChange = this.onChange.bind(this);
  }
  
  componentDidMount() {
    this.setState({isLoading: true});
    axios.get(Config.apiUrl + "lessons/", {
      params: {topic: this.props.topicID}
    }).then(res => {
      this.setState({
        lessons: res.data.lessons,
        numOfLessons: res.data.num_of_lessons,
        isLoading: false,
        pageIsLoading: false,
      });
    });
  }
  
  sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (this.state.lessonID !== prevState.lessonID) {
      this.setState({isLoading: true});
      console.log("next");
      this.sleep(300).then(() => {
        this.setState({lessonID: this.state.lessonID, isLoading: false})
      });
    }
  }
  
  goTo = route => {
    this.props.history.push(route);
  };
  
  handlePrev() {
    var newNum = this.state.lessonID - 1;
    this.setState({lessonID: newNum});
  }
  
  handleNext() {
    var newNum = this.state.lessonID + 1;
    this.setState({lessonID: newNum});
  }
  
  handleFinish() {
    alert("you're done");
    this.goTo(`/`)
  }
  
  render() {
    return (
      <div>
        {!this.state.pageIsLoading ? (
          <div>
            {!this.state.isLoading ? (
                <LabView lesson={this.state.lessons[this.state.lessonID]}/>
              ) :
              <Box
                height="83vh"
                direction="row"
                border={{
                  color: "accent-3",
                  size: "large"
                }}
                pad="medium"
                elevation="medium"
              >
                <Loading/>
              </Box>
            }
            < Box
              tag="footer"
              direction="row"
              height="70px"
              justify="end"
              pad="small"
              gap="small"
              flex={false}
            >
              {
                typeof (this.state.lessons[this.state.lessonID - 1]) === "string" ? (
                  <Button
                    icon={<Icons.FormPrevious/>}
                    label="Back"
                    onClick={this.handlePrev.bind(this)}
                    primary
                  />
                ) : (
                  <Button
                    icon={<Icons.FormPrevious/>}
                    label="Back"
                    disabled={true}
                  />)
              }
              {
                typeof (this.state.lessons[this.state.lessonID + 1]) === "string" ? (
                  <Button
                    label="Next"
                    icon={<Icons.FormNext/>}
                    margin={{right: "10px"}}
                    onClick={this.handleNext.bind(this)}
                    primary
                    reverse
                  />
                ) : (
                  <Button
                    icon={<Icons.Checkmark/>}
                    label="Finish"
                    onClick={this.handleFinish.bind(this)}
                    margin={{right: "10px"}}
                    green
                  />)
              }
            </Box>
          </div>
        
        ) : (
          <Box
            height="83vh"
            direction="row"
            border={{
              color: "accent-3",
              size: "large"
            }}
            pad="medium"
          >
            <Loading/>
          </Box>
        )}
      </div>);
  }
}


export default withRouter(LabWrapper);