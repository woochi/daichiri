import React from 'react';
import {withRouter} from 'react-router';
import {connect as refetch} from 'react-refetch'
import {compose} from 'recompose';
import Center from './Center';
import Title from './Title';
import Subtitle from './Subtitle';
import Button from './Button';
import './Results.css';
import Spinner from './Spinner';

const Divider = () => <div className="Divider"/>;

class Result extends React.PureComponent {
  render() {
    const {value} = this.props;

    return (
      <div className="Result" onClick={this.openArticle}>
        <Title>{value.title}</Title>
        <Subtitle>{value.body.replace(/\n/, ' ').slice(0, 80)}&hellip;</Subtitle>
      </div>
    );
  }

  openArticle = () => {
    this.props.onSelect(this.props.value.id);
  }
}

class Results extends React.PureComponent {
  render() {
    const {articles} = this.props;
    const query = this.props.match.params.search;

    if (articles.pending) {
      return (
        <Center>
          <Spinner/>
        </Center>
      );
    } else if (articles.rejected) {
      return <div>'ERROR'</div>;
    } else if (articles.fulfilled) {
      const {value} = articles;

      if (value.length === 0) {
        return (
          <Center>
            <Title>Ei hakutuloksia</Title>
            <Subtitle>Emme löytäneen tuoksia haulle '{query}'.</Subtitle>
            <br/><br/>
            <Button onClick={this.props.history.goBack}>Takaisin</Button>
          </Center>
        );
      } else {
        const items = [];

        value.forEach(article => {
          items.push(<Result key={article.id} value={article} onSelect={this.navigateToArticle}/>);
          items.push(<Divider key={`Divider-${article.id}`}/>);
        });

        return (
          <div>{items}</div>
        );
      }
    }

    return null;
  }

  navigateToArticle = (articleId) => {
    this.props.history.push(`/articles/${articleId}`);
  }
}

export default compose(
  withRouter,
  refetch(props => ({
    articles: `/api/articles?q=${props.match.params.search}`
  }))
)(Results);
