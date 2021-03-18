import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Compare from './Compare';

require('bootstrap/dist/css/bootstrap.min.css');

export default function Results(props) {
  const dispatch = useDispatch();

  const jobid = props.match.params.id;

  useEffect(() => {
    dispatch({ type: 'IS_RESULTS' }, []);
    dispatch({ type: 'RESULT_ID', id: jobid }, []);
  }, [jobid, dispatch]);

  let querystring = props.location.search;
  querystring = querystring ? (querystring[0] === '?' ? querystring.substr(1, querystring.length) : querystring) : null;

  const node_querystring = require('querystring');
  const parsed_querystring = querystring ? node_querystring.decode(querystring) : null;

  if (!parsed_querystring) {
    return <Compare />;
  } if (parsed_querystring.view === 'compare') {
    return <Compare />;
  } if (parsed_querystring.view === 'source') {
    return [];
  } if (parsed_querystring.view === 'reservoir') {
    return [];
  }
  return [];
}
