import React, { Component } from 'react';
import { Grid, Image, Icon } from 'semantic-ui-react'
import './About.css';

class About extends Component {
  render() {
    return (
      <div>
        <h3 className="page-title">About</h3>
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column width={1}>
            </Grid.Column>
            <Grid.Column width={12}>
              <h3>About Me</h3>
              <Image src='/assets/images/wireframe/centered-paragraph.png' />
              <p>Hi! My name is Ruiyang (Samson) Sun, a software engineer currently focusing on web technology and design. By learning from friends and online, I have made huge progress on programming and finished several meaningful projects. By far, I work as a full stack software engineer at HoneycombData Inc.</p>
              <p>I like graphic design and sketching. Some of my previous work are shown in my little <a >Art Gallery</a>. I'm also enthusiastic about body-building and keep a regular work-out schedule for over 5 years.</p>
            </Grid.Column>
            <Grid.Column width={2}>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3}>
            <Grid.Column width={1}>
            </Grid.Column>
            <Grid.Column width={12}>
              <h3>About This Website</h3>
              <p>This website was originally built using simple HTML, CSS and JavaScript with Bootstrap. Then I tried out jQuery and AngularJS to make it more interactive. The current version is built with ReactJS with Semantic UI, I also add custom CSS animation. I like to explore different stacks, this has always been my practice field.</p>
            </Grid.Column>
            <Grid.Column width={2}>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3}>
            <Grid.Column width={1}>
            </Grid.Column>
            <Grid.Column width={12}>
              <h3>Contact Me</h3>
              <p>If you have any question or want to share your thoughts with me, just send me an e-mail and I will try my best to respond within 24 hours.</p>
              <a href="mailto:sunruiyang09@gmail.com" target="_top">sunruiyang09@gmail.com</a>
              <p>You can also check my LinkedIn and Github profiles through the links below.</p>
              <div>
                <a className="icon icon-linkedin" target= "_blank" href="https://www.linkedin.com/in/ruiyangsun"><Icon name='linkedin square' /></a>
                <a className="icon icon-github" target= "_blank" href="https://github.com/sunruiyang09"><Icon name='github square' /></a>
              </div>
            </Grid.Column>
            <Grid.Column width={2}>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default About;
// <img src='/img/logo.png' alt="" onClick={this.props.buttonClick} className="nav-icon"/>