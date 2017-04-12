import React from 'react';
import {withRouter} from 'react-router';
import {compose} from 'recompose';
import {connect as refetch} from 'react-refetch';
import Title from './Title';
import Subtitle from './Subtitle';
import Paragraph from './Paragraph';
import './Article.css';
import moment from 'moment';
import Center from './Center';
import Spinner from './Spinner';

class Article extends React.PureComponent {
  render() {
    const {article} = this.props;

    if (article.pending) {
      return <Center><Spinner/></Center>
    } else if (article.fulfilled) {
      const {value} = article;
      const items = [];

      value.body.split(/(?:\r\n|\r|\n|\\n)/).forEach((text, i) => {
        items.push(<Paragraph key={i}>{text}</Paragraph>);
      });

      return (
        <div className="Article">
          <Title>{value.title}</Title>
          <Subtitle>{value.author} - {moment(value.created_at).format('DD/MM/YYYY HH:MM')}</Subtitle>
          {items}
        </div>
      );
    }

    return null;
  }
}

export default compose(
  withRouter,
  refetch(props => ({
    article: `/api/articles/${props.match.params.article}`
  }))
)(Article);
