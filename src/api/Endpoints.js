import { get, post } from './Base';

const ApiEndpoints = {
  index: (id) => get(`/info/${id}`),
  results: (id) => get(`/results/${id}`),
  groupedPosition: (id, position) => get(`/results/${id}/positions/${position}/grouped`),
  sourcePosition: (id, position) => get(`/results/${id}/positions/${position}/source`),
  reservoirPosition: (id, position) => get(`/results/${id}/positions/${position}/reservoir`),
  positionCount: (id) => get(`/results/${id}/positions/count`),
  allMotifSwitches: (id) => get(`/results/${id}/switches`),
  sourcePositionVariants: (id, position) => get(`/results/${id}/positions/${position}/source/variants`),
  reservoirPositionVariants: (id, position) => get(`/results/${id}/positions/${position}/reservoir/variants`),
};

export default ApiEndpoints;
