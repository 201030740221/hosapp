import React from 'react';
import ListService from "./list-service";
import './list.css';

var service = new ListService('lisi',22);

export default class List extends React.Component{
  render() {
    return (
      <div className='list'>
        {service.getName()}
      </div>
    )
  }
}