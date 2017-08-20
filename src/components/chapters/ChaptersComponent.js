import React from 'react';
//import { Link } from 'react-router-dom';
import styles from './ChaptersComponent.css';
import ChaptersList from './ChaptersList';

class ChaptersComponent extends React.Component {
  render() {
    return (
        <div>
            <ChaptersList/>
        </div>
    );
  }
}

export default ChaptersComponent;