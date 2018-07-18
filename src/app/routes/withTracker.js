import React, { Component } from 'react';
import { object } from 'prop-types';
import GoogleAnalytics from 'react-ga';
import { googleAnaliticsId } from '../config';

if (googleAnaliticsId) {
  GoogleAnalytics.initialize(googleAnaliticsId);
}

export default function withTracker(WrappedComponent, options = {}) {
  const trackPage = (page) => {
    GoogleAnalytics.set({
      page,
      ...options
    });
    GoogleAnalytics.pageview(page);
  };

  const HOC = class extends Component {
    static propTypes = {
      location: object.isRequired,
    };

    componentDidMount() {
      if (googleAnaliticsId) {
        const page = this.props.location.pathname;
        trackPage(page);
      }
    }

    componentWillReceiveProps(nextProps) {
      if (googleAnaliticsId) {
        const currentPage = this.props.location.pathname;
        const nextPage = nextProps.location.pathname;

        if (currentPage !== nextPage) {
          trackPage(nextPage);
        }
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  if (typeof WrappedComponent.fetchData !== 'undefined') {
    HOC.fetchData = WrappedComponent.fetchData;
  }

  return HOC;
}
