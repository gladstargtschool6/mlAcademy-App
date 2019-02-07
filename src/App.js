import React from "react";
import {Box, Button, Grommet, Heading, Markdown, ResponsiveContext} from "grommet";
import Header from "./Header";
import logo_text_white from "./img/logo_text_white.svg";
import LabWrapper from './Lab/LabWrapper';
import {Route, withRouter} from "react-router-dom";
import {Config, theme1, theme2} from "./Config";
import * as Icons from "grommet-icons";

import loading from "./img/loading.svg";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isAuthenticated: false,
      theme: theme1,
      topicID: 0,
      lessonID: 0,
      classes: [],
    };
  }
  
  /*
  componentDidMount() {
    this.setState({isLoading: true});
    this.goTo(`/labs/${this.props.topicID}/${this.state.lessonID}`);
    axios.get(Config.apiUrl + this.state.lessonID).then(res => {
      this.sleep(100).then(() => {
        this.setState({
          content: res.data.content,
          name: res.data.name,
          defaultCode: res.data.code,
          isLoading: false
        });
      });
    });
  }*/
  
  changeTheme() {
    var newTheme = this.state.theme === theme1 ? theme2 : theme1;
    this.setState({theme: newTheme});
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
  
  render() {
    return (
      <Grommet theme={this.state.theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <div>
              <Header>
                <img
                  src={logo_text_white}
                  alt="Logo"
                  height="40pt"
                  onClick={() => {
                    this.goTo("/");
                  }}
                />
                <Box direction="row" gap="small">
                  <Button
                    color="accent-4"
                    label="Home"
                    onClick={() => {
                      this.goTo("/");
                    }}
                    primary
                  />
                  <Button
                    color="accent-4"
                    label="Labs"
                    onClick={() => {
                      this.goTo("/labs");
                    }}
                    primary
                  />
                  {!this.state.isAuthenticated && (
                    <Button
                      color="accent-4"
                      label="Login"
                      onClick={() => {
                        this.goTo("/login");
                      }}
                    />
                  )}
                </Box>
              </Header>
              
              {size === "large" || size === "medium" ? (
                <div>
                  <Route exact path="/" component={Home}/>
                  <Route path="/labs" render={() => (
                    <LabWrapper topicID={8}/>
                  )}/>
                  <Route path="/login" component={Login}/>
                </div>
              ) : (
                <Small/>
              )}
            </div>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    
    );
  }
}

const Nav = (state) => (
  <div></div>
)


const Small = () => (
  <div>Small</div>
)
const Home = () => (
  <Box height="100%" background="accent-1">
    <img src={logo_text_white} alt="LOgo"/>
  </Box>
);

const Login = () => <div/>;

export default withRouter(App);
