/*
  editor/chapters 에서 chapter 목록 띄우고 추가하고 저장하는 페이지
*/
import React, { Component } from 'react';
import styles from './ChaptersComponent.css';
import { Col, Row } from 'react-bootstrap';
import update from 'react-addons-update';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Link } from 'react-router-dom';
//import {Linkdom} from 'react-router-dom';
import ChaptersContent from './ChaptersContent';
//jieun
import { BrowserRouter } from 'react-router-dom';
import Level from 'shared/Level';

// 이미지
import save from '../../assets/img/editor/save.svg';
import add from '../../assets/img/editor/add.svg';
import dropdown from '../../assets/img/editor/drop_down.svg';
import dropup from '../../assets/img/editor/drop_up.svg';
import remove from '../../assets/img/editor/delete.svg';


//jieun
const Root = () => (
    <ChaptersList />
);


class ChaptersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: -1,
      chapters: [{
        num: 0,
        title: 'chapter1 title',
        description: 'chapter1 description',
        level: [{
          title: <Link to="/Level1"> 'level1 title'</Link>
        }, {
          title: 'level2 title'
        }, {
          title: 'level3 title'
        }]
      }, {
        num: 1,
        title: 'chapter2 title',
        description: 'chapter2 description',
        level: [{
          title: 'level1 title'
        }, {
          title: 'level2 title'
        }, {
          title: 'level3 title'
        }, {
          title: 'level4 title'
        }]
      }, {
        num: 2,
        title: 'chapter3 title',
        description: 'chapter3 description',
        level: [{
          title: 'level1 title'
        }, {
          title: 'level2 title'
        }, {
          title: 'level3 title'
        }, {
          title: 'level4 title'
        }, {
          title: 'level5 title'
        }]
      }]
    };

    this.handleRename = this.handleRename.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  // 챕터 이름 변경
  handleRename(key) {
    let newName = prompt("New chapter title: ");
    if (newName == '') return;
    if (newName) {
      this.setState({
        chapters: update(this.state.chapters,
          {
            [key]: {
              title: { $set: newName }
            }
          })
      });
    }
  }

  // 챕터 순서 변경
  handleMove(direction, key) {
    let tempChapter = this.state.chapters[key];
    let chaptersLength = this.state.chapters.length;

    switch (direction) {
      // 올리기
      case -1:
        // 최상단일 때 안올라가게
        if (key === 0) {
          return;
        }
        this.setState({
          chapters: update(this.state.chapters,
            {
              [key]: { $set: this.state.chapters[key - 1] },
              [key - 1]: { $set: tempChapter }
            })
        });

      // 내리기
      case 1:
        //최하단일 때 안올라가게
        if (key === chaptersLength - 1) {
          return;
        }
        this.setState({
          chapters: update(this.state.chapters,
            {
              [key]: { $set: this.state.chapters[key + 1] },
              [key + 1]: { $set: tempChapter }
            })
        });
    }
  }

  // 챕터 삭제
  handleRemove(index) {
    if (index < 0) return;
    confirmAlert({
      title: 'Delete Chapter!',
      message: 'Are you sure you want to remove this chapter?',
      confirmLabel: 'Confirm',
      cancelLabel: 'Cancel',
      onConfirm: () => this.setState({
        chapters: update(this.state.chapters,
          { $splice: [[index, 1]] }
        ),
        selectedKey: -1
      })
    });
  }

  // 챕터 클릭
  handleClick(key) {
    if (this.state.selectedKey === key) {
      this.setState({
        selectedKey: -1,
      });
    } else {
      this.setState({
        selectedKey: key,
      });
    }
    console.log(key, 'is selected');
    console.log(this.state.selectedKey);
  }

  // 챕터 추가
  handleAdd() {
    let chapterName = prompt("chapter title: ");
    if (chapterName == null || chapterName == '') return;
    var chapter = {
      num: this.state.chapters.length,
      title: chapterName,
      description: 'description',
      level: []
    }
    this.setState({
      chapters: update(this.state.chapters, { $push: [chapter] })
    });
  }

  render() {
    const chaptersList = (data) => {
      return data.map((chapter, index) => {
        return (
          <div key={index} className="chapter">
            <div onClick={(e) => this.handleClick(index)} className="active-type title">
              <div onClick={(e) => { e.stopPropagation(); this.handleRename(index) }} className="chapter-title"><h4>{chapter.title}</h4></div>
              <div onClick={(e) => { e.stopPropagation(); this.handleMove(1, index) }} className="chapter-button chapter-dropdown ">
                <img src={dropdown} alt="dropdown" />
              </div>
              <div onClick={(e) => { e.stopPropagation(); this.handleMove(-1, index) }} className="chapter-button chapter-dropup">
                <img src={dropup} alt="dropup" />
              </div>
              <div className="filler"></div>
              <div onClick={(e) => { e.stopPropagation(); this.handleRemove(index) }} className="chapter-remove chapter-button">
                <img src={remove} alt="remove" />
              </div>
            </div>
            <ChaptersContent
              isSelected={this.state.selectedKey === index}
              chapters={this.state.chapters[index]}
            />
          </div>
        );
      });
    };

    return (
      <div className="chapter-editor container">
        <button className="chapters-button" style={{ margin: 10 }}><img src={save} alt="save" /></button>
        <button className="chapters-button" style={{ margin: 10 }} onClick={() => this.handleAdd()}><img src={add} alt="add" /></button>
        <div>
          {chaptersList(this.state.chapters)}
        </div>
      </div>
    );
  }
}





export default Root;
