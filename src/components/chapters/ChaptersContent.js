/*
 * Chapter 하나를 누르면 밑에 뜨는 부분
 */
import React from 'react';
import styles from './ChaptersComponent.css';

import add from '../../assets/img/editor/add.svg';
import dropdown from '../../assets/img/editor/drop_down.svg';
import dropup from '../../assets/img/editor/drop_up.svg';
import remove from '../../assets/img/editor/delete.svg';

class ChaptersContent extends React.Component {


  render() {
    const LevelList = (props) => {
      const levels = props.levels;
      const listItems = levels.map((level, index) =>
        <li key={index} className="level-item">
          <a routerLink="['/editor/chapter', chapter.id, 'level', level.id]">{ level.title }</a>
          <div click="moveLevel(1, level)" className="chapter-button chapter-dropdown">
            <img src={dropdown} alt="dropdown"/>
          </div>
          <div click="moveLevel(-1, level)" className="chapter-button chapter-dropup">
            <img src={dropup} alt="dropup"/>
          </div>
          <div click="deleteLevel(chapter, level)" className="chapter-remove chapter-button">
            <img src={remove} alt="remove"/>
          </div>
        </li>
      );
      return (
        <ol>{listItems}</ol>
      );
    }

    const view = (
      <div className="contents">
        <div className="description">
          <textarea value={this.props.chapters.description} cols="80" rows="8" name="name"></textarea>
        </div>
        <div className="list">
          <LevelList levels={this.props.chapters.level}/>
          <button className="add" click="newLevel(chapter)">
            <img src={add} alt="add"/>
          </button>
        </div>
      </div>
    );

    const blank = (<div></div>);


    return (
      <div>{this.props.isSelected ? view : blank}</div>
    );
  }
}

export default ChaptersContent;
