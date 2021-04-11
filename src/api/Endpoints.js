import { get } from './Base';

const ApiEndpoints = {
  index: (id, config={}) => get(`/info/${id}`, config),
  results: (id, config={}) => get(`/results/${id}`, config),
  groupedPosition: (id, position, config={}) => get(`/results/${id}/positions/${position}/grouped`, config),
  sourcePosition: (id, position, config={}) => get(`/results/${id}/positions/${position}/source`, config),
  reservoirPosition: (id, position, config={}) => get(`/results/${id}/positions/${position}/reservoir`, config),
  positionCount: (id, config={}) => get(`/results/${id}/positions/count`, config),
  allMotifSwitches: (id, config={}) => get(`/results/${id}/switches`, config),
  sourcePositionVariants: (id, position, config={}) => get(`/results/${id}/positions/${position}/source/variants`, config),
  reservoirPositionVariants: (id, position, config={}) => get(`/results/${id}/positions/${position}/reservoir/variants`, config),
  status: (id) => get(`/status/${id}`),
  logs: (id) => get(`/log/${id}`)
};

export default ApiEndpoints;
