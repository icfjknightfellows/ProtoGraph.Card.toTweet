import React from 'react';
import ReactDOM from 'react-dom';
import TweetCard from './src/js/Container.jsx';

window.ProtoGraph = window.ProtoGraph || {};
window.ProtoGraph.Card = window.ProtoGraph.Card || {};


ProtoGraph.Card.toTweet = function () {
  this.cardType = 'TweetCard';
}

ProtoGraph.Card.toTweet.prototype.init = function (options) {
  this.options = options;
}

ProtoGraph.Card.toTweet.prototype.getData = function (data) {
  return this.containerInstance.exportData();
}

ProtoGraph.Card.toTweet.prototype.renderLaptop = function (data) {
  this.mode = 'laptop';
  ReactDOM.render(
    <TweetCard
      dataURL={this.options.data_url}
      schemaURL={this.options.schema_url}
      optionalConfigURL={this.options.configuration_url}
      optionalConfigSchemaURL={this.options.configuration_schema_url}
      mode={this.mode}
      ref={(e) => {
        this.containerInstance = this.containerInstance || e;
      }}/>,
    this.options.selector);
}

ProtoGraph.Card.toTweet.prototype.renderMobile = function (data) {
  this.mode = 'mobile';
  ReactDOM.render(
    <TweetCard
      dataURL={this.options.data_url}
      schemaURL={this.options.schema_url}
      optionalConfigURL={this.options.configuration_url}
      optionalConfigSchemaURL={this.options.configuration_schema_url}
      mode={this.mode}
      ref={(e) => {
        this.containerInstance = this.containerInstance || e;
      }}/>,
    this.options.selector);
}

ProtoGraph.Card.toTweet.prototype.renderScreenshot = function (data) {
  this.mode = 'screenshot';
  ReactDOM.render(
    <TweetCard
      dataURL={this.options.data_url}
      schemaURL={this.options.schema_url}
      optionalConfigURL={this.options.configuration_url}
      optionalConfigSchemaURL={this.options.configuration_schema_url}
      mode={this.mode}
      ref={(e) => {
        this.containerInstance = this.containerInstance || e;
      }}/>,
    this.options.selector);
}

